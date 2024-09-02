/*  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah  */ 

import mongoose from 'mongoose'


let userSchema = new mongoose.Schema({
    firstname :{
        type :String,
        required :true,
    },
    lastname :{
        type :String,
        required :true,
    },
    email :{
        type :String,
        required :true,
        unique :true
    },
    phone :{
        type :Number,
        required :true,
    },
    password :{
        type :String,
        required :true,
    },
    signUpVarificationStatus :{
        type :Boolean,
        required :true,
    },
    pin : Number


}) 





const User = mongoose.model('user', userSchema)

export default User
export {User}




