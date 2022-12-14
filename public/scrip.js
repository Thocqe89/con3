var btc = document .getElementById("bitcoin") 
var eth = document .getElementById("ethereum") 
var dog = document .getElementById("dogecoin") 


var setting ={
  "async": true,
  "scrossDomain": true,
  "url": " https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd ",
  "method": "GET",
  "headers" :{}


}
$.ajax(setting).done(function (respone){
  btc.innerHTML = respone.bitcoin.usd;
  eth.innerHTML = respone.ethereum.usd;
  dog.innerHTML = respone.dogecoin.usd;

});