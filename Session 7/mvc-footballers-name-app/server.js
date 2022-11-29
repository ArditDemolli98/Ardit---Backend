const express = require("express");
const app = express();
const homeController = require("./controllers/homeController")
const PORT = 8000;

app.use(express.static("public"));

app.get("/", homeController.getHomeView);


app.get("/api/:name", homeController.getFootballerName)

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}! Go catch it!!!`);
})

