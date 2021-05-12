const { ethers } = require('hardhat')

const main = async () => {
    const signers = await ethers.getSigners()
    const signer = signers[0]

    let receipt

    // Deploy libraries
    const PoseidonT3ContractFactory = await ethers.getContractFactory('PoseidonT3', signer)
	const PoseidonT3Contract = await PoseidonT3ContractFactory.deploy()
    receipt = await PoseidonT3Contract.deployTransaction.wait()
    console.log('Gas used to deploy PoseidonT3:', receipt.gasUsed.toString())

    const PoseidonT6ContractFactory = await ethers.getContractFactory('PoseidonT6', signer)
	const PoseidonT6Contract = await PoseidonT6ContractFactory.deploy()
    const PoseidonT6Receipt = await PoseidonT6Contract.deployTransaction.wait()
    console.log('Gas used to deploy PoseidonT6:', receipt.gasUsed.toString())

    // Deploy PoseidonBenchmarks
	const PoseidonBenchmarksContractFactory = await ethers.getContractFactory(
		'PoseidonBenchmarks',
		{
			signer,
			libraries: {
				PoseidonT3: PoseidonT3Contract.address,
				PoseidonT6: PoseidonT6Contract.address
			},
		},
	)
    const PoseidonBenchmarksContract = await PoseidonBenchmarksContractFactory.deploy()
    receipt = await PoseidonBenchmarksContract.deployTransaction.wait()

    const hash2tx = await PoseidonBenchmarksContract.hash2([1, 2])
    receipt = await hash2tx.wait()
    console.log('Gas used by hash2():', receipt.gasUsed.toString())

    const hash5tx = await PoseidonBenchmarksContract.hash5([1, 2, 3, 4, 5])
    receipt = await hash5tx.wait()
    console.log('Gas used by hash5():', receipt.gasUsed.toString())
}

if (require.main === module) {
    main()
}
