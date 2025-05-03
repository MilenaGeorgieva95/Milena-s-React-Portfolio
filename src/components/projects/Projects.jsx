import { Link } from "react-router";
import projects from "../../projectsData/projectsData.js";

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
                to={`/projects/${project.id}/details`}
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
