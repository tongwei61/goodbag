const express = require('express')
const app = express()
const mockjs = require('mockjs');
const port = 3000

app.use(express.static('public'))

let data = mockjs.mock({
    'list|100': [{
        'id|+1': 0,
        'title': '@csentence',
        'time': "@date('yyyy-MM-dd')"
    }]
})
// console.log(data);
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/news', (req, res) => {
    console.log(req.query);
    let curr = Number(req.query.curr)
    let limit = Number(req.query.limit)
    let start = (curr - 1) * limit;
    let end = curr * limit;
    res.send(data.list.slice(start, end))
})


app.listen(port, () => console.log(`服务器已启动~`))