const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

let items = [];
let id = 1;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
    const item = {
        id: id++,
        label: req.body.label,
        done: req.body.done
    }
    items.push(item);
    res.status(200).json({ id: item.id });
});

app.delete("/api", (req, res) => {
    items = items.filter(item => item.id !== req.body.id);
    res.status(204).json({});
});

// Listen for requests on this port
const server = app.listen(app.get('port'), () => {
    const port = server.address().port;
    console.log('Listening on port ' + port);
});