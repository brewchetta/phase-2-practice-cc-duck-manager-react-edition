function DuckListCard({duck, setFeaturedDuck}) {

  return (
    <img 
      src={duck.img_url} 
      alt={duck.name}
      onClick={() => setFeaturedDuck(duck)}
    />
  )
}

export default DuckListCard
