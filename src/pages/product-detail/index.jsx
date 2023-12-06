import {useParams} from 'react-router-dom'
import './style.css'
import { useGetData } from '../../api'

export const ProductDetailPage = () => {
	const {productId} = useParams
	const {areDataLoading,data} = useGetData()

	if (areDataLoading){
		return <div>Načítám data...</div>
	}
	const productData = data.find((product)=> product.fields.cislo_fotky ===productId)
	const {nazev,typ,material,technika,opracovani,lokalita,kamen,motiv,kolekce} = productData.fields

	return (
	  <div className='box_detail'>
		<div className="x">
		  <div className="box p">
			<div className="box q">FOTKA</div>
			<div className="box r">cislo fotky</div>
		  </div>
		  <div className="box s">
			<div className="box t">Fotka</div>
			<div className="box k">Fotka</div>
			<div className="box u">Fotka</div>
		  </div>
		</div>
		<div className="w">
		  <div className="box a">
			<div className="box e">Název:<br></br>Kolekce:<br></br>Typ:<br></br>Materiál:</div>
			<div className="box f">{nazev}Pozdrav z nebe<br></br>{kolekce}Ochránci a andělé<br></br>přívěšek{typ}<br></br>{material}chirurgická ocel</div>
			<div className="box g">Technika:<br></br>Opracování:<br></br>Lokalita:<br></br>Motiv:</div>
			<div className="box h">wire-wrapping{technika}<br></br>surové{opracovani}<br></br>české{lokalita}<br></br>zoomorfní{motiv}</div>
		  </div>
		  <div className="box c">
			<div className="box b">Kameny:<br></br>Poznámka</div>
			<div className="box d">opál vltavín křemen{kamen}<br></br>...</div>
		  </div>
		</div>
	  </div>
	)
  }
