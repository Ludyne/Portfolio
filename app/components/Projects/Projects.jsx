import { MdOpenInNew } from "react-icons/md";
import { CardsData } from "../../data/projects";
import Card from "./Card";

export default function Projects() {
  return (
    <section className="container" id="projects">
      <h3 className="scoll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-caption pt-6 mb-6">
        Projets
      </h3>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CardsData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
