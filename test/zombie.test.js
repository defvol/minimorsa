const Zombie = require('zombie');
const test = require('tape');

const browser = new Zombie();
const url = 'http://www.plataformadetransparencia.org.mx/';

test('home', function (t) {
  t.plan(3);

  browser.visit(url, function() {
    t.true(browser.assert.success(), 'the browser is working');
    t.true(browser.assert.text('title', 'inicio - PNT'), 'has title');
    t.equal(browser.location.href, url, 'we reached that ugly site');
  });
});
