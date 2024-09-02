/*Insha Allah,  Allah is enough for me */ 


import bcript from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js'
import { generatePin } from '../generatePin.js';



const salt = bcript.genSalt(15)

export const signUpFunction = async (req, res ) => {
  
  let userCreatedSuccessFully = false ;
  let {firstname, lastname,  email,  phone,   } = req.body
  
  
  let chekedUser =await User.findOne({email})
  if (chekedUser) return res.json({error : 'You already have an account,  please sign in '})
    
  try {
    let password = await bcrypt.hash(req.body.password,  salt)
    let pin =await generatePin(999999)
    await User.create({
      firstname, lastname,pin, email,password,phone, signUpVarificationStatus : false,  
      })
      .then(data => {
        userCreatedSuccessFully = true
        res.status(201).json({success : true})
          })
      .catch(e => {
        res.status(500).json({error :'Server error,  please report to us '})
      })
      
      
  } catch (e) {
    console.log(e)
  } finally {
     if (!userCreatedSuccessFully) console.log('Failed to create the User')
     if (userCreatedSuccessFully) {
       console.log('user created successFully')
       
       setTimeout(async e => {
         let varifiedUserOrNot = await User.findOne({ email });
         if (!varifiedUserOrNot) return
         if (!varifiedUserOrNot.signUpVarificationStatus) {
           User.findOneAndRemove({ email })
         }
       }, 60000)
 
     }
  }
  
  
}
















