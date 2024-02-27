const express=require('express')
const { SignUp, SignIn, DeleteUser, UpdateUser, GetOneUser, GetAllUser } = require('../Controllers/User');
const { Validation, registerValidation } = require('../Middlewares/Validation');
const { isAuth } = require('../Middlewares/isAuth');

const userRouter=express.Router()


userRouter.post('/signUp',registerValidation,Validation,SignUp)

userRouter.post('/SignIn',registerValidation,Validation,SignIn)
userRouter.get('/ConnectedUser',isAuth,(req,res)=> res.send(req.user))

userRouter.delete('/deleteUser/:id', DeleteUser)

userRouter.put('/updateUser/:id', UpdateUser)

userRouter.get('/getOneUser/:id',GetOneUser)

userRouter.get('/getAllUser',GetAllUser)

module.exports=userRouter