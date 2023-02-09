const router = require("express").Router();
const { User } = require("../models");
const apiKey = "4b115a7097d84053a79859cdb8fae99b";
const apiBase = `https://api.spoonacular.com/recipes/complexSearch?${apiKey}`;


module.exports = router;
