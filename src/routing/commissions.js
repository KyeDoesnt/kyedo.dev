/* Init */
const express = require('express'),
      router = express.Router();



/* Express */
router.get('/', (req, res) => {
  res.status(200).render('commissions/main');
});

router.get('/tos', (req, res) => {
  res.status(200).render('commissions/tos');
});



/* Export */
module.exports = router;