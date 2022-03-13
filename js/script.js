//numbdr game
const printResults = () => {
    let userText = document.getElementById('userInput').Value;
    let totalN = 0;

    for (let i = 0; i < userText.lenght; i++) {
         if (userText[i].toLowerCase() === 'n') {
             totalN++;
         }

    }
    document.getElementById('result').innerHTML = `Total n's = ${totalN}`;
};