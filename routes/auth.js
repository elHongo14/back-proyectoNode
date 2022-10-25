const router = require('express').Router()
const User = require('../models/user')

router.post('/register', async(req, res) => {
    const user = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        address: req.body.address,
        password: req.body.password
    })
    try {
        const savedUser = await user.save()
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router