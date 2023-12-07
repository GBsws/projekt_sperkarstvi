import {FilterForm} from '../../components/filterForm'
import {useState, useCallback, useMemo} from 'react'
import {FILTER_ID} from '../../components/filterForm/data'
import {useGetData} from '../../api/index'
import {RenderData} from '../../components/renderData'
import './style.css'
import {useLocation} from 'react-router-dom'

const getDefaultFilter = (queryParams) => {
	return Object.values(FILTER_ID).reduce((acc, filterId) => {
		acc[filterId] = queryParams.getAll(filterId) || []
		return acc
	}, {})
}

export const ProductsPage = () => {
	const location = useLocation()
	const query = new URLSearchParams(location.search)
	const defaultFilter = getDefaultFilter(query)
	const [filter, setFilter] = useState(defaultFilter)
	const {areDataLoading, data} = useGetData()
	const shouldFilterData = useMemo(() => Object.values(filter).some((filterType) => filterType.length > 0), [filter])

	const handleFilterChange = useCallback(
		(filterType, id, isChecked) => {
			if (isChecked) {
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
		},
		[filter, setFilter],
	)

	const filteredData = useMemo(() => {
		return shouldFilterData && data
			? data.filter((product) => {
					const {
						kamen = [],
						kolekce = [],
						lokalita = [],
						material = [],
						motive = [],
						opracovani = [],
						technika = [],
						typ = [],
					} = product.fields
					const hasStone =
						filter[FILTER_ID.STONE].length > 0
							? kamen.some((item) => filter[FILTER_ID.STONE].includes(item))
							: true
					const hasCollection =
						filter[FILTER_ID.COLLECTION].length > 0
							? kolekce.some((item) => filter[FILTER_ID.COLLECTION].includes(item))
							: true
					const hasType =
						filter[FILTER_ID.TYPE].length > 0
							? typ.some((item) => filter[FILTER_ID.TYPE].includes(item))
							: true
					const hasLocation =
						filter[FILTER_ID.LOCATION].length > 0
							? lokalita.some((item) => filter[FILTER_ID.LOCATION].includes(item))
							: true
					const hasMaterial =
						filter[FILTER_ID.MATERIALS].length > 0
							? material.some((item) => filter[FILTER_ID.MATERIALS].includes(item))
							: true
					const hasMotive =
						filter[FILTER_ID.MOTIVE].length > 0
							? motive.some((item) => filter[FILTER_ID.MOTIVE].includes(item))
							: true
					const hasTreatment =
						filter[FILTER_ID.TREATMENT].length > 0
							? opracovani.some((item) => filter[FILTER_ID.TREATMENT].includes(item))
							: true
					const hasMethod =
						filter[FILTER_ID.METHOD].length > 0
							? technika.some((item) => [FILTER_ID.METHOD].includes(item))
							: true

					return (
						hasCollection &&
						hasLocation &&
						hasMaterial &&
						hasMethod &&
						hasMotive &&
						hasStone &&
						hasTreatment &&
						hasType
					)
			  })
			: data
	}, [data, filter])

	if (areDataLoading) {
		return <div>Načítají se data, chvíli počkejte...</div>
	}

	return (
		<>
			<div className='product-page__wrapper'>
				<div className='product-page__form'>
					<FilterForm filter={filter} handleFilterChange={handleFilterChange} />
				</div>
				<div className='product-page__links'>
					<RenderData data={filteredData} />
				</div>
			</div>
		</>
	)
}

