const promptQRCode = [
    {
        name: "link",
        description: "Digite o link para gerar o QRcode"
    },
    {
        name: 'type',
        description: "Escolha o tipo de QRcode: (1 - Normal ou (2 - Terminal",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true,
    }
];

export default promptQRCode;