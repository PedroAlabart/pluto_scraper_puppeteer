export async function scrape_content(page){
    const content = await page.evaluate(() => {
        const compound_title = document.querySelector('meta[name="description"]').content.split(' | ')
        const title = compound_title[0].split(" en Pluto TV")[0]
        const url = document.URL
        const type = url.split("/")[5] //The 5th index can be either a movie or serie
        
        if (type==="movies"){
             duration = document.querySelector("div.inner > div> ul > li:nth-child(5)").innerHTML
             genre = compound_title[1]
             synopsis = compound_title [2]
        } else{
            duration = compound_title[1].split(" temp")[0]
            genre = compound_title[2]
            synopsis = compound_title[3]
        }
        return {
            'title': title,
            'genre':genre,
            'synopsis':synopsis,
            'url': url,
            'type' : type,
            'duration':duration
        }
    })

    return content
}
