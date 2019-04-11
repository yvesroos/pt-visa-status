const puppeteer = require('puppeteer');
let {login, password, debug} = require('./config');

(async () => {
  let options = debug === "true" ? {devtools: true} : {}
  const browser = await puppeteer.launch(options);
  try{
    const page = await browser.newPage();
    await page.goto('https://pedidodevistos.mne.pt/VistosOnline/login.jsp?accao=estado&lang=PT');
    await page.waitFor('input[name=user]');
    login = login.toUpperCase();
    await page.$eval('input[name=user]', (el,value) => el.value = value, login);
    await page.$eval('input[name=password]', (el, value) => el.value = value, password);
    await page.evaluate(() => {
      submeter();
    } );
    await page.waitForSelector('body > div > label:nth-child(7)');
    const element = await page.$("body > div > label:nth-child(7)");
    const status = await page.evaluate(element => element.textContent, element);
    console.log("\x1b[31m=============\x1b[0m");
    console.log(`\x1b[33m${status}\x1b[0m`);
    console.log("\x1b[31m=============\x1b[0m");
  }catch(error){
    console.log(error);
  }finally{
    await browser.close();
  }
})();