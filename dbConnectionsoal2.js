const mongoose = require('mongoose')

const dbConnection = (async () => {
    try {
        await mongoose.connect('mongodb+srv://lamse:12345@cluster0.zinum.mongodb.net/mgi_stephen');
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(error);
    }
})()

const userSchema = new mongoose.Schema({
    nama: String,
    hobi: String,
    alamat: String,
    no_telp: Number
});
const UserModel = mongoose.model('user', userSchema)


module.exports = UserModel