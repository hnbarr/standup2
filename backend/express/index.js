const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = express()
// const router = require('./routes/TasksRoutes')
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 5000;

// routes
const taskRoutes = require('./routes/TasksRoutes')
const projectRoutes = require('./routes/ProjectsRoutes')
const logRoutes = require('./routes/LogRoutes')
const blockerRoutes = require('./routes/BlockersRoutes')


require("dotenv").config()

// app.use(bodyParser.json())

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

// const port = process.env.NODE_ENV === 'production' ? 'https://flamboyant-noyce-0c009c.netlify.com/' : 3001 

mongoose.connect('mongodb+srv://admin:admin@cluster0-kohaq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
app.use(bodyParser.json())


app.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        email: 'hnbarr94@gmail.com'
    }
    jwt.sign({user}, 'titan', (err, token)=> {
        res.json({
            token
        })
    })
})

app.listen(port, (err)=>{
    if(err) console.log(err)
    else console.log(`working on port ${port}`)
})

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization']

}

// app.use(router, verifyToken)
app.use(taskRoutes)
app.use(projectRoutes)
app.use(logRoutes)
app.use(blockerRoutes)


console.log(path.join(__dirname, "../../build"))


if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static(path.join(__dirname, "../../build")));
    
    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
    res.sendFile("working");
    });
    } else{
    app.use(express.static(path.join(__dirname, "../../build")));
    }
