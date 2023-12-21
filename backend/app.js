//  import express application
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/sportSoirDB');
// import bcrypt
const bcrypt = require("bcrypt");
// import axios module
const axios = require("axios");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import jwt
const jwt = require('jsonwebtoken');
// import session
const session = require('express-session');
//  creates express application
const app = express();
// configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, PATCH, PUT"

    );

    next();

});
app.use('/images', express.static(path.join('backend/images')));
const MIME_TYPE = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
};

const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(" ").join("-");
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + "-" + Date.now() + "-crococoder-" + "." +
            extension;
        cb(null, imgName);
    }
});
const secretKey = 'your-secret-key';
app.use(session({
secret: secretKey,
}));
// Models Importation
const Match = require("./models/match");
// Models Importation
const Team = require("./models/team");
// Models Importation
const Player = require("./models/player");
// Models Importation
const User = require("./models/user");
// Models Importation
const Stadium = require("./models/stadium");



// busines logic :Get All Matches
app.get("/matches", (req, res) => {
    console.log("here into BL: Get All Matches");
    Match.find().then((docs) => {
        res.json({ matches: docs });
    });
});

// busines logic :Get  Match By ID
app.get("/matches/:id", (req, res) => {
    console.log("here into BL: Get  Match By ID ");
    Match.findById(req.params.id).then((doc) => {
        res.json({ match: doc });
    });
});



// busines logic :Add Match
app.post("/matches", (req, res) => {
    console.log("here into BL: Add Match");
    let obj = new Match(req.body);
    obj.save((err,doc)=>{
        if (err) {
            res.json({ msg: "error" });
        } else {
            res.json({ msg: "added width success" });
        }
    });
    
});

// busines logic :Delete Match
app.delete("/matches/:id", (req, res) => {
    console.log("here into BL: Delete Match");
    let matchId = req.params.id;
    Match.deleteOne({ _id: matchId }).then((deleteResponse) => {
        console.log("here reponse after delete", deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ msg: "Deleted with Success" });

        } else {
            res.json({ msg: "Error" });

        }

    });
});



// busines logic :Edit Match
app.put("/matches", (req, res) => {
    console.log("here into BL: Edit Match");
    let newMatch = req.body;
    Match.updateOne({ _id: req.body._id }, newMatch).then((updateResponse) => {
        console.log("here response after update", updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }

    });
});



// busines logic :Get All Teams
app.get("/teams", (req, res) => {
    console.log("here into BL: Get All Teams");
    Team.find().then((docs) => {
        res.json({ teams: docs });
    });
});

// busines logic :Get  Team By ID
app.get("/teams/:id", (req, res) => {
    console.log("here into BL: Get  Team By ID ");
    Team.findById(req.params.id).then((doc) => {
        res.json({ team: doc });
    });
});


// busines logic :Add Team
app.post("/teams", (req, res) => {
    console.log("here into BL: Add Team");
    let obj = new Team(req.body);
    obj.save((err,doc)=>{
        if (err) {
            res.json({ msg: "error" }); 
            
        } else {
            res.json({ msg: "added width success" });
        }
    });
    
});
// busines logic :Delete Team
app.delete("/teams/:id", (req, res) => {
    console.log("here into BL: Delete Team");
    let teamId = req.params.id;
    Team.deleteOne({ _id: teamId }).then((deleteResponse) => {
        console.log("here reponse after delete", deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ msg: "Deleted with Success" });

        } else {
            res.json({ msg: "Error" });

        }

    });
});
// busines logic :Edit Team
app.put("/teams", (req, res) => {
    console.log("here into BL: Edit Team");
    let newTeam = req.body;
    Team.updateOne({ _id: req.body._id }, newTeam).then((updateResponse) => {
        console.log("here response after update", updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }

    });
});


// busines logic :Get All Players
app.get("/players", (req, res) => {
    console.log("here into BL: Get All Players");
    Player.find().then((docs) => {
        res.json({ players: docs });
    });
});

// busines logic :Get  Player By ID
app.get("/players/:id", (req, res) => {
    console.log("here into BL: Get  Player By ID ");
    Player.findById(req.params.id).then((doc) => {
        res.json({ player: doc });
    });
});

// busines logic :Add Player
app.post("/players", (req, res) => {
    console.log("here into BL: Add Player");
    let obj = new Player(req.body);
    Team.findById(req.body.idTeam).then((team)=>{
        if (!team) {
            return res.json({message:"Team not found"})
        }
        const player = new player({
            position:req.body.position,
            name: req.body.name,
            Number: req.body.Number,
            age: req.body.age,
            team: team._id
            
            });
            player.save((err, doc) => {
                team.players.push(player);
                team.save();
                res.json({msg:"player Added with success"});
            
    });
});
});
// Business Logic:Get All Team Informations
app.get("/teams/:teamId/info",(req,res)=>{
    console.log("Here into BL:Get All Team Infos",req.params.teamId);
    Team.findOne({_id:req.params.teamId}).populate("players").then((docs)=>{
        console.log("Here teams",docs);
        res.json({x:docs})
    })
})
    



// busines logic :Delete Player
app.delete("/players/:id", (req, res) => {
    console.log("here into BL: Delete Player");
    let playerId = req.params.id;
    Player.deleteOne({ _id: playerId }).then((deleteResponse) => {
        console.log("here reponse after delete", deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ msg: "Deleted with Success" });

        } else {
            res.json({ msg: "Error" });

        }

    });
});

// busines logic :Edit Player
app.put("/players", (req, res) => {
    console.log("here into BL: Edit Player");
    let newPlayer = req.body;
    Player.updateOne({ _id: req.body._id }, newPlayer).then((updateResponse) => {
        console.log("here response after update", updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }

    });
});
// busines logic :Add Weather
app.post("/weathers", (req, res) => {
    console.log("here into BL: Add Weather");
    let obj = new Weather(req.body);
    obj.save();
    res.json({ msg: "added width success" });
});
// busines logic :login
app.post("/users/login", (req, res) => {
    let result
    console.log("here into BL: login", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
            console.log("here finded User by email", doc);
            if (!doc) {
                 res.json({ msg: "please check your email" });

            } else {
                  
             bcrypt.compare(req.body.pwd, doc.pwd);
            }
        }).then((pwdCompare) => {
            console.log("here pwdCompare", pwdCompare);
            if (pwdCompare) {
                const token = jwt.sign({  fName: result.firstName,
                    lName: result.lastName,
                    id: result._id,role:result.role }, secretKey, { expiresIn:
                    '1h' });
                res.json({
                    msg: "welcome",
                    token:token
                });

            } else {
                res.json({ msg: "please check your pwd" });
            }
        
        });


});
 
            
            
         
// busines logic :signup
app.post("/users/signup", multer({ storage: storageConfig }).single("img"), (req, res) => {
    console.log("here into BL: signup", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        if (doc) {
            res.json({ msg: "Oops,Email exists" });
        } else {
            bcrypt.hash(req.body.pwd, 8).then((crytedPwd) => {
                req.body.pwd = crytedPwd;
                req.body.avatar = `http://localhost:3000/images/${req.file.filename}`;
                let user = new User(req.body);
                user.save((err, doc) => {
                    if (err) {
                        res.json({ msg: "Failed" });
                    } else {
                        res.json({ msg: "Added with success" });
                    }
                });

            });

        }

    });

});
// busines logic:Get All Users
app.get("/users", (req, res) => {
    console.log("here into BL: Get All users");
    User.find().then((users) => {
        res.json({ users: users });
    });
});
// Business Logic:Weather
app.post("/weather", (req, res) => {
    console.log("here into BL weather", req.body);
    let key = "62ee756a34835483299877a61961cafb";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`
    axios.get(apiURL).then((response) => {
        console.log("here API response", response.data);
        let weatherToSend = {
            temperature: response.data.main.temp,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            speed: response.data.wind.speed,
            icone: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        }
        res.json({ result: weatherToSend });

    });

});
// Business Logic Add Stadium
app.post("/stadia",(req,res)=>{
    console.log("here into BL:Add Stadium",req.body);
    let stadium=new Stadium(req.body);
    stadium.save((err,doc)=>{
        if (err) {
            res.json({msg:"Error"});
            
        } else {
            res.json({msg:"Success"});  
        }
    })
});

// make app importatable from another filles
module.exports = app;
