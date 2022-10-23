import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'

// App config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:Nn2oIdv49z89SBCX@cluster0.gtdyxup.mongodb.net/?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors())

// DB config
mongoose.connect(connection_url, {
    
})

// API Endpoints
app.get("/", (req, res) => res.status(200).send("WE ON"))

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.delete("/tinder/cards", (req, res) => {
    Cards.deleteMany((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))