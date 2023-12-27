import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let adventurers = [];
let adventurers2 = [];
let adventurers3 = [];
let adventurers4 = [];
let adventurers5 = [];
let adventurers6 = [];
let adventurers7 = [];

let pw = '';

app.get('/', (req, res) => {
   let start = new Date();
   let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   };

   let currentDay = start.toLocaleDateString('en-US', options);

   res.render('index.ejs', {
      ejsDay: currentDay,
      ejsAdventurers: adventurers,
      ejsAdventurers2: adventurers2,
      ejsAdventurers3: adventurers3,
      ejsAdventurers4: adventurers4,
      ejsAdventurers5: adventurers5,
      ejsAdventurers6: adventurers6,
      ejsAdventurers7: adventurers7,
      ejsPass: pw,
   });
});

app.post('/sunday', (req, res) => {
   let adventurer = req.body.input;

   adventurers.push(adventurer);

   res.redirect('/');
});

app.post('/monday', (req, res) => {
   let adventurer2 = req.body.input2;

   adventurers2.push(adventurer2);
   res.redirect('/');
});

app.post('/tuesday', (req, res) => {
   let adventurer3 = req.body.input3;

   adventurers3.push(adventurer3);
   res.redirect('/');
});
app.post('/wednesday', (req, res) => {
   let adventurer4 = req.body.input4;

   adventurers4.push(adventurer4);
   res.redirect('/');
});
app.post('/thursday', (req, res) => {
   let adventurer5 = req.body.input5;

   adventurers5.push(adventurer5);
   res.redirect('/');
});
app.post('/friday', (req, res) => {
   let adventurer6 = req.body.input6;

   adventurers6.push(adventurer6);
   res.redirect('/');
});
app.post('/saturday', (req, res) => {
   let adventurer7 = req.body.input7;

   adventurers7.push(adventurer7);
   res.redirect('/');
});

app.post('/wipe', (req, res) => {
   pw = req.body.password;
   if (pw === 'ilovepeach') {
      adventurers = [];
      adventurers2 = [];
      adventurers3 = [];
      adventurers4 = [];
      adventurers5 = [];
      adventurers6 = [];
      adventurers7 = [];
      res.redirect('/');
   } else if (pw != 'ilovepeach') {
      res.redirect('/');
   }
});

app.listen(port, (req, res) => console.log(`we're liveeee on port ${port}`));
