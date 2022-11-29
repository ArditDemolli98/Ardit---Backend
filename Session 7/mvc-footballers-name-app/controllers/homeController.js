const path = require("path");

exports.getHomeView = (request, response) => {
    response.sendFile(path.join(__dirname, "../views/index.html"))
}

const footballers = {
    "cristiano ronaldo": {
        "fullName": "Cristiano Ronaldo dos Santos Aveiro",
        "birthDate": "5 February 1985",
        "birthCountry": "Portugal"
    },
    "neymar": {
        "fullName": "Neymar da Silva Santos Júnior",
        "birthDate": "5 February 1992",
        "birthCountry": "Brazil"
    },
    "lionel messi": {
        "fullName": "Lionel Andrés Messi",
        "birthDate": "24 June 1987",
        "birthCountry": "Argentina"
    },
    "unknown": {
        "fullName": "unknown",
        "birthDate": "unknown",
        "birthCountry": "unknown"
    }
}
exports.getFootballerName = (request, response) => {
    const footballerName = request.params.name.toLowerCase();
    if (footballers[footballerName]) {
        response.json(footballers[footballerName]);
    } else {
        response.json(footballers["unknown"]);
    }
}