import React from 'react'


const DiscMsg = () => {
    const isPremiumUser = false;
  return (
    <div>
      <h2>Assignment 2 — Show a discount message for premium users</h2>

      {isPremiumUser && <p>You get 50% discount!</p>}
      {!isPremiumUser && <p>Upgrade to premium for discounts!</p>}
    </div>
  )
}

export default DiscMsg
