import express from 'express';
import { categoriesRoute } from '../routes/categories.routes';
import { specificationsRoute } from '../routes/specifications.routes';
const port = 8000;

const app = express();

app.use(express.json());
app.use('/categories', categoriesRoute);
app.use('/specifications', specificationsRoute);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})