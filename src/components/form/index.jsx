export const Vyrobky =()=>{
    return(
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={(e) => {setFromCity(e.target.value)}}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => {setToCity(e.target.value)}}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities}/>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => {setDate(e.target.value)}}>
              <option value="">Vyberte</option>
              <DatesOptions dates={dates}/>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button 
              disabled={!fromCity || !toCity || !date}
              className="btn" 
              type="submit"
            > 
              Vyhledat spoj
            </button>
          </div>
        </form>
    )
}