import React from 'react'
import { Header } from 'semantic-ui-react'
import CountUp from 'react-countup';
import styles from './Table.module.css'




const TableDis= ({ data: { cases, recovered, deaths,active,critical,casesPerOneMillion,deathsPerOneMillion,totalTests,testsPerOneMillion} }) => {

    if (!cases) {
        return (
        <div className='ui active inline loader'></div>
        );
      }


    return (
  
   <div className={styles.table}>
      <table>
        <thead>
            <tr>
                <th scope="col" className={styles.critical}>מספר החולים קריטי</th>
                <th scope="col" className={styles.active}>מספר החולים</th>
                <th scope="col" className={styles.recovered}>מספר המבריאים</th>
                <th scope="col" className={styles.cases}>מספר הנדבקים</th>
                <th scope="col" className={styles.deaths}>מספר המתים</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td data-label="מספר החולים קריטי" className={styles.criticalRes}>
                <Header as='h3' textAlign='center'>
                    <CountUp start={0} end={critical} duration={1.6} separator="," />
                </Header>
            </td>
            <td data-label="מספר החולים" className={styles.activeRes}>
                 <Header as='h3' textAlign='center' >
                    <CountUp start={0} end={active} duration={1.6} separator="," />
                </Header>
            </td>
            <td data-label="מספר המבריאים" className={styles.recoveredRes}>
                <Header as='h3' textAlign='center'>
                    <CountUp start={0} end={recovered} duration={1.6} separator="," />
                </Header>
            </td>
            <td data-label="מספר הנדבקים" className={styles.casesRes}>
                <Header as='h3' textAlign='center'>
                    <CountUp start={0} end={cases} duration={1.6} separator="," />
                </Header>
            </td>
            <td data-label="מספר המתים" className={styles.deathsRes}> 
                <Header as='h3' textAlign='center' >
                    <CountUp start={0} end={deaths} duration={1.6} separator="," />
                </Header>
            </td>
            </tr>
        </tbody>
       </table>
       <table>
        <thead>
            <tr>
            <th scope="col" className={styles.casesPerOneMillion}>מספר נדבקים ביחס למיליון</th>
            <th scope="col" className={styles.deathsPerOneMillion}>מספר המתים ביחס למיליון</th>
            <th scope="col" className={styles.totalTests}>מספר בדיקות</th>
            <th scope="col" className={styles.testsPerOneMillion}>מספר בדיקות יחסית למיליון</th>
            
            </tr>
        </thead>
        <tbody>
            <tr>
            <td data-label="מספר נדבקים ביחס למיליון" className={styles.casesPerOneMillionRes}> 
                <Header as='h3' textAlign='center'>
                    <CountUp start={0} end={casesPerOneMillion} duration={1.6} separator="," />
                </Header>
            </td>
            <td data-label="מספר המתים ביחס למיליון" className={styles.deathsPerOneMillionRes}>
                <Header as='h3' textAlign='center' >
                    <CountUp start={0} end={deathsPerOneMillion} duration={1.6} separator="," />
                </Header>
            </td>
            <td data-label="מספר בדיקות" className={styles.totalTestsRes}>
                <Header as='h3' textAlign='center'>
                    <CountUp start={0} end={totalTests} duration={1.6} separator="," />
                </Header>
            </td>
            <td data-label="מספר בדיקות יחסית למיליון" className={styles.testsPerOneMillionRes}>
                <Header as='h3' textAlign='center'>
                    <CountUp start={0} end={testsPerOneMillion} duration={1.6} separator="," />
                </Header>
            </td>
    
            </tr>
        </tbody>
       </table>
    </div>
    );

}


export default TableDis