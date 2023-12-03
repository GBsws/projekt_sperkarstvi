import {FilterForm} from '../../components/filterForm'
import {useState} from 'react'
import { FILTER_ID } from '../../components/filterForm/data'
import { useAirTableQuery } from '../../api'

const defaultFilter = Object.values(FILTER_ID).reduce((acc,filterId)=>{
	acc[filterId]=[]
	return acc
},{})

export const ProductsPage = () => {
	const [filter, setFilter] = useState(defaultFilter)
	const {data, isLoading} = useAirTableQuery('all')
	console.log('co je airtablequery',data,isLoading)
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
