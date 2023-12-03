import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const useServiceQuery = (queryKey, url, token) => {
	return useQuery({
		queryKey: [queryKey],
		queryFn: async () => {
			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			return response.data
		},
	})
}

export const useAirTableQuery = (queryKey) => {
	const url = `https://api.airtable.com/v0/${import.meta.env["VITE_AIR_TABLE_BASE_ID"]}/tblyol84ucax8tUq6`
	const token = import.meta.env["VITE_AITRABLE_TOKEN"]
	return useServiceQuery(queryKey, url, token)
}

// const SomeComponent = () => {
// 	const {data, isLoading} = useAirTableQuery('all')

// 	if (isLoading) return <div>loading...</div>

// 	return (
// 		<div>{data.map(...)}</div>
// 	)
// }