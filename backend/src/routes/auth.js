const router = require('express').Router();
const passport = require('passport');

router.get('/discord', passport.authenticate('discord', {
    scope: ['identify', 'email', 'guilds']
}));

router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    res.redirect('http://localhost:3000/channelselect');
});

router.get('/', (req, res) => {
    if (req.user) {
        res.send({ user: req.user });
    } else {
        res.send(401);
    };
})

module.exports = router;