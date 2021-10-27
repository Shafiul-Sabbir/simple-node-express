const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
        res.send('Hello from my second node server,learning node.. yeeee,hurrraaa. automatic restart');
});

const users =[
    {id:0,name:'shayontika',email:'shayontika@gmail.com',phone:'01888888888'},
    {id:1,name:'shabana',email:'shabana@gmail.com',phone:'01888888888'},
    {id:2,name:'shabnur',email:'shabnur@gmail.com',phone:'01888888888'},
    {id:3,name:'sonia',email:'sonia@gmail.com',phone:'01888888888'},
    {id:4,name:'shuchorita',email:'shuchorita@gmail.com',phone:'01888888888'},
    {id:5,name:'shushmita',email:'shushmita@gmail.com',phone:'01888888888'}
]
app.get('/users',(req,res)=>{
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
})
//app.METHOD
app.post('/users',(req,res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','banana','fazli'])
})
app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yummy yummy tok marka fazli')
})

app.listen(port,()=>{
    console.log('listening to port',port);
})