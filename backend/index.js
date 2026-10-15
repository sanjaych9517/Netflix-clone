import express from "express";
import dotenv from "dotenv"
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors"

dotenv.config({
    path: ".env"
})
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOptions))

// api

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hellow i am coming from backend",
        success: true
    })
})

app.use("/api/v1/user", userRoute)

app.listen(process.env.PORT, (req, res) => {
    databaseConnection()
    console.log(`server is listining on PORT ${process.env.PORT}`)
})
