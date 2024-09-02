/*  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah  */ 


//import
import express from 'express'
import hbs from 'hbs'
import path from 'path'
import { fileRouter } from './routes/file.router.js';
import { pageRouter } from './routes/page.router.js';
import {fileURLToPath} from 'url'
import { AuthRouter } from './routes/auth.router.js';
import cookieParser from 'cookie-parser';

//variables
const app = express();
const __filename = fileURLToPath(import.meta.url);
let dirname = path.dirname(__filename)



//environment
app.use(express.json())
app.use(cookieParser())

app.set('view engine', 'hbs')
app.set('views', path.resolve(dirname , './templates/views/'))
hbs.registerPartials(path.resolve(dirname ,'./templates/partials/'))

app.use('/file', fileRouter)
app.use('/pg',pageRouter)
app.use('/auth', AuthRouter)


app.get('/', (req, res) => res.redirect('/pg/home'))




app.listen(4000)