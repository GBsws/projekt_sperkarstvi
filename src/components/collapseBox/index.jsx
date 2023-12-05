import './style.css'
import {useState} from 'react'
export const CollapseBox = ({ title,children}) => {
    const [boxCollapsed,setBoxCollapsed]= useState(true)
  return (
    <>
    <div className="collapse-box">
      <div className="collapse-box--title" onClick={()=>setBoxCollapsed(!boxCollapsed)}><span>{title} </span><span>{boxCollapsed?"▶":"▼"}</span>
      </div>
      {boxCollapsed || children}
    </div>
      
    </>
  );
};