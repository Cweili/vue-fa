import util from 'util';
import path from 'path';
import fs from 'fs';
import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';

import App from './app';

const renderer = createRenderer();
const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

const resolve = (...paths) => path.resolve(__dirname, ...paths);

fs.readdirSync(resolve('template')).forEach((templateName) => {
  test(`vue-fa ${templateName}`, async () => {
    const template = await readFile(resolve('template', templateName), 'utf8');
    const out = await renderer.renderToString(new Vue(Object.assign({
      template,
    }, App)));
    // await writeFile(resolve('expected', templateName), out.trim(), 'utf8');
    expect(out.trim()).toBe((await readFile(resolve('expected', templateName), 'utf8')).trim());
  });
});
