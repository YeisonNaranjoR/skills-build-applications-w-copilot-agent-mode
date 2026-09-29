import './config/database';
import app from './app';

const port = Number(process.env.PORT || 8000);

app.listen(port, () => {
  console.log(`OctoFit API listening on port ${port}`);
});