import {
    Me_about,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    cpp,
    java,
    oracle,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    movix,
    gericht,
    tracalorie,
    githubfinder,
    todolist,
    loancalculator,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Database",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competetive Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movies & Tv Shows App",
      description:
        "Explore movies and tv shows, and filter and sort them as per your convenience. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "tmdb-api",
          color: "orange-text-gradient",
        },
      ],
      image: movix,
      app_link: "https://movix-db.vercel.app/",
      source_code_link: "https://github.com/AbhijitShaw09/movix",
    },
    {
      name: "Restaurant App",
      description:
        "Web-based react app that allows users to explore, book, and manage restaurant.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gericht,
      app_link: "https://my-gericht.netlify.app/",
      source_code_link: "https://github.com/AbhijitShaw09/Gericht_",
    },
    {
      name: "Calorie Tracker",
      description:
        "Users can add, remove, and edit meals to keep track of calories consumed.",
      tags: [
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tracalorie,
      app_link: "https://abhijitshaw09.github.io/Tracalorie/",
      source_code_link: "https://github.com/AbhijitShaw09/Tracalorie",
    },
    {
      name: "Github Finder",
      description:
        "Get profile, pull requests, recent repositories, followers of different github contributors.",
      tags: [
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "github api",
          color: "orange-text-gradient",
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: githubfinder,
      app_link: "https://abhijitshaw09.github.io/GitHub-Finder/",
      source_code_link: "https://github.com/AbhijitShaw09/GitHub-Finder",
    },
    {
      name: "Todo List",
      description:
        "A javascript based todo app, which allows user to add, remove and filter tasks.",
      tags: [
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        // {
        //   name: "",
        //   color: "green-text-gradient",
        // },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: todolist,
      app_link: "https://abhijitshaw09.github.io/todo/",
      source_code_link: "https://github.com/AbhijitShaw09/todo",
    },
    {
      name: "Loan Calculator",
      description:
        "Animated calculator that calculates the total payable amount over principal amount.",
      tags: [
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        // {
        //   name: "",
        //   color: "green-text-gradient",
        // },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: loancalculator,
      app_link: "https://abhijitshaw09.github.io/Loan-Calculator/",
      source_code_link: "https://github.com/AbhijitShaw09/Loan-Calculator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };