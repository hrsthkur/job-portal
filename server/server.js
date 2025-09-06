import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/db.js'
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'

//Initialize express

const app = express()

//connect to database
 await connectDb()
 await connectCloudinary()

//Middlewares

app.use(cors())
app.use(express.json())

//Routes

app.get('/',(req,res) => res.send("API working"))

app.post('/webhooks',clerkWebhooks)

app.use('/api/company',companyRoutes)

//PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    
})