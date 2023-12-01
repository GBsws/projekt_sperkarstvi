import {FilterForm} from '../../components/filterForm'
import {useQuery} from '../../hooks'

export const ProductsPage = () => {
	const query = useQuery()
	return (
		<>
			<FilterForm />
			<div>type: {query.get('type')}</div>
		</>
	)
}
