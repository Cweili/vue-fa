import { promisify } from 'util';
import { resolve } from 'path';
import {
  readFile,
  writeFile,
  readdirSync,
} from 'fs';

import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import pretty from 'pretty'

import App from './app';

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const resolvePath = (...paths) => resolve(__dirname, ...paths);

readdirSync(resolvePath('template')).forEach((templateName) => {
  test(`vue-fa ${templateName}`, async () => {
    const template = await readFileAsync(
      resolvePath('template', templateName),
      'utf8',
    );
    const out = pretty(await renderToString(createSSRApp({
      template,
      ...App,
    })));
    // await writeFileAsync(
    //   resolvePath('expected', templateName),
    //   out.trim(),
    //   'utf8',
    // );
    expect(out.trim()).toBe(
      (
        await readFileAsync(resolvePath('expected', templateName), 'utf8')
      ).trim(),
    );
  });
});
