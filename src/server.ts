import express, { response } from 'express'

const app = express()

app.get('/',(req, res)=>{
    return res.json({message: 'Helo World'})
})

app.listen(3333, ()=> console.log('🐙 Backend started!'))