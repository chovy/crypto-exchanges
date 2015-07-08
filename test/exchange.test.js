var expect = require('chai').expect;

function runTests(name){
  var lcName = name.toLowerCase();
  describe(lcName, function(){
    var Exchange;
    var xchg;
    var opts = { test: 'foo' };

    beforeEach(function() {
      Exchange = require('../index')[name];
      opts.passedName = name;
      xchg = new Exchange(opts);
    });

    describe('instance', function(){
      it('name should be defined', function(){
        expect(xchg.name).to.be.defined;
      });

      it('name should be equal', function(){
        expect(xchg.name).to.be.equal(lcName);
      })

      it('opts should be defined', function(){
        expect(xchg.opts).to.be.equal(opts);
      });

      it('passed opts property should be defined', function(){
        expect(xchg.opts.passedName).to.be.equal(opts.passedName);
      });
    });

    describe('methods', function(){
      it('should get price', function(done){
        var price = xchg.getPrice();
        expect(price).to.be.defined;
        done();
      })
    });
  });
}

describe('Exchanges', function(){
  ['Btce', 'Cryptsy'].forEach(runTests);
});
