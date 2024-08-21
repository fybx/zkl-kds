import { generateKeyPair, generateMnemonic } from "./key-derivation.service.js";

(async () => {
  const mnemonic = await generateMnemonic();
  console.log(mnemonic);

  const { publicKey, privateKey } = await generateKeyPair(mnemonic);
  console.log(publicKey, privateKey);

  console.log("done");
})();
