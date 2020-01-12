import express from 'express';
const app = express();

app.set('trust proxy', true);

app.use(express.static('public')); // equivalent to doing the below plus all the stuff in public

// app.get('/', (req, res) => {
//   console.log('Hello world received a request.');

//   const target = process.env.TARGET || 'World';
//   res.send(`Hello ${target}!`);
// });

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

export default app;

