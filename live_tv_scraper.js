import puppeteer from 'puppeteer'

const scraper_starter = async () => {
    const browser = await puppeteer.launch({headless: false})  
    const page = await browser.newPage();
  await page.goto('https://pluto.tv/latam/live-tv/63eb9255c111bc0008fe6ec4');

  await page.locator('span > div > a > span > div > span').click();



}
start = performance.now();
scraper_starter()
end = performance.now();


const is_media = await page.evaluate(() => {
            const activeElement = document.activeElement
            const firstChild = activeElement.firstElementChild
            return firstChild && firstChild.tagName === "IMG"
        })

        const is_end_of_records = await page.evaluate(() => {
            const activeElement = document.activeElement.classList
            
            return activeElement.contains('footer-link-terms_of_use-atc')
        })