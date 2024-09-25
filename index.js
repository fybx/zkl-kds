import { generateKeypair } from "./key-derivation.js";

(async () => {
  console.log("start");

  const mnemonic =
    "digital radio analyst fine casino have mass blood potato hat web capital prefer debate fee differ spray cloud";

  const { publicKey, privateKey } = await generateKeypair(mnemonic);
  console.log(publicKey.keyType, privateKey.keyType);
  console.log(publicKey.asHexString, privateKey.asHexString);
  console.log(publicKey.asByteArray, privateKey.asByteArray);

  console.log("done");
})();
