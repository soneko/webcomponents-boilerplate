const puppeteer = require('puppeteer');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const assert = require('power-assert');
let server:any;

describe('Custom Element', () => {
  
  before(async () => {
    const compiler = webpack(webpackConfig);
    const devServerOptions = webpackConfig.devServer || {};
    server = new WebpackDevServer(devServerOptions, compiler);
    await server.start();
  });
  
  after(async () => {
    console.log('Stopping server');
    if (server) await server.stop();
    console.log('Server stopped');
  });
  
  it('Load Test', async () => {
    const browser = await puppeteer.launch({
      headless: true,
    });
    console.log('Browser Open');
    const page = await browser.newPage();
    console.log('New Page');
    await page.goto(`http://localhost:8080`);
    console.log('Page Loaded');
    page.waitForSelector('custom-element');
    console.log('Selector found');
    let elm = await page.$('custom-element');
    assert(elm !== null);
    console.log(elm);
    await page.screenshot({ path: 'test-result.png' });
    console.log('Screenshot taken');
    await browser.close();
  });

});
