const express = require('express');
const router = express.Router();

// @route       GET to api/users/test
// @desc        tests the users route
// @access      Public
router.get('/test', (req, res) => {
    res.json(
        {
            msg: "Users Works"
        }
    )
});

module.exports = router 