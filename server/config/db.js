import mongoose from 'mongoose'


//functon to connect to mongodb

const connectDb = async() => {
    mongoose.connection.on('connected',() => console.log("Database connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)


}

export default connectDb