import qr from 'qrcode-terminal';

async function handleQRCode(err, result){
    if (err){
        console.log('Error on application');
        return;
    };

    const isSmall = result.type == 2;
    
    qr.generate(result.link,{small:isSmall}, (qrcode)=>{
        console.log("QRcode gerado com sucesso: \n");
        console.log(qrcode);
    });
};

export default handleQRCode;