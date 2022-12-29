# How to run
1. cd server/client
2. npm i in server and client
3. npm run start:dev - server
4. npm start - client

# How to use
- connect to http://your.domain:3000/
- need connect database we are use MongoDB
- To use mongoDB, you need to register on the official website - https://www.mongodb.com/
- Next, according to the documentation, create your own database
- Next, download the mongoDB compass application, for more convenient work with the database - https://www.mongodb.com/try/download/compass
- In mongodb, compass connect to your cluster with the help that you probably already received when creating the database - `mongodb+srv://${process.env.USERNAME}:${process.env.BD_PASS}@cluster0.87ueqch.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
- Now in index.js enter your details in the required places in the given line - mongoose
                                                                                .connect(`mongodb+srv://${process.env.USERNAME}:${process.env.BD_PASS}@cluster0.87ueqch.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
                                                                                .then(() => {
                                                                                    console.log('DB OK');
                                                                                }).catch((err) => console.log("DB error " + err));
- Since the application uses MVC, nothing is created, after starting the server you have the necessary collections
