export const FilterFormItem=({items})=>{
  console.log('co jsou items', items)
    return(
      (items.map((item)=>
        {return(
        <label htmlFor="lokalita">
          <input id="lokalita" className="field-input" type="checkbox" />
          {item.label} 
        </label>
    )}))
)}
     