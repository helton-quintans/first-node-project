import { Router } from "express"

const routes = Router()

routes.get('/users', (req, res)=> {
    const { name, email } = req.body
    const user = {
        name,
        email
    }
    return res.json(user)
})