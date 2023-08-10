import React from 'react'
import DuckListCard from './DuckListCard';

function DuckList({ducks, setFeaturedDuck}) {
  return (

    <div className="duck-nav">
      {/* display the duck card components here */}
      {ducks.map(duck => {
        return (
          <DuckListCard 
            key={duck.id}
            duck={duck}
            setFeaturedDuck={setFeaturedDuck}
          />
        )
      })}
    </div>

  )
}

export default DuckList
