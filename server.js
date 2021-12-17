import express from 'express';
import cors from 'cors';
import { generateUploadUrl } from './s3.js';

const app = express();

const port = process.env.PORT || 3000;

const whiteList = [
    'http://localhost:8080'
]

app.use(cors({ origin: whiteList }));

app.get('/s3Url', async (req, res) => {
    const url = await generateUploadUrl();
    res.send({url}); 
})

app.listen(port);