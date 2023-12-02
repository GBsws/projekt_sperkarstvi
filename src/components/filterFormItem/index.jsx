import {Checkbox} from '../checked'
export const FilterFormItem = ({items, handleFilterChange,filter,filterId}) => {
	console.log('co jsou items', items)

	return items.map((item) => {
		return <Checkbox filterId={filterId} key={item.id} handleFilterChange={handleFilterChange} filter={filter} {...item} />
	})
}
