const Ethswap = artifacts.require("Ethswap");
const Token = artifacts.require("Token");

module.exports = async function(deployer) {
  //Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()
  
  //Deploy Eth swap
  await deployer.deploy(Ethswap);
  const ethSwap = await Ethswap.deployed()

  //Transfer all tokes to Ethswap (1 million)
  await token.transfer(ethSwap.address,'1000000000000000000000000')
};

