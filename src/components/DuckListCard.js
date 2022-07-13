function DuckListCard({duck, handleClickDuck}) {
  return (
    <img onClick={() => handleClickDuck(duck)} src={duck.img_url} alt={duck.name} />
  )
}

export default DuckListCard
