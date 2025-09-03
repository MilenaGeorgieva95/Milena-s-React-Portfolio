import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import projects from "../../projectsData/projectsData.js";
import { useParams } from "react-router";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((el) => el.id == projectId);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {project.name}
        </h1>
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <div className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            <nav>
              <ul
                role="list"
                className=" mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li>
                  <a
                    href={project.deployedLink}
                    aria-current="page"
                    className="button font-medium text-gray-500 hover:text-gray-600"
                  >
                    {project.name} Link
                  </a>
                </li>
                <li>
                  <a
                    aria-current="page"
                    className="button font-medium text-gray-500 hover:text-gray-600"
                    href={project.codeRepo}
                  >
                    GitHub Repo
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Image gallery */}
        <div className="mx-auto m-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={project.name}
            src={project.imageSrc}
            className="hidden size-full rounded-lg object-cover lg:block"
          />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={project.name}
              src={project.imagesDetails[0]}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
            <img
              alt={project.name}
              src={project.imagesDetails[1]}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={project.name}
            src={project.imagesDetails[2]}
            className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>

        {/* project info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{project.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                Technologies Used
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{project.techUsed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
