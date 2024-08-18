import puppeteer from 'puppeteer';
import fs from 'fs';

const scraper = async () => 
    {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
  
    // Navigate the page to a URL
    await page.goto('https://pluto.tv/latam/on-demand');
    await page.setViewport({width: 1920, height: 1080});

    // await page.waitForSelector('ul > li a'); // Espera a que los enlaces estén en el DOM

    await page.locator(`ul.categoryList > li:nth-child(1) a img`).filter(a => a.classList == "").click()


  let array = []

  for (let i = 0; i < 100; i++)
    { 
        const is_media = await page.evaluate(() => {
            const activeElement = document.activeElement
            
            // Verificar si el elemento activo tiene hijos
            const firstChild = activeElement.firstElementChild
            
            // Si el primer hijo existe y es una imagen
            return firstChild && firstChild.tagName === "IMG"
        })
    if (is_media)
        {
    await page.keyboard.press('Enter')
    const content = await page.evaluate(() =>
            {
                    const title = document.querySelector('meta[name="description"]').content
                    // const duration = document.querySelector("div.inner > div> ul > li:nth-child(5)").innerHTML 
                    const url = document.URL
                    return category = 
                        {
                            'title':title,
                            // 'duration':duration,
                            'url':url
                        }
                    
            })
    
    array.push(content)
    }
    await page.keyboard.press('Escape')
    await new Promise(r => setTimeout(r, 200));

    
    await page.keyboard.press('Tab')

    await new Promise(r => setTimeout(r, 400));
    }

    fs.writeFileSync('content.json', JSON.stringify(array, null, 2))

}

scraper()



