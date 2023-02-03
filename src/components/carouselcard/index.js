export function CarouselCard({
  project,
  setActiveCard = () => {},
  classname,
  index,
  activeCard,
  setModalCard,
}) {
  const handleCardClick = (index) => {
    if (activeCard === index) {
      setModalCard(project.id);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <div onClick={() => handleCardClick(index)} className={classname}>
      <span>{project.tech}</span>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}
