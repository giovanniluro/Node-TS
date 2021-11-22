import express, { Request, Response } from 'express';
const port = 8000;

const app = express();
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
  const { name } = request.body;

  return response.json({
    message: `Hello ${name}!`
  })
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})