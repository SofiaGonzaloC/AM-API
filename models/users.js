import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: 'string',
    birthdate: 'date',
    email: 'string',
    phone: 'string',
    signature: 'string',
})

export default mongoose.model('User', userSchema)