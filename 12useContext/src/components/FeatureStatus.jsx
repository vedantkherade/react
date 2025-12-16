import React, { useContext } from 'react'
import { FeatureContext } from '../context/FeatureContext'

export default function FeatureStatus() {
    const {isAdvanced} = useContext(FeatureContext);

  return (
    <div>
      <h2>{isAdvanced ? "Advanced Mode Enabled" : "Basic Mode Enabled"}</h2>
    </div>
  )
}
