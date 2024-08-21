import {
  generateMnemonic as generateMnemonic_bip39,
  mnemonicToSeed,
} from "web-bip39";
import wordlist from "web-bip39/wordlists/english";
import elliptic from "elliptic";

const MNEMONIC_STRENGTH = 192;
const CURVE = "curve25519"

export async function generateKeyPair(mnemonic) {
  const seed = (await mnemonicToSeed(mnemonic)).toString("hex");

  const ec = new elliptic.ec(CURVE);
  const keyPair = ec.genKeyPair({
    entropy: seed.slice(0, 32),
  });

  return {
    publicKey: keyPair.getPublic("hex"),
    privateKey: keyPair.getPrivate("hex"),
  }
}

export function generateMnemonic() {
  return generateMnemonic_bip39(wordlist, MNEMONIC_STRENGTH);
}
