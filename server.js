const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Listen for requests on this port
const server = app.listen(app.get('port'), () => {
    const port = server.address().port;
    console.log('Listening on port ' + port);
});