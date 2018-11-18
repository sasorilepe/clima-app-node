const axios = require('axios');

const getClima = async(lat, long) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ long }&units=metric&appid=8a72821aa353fa721e9709a1d56a1bfa`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}