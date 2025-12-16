import React, { useState } from 'react'
import { ViewContext } from './ViewContext';

export default function ViewProvider({children}) {
    const [viewMode, setViewMode] = useState("compact");

    function toggleView(){
      setViewMode((prev) => prev == "compact" ? "expanded" : "compact");
    }

  return (
    <div>
        <ViewContext.Provider value={{viewMode, toggleView}}>
           {children}
        </ViewContext.Provider>
    </div>
  )
}
