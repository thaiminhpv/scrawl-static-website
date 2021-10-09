import scrape from 'website-scraper';

const websiteUrl = 'https://www.website.com';
const domain = 'website';
const outputDir = './website';

scrape({
    urls: [websiteUrl],
    urlFilter: function (url) {
        return url.includes(domain)
    },
    recursive: true,
    maxDepth: 50,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: outputDir
}).then((data) => {
    console.log("Entire website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
