/**
 *
 */



//////////
// INIT //
//////////

/* Packages */
const express  = require('express'),
    { engine } = require('express-handlebars');

/* Globals */
const app = express();



/////////////
// EXPRESS //
/////////////

/* App */

// handlebars.
app.engine('handlebars', engine( { defaultLayout: 'main' } ));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// css and js.
app.use(express.static(__dirname + '/public'));

// routing.
app.get('/', (req, res) => {
  res.status(200).render('index', {
    title: "Kye Cedar",
    canonical: "https://kyedo.dev",
    credits: require('./data/credits.json'),
  });
});

app.use('/commissions', require('./routing/commissions'));
// app.use('/games', require('./routing/games'));



/* Start Server */

app.listen(process.env.PORT, function() {
  console.log(`🏃 Site is running on port ${this.address().port}.`);
});