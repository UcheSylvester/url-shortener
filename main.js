// console.log('working')

const endPoint = 'https://www.jsonstore.io/518caa2abc1f8994b074f6e2e1d559122e8b1ee1e24b21a041fbf57a91aa629d';

// function getRandom() {
//     const randomString = Math.random().toString(32).substring(2, 5) + 
//         Math.random().toString(32).substring(2, 5); 
//     return randomString;
// }

function getRandom() {
    let text = "";
    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < 5; i++) {

        text += possibleText.charAt(Math.random)
        
    }
}