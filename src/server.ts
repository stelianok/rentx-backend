import express from 'express';

const app = express();

app.get("/", (request, response) => {
  response.json({ Message: 'Hello World' });
})
app.listen(3333, () => {
  console.log("Let's GOOOOOOO 💜");
});

