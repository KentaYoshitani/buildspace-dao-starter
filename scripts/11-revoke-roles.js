import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0x23287A215ECE0106C51b28286c9f7CeE5966D20c",
);

(async () => {
    try {
        // Log the current roles.
        console.log(
            "👀 Roles that exist right now:",
            await tokenModule.getAllRoleMembers()
        );

        // Revoke all the superpowers your wallet had over the ERC-20 contract.
        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
        console.log(
            "🎉 Roles after revoking ourselves",
            await tokenModule.getAllRoleMembers()
        );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

    } catch (error) {
        console.error("Failed to revoke ourselves from the DAO treasury", error);
    }
})();
