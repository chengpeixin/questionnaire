const router = require('koa-router')();
const questionnaire = require('./api/questionnaire.api')

router
  .get('/api/getbrand', questionnaire.getbrand)
  .get('/api/getproblem', questionnaire.getproblem)

module.exports = router;
