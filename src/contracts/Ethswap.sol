pragma solidity ^0.5.0;

import "./Token.sol";

contract Ethswap{
	// name is a state variable becuase the data that 
	// is stored in this is actually stored in the blockchain.
	string public name = "EthSwap Instant Exchange";
	//token is also a state variable.
	Token public token;
	uint public rate = 100;

	//this is a special function which only run once
	//
	constructor(Token _token) public{
		//_token is a local variable which stores
		//it's value in the state variable token
		token = _token;
	}
//transfer ethswap contract to whoever is buying
	function buyTokens() public payable {
		//calculate the number of tokens to buy
		uint tokenAmount = msg.value * rate;

		token.transfer(msg.sender, tokenAmount);


	}
}


