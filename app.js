const  express =  require('express');
const  stripe  =  require('stripe')('insert key');
const  bodyParser  = require('body-parser');
const exphbs       = require('express-handlebars');

const app   = express();

const port   = process.env.PORT || 5000;


// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


// BOdy parser Middlewarre
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//static folder
app.use(express.static(`${__dirname}/public`));

//Index Route
app.get('/', (req, res) => {
    res.render('index');
});

//charge Route
app.post('/charge',(req, res) => {
   console.log(req.body);
   res.send('TEST');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});