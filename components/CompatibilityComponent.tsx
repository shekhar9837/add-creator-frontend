import React from 'react'

const CompatibilityComponent = () => {
  return (
    <div>
        <h2 className='text-3xl font-bold text-center text-white'>Compatible with these platform</h2>
        <div className='w-full gap-4 flex items-center justify-center'>
            {["Amazon", "Google", "Shopify", "Ebay"].map((item) => (
                <div key={item} className=''>
                    <h2>{item}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CompatibilityComponent