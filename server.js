const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 4001;
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wgsqm.mongodb.net/<dbname>?retryWrites=true&w=majority`



// Define API routes here

app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
.catch((error)=> console.log(error.message));
