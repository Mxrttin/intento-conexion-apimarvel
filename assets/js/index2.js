import { getDate } from "./getDate.js";

const publicKey = "49c589deefc99def900793135010c69a"
const privateKey="c00be93aae143851b72d305204f67adf26d8bd3d"



const generateHash = (timeStamp,privateKey,publicKey) =>{

    const hash = CryptoJS.MDS(timeStamp+privateKey+publicKey).toString()
    return hash;
}


const getMavelData = (offset) =>{
    const timeStamp = new Date().getTime().toString;
    const hash = generateHash(timeStamp,privateKey,publicKey);
    const limit = 20;
    const apiurl = `https://gateaway.marvel.com/v1/public/characters=${timeStamp}&apikey${publicKey}`

}

fetch(apiurl)
    .then((response)=>{
        if (!response.ok){
            

        }
    })