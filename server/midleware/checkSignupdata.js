/*بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ*/
/* Insha Allah,  Allah loves s enough for me */ 


export const checkSignUpData = (req,res, next) => {
  let {firstname, lastname, email,phone, password  } = req.body
  
  
  if (!firstname) return res.json({error : 'firstname not defined'})
  if (!lastname) return res.json({error : 'lastName not defined'})
  if (!email) return res.json({error : 'email not defined'})
  if (!phone) return res.json({error : 'number not defined'})
  if (!password) return res.json({error : 'password not defined'})

  
  //check length 
  if (firstname.trim().length < 3 || firstname.trim().length > 16 ) return res.json({
    error : 'firstname should be min 3 and max 16 characters '
  })
  
  if (lastname.trim().length < 3 || lastname.trim().length > 16) return res.json({
    error: 'lastname should be min 3 and max 16 characters '
  })
  
  
  if (email.trim().length < 5 || email.trim().length > 36) return res.json({
    error: 'email should be min 5 and max 36 characters '
  })
  
  
  if (phone.toString().trim().length < 4|| phone.toString().trim().length > 16) return res.json({
    error: 'phone should be min 4 and max 16 characters '
  })
  
  
  if (password.trim().length < 5 || password.trim().length > 20) return res.json({ error: 'firstname should be min 5 and max 20 characters' })
  
  
  next()
 
  
  
}
















