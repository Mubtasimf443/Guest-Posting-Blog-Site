/*  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  Insha Allah */

import { Router } from "express";



let pageRouter = Router();



pageRouter.get('/home', (req, res) => {
    res.render('home')
})

pageRouter.get('/login', (req, res) => {
    res.render('login')
})


pageRouter.get('/signup', (req, res) => {
    res.render('signup')
})


pageRouter.get('/varify', (req, res) => {
    res.render('varify')
})

pageRouter.get('/upload-post', (req, res) => {
    res.render('PostPage')
})













export {pageRouter}










