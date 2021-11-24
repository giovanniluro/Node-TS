import express from 'express';
import { categoriesRoute } from '../routes/categories.routes';
const port = 8000;

const app = express();

app.use(express.json());
app.use('/categories', categoriesRoute);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})