
import express from 'express';
import bodyParser from 'body-parser';
import JobController from './controller/MyController';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();
const PORT = 3000;
app.use(cors())
app.use(bodyParser.json());

const jobController = new JobController();

app.post('/submitJob', async (req, res) => {
  await jobController.submitJob(req, res);
});

mongoose.connect('mongodb://127.0.0.1:27017/FinalTaskDB').then(()=>(console.log('DB Connected')))
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
