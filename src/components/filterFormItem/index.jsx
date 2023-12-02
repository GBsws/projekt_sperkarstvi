import './style.css'
import {Checkbox} from '../checked'
export const FilterFormItem = ({items, handleFilterChange,filter,filterId}) => {
	return items.map((item) => {
		return <Checkbox filterId={filterId} key={item.id} handleFilterChange={handleFilterChange} filter={filter} {...item} />
	})
}
