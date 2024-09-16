const express = require("express");
const users = require("../users.json");
const fs = require('fs');



function getAllUsers(req, res) {
    try {
        res.json(users);
    }
    catch (err) {
        console.log(err);

    }
}

function getSpecificUser(req,res) {
    try {
        let id = parseInt(req.params.id);
        let user = users.find((user) => user.id ==id);
        res.json(user);
        console.log(user);
    } catch (err) {
        console.log(err);

    }

}
function addUser(req, res) {
    try {
        console.log(req.body);
        req.body.id = users.length + 1;
        users.push(req.body)
        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("data is added successfully...")
                res.end("data is added successfully ....")
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}


function deleteUser(req, res) {
    try {
        let id = req.params.id;
        console.log(id);
        let index = users.findIndex((user) => user.id ===parseFloat(id));
        users.splice(index, 1);
        res.end("deletion in progress");
        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) {
                
                console.log(err)
            }
            else {

                res.end("deletion is completed ..")
                console.log("deletion is completed")
            }
        })
     

    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllUsers,
    getSpecificUser,
    addUser,
    deleteUser
}
