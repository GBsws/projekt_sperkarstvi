import './style.css'
import {FilterFormItem} from '../filterFormItem'
import {CollapseBox} from '../collapseBox'
import {HEADER_FILTERS} from './data'

export const FilterForm = ({handleFilterChange, filter}) => {
	return (
		<aside>
			<form>
				{HEADER_FILTERS.map((header) => {
					return (
						<CollapseBox key={header.label} title={header.label}>
							<FilterFormItem
								filterId={header.id}
								filter={filter}
								handleFilterChange={handleFilterChange}
								key={header.id}
								items={header.items}
							/>
						</CollapseBox>
					)
				})}
			</form>
		</aside>
	)
}

