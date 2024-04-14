Array.prototype.forEach = function (callback, argThis) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let len = this.length;

  for (let i = 0; i < len; i++) {
    callback.call(argThis, this[i], i, this);
  }
};

let food = ["milk", "honey", "sugar"];
// food.forEach("foood string has been passed");
food.forEach(function (item, index, thisArray) {
  console.log(item, index, thisArray);
}, food);
