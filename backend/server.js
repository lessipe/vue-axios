const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/login', function(req, res) {
  let errors = {};

  if (req.body.userid !== 'test' && req.body.password !== 'test') {
    errors['userid'] = '아이디 혹은 비밀번호가 맞지 않습니다.';
  }

  if (Object.keys(errors).length > 0) {
    res.status(401).send({
      result: 'failed',
      data: errors
    });
    return;
  }

  res.status(200).send({
    result: 'success',
    token: 'abcd'
  });
});

app.post('/board', function(req, res) {
  let validationErrors = {};

  if (req.body.title === undefined || req.body.title === '') {
    validationErrors['title'] = 'title은 필수입니다.';
  }

  if (req.body.content === undefined || req.body.content === '') {
    validationErrors['content'] = 'content는 필수입니다.';
  }

  if (Object.keys(validationErrors).length > 0) {
    res.status(422).send({
      result: 'failed',
      data: validationErrors
    });
    return;
  }

  res.status(200).send({
    result: 'success'
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
