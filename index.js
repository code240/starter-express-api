const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.get("/api/sample",(req,res) => {
    return [
     "status" : true,
        "data" : [
        {
            "name":"vipin",
            "designation" : "software developer"
        }
        ]
    ]
})
app.listen(process.env.PORT || 3000)
