var users = [
  {
    name: 'Preston McNeil',
    password: '1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
module.exports = {
    login(req, res, next) {
        console.log(req.body);
        for (let e = 0; e < users.length; e++) {
            if (req.body.name == users[e].name && req.body.password == users[e].password) {
                req.session.currentUser = users[e];
                console.log(req.session.currentUser);
                return res.send({userFound: true});
            }


        }
        return res.send({userFound: false});
    }
};
