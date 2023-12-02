import {FilterForm} from '../../components/filterForm'
import {useState} from 'react'
import { FILTER_ID } from '../../components/filterForm/data'

const defaultFilter = Object.values(FILTER_ID).reduce((acc,filterId)=>{
	acc[filterId]=[]
	return acc
},{})

export const ProductsPage = () => {
	console.log('df',defaultFilter)
	const [filter, setFilter] = useState(defaultFilter)
	const handleFilterChange = (filter, id, isChecked) => {
		if (isChecked) {
			const itemIndex = filter[filter].indexOf(id)
			setFilter({
				...filter,
				[filter]: filter[filter].filter((item)=>id !== item),
			})
		} else {
			setFilter({
				...filter,
				[filter]: [...filter[filter], id],
			})
		}
	}

	return (
		<>
			<FilterForm filter={filter} handleFilterChange={handleFilterChange}/>
		</>
	)
}
