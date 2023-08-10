function DuckDisplay({featuredDuck, setFeaturedDuck, incrementLikes}) {
  
  return (
    <div className="duck-display">

      {/* show all the details for the featuredDuck state here */}

      <h2>{featuredDuck.name}</h2>

      <img src={featuredDuck.img_url} alt={featuredDuck.name} />

      <button
        onClick={() => {
          setFeaturedDuck({...featuredDuck, likes: featuredDuck.likes + 1});
          incrementLikes(featuredDuck);
        }}
      >
        {featuredDuck.likes === 1 ? `${featuredDuck.likes} like` : `${featuredDuck.likes} likes`}
      </button>

    </div>
  )
}

export default DuckDisplay
