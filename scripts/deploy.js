const main = async () => {

  const DevToken = await hre.ethers.getContractFactory("VPGToken");
  const devToken = await DevToken.deploy();
  await devToken.deployed();


  console.log("Contract deployed to: ", devToken.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
