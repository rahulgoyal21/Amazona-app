import express from 'express';
import data from './data';
const app = express();

//Init database (to get req.body)
app.use(express.json({ extended: false }));

app.use('/api/products', require('./routes/api/products'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
