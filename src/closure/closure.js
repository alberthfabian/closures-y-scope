const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log (`MoneyBox:  $${saveCoins}`);
  }
  return countCoins;
};

let MyMoneyBox = moneyBox();

MyMoneyBox(4);
MyMoneyBox(6);
MyMoneyBox(10);