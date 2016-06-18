const express = require('express');
const {json} = require('body-parser');
// const cors = require('cors');
const session = require('express-session');
const sessionConfig = require('./server/config/sessionConfig.js');
// const profile = require('./server/controllers/profileCtrl.js');
// const user = require('./server/controllers/userCtrl.js');
const routes = require("./server/controllers/userRoutes");
const app = express();
const port = 8999;
// const corsOptions = {
    // origin: 'http://localhost:8999'
// };

app.use(express.static(__dirname + '/public'));
app.use(json());
// app.use(cors());
// app.use(cors(corsOptions));
app.use(session(sessionConfig));

routes(app);



app.listen(port, () => {
    console.log(`Express is listening on ${port}`);
});
