import prompt from "prompt";
import handleQRCode from "./handle.js";
import promptQRCode from "../../prompts/prompt-qrcode.js";


async function createQRcode() {
    prompt.get(promptQRCode, handleQRCode)

    prompt.start();
};

export default createQRcode;