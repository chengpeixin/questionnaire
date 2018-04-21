const router = require('koa-router')();
const questionnaire = require('./api/questionnaire.api')

router
  .post('/api/getbrand', questionnaire.getbrand)
  .post('/api/getproblem', questionnaire.getproblem)
  .post('/api/getwts', questionnaire.getwts)

module.exports = router;
