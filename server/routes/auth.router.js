/*  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  Insha Allah */

import { Router } from "express";
import { checkSignUpData } from "../midleware/checkSignupdata.js";
import { signUpFunction } from "../utils/auth/Signup.js";
import { loginApiFunc } from "../utils/auth/loginApiFunc.js";
import { VarificationApiFunc } from "../utils/auth/varification.js";



let AuthRouter = Router();


AuthRouter.post('/sign-up', checkSignUpData ,signUpFunction);

AuthRouter.post('/login', loginApiFunc)

AuthRouter.post('/varification',VarificationApiFunc  )


export {AuthRouter}










