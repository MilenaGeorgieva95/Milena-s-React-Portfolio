const projects = [
  {
    id: 1,
    name: "CineZone",
    deployedLink: "https://cinezone-2894c.web.app/",
    codeRepo: "https://github.com/MilenaGeorgieva95/CineZone",
    imageSrc: "/images/CZ-movies.png",
    description:
      "Built a movie community and watchlist application using Angular. Integrated TMDB API for dynamic movie data. Implemented authentication, comments, likes, and watchlist features using Back4App. Focus: API integration, state management, user interaction.",
    imagesDetails: [
      "/images/CZ-watchlists.png",
      "/images/CZ-watchlist-details.png",
      "/images/CZ-comments.png",
    ],
    highlights: [
      "Browse latest Movies and create Watchlists App",
      "Authentication functionality",
      "Guest users can browse movies, watchlists and see details pages",
      "Logged users can Create, Like and Comment Watchlists",
      "Creators of Watchlists and Comments can Edit and Delete them",
    ],
    techUsed:
      "Angular, TypeScript, RxJS, Observables, Forms and Custom Validators, Routing and Route Guards, Subjects, Interceptors",
  },
  {
    id: 2,
    name: "Sprout Hub",
    deployedLink: "https://sprout-hub-458309.web.app/posts",
    codeRepo: "https://github.com/MilenaGeorgieva95/Sprout-Hub",
    imageSrc: "/images/SH-posts.jpg",
    description:
      "Developed a gardening forum platform with full user authentication. Implemented posts, categories, likes, and comments system. Used Back4App for backend services and Firebase for deployment. Focus: React components, authentication flow, CRUD operations.",
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
    id: 3,
    name: "Veluxe Motors",
    deployedLink: "https://veluxe-motors.web.app/",
    codeRepo: "https://github.com/MilenaGeorgieva95/Veluxe-Motors",
    imageSrc: "/images/VM-home.png",
    description:
      "Built a car rental marketplace application. Implemented search filters, booking system, and user accounts. Designed responsive UI with focus on usability and clean UX. Focus: React routing, filtering logic, UI/UX design.",
    imagesDetails: [
      "/images/VM-appointment.png",
      "/images/VM-car-details.png",
      "/images/VM-about-us.png",
    ],
    highlights: [
      "Car Rental React App",
      "Authentication management",
      "Check available dates by Location to book appointment",
      "Create Listing functionality",
    ],
    techUsed: "React.js, JavaScript, React-Router, UserContext, Bootstrap",
  },
  // {
  //   id: 4,
  //   name: "Sole Mates",
  //   deployedLink: "https://sole-mates.github.io/",
  //   codeRepo: "https://github.com/sole-mates/sole-mates.github.io",
  //   imageSrc: "/images/SM-home.png",
  //   description:
  //     "I build a blog application incorporating REST, CRUD, Authentication and Search functionality as part of the JS Applications Module at SoftUni. I utilized page.js and lit-html libraries and deployed the app on GitHub Pages using Back4App as backend.",
  //   imageAlt: "Sole Mates App overview image.",
  //   imagesDetails: [
  //     "/images/SM-register.png",
  //     "/images/SM-search.png",
  //     "/images/SM-add-pair.png",
  //   ],
  //   highlights: [
  //     "RESTful conditional rendering",
  //     "Authentication functionality",
  //     "User can Create, Edit and Delete own posts",
  //     "Search products by partial match in titles",
  //   ],
  //   techUsed: "JavaScript, Page.js, Lit-Html, Back4App, Mocha, Chai",
  // },
];

export default projects;
