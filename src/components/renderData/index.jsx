import {Link} from 'react-router-dom'


export const RenderData = ({id,cislo_fotky}) => {
	console.log('seznam idcek', id)
	return (
		<Link to={`/vyrobky?${id}`}>
            {(data.map
                (return <img src={cislo_fotky} alt=''/>))}
			
		</Link>
	)
}
