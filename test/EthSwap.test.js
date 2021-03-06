
const Token = artifacts.require('Token')
const EthSwap = artifacts.require('Ethswap')

require('chai').use(require('chai-as-promised')).should()


function tokens(n){
	return web3.utils.toWei(n, 'ether');
}



contract('Ethswap',(accounts) =>{
let token, ethSwap
	before(async() => {
		token = await Token.new()
		ethSwap = await EthSwap.new(token.address)
		await token.transfer(ethSwap.address,tokens('1000000'))

	})

	describe('Token Deployement', async() => {
		it('contract has a name',async() =>{
			const name = await token.name()
			assert.equal(name,'DApp Token')
		})
	})
	describe('EthSwap Deployement', async() => {
		it('contract has a name',async() =>{
			const name = await ethSwap.name()
			assert.equal(name,'EthSwap Instant Exchange')
		})
		it('contract has tokens', async() =>{
			let balance = await token.balanceOf(ethSwap.address)
			assert.equal(balance.toString(),tokens('1000000'))

		}) 
	})



	describe('buyTokens()', async() => {
		it('Allows user to instantly purchase token from ethSwap for a fixed price', async()=>{
			ethSwap.buyTokens({from: accounts[1], value: '1000000000000000000'})
		})
	})
})