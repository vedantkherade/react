import React, { useContext } from 'react'
import { FeatureContext } from '../context/FeatureContext'

export default function FeatureToggle() {
    const {isAdvanced, toggleFeature} = useContext(FeatureContext);

  return (
    <div>
      <button onClick={toggleFeature}>
        Switch to {isAdvanced ? "Normal" : "Advanced"}
      </button>
    </div>
  )
}
