import mongoose from 'mongoose';
import express from 'express';
import * as userController from './controllers/userController.js';
import checkauth from "./utils/checkauth.js";
import * as dotenv from 'dotenv';

dotenv.config();

mongoose
.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.BD_PASS}@cluster0.87ueqch.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(() => {
    console.log('DB OK');
}).catch((err) => console.log("DB error " + err));

const app = express();
app.use(express.json());

app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/profile', checkauth, userController.auth);

app.listen(200, (err) => {
    if (err) {
        return console.log(err);
    } 
    console.log('OK');
});
