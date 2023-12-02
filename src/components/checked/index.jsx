import {useState} from 'react'
import { HEADER_FILTERS } from '../filterForm/data'
export const Checkbox = ({id,label,filter,filterId,handleFilterChange}) => {
    console.log('co je label',label)
    console.log('co je id',id)

    const isChecked = filter[filterId].indexOf(id) > 0

	const handleChange = () => {
        handleFilterChange(filterId, id, isChecked)
	}
	return (
		<label htmlFor={id} >
			<input id={id} checked={isChecked} className='field-input' type='checkbox' onChange={handleChange}  />
			{label} 
		</label>
	)
}
