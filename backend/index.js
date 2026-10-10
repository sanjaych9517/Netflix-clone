import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";



dotenv.config({
    path: ".env"
}) 
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("server is listening")
})

app.listen(process.env.PORT, (req, res) => {
    databaseConnection()
    console.log(`server is listining on PORT ${process.env.PORT}`)
})