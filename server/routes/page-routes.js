const express = require("express")
pageController = require("../controllers/page-controller"),
{check} = require("express-validator"),
router = express.Router();

router.get("/", (req, res) => {
    const flash = req.flash("message")
    return res.status(200).render("index", {title: "Home", flash})
})

// req.flash("message", "Success or Error message.")

router.post("/contact-form",
[
  check("email", "The email you entered is invalid, please try again.").isEmail().normalizeEmail(),
  check("email", "Email address must be between 4-100 characters long, please try again.").isLength({min:4, max:100}).normalizeEmail()
], pageController.contactForm)

router.get("*", (req, res) => {
    return res.status(404).render("404-error", {title: "Error 404 "})
})
  
module.exports = router