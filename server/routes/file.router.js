/*  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  Insha Allah */


import { Router } from "express";
import { log } from "../utils/smallUtils.js";
import {fileURLToPath} from 'url'
import path from "path";



const __filename = fileURLToPath(import.meta.url);
let dirName = path.dirname(__filename)
let fileRouter = Router();


fileRouter.get('/css/:name', (req, res) => {
    try {
       return res.status(200).sendFile(path.resolve(dirName, '../public/css/' + req.params.name))
    } catch (error) {
        log(error)
        return res.sendStatus(304)
    }
})


fileRouter.get('/assets/:name', (req, res) => {
    try {
       return res.status(200).sendFile(path.resolve(dirName, '../public/assets/' + req.params.name))
    } catch (error) {
        log(error)
        return res.sendStatus(304)
    }
})

fileRouter.get('/js/:name', (req, res) => {
    try {
       return res.status(200).sendFile(path.resolve(dirName, '../public/js/' + req.params.name))
    } catch (error) {
        log(error)
        return res.sendStatus(304)
    }
})




export {fileRouter}