
const Token = artifacts.require('Token')
const EthSwap = artifacts.require('Ethswap')

require('chai').use(require('chai-as-promised')).should()
contract('Ethswap',(accounts) =>{

	describe('Token Deployement', async() => {
		it('contract has a name',async() =>{
			let token = await Token.new()
			const name = await token.name()
			assert.equal(name,'DApp Token')
		})
	})
	describe('EthSwap Deployement', async() => {
		it('contract has a name',async() =>{
			let ethSwap = await EthSwap.new()
			const name = await ethSwap.name()
			assert.equal(name,'EthSwap Instant Exchange')
		})
	})
})