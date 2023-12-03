import {useQuery} from '@tanstack/react-query'
import axios from 'axios' //uspornejsi nez fetch

const useServiceQuery = (queryKey, url, token, enabled = false) => {
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
		enabled: enabled,
	})
}

export const useAirTableQuery = (queryKey, enabled, offset) => {
	const url = `https://api.airtable.com/v0/${import.meta.env['VITE_AIR_TABLE_BASE_ID']}/tblyol84ucax8tUq6${
		offset ? `?offset=${offset}` : ''
	}`
	const token = import.meta.env['VITE_AITRABLE_TOKEN']
	return useServiceQuery(queryKey, url, token, enabled)
}

export const useGetData = () => {
	const {data: firstPageData, isLoading: isFirstPageLoading} = useAirTableQuery('100', true)
	const {data: secondPageData, isLoading: isSecondPageLoading} = useAirTableQuery(
		'200',
		!isFirstPageLoading && Boolean(firstPageData?.offset),
		firstPageData?.offset,
	)
	const {data: thirdPageData, isLoading: isThirdPageLoading} = useAirTableQuery(
		'300',
		!isSecondPageLoading && Boolean(secondPageData?.offset),
		firstPageData?.offset,
	)
	const {data: fourthPageData, isLoading: isFourthPageLoading} = useAirTableQuery(
		'400',
		!isThirdPageLoading && Boolean(thirdPageData?.offset),
		firstPageData?.offset,
	)
	const {data: fifthPhageData, isLoading: isFifthPageLoading} = useAirTableQuery(
		'500',

		!isFourthPageLoading && Boolean(fourthPageData?.offset),
		firstPageData?.offset,
	)
	const {data: sixthPageData, isLoading: isSixthPageLoading} = useAirTableQuery(
		'600',
		!isFifthPageLoading && Boolean(fifthPhageData?.offset),
		firstPageData?.offset,
	)
	const {data: seventhPageData, isLoading: isSeventhPageLoading} = useAirTableQuery(
		'700',
		!isSixthPageLoading && Boolean(sixthPageData?.offset),
		firstPageData?.offset,
	)
	const {data: eighthPageData, isLoading: isEighthPageLoading} = useAirTableQuery(
		'800',
		!isSeventhPageLoading && Boolean(seventhPageData?.offset),
		firstPageData?.offset,
	)
	const {data: ninthPageData, isLoading: isNinthPageLoading} = useAirTableQuery(
		'900',
		!isEighthPageLoading && Boolean(eighthPageData?.offset),
		firstPageData?.offset,
	)
	const {data: tenthPageData, isLoading: isTenthPageLoading} = useAirTableQuery(
		'1000',
		!isNinthPageLoading && Boolean(ninthPageData?.offset),
		firstPageData?.offset,
	)

	const areDataLoading =
		isFirstPageLoading ||
		isSecondPageLoading ||
		isThirdPageLoading ||
		isFourthPageLoading ||
		isFifthPageLoading ||
		isSixthPageLoading ||
		isSeventhPageLoading ||
		isEighthPageLoading ||
		isNinthPageLoading ||
		isTenthPageLoading

	const data = areDataLoading
		? []
		: [
				...firstPageData?.records,
				...secondPageData?.records,
				...thirdPageData?.records,
				...fourthPageData?.records,
				...fifthPhageData?.records,
				...sixthPageData?.records,
				...seventhPageData?.records,
				...eighthPageData?.records,
				...ninthPageData?.records,
				...tenthPageData?.records,
		  ]

	return {areDataLoading, data}
}









