const express = require("express");
const router = express.Router();

router.post("/opentickets", (req,res) =>{
    res.json({message : "Open ticket route working"})
});

router.get("/tickets", (req,res) =>{
    res.json({message : "Open ticket route working"})
});

module.exports = router;