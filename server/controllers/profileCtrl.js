var profiles = [{
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
}, {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
}, {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
}, {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
}];
module.exports = {
    getFriends(req, res, next) {
        let friends = [];
        let sessFrnds = req.session.currentUser.friends;
        for (var i = 0; i < sessFrnds.length; i++) {
            for (var e = 0; e < profiles.length; e++) {
                if (sessFrnds[i] === profiles[e].name) {
                    friends.push(profile[e]);
                }
            }
        }
        res.status(200).json({
            currentUser: req.session.currentUser,
            friends: yourArrayOfFriendObjects
        });
    }
};
