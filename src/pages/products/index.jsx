import {FilterForm} from '../../components/filterForm'
import {FilterFormItem} from '../../components/filterFormItem'
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
