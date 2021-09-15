const express = require('express');
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const produk = [{
        id_produk: 1,
        nama_produk: 'Huawei P30 pro'
    },
    {
        id_produk: 2,
        nama_produk: 'Huawei Nova 5T'
    }
]

const stok_produk = [{
        id_produk: 1,
        qty: 15
    },
    {
        id_produk: 1,
        qty: 6
    },
    {
        id_produk: 2,
        qty: 4
    },
    {
        id_produk: 2,
        qty: 18
    }
]


app.get('/', (req, res) => {
    const stokCount = produk.map(el => {
        let id = el.id_produk
        totalItem = stok_produk.filter(el => el.id_produk === id).reduce((a, b) => a.qty + b.qty)
        return {
            nama_produk: el.nama_produk,
            total_stock: totalItem
        }
    })

    res.send({
        hasil: stokCount
    })
})

app.listen(3000, () => {
    console.log('running on port 3000')
})