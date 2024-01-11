async function main() {
  try {
    const votingApp = await hre.ethers.getContractFactory("Poll");
    console.log("Deploying Contract...");
    const app = await votingApp.deploy("Is Blockchain a Game Changer ?", 20000);
    await app.waitForDeployment(); // Wait for deployment confirmation

    console.log("Contract deployed to address:", app.target);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
