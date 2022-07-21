const BASE_URL ='https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');


const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
    
};

const loadImg = async() => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg;

// dando error ET http://127.0.0.1:5500/JavaScript/Assincronicidade/fetch/assets/js/scripts.js net::ERR_ABORTED 404 (Not Found)