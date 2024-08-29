const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.goto('https://zikr.az/');
        page.setViewport({ width: 1300, height: 2000, deviceScaleFactor: 1})
        await page.screenshot({ path: 'screenshot3.png' });
        await browser.close();
    } catch (error) {
        console.error('Error:', error);
    }
})();
