import { Link } from "react-router";

const projects = [
  {
    id: 1,
    name: "Sprout Hub",
    href: "https://sprout-hub-458309.web.app/posts",
    codeRepo: "https://github.com/MilenaGeorgieva95/Sprout-Hub",
    imageSrc:
      "https://media.licdn.com/dms/image/v2/D4D2DAQFmimya8kI03w/profile-treasury-image-shrink_800_800/B4DZaMvqOAGsAc-/0/1746118027180?e=1746738000&v=beta&t=69B8ab-A6yy9nPRjbrgGYPHMFkXMCjL_HcFV42YwL58",
    description:
      "Sprout Hub is a modern Single Page Application built with React.js, providing an interactive platform for users to create, manage, and engage with content. The project follows best practices in front-end development.",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    codeRepo: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    description: "",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    codeRepo: "$89",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    description: "",
    imageAlt:
      "Person using a pen to cross a task off a projectivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    codeRepo: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    description: "",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More projects...
];

export default function Projects() {
  return (
    <>
      <h2>My Projects</h2>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">My Projects</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group"
              >
                <img
                  alt={project.imageAlt}
                  src={project.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{project.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  Details
                  {/* <Link to={project.codeRepo}>
                    <i className="fa-solid fa-code"></i>
                  </Link> */}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
