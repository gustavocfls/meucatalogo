const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    description:
    {
        type: String,       
    },     
    address:
    {
        type: String,       
    },
    phone:
    {
        type: Number,        
    },
    instagram:
    {
        type: String,        
    },

    products: [
        {
            photo: String,
            title: String,
            price: Number,
        }
    ]
}, {
    timestamps: true
});

DataSchema.pre('save', function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = bcrypt.hashSync(this.password,10);
    next();
});

DataSchema.pre('findOneAndUpdate', function(next){
    var password = this.getUpdate().password+'';
    if(password.length<55){
        this.getUpdate().password = bcrypt.hashSync(password,10);
    }
    next();
})

const users = mongoose.model('Users',DataSchema);
module.exports = users;