const express=require('express');
const router=express.Router();
const usercontroller=require('../controller/usercontroller');
router.use(express.json());

router.get('/users',(req,res)=>{
   usercontroller.getAllUsers(req,res);
})

router.get('/user/:id',(req,res)=>{
  usercontroller.getSpecificUser(req,res)

})

router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res)
})

router.delete('/delete/user/:id',(req,res)=>{
    usercontroller.deleteUser(req.res)
})


module.exports=router;