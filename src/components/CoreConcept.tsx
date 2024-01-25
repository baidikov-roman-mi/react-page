import "./CoreConcept.scss";

interface Props {
  image: string;
  title: string;
  description: string;
}
function CoreConcept({ image, title, description }: Props) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
export default CoreConcept;
