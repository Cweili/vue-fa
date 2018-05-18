import util from 'util';
import path from 'path';
import fs from 'fs';
import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';

import App from './app';

const renderer = createRenderer();
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

const resolve = (...paths) => path.resolve(__dirname, ...paths);

test('vue-fa', async() => {
  const templates = await readdir(resolve('template'));
  await Promise.all(templates.map(async(templateName) => {
    const template = await readFile(resolve('template', templateName), 'utf8');
    const out = await renderer.renderToString(new Vue(Object.assign({
      template
    }, App)));
    expect(out.trim()).toBe((await readFile(resolve('expected', templateName), 'utf8')).trim());
  }));
});
