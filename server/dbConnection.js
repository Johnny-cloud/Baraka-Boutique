import mongoose from "mongoose";

const connectToDB = () => {
    let uri = "mongodb+srv://John:ynnhoj157@cluster0.76ioyjl.mongodb.net/baraka_boutique?retryWrites=true&w=majority"
    mongoose.connect(uri)
    mongoose.connection.on('error', (err) => console.log(`Failed to connect to db. Reason: ${ err }`))
    mongoose.connection.once('open', () => console.log('Connected to db successfully!'))
}

export default connectToDB