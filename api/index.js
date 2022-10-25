import express from 'express'
import postRoutes from "./route/posts.js"
import userRoutes from "./route/users.js"
import authRoutes from "./route/auth.js"
import cookieParser from 'cookie-parser'
import multer from 'multer'
 
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)



const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, '..client/public/uploads')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + file.originalname)
   }
 })
 
 const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), function (req, res) {
   const file = req.file
res.status(200).json(file.filename)
})



const port = process.env.PORT || 5000




//app.get('/' , (req , res)=>{

   //res.send('hello from simple server :)')

//})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))