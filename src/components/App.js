import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(true)


  useEffect(() => {
    fetch('http://localhost:4001/ducks')
      .then(data => data.json())
      .then(duckData => {
        setDucks(duckData);
        setFeaturedDuck(duckData?.[0])
      })
  }
    ,
    []
  )

  async function incrementLikes(duck) {
    const PATCH_OPTIONS = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        likes: duck.likes + 1,
      })
    }
    fetch(`http://localhost:4001/ducks/${duck.id}`, PATCH_OPTIONS)
      .then(data => data.json())
      .then(patchedDuck => {
        const idx = ducks.findIndex(duck => duck.id === patchedDuck.id)
        setDucks([...ducks.slice(0, idx), patchedDuck, ...ducks.slice(idx + 1)])
      })
  }

  async function addDuck(duck) {
    const POST_OPTIONS = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(duck)
    }
    fetch(`http://localhost:4001/ducks`, POST_OPTIONS)
      .then(data => data.json())
      .then(newDuck => {
        setDucks([...ducks, newDuck])
      })
  }

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList
        ducks={ducks}
        setFeaturedDuck={setFeaturedDuck}
      />

      <DuckDisplay
        featuredDuck={featuredDuck}
        setFeaturedDuck={setFeaturedDuck}
        incrementLikes={incrementLikes}
      />

      <button
        onClick={() => {
          setDuckFormOpen(!duckFormOpen);
        }}
      >
        {duckFormOpen ? "Close Duck Form" : "Open Duck Form"}
      </button>

      {/* Conditionally display the duck form on the line below depending on whether the duckFormOpen state is true or false... */}
      {
        duckFormOpen
          ? <DuckForm addDuck={addDuck}/>
          : null
      }

    </div>
  );
}

export default App;
