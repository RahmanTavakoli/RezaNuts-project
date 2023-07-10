const { Router } = require('express');

const router = new Router();

router.get('/',(req,res) => {
    res.render("index" , { pageTitle: "فروشگاه اینترنتی خشکبار رضا" , layout: "./layouts/mainLayout.ejs"})
});



module.exports = router;