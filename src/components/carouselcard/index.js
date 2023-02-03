export function CarouselCard({
  project,
  setActiveCard = () => {},
  classname,
  index,
  activeCard,
  setModalCard,
}) {
  const handleCardClick = (index, project) => {
    if (activeCard === index) {
      setModalCard(project);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <div onClick={() => handleCardClick(index, project)} className={classname}>
      <span>{project.tech}</span>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}
