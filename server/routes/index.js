let express = require('express');
let router = express.Router();

let indexController = require('../controller/index');

/* GET home page. */
router.get('/', indexController.displayHomepage);

/* GET home page. */
router.get('/home', indexController.displayHomepage);

/* GET About Me page. */
router.get('/about', indexController.displayaboutpage);

/* GET Projects page. */
router.get('/projects', indexController.displayprojectspage);

/* GET Services page. */
router.get('/services', indexController.displayservicespage);

/* GET Contact Me page. */
router.get('/contact_me', indexController.displayContactpage);

/* GET Route for displaying the Login page  */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page  */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page  */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page  */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;