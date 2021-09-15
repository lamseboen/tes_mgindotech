const express = require('express');
const bodyParser = require('body-parser')
const validate = require('./validateSoal2');
const UserModel = require('./dbConnectionsoal2');


const app = express()
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())




app.get('/users', async (req, res) => {
    const data = await UserModel.find()
    res.send({
        result: data
    })
})



app.post('/users', async (req, res) => {
    const body = req.body
    try {
        const validation = validate.validate({
            ...body
        })
        if (validation.error) {
            res.send(validation.error.details)
        } else {
            const newUser = await new UserModel({
                ...body
            })
            await newUser.save()
            res.send({
                result: newUser
            })

        }
    } catch (error) {
        res.send(error)
    }
})

app.get('/users/:id', async (req, res) => {
    const data = await UserModel.findById(req.params.id)
    res.send({
        result: data
    })
})

app.put('/users/:id', async (req, res) => {
    const body = req.body
    try {
        const validation = validate.validate({
            ...body
        })
        if (validation.error) {
            res.send(validation.error.details)
        } else {
            const data = await UserModel.findByIdAndUpdate(req.params.id, {
                ...body
            }, {
                upsert: true,
                new: true
            }).exec()

            res.send({
                result: data
            })

        }
    } catch (error) {
        res.send(error)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const data = await UserModel.findByIdAndDelete(req.params.id).exec()
        res.send({
            result: "sucess"
        })
    } catch (error) {
        res.send(error)
    }
})





app.listen(3000, () => {
    console.log('running on port 3000')
})