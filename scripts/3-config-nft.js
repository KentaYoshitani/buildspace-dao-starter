import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x2bC361913530d645F9837e39B53ca2473f1341a1",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Leaf Village Headband",
                description: "This NFT will give you access to NarutoDAO!",
                image: readFileSync("scripts/assets/headband.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()
