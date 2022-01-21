const express = require("express")
const bodyParser = require("body-parser")
const db = require("./queries")
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get("/videoGames", db.getVideoGames)
app.get("/videoGames/:id", db.getVideoGameById)
app.post("/videoGames", db.createVideoGame)
app.put("/videoGames/:id", db.updateVideoGame)
app.delete("/videoGames/:id", db.deleteVideoGame)

app.get("/", (res,req) => {
    res.json({info: "Video Games Api"})
})

app.listen(port, () => {
    console.log("app is successfully run")
})