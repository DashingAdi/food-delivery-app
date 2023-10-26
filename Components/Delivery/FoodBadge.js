import React from 'react'

const FoodBadge = () => {
    return (
        <>
            <div className="badges">
                <span className="badge rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    Trending
                </span>
                <span className="badge rounded-md bg-red-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                    Non-veg
                </span>
                <span className="badge rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    Veg
                </span>
                <span className="badge rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Croissant
                </span>
                <span className="badge rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    Desserts
                </span>
            </div>
        </>  
  )
}

export default FoodBadge