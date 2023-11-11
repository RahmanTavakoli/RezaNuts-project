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
//* @desc shop aboutus page
// @route GET /aboutus
router.get('/aboutus', (req, res) => {
    res.render("aboutUs", {
        pageTitle: "درباره ما",
        path: "/product",
    })
});

//* @desc shop pistachio page
// @route GET /pistachio
router.get('/pistachio', (req, res) => {
    res.render("pistachio", {
        pageTitle: "انواع پسته",
        path: "/product",
    })
});

//* @desc shop almonds page
// @route GET /almonds
router.get('/almonds', (req, res) => {
    res.render("almonds", {
        pageTitle: "انواع بادام",
        path: "/product",
    })
});

//* @desc shop chickpeas page
// @route GET /chickpeas
router.get('/chickpeas', (req, res) => {
    res.render("chickpeas", {
        pageTitle: "انواع نخودچی",
        path: "/product",
    })
});

//* @desc shop chocolate page
// @route GET /chocolate
router.get('/chocolate', (req, res) => {
    res.render("chocolate", {
        pageTitle: "انواع شکلات و آبنبات",
        path: "/product",
    })
});

//* @desc shop dates page
// @route GET /dates
router.get('/dates', (req, res) => {
    res.render("dates", {
        pageTitle: "انواع خرما",
        path: "/product",
    })
});

//* @desc shop dryFruits page
// @route GET /dryFruits
router.get('/dryFruits', (req, res) => {
    res.render("dryFruits", {
        pageTitle: "انواع میوه خشک",
        path: "/product",
    })
});

//* @desc shop pistachio page
// @route GET /pistachio
router.get('/pistachio', (req, res) => {
    res.render("pistachio", {
        pageTitle: "انواع پسته",
        path: "/product",
    })
});

//* @desc shop figs-Mulberry page
// @route GET /figs-Mulberry
router.get('/figsMulberry', (req, res) => {
    res.render("figs-Mulberry", {
        pageTitle: "انواع انجیرخشک و توت خشک",
        path: "/product",
    })
});

//* @desc shop hazelnuts page
// @route GET /hazelnuts
router.get('/hazelnuts', (req, res) => {
    res.render("hazelnuts", {
        pageTitle: "انواع قندوق",
        path: "/product",
    })
});

//* @desc shop mixednuts page
// @route GET /mixednuts
router.get('/mixednuts', (req, res) => {
    res.render("mixednuts", {
        pageTitle: "انواع آجیل مخلوط",
        path: "/product",
    })
});

//* @desc shop plums page
// @route GET /plums
router.get('/plums', (req, res) => {
    res.render("plums", {
        pageTitle: "انواع آلو",
        path: "/product",
    })
});

//* @desc shop raissins page
// @route GET /raissins
router.get('/raissins', (req, res) => {
    res.render("raissins", {
        pageTitle: "انواع کشمش",
        path: "/product",
    })
});

//* @desc shop saffaron page
// @route GET /saffaron
router.get('/saffaron', (req, res) => {
    res.render("saffaron", {
        pageTitle: " زعفران ",
        path: "/product",
    })
});

//* @desc shop seeds page
// @route GET /seeds
router.get('/seeds', (req, res) => {
    res.render("seeds", {
        pageTitle: "انواع تخمه",
        path: "/product",
    })
});

//* @desc shop walnuts page
// @route GET /walnuts
router.get('/walnuts', (req, res) => {
    res.render("walnuts", {
        pageTitle: "انواع گردو",
        path: "/product",
    })
});




module.exports = router;