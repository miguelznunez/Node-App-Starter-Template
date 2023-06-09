const express = require("express"),
db = require("../config/mysql-setup.js"),
{validationResult} = require("express-validator");

exports.contactForm = (req, res) => {
    const errors = validationResult(req),
    allErrors = JSON.stringify(errors),
    allParsedErrors = JSON.parse(allErrors);
    if(!errors.isEmpty()){
        res.statusMessage = allParsedErrors.errors[0].msg
        return res.status(401).end()
    }

    const email = req.body.email
}