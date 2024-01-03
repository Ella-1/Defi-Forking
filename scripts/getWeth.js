const { getNamedAccounts, ethers } = require("hardhat")


// const AMOUNT = await ethers.parseEther("0.02")
async function getWeth() {

    const AMOUNT = ethers.parseEther("0.02")
    const { deployer } = await getNamedAccounts();
    // call the deposit functon to intract we need the contrct address and abi
    // 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    const iWeth = ethers.getContractAt("IWeth", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", deployer)
    const tx = await iWeth.deposite({ value: AMOUNT })
    await tx.wait(1);
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = { getWeth }