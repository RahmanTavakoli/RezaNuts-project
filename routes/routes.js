const {
    Router
} = require('express');

const router = new Router();

//* @desc shop index page
// @route GET /
router.get('/', (req, res) => {
    res.render("index", {
        pageTitle: "فروشگاه اینترنتی خشکبار رضا",
        path: "/",
    })
});



module.exports = router;