import React, { useContext } from 'react'
import { SortContext } from '../context/SortContext'
import { ViewContext } from '../context/ViewContext';

export default function FilterPanel() {
    const {sortOrder, toggleSort} = useContext(SortContext);
    const {viewMode, toggleView} = useContext(ViewContext);

  return (
    <div>
        <h3>DashBoard Filters</h3>

        <p>Sort Order: {sortOrder}</p>
        <button onClick={toggleSort}>Toggle Sort Order to {" "}
            {sortOrder == "ascending" ? "descending" : "ascending"}
        </button>

        <p>View Order: {viewMode}</p>
        <button onClick={toggleView}>Toggle View Mode to {" "}
            {viewMode == "compact" ? "expanded" : "compact"} 
        </button>
    </div>
  )
}
