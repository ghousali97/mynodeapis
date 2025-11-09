const express = require('express');
const defaultRouter = require('./routes/default');
const privateRouter = require('./routes/private');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());


app.use('/public', require('./routes/public'));
app.use('/private', privateRouter);
app.use('/', defaultRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Sample route


