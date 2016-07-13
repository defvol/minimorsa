const request = require('superagent');
const test = require('tape');

const url = 'http://esbmx.inai.org.mx:8080/pot/busqueda/1/consulta';

test('search', function (t) {
  t.plan(1);

  request.post(url)
  .send({
    cadenaBusqueda: 'Escuela',
    tamanioPagina: '25',
    numeroPagina: '1'
  })
  .end(function(err, res) {
    t.error(err, 'no errors');
    console.log(err, res);
  });

});
