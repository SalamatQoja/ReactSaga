// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCountriesRequest } from "../countries/Actions";
// import { type AppState } from "../store/store";
// import "./Saga.css";


// const CountryList = () => {
//     const dispatch = useDispatch()
//     const { countries, loading, error } = useSelector((state: AppState) => state.countries)
//     const [search, setSearch] = useState("");
//     const [modal, setModal] = useState<any>(null);
//     const [dark, setDark] = useState(false);
//     const [filterValue, setFilterValue] = useState("");

//     const handleModal = (country: any) => {
//         setModal(country);
//     };

//     const handleBack = () => {
//         setModal(null);
//     }

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setSearch(event.target.value);
//     };

//     const toggleTheme = () => {
//         setDark(prev => !prev);
//     };

//     const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setFilterValue(event.target.value);
//     };

//     const uniqueSubregions = Array.from(
//         new Set(countries.map(c => c.subregion).filter(Boolean))
//     );

//     useEffect(() => {
//         dispatch(fetchCountriesRequest())
//     }, [dispatch]);

//     if (loading) return <p>Загрузка...</p>
//     if (error) return <p>Ошибка: {error}</p>

//     const filterCountry = countries.filter((country) => {
//         const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
//         const matchesSubregion = filterValue === "" || country.subregion?.toLowerCase() === filterValue.toLowerCase();
//         return matchesSearch && matchesSubregion;
//     });

//     if (modal) {
//         return (
//             <div className="modal">
//                 <button onClick={handleBack} className="modal-btn">Back</button>
//                 <img src={modal.flags.png} alt={modal.capital?.[0]} className="modal-flag" />
//                 <h2 className="modal-tit">{modal.name.common}</h2>
//                 <div className="modal-item">
//                     <div className="modal-inner">
//                         <div>
//                             <p className="modal-p">Population: {modal.population}</p>
//                             <p className="modal-p">Region: {modal.region}</p>
//                             <p className="modal-p">subregion: {modal.subregion}</p>
//                             <p className="modal-p">Capital: {modal.capital}</p>
//                         </div>
//                         <div className="modal-into-row2">
//                             <p className="modal-into2">Languages: {Object.values(modal.languages || {}).join(', ')}</p>
//                             <p className="modal-into2"><label>Currencies:</label> {
//                                 modal.currencies
//                                     ? (Object.values(modal.currencies) as { name: string; symbol: string }[]).map(c => `${c.name} (${c.symbol})`).join(",") : "-"
//                             }</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="modal-border">
//                     <p className="border-p">Neigboor country:</p>
//                     <div className="border-row">
//                         {modal.borders && modal.borders.length > 0 ? (
//                             modal.borders.map((code: string) => {
//                                 const neighbor = countries.find((c: { cca3: string; }) => c.cca3 === code);
//                                 return neighbor ? (
//                                     <div key={neighbor.cca3} className="neighbor-country" >
//                                         <img src={neighbor.flags.png}
//                                             alt={neighbor.name.common}
//                                             className="neighbor-img"
//                                             onClick={() => handleModal(neighbor)}
//                                         />
//                                         <span>{neighbor.name.common}</span>
//                                     </div>
//                                 ) : null;
//                             })
//                         ) : (
//                             <p>No neighbors:</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
//     return (

//         <div className="main">
//             <div className="header"></div>
//             <div className={`container  ${dark ? 'dark' : ''}`}>
//                 <button onClick={toggleTheme} className="change">ChangeRight</button>
//                 <div className="input-row">
//                     <input type="text"
//                         value={search}
//                         onChange={handleChange}
//                         placeholder="writing country"
//                         className="saga-input"
//                     />
//                     <select value={filterValue} onChange={handleFilter}>
//                         <option value="">Filter</option>
//                         {uniqueSubregions.map((subregion) => (
//                             <option key={subregion} value={subregion}>
//                                 {subregion}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="inner">
//                     {filterCountry.map((country, index) => (
//                         <div key={index} className="item" onClick={() => handleModal(country)}>
//                             <img src={country.flags.png} alt="flag" className="saga-flag" />
//                             <div className="title-row">
//                                 <h2 className="flag-capital">{country.name.common}</h2>
//                                 <p className="flag-p">Population {country.population.toLocaleString()}</p>
//                                 <p className="flag-p">Region{country.region}</p>
//                                 <p className="flag-p">Capital {country.capital?.[0]}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default CountryList;
