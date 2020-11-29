import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import styles from './DropdownCountry.module.css';
import countryOptions from '../../utilities/utilitiesCountry'



const DropdownExampleSearchSelection = ({ handleCountryChange }) => {
  
return (
   <div className={styles.dropdown}>
       <Dropdown
        placeholder='Select Country'
        defaultValue='Israel'
        direction='right'
        fluid
        search
        selection
        options={countryOptions}
        onChange={(e,data) => {handleCountryChange(data.value)}}
      />
   </div>
 
)
   
}

export default DropdownExampleSearchSelection