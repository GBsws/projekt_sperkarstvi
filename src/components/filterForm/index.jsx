import { FilterFormItem } from "../filterFormItem"


export const FilterForm =()=>{
    const headers=[
        {
            id:1,
            head:"Typ",
        },
        {
            id:2,
            head:"Motiv",
        },
        {
            id:3,
            head:"Kameny",
        },
        {
            id:4,
            head:"Kolekce",
        },
        {
            id:5,
            head:"Materiál",
        },
        {
            id:6,
            head:"Technika",
        },
        {
            id:7,
            head:"Opracování",
        },
        {
            id:8,
            head:"Typ",
        },  
    ]
    return(  
       headers.map((header)=>
        return <li>{header.head}</li>)
        <aside>
        <h4>Nadpis-typ,motiv,kameny,kolekce,material,technika,opracovani,lokalita ▶ ▼</h4>
        <FilterFormItem/>
        <button>Vymazat výběr</button>
        <button>potvrdit výběr</button>
        </aside>
    )
}

// {Object.values(PRODUCT_TYPE).map((type) => {
//         return <ProductTile key={type} type={type} />
//       })}