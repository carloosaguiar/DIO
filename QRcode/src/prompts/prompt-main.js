const mainPrompt = [
    {
        name: "select",
        description: "Escolha a Ferramenta: (1 - QRCode ou (2 - PASSWORD",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        require: true,
    },
];

export default mainPrompt;