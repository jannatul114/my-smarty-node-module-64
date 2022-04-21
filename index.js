const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello from my personal own over Smarty Pant!!')
})

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'eabana', email: 'eabana@gmail.com' },
    { id: 3, name: 'habana', email: 'habana@gmail.com' },
    { id: 4, name: 'babana', email: 'babana@gmail.com' },
    { id: 5, name: 'aabana', email: 'aabana@gmail.com' },
    { id: 6, name: 'labana', email: 'labana@gmail.com' },
    { id: 7, name: 'vabana', email: 'vabana@gmail.com' }
]

app.get('/users', (req, res) => {
    //filture by search quary parameters
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(u => u.name.toLocaleLowerCase().includes(search));
        res.send(matched)
    }
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
})