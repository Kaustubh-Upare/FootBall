const express=require('express');
const { getMatches } = require('../controller/matchesHandler');
const route=express.Router();

route.get('/Up-match',getMatches);

module.exports=route;