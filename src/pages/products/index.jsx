import {FilterForm} from '../../components/filterForm'
import {useState} from 'react'
import {FILTER_ID} from '../../components/filterForm/data'
import {useGetData} from '../../api/index'
import {RenderData} from '../../components/renderData'
import './style.css'

const defaultFilter = Object.values(FILTER_ID).reduce((acc, filterId) => {
	acc[filterId] = []
	return acc
}, {})

export const ProductsPage = () => {
	const [filter, setFilter] = useState(defaultFilter)
	const {areDataLoading, data} = useGetData()

	const handleFilterChange = (filterType, id, isChecked) => {
		if (isChecked) {
			const itemIndex = filter[filterType].indexOf(id)
			setFilter({
				...filter,
				[filterType]: filter[filterType].filter((item) => id !== item),
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
			<div className='product-page__wrapper'>
				<div className='product-page__form'>
					<FilterForm filter={filter} handleFilterChange={handleFilterChange} />
				</div>
				<div className='product-page__links'>
					<RenderData key={data} data={data} />
				</div>
			</div>
		</>
	)
}
