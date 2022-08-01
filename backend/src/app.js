require('dotenv').config();
require('./strategies/discord');

const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3002;
const routes = require('./routes');
const passport = require('passport');
const mongoose = require('mongoose');
const Store = require('connect-mongo')(session);
const cors = require('cors');

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
});

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.1.190:3000'],
    credentials: true
}));
app.use(session({
    secret: 'secret_thing_here_wow',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: new Store({ 
        mongooseConnection: mongoose.connection
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

// Turning on the server
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) });