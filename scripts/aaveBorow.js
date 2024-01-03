const { ethers } = require('hardhat')
const { getWeth } = require('./getWeth')

async function main() {
    // the protocol treats everything
    await getWeth()
}

async function getLendingPool(account) {
    const lendingPoolAddressprovider = await ethers.getContractAt("ILendingPool", "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413", account)
    const lendingpooladdress = await lendingPoolAddressprovider.getLendingPool()
    const lendingpool = await ethers.getContractAt(" ")
}
main().then(() => process.exit(0)).catch((error) => {
    console.error(error)
    process.exit(1)
})