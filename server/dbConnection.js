import mongoose from "mongoose";

    const connectToDB = () => {
        mongoose.connect('mongodb://localhost/baraka_botique')
        mongoose.connection.on('error', (err) => console.log(`Failed to connect to db. Reason: ${ err }`)
        )
        mongoose.connection.once('open', () => console.log('Connected to db successfully!'))
    }


export default connectToDB