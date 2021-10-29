/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdellah Choukri",
  title: "Hi all, I'm Abdellah Choukri",
  subTitle: emoji(
    "I'm young Software and  web Developer from Montpellier 🏡 in south of France. I'm passioned from the univers of web developement and the computer science 💻."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1oRiF87KIYONYP0G-fa9h-OFdp1PbGrLv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ChoukriAbdellah",
  linkedin: "https://www.linkedin.com/in/abdellah-choukri-b405321b2/",
  gmail: "abdellahchoukrietu@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I was able to specialize in web development on a full Javascript/Typescript stack via personal projects and professional experiences.",
  skills: [
    emoji(
      "⚡ Develop new web applications"
    ),
    emoji("⚡ Develop and customize an existing web applications"),
    emoji(
      "⚡ Get my contribution in existing project or project from scratch"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript/Typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "High school Jules Gesde",
      logo: require("./assets/images/LJG.png"),
      subHeader: "High-School Diploma scientific",
      duration: "2012 - 2015",
    },
    {
      schoolName: "University of science of Montpellier",
      logo: require("./assets/images/logo-fds.png"),
      subHeader: "Bachlor's degree in Computer Science",
      duration: "2015 - 2019"
    },
    {
      schoolName: "University of science of Montpellier",
      logo: require("./assets/images/logo-fds.png"),
      subHeader: "Master's degree in Computer Science",
      duration: "September 2019 - April 2021"
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Devops",
      progressPercentage: "15%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End developer",
      company: "Keobiz",
      companylogo: require("./assets/images/keobiz-logo.png"),
      date: "february 2021 – July 2021",
      desc: "Participate within a team of developers, in the realization of web applications as front-end developer.",
      descBullets: [
        "Maintenance of existing functionalities",
        "Development of new features",
        "Update of web applications (Angular & packages)",
        "Writing unit and integration tests",
        "Development of lightning web components on salesforce CRM"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I REALISED",
  projects: [
    {
      image: require("./assets/images/portfolio-logo.jpg"),
      projectName: "Abdelah-choukri",
      projectDesc: "My first portfolio",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://portfoliochoukriabdellah.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blog-logo.png"),
      projectName: "Symfony-Blog",
      projectDesc: "CRUD blog developed with Symfony & bootstrap frameworks",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://symfonyblog.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/school-plus-logo.png"),
      projectName: "School++",
      projectDesc: "Development of an android application called School+, allowing students to follow courses, test their knowledge and much more.",
      footerLink: [
        {
          name: "See source code",
          url: "https://gitlab.com/choukri-abdellah/schoolplus2"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/diko-logo.png"),
      projectName: "Diko",
      projectDesc: "Diko is a web application to view information about an input.",
      footerLink: [
        {
          name: "See source code",
          url: "https://github.com/ChoukriAbdellah/HMIN302-Projet-responsive-frontend"
        }
      ]
    },
    {
      image: require("./assets/images/football-api.png"),
      projectName: "FootballStat",
      projectDesc: "SPA (Single Page Application) to display the statistics of the teams of a given championship.",
      footerLink: [
        {
          name: "See source code",
          url: "https://github.com/ChoukriAbdellah/FootBall-Stat"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects under development ",
  subtitle:
    "SOME PROJECTS THATS I DEVELOP CURRENTLY IN MY FREE TIME.",

  blogs: [
    {
      title: "SAAS employees-manager",
      description:
        "To get the skills on the Spring-boot framework, I decided to make a small application web. This allows the managers of a company to have a better management and follow-up of their consultants."
    },
    {
      title: "Social network",
      description:
        "As part of my technical watch, I want to carry out a MERN project (MongoDb Express React Node). This project consists of a social network."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "abdellah.choukrietu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
