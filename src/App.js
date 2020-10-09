import React,{useState,useEffect} from 'react';
import './App.css';
import {FormControl , MenuItem , Select , Card , CardContent } from '@material-ui/core'
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import {sortData} from './util';
import LineGraph from './LineGraph';
import 'leaflet/dist/leaflet.css'
import {prettyPrintStat} from './util';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCounry] = useState('worldwide');
  const [countryInfo,setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([]);
  const[mapCenter,setMapCenter] = useState({lat: 28.7041,lng: 77.1025});
  const[mapZoom,setZoom] = useState(3);
  const[mapCountries,setMapCountries] = useState([]);
  const[casesType,setCasesType] = useState('cases');

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://disease.sh/v3/covid-19/all')
      .then(data => data.json())
      .then(data => {
        setCountryInfo(data);
      })
    }
    fetchData();
  },[]);

  useEffect(() => {
    const getCountriesData = async () => fetch('https://disease.sh/v3/covid-19/countries')
    .then((response) => response.json())
    .then((data) => {
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2
      }));
      const sortedData = sortData(data); 
      setTableData(sortedData);
      setMapCountries(data);
      setCountries(countries);
    })
    getCountriesData();
  },[]);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
    .then(data => data.json())
    .then(data => {
      setCounry(countryCode);
      setCountryInfo(data);

      setMapCenter({'lat': data.countryInfo.lat,'lng': data.countryInfo.long});
      setZoom(5);
    })
  }

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="worldwide">Worldwide</MenuItem> 
              { countries.map( (country) =>  <MenuItem key={Math.random()} value={country.value}>{country.name}</MenuItem>  ) }
            </Select>
          </FormControl>
        </div>
        <div className="app__infoboxes">
          <InfoBox isRed={true} active={casesType === "cases"} onClick={(e) => setCasesType('cases')} title="Corona cases" cases={prettyPrintStat(countryInfo.todayCases)} total={countryInfo.cases}></InfoBox>
          <InfoBox isRed={false} active={casesType === "recovered"}  onClick={(e) => setCasesType('recovered')} title="Recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={countryInfo.recovered}></InfoBox>
          <InfoBox isRed={true} active={casesType === "deaths"}  onClick={(e) => setCasesType('deaths')} title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={countryInfo.deaths}></InfoBox>
        </div>
        <Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases By Country</h3>
          <Table countries={tableData}></Table>
          <h3>World wide new {casesType}</h3>
          <LineGraph casesType={casesType}></LineGraph>
        </CardContent>
        
      </Card>
    </div>
  );
}

export default App;
