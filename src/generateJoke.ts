import axios from 'axios';
function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://icanhazdadjoke.com/', config).then((response) => {
        console.log('response', response);
        const htmlElement = document.getElementById('joke');
        if(htmlElement){
            htmlElement.innerHTML = response?.data?.joke;
        }
    })
}

export default generateJoke;