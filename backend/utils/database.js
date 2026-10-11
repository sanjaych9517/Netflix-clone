// //  connection of database
import mongoose from "mongoose"
import dotenv from "dotenv"
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config({
    path: "../.env"
}) 
const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDb connected Succefully")
        }).catch((error) => {
            console.log(error)
        })
}
  
export default databaseConnection; 
