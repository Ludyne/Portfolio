import { MdOpenInNew } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";

function Card({ card }) {
  return (
    <div className="rounded-lg bg-white border border-x-slate-300 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white hover:scale-110 transition-transform duration-300 ease-in-out flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-lg font-semibold text-black">{card.title}</h4>
        <p className="text-sm text-black">{card.desc}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {card.techs.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-xs text-black font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          {card.lien && (
            <a
              href={card.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-800 hover:text-gray-600"
            >
              <MdOpenInNew className="w-5 h-5" />
            </a>
          )}
          {card.github && (
            <a
              href={card.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-800 hover:text-gray-600"
            >
              <IoLogoGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
