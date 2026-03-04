async function handle(params) {
    let characters = [];
    let password = "";

    const passwordLenght = process.env.PASSWORD_LENGHT;
    
    if(process.env.UPPERCASE_LETTERS){
        characters.push(..."QWERTYUIOPASDFGHJKLZXCVBNM")
    }
    if(process.env.LOWERCASE_LETTERS){
        characters.push(..."qwertyuiopasdfghjklzxcvbnm")
    }
    if(process.env.NUMBER){
        characters.push(..."0123456789")
    }
    if(process.env.SPECIAL_CHARACTERS){
        characters.push(..."@#$%&*()!-_")
    }

    for(let i=0; i <= passwordLenght; i++){
        const index = Math.floor(Math.random() * characters.length)

        password += characters[index];
    }

    return password;
}

export default handle;