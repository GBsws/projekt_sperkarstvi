//import {data} from '../../api/data.js'
export const ProductDetailPage = () => {
	return (
		<div className='box_detail'>
			<div className='boxik'>
				<div class='box_foto'>
					<div class='box_foto_hlavni'>FOTKA</div>
					<div class='box_foto_cislo'>cislo fotky</div>
				</div>
				<div class='box_fotos_male'>
					<div class='box_foto_male'>FOTKA</div>
					<div class='box_foto_male'>FOTKA</div>
					<div class='box_foto_male'>FOTKA</div>
				</div>
			</div>

			<div className='boxik'>
				<div class='box_sloupce'>
					<div class='box_sloupce_1'>
						Název:<br></br>Kolekce:<br></br>Typ:<br></br>Materiál:
					</div>
					<div class='box_sloupce_2'>
						Pozdrav z nebe<br></br>Ochránci a andělé<br></br>přívěšek<br></br>chirurgická ocel
					</div>
					<div class='box_sloupce_3'>
						Technika:<br></br>Opracování:<br></br>Lokalita:<br></br>Motiv:
					</div>
					<div class='box_sloupce_4'>
						wire-wrapping<br></br>surové<br></br>české<br></br>zoomorfní
					</div>
				</div>
				<div class='box_radky'>
					<div class='box_radky_1'>
						Kameny:<br></br>Poznámka:
					</div>
					<div class='box_radky_2'>
						opál vltavín křemen<br></br>blabla...
					</div>
				</div>
			</div>
		</div>
	)
}
