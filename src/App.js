import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Chart,Table,DropdownCountry,TaypingHeader } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image1.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image}/>
        <TaypingHeader></TaypingHeader>
        <Table data={data} />
        <DropdownCountry handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
      
    );
  }
}

export default App;