module.exports = app => {

  app.post('/submit', (req, res) => {
    console.log(req.params);
    res.send('OK');
  });

  app.route('/healthcheck').get((req, res) => {
    res.send('OK');
  });
};