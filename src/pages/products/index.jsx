import {FilterForm} from '../../components/filterForm'
import {useState} from 'react'
import { FILTER_ID } from '../../components/filterForm/data'

const defaultFilter = Object.values(FILTER_ID).reduce((acc,filterId)=>{
	acc[filterId]=[]
	return acc
},{})

export const ProductsPage = () => {
	const [filter, setFilter] = useState(defaultFilter)
	const handleFilterChange = (filterType, id, isChecked) => {
		if (isChecked) {
			const itemIndex = filter[filterType].indexOf(id)
			setFilter({
				...filter,
				[filterType]: filter[filterType].filter((item)=>id !== item),
			})
		} else {
			setFilter({
				...filter,
				[filterType]: [...filter[filterType], id],
			})
		}
	}

	return (
		<>
			<FilterForm filter={filter} handleFilterChange={handleFilterChange}/>
		</>
	)
}
