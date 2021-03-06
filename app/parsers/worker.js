/**
 * Web Worker to transform html with cheerio
 *
 */

import Cheerio from './cheerio';

self.addEventListener('message', (e) => {
  let { js, htmlSource } = e.data;

  let output = Cheerio.parse(htmlSource, js);

  let jsonOutput = JSON.stringify(output);
  self.postMessage(jsonOutput);
}, false);
