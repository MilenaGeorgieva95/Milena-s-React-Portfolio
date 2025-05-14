const projects = [
  {
    id: 1,
    name: "Sprout Hub",
    deployedLink: "https://sprout-hub-458309.web.app/posts",
    codeRepo: "https://github.com/MilenaGeorgieva95/Sprout-Hub",
    imageSrc: "/images/SH-posts.jpg",
    description:
      "I created a gardening forum app, which provides an interactive platform for users to create, manage, and engage with content, including account creation, authentication, and session management, creating posts, likes and comments. Sprout Hub is a Single-Page ReactJS Application which connects to the SoftUni Practice Server as the Back-End and is deployed using Firebase, Docker and Google Cloud Platform",
    imagesDetails: [
      "/images/SH-register.png",
      "/images/SH-browse.png",
      "/images/SH-home.png",
    ],
    highlights: [
      "Gardening Forum Single-Page App",
      "Authentication and session management",
      "Create, Edit, Delete own posts",
      "Likes and Comments functionality",
    ],
    techUsed: "React.js, JavaScript, React-Router, UserContext, Bootstrap",
  },
  {
    id: 2,
    name: "Sole Mates",
    deployedLink: "https://sole-mates.github.io/",
    codeRepo: "https://github.com/sole-mates/sole-mates.github.io",
    imageSrc: "/images/SM-home.png",
    description:
      "I build a blog application incorporating REST, CRUD, Authentication and Search functionality as part of the JS Applications Module at SoftUni. I utilized page.js and lit-html libraries and deployed the app on GitHub Pages using Back4App as backend.",
    imageAlt: "Sole Mates App overview image.",
    imagesDetails: [
      "/images/SM-register.png",
      "/images/SM-search.png",
      "/images/SM-add-pair.png",
    ],
    highlights: [
      "RESTful conditional rendering",
      "Authentication functionality",
      "User can Create, Edit and Delete own posts",
      "Search products by partial match in titles",
    ],
    techUsed: "JavaScript, Page.js, Lit-Html, Back4App, Mocha, Chai",
  },
];

export default projects;
