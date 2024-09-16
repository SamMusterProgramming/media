const express = require('express')
const cors = require('cors')
const connectDB = require('./db.js')
const postModel = require('./models/postModel.js')
const userModel = require('./models/userModel.js')

const app = express();
app.use(express.json())
app.use(cors())
connectDB();

router = express.Router();

app.get("/timeline/:userId",async(req,res)=>{
   try {
      const currentUser = await userModel.findOne({id:req.params.userId});
      const userPosts = await postModel.find({user_id:currentUser.id});
      res.status(200).json(userPosts)
   }catch(error)
   {
      console.log(error)
   }
  
})


app.get("/",async(req,res)=>{
   const post = await postModel.find()
  res.status(200).json(post)
})

app.get("/user/:userId", async(req,res)=>{
   const  user = await userModel.findOne({id:req.params.userId})
   res.status(200).json(user)
})

app.post('/post', async (req, res) => {
   try {
       const newPost = new postModel(
         {
            link: req.body.link,
            description: req.body.description,
            user_id: req.body.user_id
         })
       
       await newPost.save();
     
   } catch (err) {
       console.error('Error saving user data:', err);
       res.status(500).render('index', { error: 'Error saving user data' });
   }
});

app.get('/register', async (req, res) => {
   try {
      const  user = await userModel.findOne({id:req.params.userId}) 
       await newUser.save();
     
   } catch (err) {
       console.error('Error saving user data:', err);
       res.status(500).render('index', { error: 'Error saving user data' });
   }
});

app.post("/auth/login", async (req, res) => {
   try {
      console.log(req.body)
     const user = await userModel.findOne({email : req.body.email})
     !user && res.status(404).json("user not found");
     
     const validPassword = await userModel.findOne({password:req.body.password})
     !validPassword && res.status(400).json("wrong password")
 
     res.status(200).json(user)
   } catch (err) {
     res.status(500).json(err)
   }
 });
 

app.listen(8080 ,()=>{
   console.log( "running on port 8080")
})
