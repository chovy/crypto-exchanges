var BaseModel = require('./base');

function Exchange() {
  Exchange.super_.apply(this, arguments);
  this.name = 'btce';
}

Exchange.super_ = BaseModel;

Exchange.prototype = Object.create(BaseModel.prototype, {
  constructor: {
    value: Exchange,
    enumarable: false
  }
});

Exchange.prototype.getPrice = function(){
  return 5.00;
};

module.exports = Exchange;
