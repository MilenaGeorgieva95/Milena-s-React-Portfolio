import { CodeBracketIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Frameworks and Libraries",
    id: "tier-frameworks",
    features: [
      "Angular",
      "React.js",
      "Express",
      "Express-Handlebars",
      "EJS",
      "lit-html",
      "page.js",
      "Bootstrap",
      "Tailwind",
    ],
  },
  {
    name: "Skills",
    id: "tier-skills",
    features: [
      "TypeScript",
      "JavaScript",
      "NodeJS",
      "CSS",
      "HTML",
      "RESTful APIs",
      "Single-Page Applications",
      "Multi-Page Applications",
      "Functional Programming",
      "Object Oriented Programming",
    ],
  },
  {
    name: "Databases",
    id: "tier-databases",
    features: [
      "MongoDB",
      "Mongoose",
      "Atlas",
      "Compass",
      "MySQL",
      "MySQL Workbench",
    ],
  },

  {
    name: "Other",
    id: "tier-other",
    features: [
      "Mocha",
      "Chai",
      "Git Bash",
      "Figma",
      "Photoshop",
      "Illustrator",
    ],
  },
];

export default function SkillsAndTechnologies() {
  return (
    <div className="relative px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-white">
          Skills and Technologies
        </h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div key={tier.id} className="sm:mx-8 lg:mx-0">
            <h3
              id={tier.id}
              className="text-indigo-600 text-base/7 font-semibold"
            >
              {tier.name}
            </h3>

            <ul
              role="list"
              className="text-gray-600 mt-8 space-y-3 text-sm/6 sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CodeBracketIcon
                    aria-hidden="true"
                    className="text-blue-600 h-6 w-5 flex-none"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
