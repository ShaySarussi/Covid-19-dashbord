import axios from 'axios';


const url = 'http://coronavirus-19-api.herokuapp.com';

export const fetchData = async (country = 'Israel') => {
  let changeableUrl = url;

  
  changeableUrl = `${url}/countries/${country}`;
  

  try {
    const { data: { cases, recovered, deaths,active,critical,casesPerOneMillion,deathsPerOneMillion,totalTests,testsPerOneMillion} } = await axios.get(changeableUrl);
    return { cases, recovered, deaths,active,critical,casesPerOneMillion,deathsPerOneMillion,totalTests,testsPerOneMillion };
  } catch (error) {
    return error;
  }
};

