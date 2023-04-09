const express = require("express");
const PORT = 5000;
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const SECRET = "testsecret";

const users = [
    {
        id: "1",
        username: "test1",
        password: "test1",
        isAdmin: true
    },
        {
        id: "2",
        username: "test2",
        password: "test2",
        isAdmin: false
    }
];

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => {
        return u.username == username && u.password == password;
    })
    
    if(user) {
        // Generate an access token
        const accessToken = jwt.sign({id: user.id, isAdmin: user.isAdmin}, SECRET);
        res.json({
            username: user.username,
            password: user.password,
            accessToken
        })
    }else {
        res.status(400).json("incorrect username or password");
    }
});

// verify jwt token
const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, SECRET, (err, user) => {
            if(err) return res.status(401).json("invalid JWT");

            req.user = user;
            next();
        })
    } else {
        res.status(401).json("not authenticated");
    }
}

app.delete("/api/users/:id", verify, (req, res) => {
    if(req.user.id === req.params.id) {
        res.status(200).json("deleted user")
    } else {
        res.status(403).json("not allowed to delete another user")
    }
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})