var EventEmitter = require('events').EventEmitter;

var antbox = function () {

  var ee = new EventEmitter();

  var a = function (name) {

    var tests = Array.prototype.slice.apply(arguments).slice(1);

    return function (req, res, next) {
      var data = tests[Math.floor(Math.random() * tests.length)];

      res.locals(data);

      ee.emit('test', {
        name: name,
        data: data,
        req: req,
        res: res,
      });

      next();
    };

  };

  a.on = ee.on.bind(ee);

  return a;

};

module.exports = antbox;
