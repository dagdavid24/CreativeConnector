const express = require('express');
const router = express.Router();

// @route       GET to api/posts/test
// @desc        tests the posts route
// @access      Public
router.get('/test', (req, res) => {
    res.json(
        {
            msg: "Posts Works"
        }
    )
});

module.exports = router 