/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  inshaAllah */ 


import jwt from 'jsonwebtoken';
import { User } from '../../models/User.js';


export const VarificationApiFunc = (req, res) => {
  let pin = req.body.pin 
  
  if (!pin) return res.json({error :'please send Us a  pin '})
  
  if (typeof pin !== 'number') return res.json({error :'Stop trying to hack our website else we will complain'})
  
  if (pin < 100000 || pin > 999999) return res.json({ error : 'server miss configuration,  please try to sign up after few minutes'
  })
  
  let {varificarion} = req.cookies 
  if (!varificarion) return res.json({error : 'After 60 Second You can not varify '});
  jwt.varify(varificarion, secret, (err, {email}) => {
    if (err) return res.status(500).json({error : 'Unknown Err,  please try to sign uo again'})
    User.findOne({email})
    .then(user => {
      if (!user)  return res.json({error : 'Please Register to Our WebSite '})
      if (user.pin === 0 ) return res.json({error : 'You can not varify YourSelf After signup '})
      if (pin !== user.pin ) return res.json({error : 'Please Give the correct Pin'})
      
      user.pin = 0;
      user.save();
      
      res.json({success : true})
      
      
    })
   .catch( 
     e => console.log(e)
     )
  }
  )
  
  
  
}

































