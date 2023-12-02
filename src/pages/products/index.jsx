import {FilterForm} from '../../components/filterForm'
import {useState} from 'react'

export const ProductsPage = () => {
	const [filter, setFilter] = useState({})
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
