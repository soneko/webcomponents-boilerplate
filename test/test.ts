const puppeteer = require('puppeteer');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.config');
const assert = require('power-assert');
let server:any;

describe('Custom Element', () => {
  
  before((done) => {
    server = new WebpackDevServer(webpack(config));
    server.listen(8080, 'localhost', () => {
      done();
    });
  });
  after(() => {
    server.close();
  });

  it('Load Test', async () => {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(`http://localhost:8080`);
    let elm = await page.$('custom-element');
    assert(elm !== null);
    console.log(elm);
    browser.close();
  });

});
