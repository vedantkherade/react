import React, { useState } from 'react'
import { FeatureContext } from './FeatureContext';

export default function FeatureProvider({children}) {
    const [isAdvanced, setIsAdvanced] = useState(false);

    function toggleFeature(){
      setIsAdvanced((prev) => !prev);
    }

  return (
    <div>
      <FeatureContext.Provider value={{isAdvanced, toggleFeature}}>
        {children}
      </FeatureContext.Provider>
    </div>
  )
}
