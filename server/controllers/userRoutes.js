const userCtrl = require('./userCtrl');
const profileCtrl = require('./profileCtrl');


module.exports = app => {
    app.post(`/api/login`, userCtrl.login);
    app.get('/api/profiles', profileCtrl.getFriends);
};
