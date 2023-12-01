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
            head:"Material",
        },
        {
            id:6,
            head:"Technika",
        },
        {
            id:7,
            head:"Opracovani",
        },
        {
            id:8,
            head:"Lokalita",
        },  
    ]
    return(  
    //    
        <aside>
            <form>
                {/* {headers.map((header)=> return <h4>{header.head}</h4>)}
        <FilterFormItem/> */}
        <button>Vymazat výběr</button>
        <button>potvrdit výběr</button>
        </form>
        </aside>
    )
}

// {Object.values(PRODUCT_TYPE).map((type) => {
//         return <ProductTile key={type} type={type} />
//       })}

const HEADER_FILTERS=[
    {
        id: HEADER.TYPE,
        label: 'Typ',
    },
    {
        id: HEADER.MOTIVE,
        label:"Motiv",
    },
    {
        id: HEADER.STONES,
        label:"Kameny",
    },
    {
        id: HEADER.COLLECTIONS,
        label:"Kolekce",
    },
    {
        id: HEADER.MATERIAL,
        label:"Material",
    },
    {
        id: HEADER.METHOD,
        label:"Technika",
    },
    {
        id: HEADER.TREATMENT,
        label:"Opracovani",
    },
    {
        id: HEADER.LOCATION,
        label:"Lokalita",
    },  
]

const MATERIAL_FILTERS = [
    {
        id: MATERIALS.MOSAZ,
        label: 'Mosaz',
    },
    {
        id: MATERIALS.COPPER,
        label: 'Med',
    },
    {
        id: MATERIALS.KERAMIKA,
        label: 'Keramika',
    },
    {
        id: MATERIALS.OBECNY_KOV,
        label: 'Obecny kov',
    },
    {
        id: MATERIALS.DRAHE_KAMENY,
        label: 'Drahe kameny',
    },
    {
        id: MATERIALS.SKLENENE,
        label: 'Sklenene',
    },
    {
        id: MATERIALS.ZLATO,
        label: 'Zlato',
    },
    {
        id: MATERIALS.BRONZ,
        label: 'Bronz',
    },
    {
        id: MATERIALS.RECYKLOVANE,
        label: 'Recyklovane',
    },
    {
        id: MATERIALS.STRIBRO,
        label: 'Stribro',
    },
    {
        id: MATERIALS.CHIRURGICKA_OCEL,
        label: 'Chirurgicka ocel',
    },
    {
        id: MATERIALS.OBLAZKY,
        label: 'Oblazky',
    },
    {
        id: MATERIALS.PRIRODNINY,
        label: 'Prirodniny',
    },
]

const TYPE_FILTERS = [
    {
        id: TYPE.BROZ,
        label: 'Broz',
    },
    {
        id: TYPE.NAHRDELNIK,
        label: 'Nahrdelnik',
    },
    {
        id: TYPE.NARAMEK,
        label: 'Naramek',
    },
    {
        id: TYPE.NAUSNICE,
        label: 'Nausnice',
    },
    {
        id: TYPE.PRIVESEK,
        label: 'Privesek',
    },
    {
        id: TYPE.PRSTEN,
        label: 'Prsten',
    },
    {
        id: TYPE.SPONA_NA_ODEV,
        label: 'Spona na odev',
    },
    {
        id: TYPE.SOUPRAVA,
        label: 'Souprava',
    },
    {
        id: TYPE.OZDOBA_DO_VLASU,
        label: 'Ozdoba do vlasu',
    },
    {
        id: TYPE.FIGURKA,
        label: 'Figurka',
    }
]

const LOCATION_FILTERS = [
    {
        id: LOCATION.CESKE,
        label: 'Ceske',
    },
    {
        id: LOCATION.ZAHRANICNI,
        label: 'Zahranicni',
    }
]

const TREATMENT_FILTERS = [
    {
        id: TREATMENT.SUROVE,
        label: 'Surove',
    },
    {
        id: TREATMENT.LESTENE,
        label: 'Lestene',
    },
    {
        id: TREATMENT.VYBRUSY,
        label: 'Vybrusy',
    }
]
const METHOD_FILTERS = [
    {
        id: METHOD.KOVANE,
        label: 'Kovane tepane',
    },
    {
        id: METHOD.WIRE_WRAPPING,
        label: 'Wire-wrapping',
    },
    {
        id: METHOD.KLENOTNICKA_TECHNIKA,
        label: 'Klenotnicka technika',
    }
]

const MOTIVE_FILTERS = [
    {
        id: MOTIVE.ZOOMORFNI,
        label: 'Zoomorfni',
    },
    {
        id: MOTIVE.FYTOMORFNI,
        label: 'Fytomorfni',
    },
    {
        id: MOTIVE.ANTROPOMORFNI,
        label: 'Antropomorfni',
    },
    {
        id: MOTIVE.ABSTRAKTNI,
        label: 'Abstraktni a jine',
    }
]

const COLLECTION_FILTERS = [
    {
        id: COLLECTION.ISLAND,
        label: 'Kousek Islandu',
    },
    {
        id: COLLECTION.MAROKO,
        label: 'Marokem',
    },
    {
        id: COLLECTION.OKRIDLENI,
        label: 'Okridleni',
    },
    {
        id: COLLECTION.ANDELE,
        label: 'Strazci a andele',
    },
    {
        id: COLLECTION.ZEME_CESKA,
        label: 'Zeme Ceska',
    },
    {
        id: COLLECTION.DAVNE_DOBY,
        label: 'Z davnych dob',
    }
]

const STONE_FILTERS = [
    {
        id: STONE.ACHAT,
        label: 'Achat',
    },
    {
        id: STONE.AKVAMARIN,
        label: 'Akvamarin',
    },
    {
        id: STONE.AMAZONIT,
        label: 'Amazonit',
    },
    {
        id: STONE.AMETYST,
        label: 'Ametyst',
    },
    {
        id: STONE.AMONIT,
        label: 'Amonit',
    },
    {
        id: STONE.APATIT,
        label: 'Apatit',
    },
    {
        id: STONE.ARAUKARIT,
        label: 'Araukarit',
    },
    {
        id: STONE.AUSTRALSKY_DRAHY_OPAL,
        label: 'Australsky drahy opal',
    },
    {
        id: STONE.CELESTIN,
        label: 'Celestin',
    },
    {
        id: STONE.CITRIN,
        label: 'Citrin',
    },
    {
        id: STONE.CAROIT,
        label: 'Caroit',
    },
    {
        id: STONE.CERNA_BAROKNI_PERLA,
        label: 'Cerna barokni perla',
    },
    {
        id: STONE.DINOSAURI_KOST,
        label: 'Dinosauri kost',
    },
    {
        id: STONE.DRAHY_OPAL,
        label: 'Drahy opal',
    },
    {
        id: STONE.FLUORIT,
        label: 'Fluorit',
    },
    {
        id: STONE.FOSILIE,
        label: 'Fosilie',
    },
    {
        id: STONE.GRANAT,
        label: 'Granat',
    },
    {
        id: STONE.HEMATIT,
        label: 'Hematit',
    },
    {
        id: STONE.CHALCEDON,
        label: 'Chalcedon',
    },
    {
        id: STONE.CHROMDIOPSID,
        label: 'Chromdiopsid',
    },
    {
        id: STONE.JANTAR,
        label: 'Jantar',
    },
    {
        id: STONE.JASPIS,
        label: 'Jaspis',
    },
    {
        id: STONE.JISKRIVEC,
        label: 'Jiskrivec',
    },
    {
        id: STONE.KALCIT,
        label: 'Kalcit',
    },
    {
        id: STONE.KARNEOL,
        label: 'Karneol',
    },
    {
        id: STONE.KOBALTOKALCIT,
        label: 'Kobaltokalcit',
    },
    {
        id: STONE.KORAL,
        label: 'Koral',
    },
    {
        id: STONE.KREMENNA_HMOTA,
        label: 'Kremenná hmota',
    },
    {
        id: STONE.KRISTAL,
        label: 'Kristal',
    },
    {
        id: STONE.KUBICKY_ZIRKON,
        label: 'Kubicky zirkon',
    },
    {
        id: STONE.KYANIT,
        label: 'Kyanit',
    },
    {
        id: STONE.LABRADORIT,
        label: 'Labradorit',
    },
    {
        id: STONE.LAPIS_LAZULI,
        label: 'Lapis lazuli',
    },
    {
        id: STONE.LARIMAR,
        label: 'Larimar',
    },
    {
        id: STONE.LAVA,
        label: 'Lava',
    },
    {
        id: STONE.LAVOVY_OBLAZEK,
        label: 'Lavový oblazek',
    },
    {
        id: STONE.LYBIJSKE_SKLO,
        label: 'Lybijske sklo',
    },
    {
        id: STONE.MALACHIT,
        label: 'Malachit',
    },
    {
        id: STONE.MESICNI_KAMEN,
        label: 'Mesicni kamen',
    },
    {
        id: STONE.MEXICKY_OHNIVY_OPAL,
        label: 'Mexicky ohnivy opal',
    },
    {
        id: STONE.MODRY_KREMEN,
        label: 'Modry kremen',
    },
    {
        id: STONE.OBSIDIAN,
        label: 'Obsidian',
    },
    {
        id: STONE.OCEANOVY_JASPIS,
        label: 'Oceanovy jaspis',
    },
    {
        id: STONE.OHNIVY_OPAL,
        label: 'Ohnivy opal',
    },
    {
        id: STONE.OLIVIN,
        label: 'Olivin',
    },
    {
        id: STONE.OLIVINY,
        label: 'Oliviny',
    },
    {
        id: STONE.OPAL,
        label: 'Opal',
    },
    {
        id: STONE.OPALIZOVANE_DREVO,
        label: 'Opalizovane drevo',
    },
    {
        id: STONE.ORTHOCERAS,
        label: 'Orthoceras',
    },
    {
        id: STONE.PERLA,
        label: 'Perla',
    },
    {
        id: STONE.PERLET,
        label: 'Perlet',
    },
    {
        id: STONE.PICASSO_JASPIS,
        label: 'Picasso jaspis',
    },
    {
        id: STONE.PREHNIT,
        label: 'Prehnit',
    },
    {
        id: STONE.PYRIT,
        label: 'Pyrit',
    },
    {
        id: STONE.RODOCHROZIT,
        label: 'Rodochrozit',
    },
    {
        id: STONE.RODONIT,
        label: 'Rodonit',
    },
    {
        id: STONE.RUBIN,
        label: 'Rubin',
    },
    {
        id: STONE.RUZENIN,
        label: 'Ruzenin',
    },
    {
        id: STONE.SAFIR,
        label: 'Safir',
    },
    {
        id: STONE.SAGENIT,
        label: 'Sagenit',
    },
    {
        id: STONE.SEPTARIE,
        label: 'Septarie',
    },
    {
        id: STONE.SMARAGD,
        label: 'Smaragd',
    },
    {
        id: STONE.SODALIT,
        label: 'Sodalit',
    },
    {
        id: STONE.SOKOLI_OKO,
        label: 'Sokoli oko',
    },
    {
        id: STONE.SPESSARTIN,
        label: 'Spessartin',
    },
    {
        id: STONE.SUGILIT,
        label: 'Sugilit',
    },
    {
        id: STONE.SUROVA_LAVA,
        label: 'Surova lava',
    },
    {
        id: STONE.SVOR,
        label: 'Svor',
    },
    {
        id: STONE.TOPAZ,
        label: 'Topaz',
    },
    {
        id: STONE.TURMALIN,
        label:'Turmalin',
    },
    {
        id: STONE.TYRKENIT,
        label: 'Tyrkenit',
    },
    {
        id: STONE.TYRKYS,
        label: 'Tyrkys',
    },
    {
        id: STONE. VLTAVIN,
        label: 'Vltavin',
    },
    {
        id: STONE.WAVELIT,
        label: 'Wavelit',
    },
    {
        id: STONE.ZAHNEDA,
        label:'Zahneda',
    },
    {
        id: STONE.ZELEZITY_KREMEN,
        label:'Zelezity kremen',
    }
]