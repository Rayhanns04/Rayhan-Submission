const CountryData = function () {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const dates = Object.keys(data);

            dates.forEach(date => {
                const DATA = data[date];
                const flag = DATA.flag;

            })
        })
        .catch(err => {
            console.log(`${err} Ada yang salah`);
        })
};
CountryData();

const CovidSource = () => {
    fetch('https://disease.sh/v2/countries')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const dates = Object.keys(data);

            dates.forEach(date => {
                const DATA = data[date];
                const country = DATA.country;
                const todayCases = DATA.todayCases;
                const todayDeaths = DATA.todayDeaths;
                const positif = DATA.cases;
                const sembuh = DATA.recovered;
                const meningggal = DATA.deaths;
                const dalamPerawatan = DATA.active;

            })
        })
        .catch(err => {
            console.log(`${err} Ada yang salah`);
        })
}
CovidSource();