const express = require('express');
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())


const arrayOfObject = [{
        nama: 'Smith',
        hobi: 'Self Service'
    },
    {
        nama: 'Dio',
        hobi: 'Design Grafis'
    },
    {
        nama: 'Agung',
        hobi: 'Bermain Game'
    }
]




app.get('/', (req, res) => {
    const getData = arrayOfObject.filter(el => el.nama === 'Agung')
    getData[0].hobi = 'SelfService'

    res.send({
        result: getData
    })
})

app.listen(3000, () => {
    console.log('running on port 3000')
})