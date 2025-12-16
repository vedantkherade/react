import React, { useState } from 'react'
import { SortContext } from './SortContext';

export default function SortProvider({children}) {
    const [sortOrder, setSortOrder] = useState("ascending");

    function toggleSort(){
        setSortOrder((prev) => prev == "ascending" ? "descending" : "ascending");
    }
  return (
    <div>
      <SortContext.Provider value={{sortOrder, toggleSort}}>
        {children}
      </SortContext.Provider>
    </div>
  )
}
