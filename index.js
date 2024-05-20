const fs = require('fs')
const http = require('http')
const url = require('url')
const replaceTemplate = require('./modules/replaceTemplate')

const data = fs.readFileSync(`${__dirname}/data/instruments.json`)
const dataObj = JSON.parse(data)
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
const tempProductCard = fs.readFileSync(`${__dirname}/templates/productCard.html`, 'utf-8')



//SERVER 
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true)

    if (pathname === '/' || pathname === '/overview') {
        const cardsHtml = dataObj.map(el => replaceTemplate(tempProductCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(output)
    } else if (pathname === '/product') {
        const product = dataObj[query.id]
        const output = replaceTemplate(tempProduct, product)
        res.end(output)
    } else {
        res.writeHead(404)
        res.end('Page not found')
    }
}
)

server.listen(8000, '127.0.0.1', () => {
    console.log('listening request on port 8000')
})