export const enum ElementId {
    home = "home",
    aboutMe = "about-me",
    workExperience = "work-experience",
    contact = "contact" 
}

export const profile = {
    name: "Jason Amasola Ampalayohan",
    role: "Frontend Engineer | Full-stack Developer",
    location: "Manila, Philippines",
    contactNo: "+639 52 447 5301",
    email: "jason.ampalayohan@gmail.com",
    summary: "I build fast, thoughtful web products with React, TypeScript, and pragmatic full-stack judgment.",
    intro: "I have 11 years of experience across web, mobile, and desktop applications, with a strong focus on frontend systems that feel polished, reliable, and easy to use.",
    availability: "Currently seeking new frontend or full-stack opportunities where I can help ship useful products with a strong engineering team.",
}

export const strengths = [
    "React + TypeScript product interfaces",
    "Checkout, e-commerce, and workflow-heavy UI",
    "API integration and full-stack feature delivery",
    "Legacy modernization and performance refactoring",
]

export const toolkit = [
    "React",
    "TypeScript",
    "Redux",
    "Node.js",
    "Express",
    "Docker",
    "C#",
    ".NET",
    "JavaScript",
    "PostgreSQL",
]

type WorkExperience = {
    company: string;
    year: string;
    role: string;
    content: string[];
    techStack: string;
    recent?: boolean;
}

export const workExperience: WorkExperience[] = [
    {
        company: "En World Japan",
        year: "October 2022 – September 2025",
        role: "Frontend Engineer",
        content: [
            "Re-engineered a large-scale e-commerce checkout system using React, TypeScript, and Redux, improving user flow, platform performance, and transaction reliability.",
            "Performed in-depth code reviews and technical documentation analysis to ensure clean code practices, coding standards, and business requirement alignment.",
            "Led sprint planning and Agile task coordination across frontend, backend, and QA teams to support timely, high-quality delivery.",
            "Contributed to debugging, performance optimization, and regression testing, reducing checkout errors and improving platform reliability."
        ],
        techStack: "Typescript, React, Redux",
    },
    {
        company: "SPOTTED Staffing",
        year: "July 2021 – September 2022",
        role: "Full Stack Developer",
        content: [
            "Developed and maintained reusable frontend components using React, TypeScript, and Redux, ensuring consistent UI behavior and accessibility across browsers and devices.",
            "Built and optimized RESTful APIs with Node.js and Express, improving server response times and client-server communication.",
            "Designed and implemented a shared component library to standardize UI quality, improve development efficiency, and support a unified codebase.",
            "Collaborated with designers, backend engineers, and QA teams in Agile sprints to align technical delivery with business requirements."
        ],
        techStack: "Node.js, Express, React, Typescript, Redux, Docker"
    },
    {
        company: "Technopro Engineering",
        year: "August 2019 – June 2021",
        role: "Software Engineer",
        content: [
            "Developed and maintained hybrid mobile applications with Ionic React, integrating GPS and geolocation APIs for real-time tracking and location-aware functionality.",
            "Implemented localization and multilingual support to improve accessibility for international users.",
            "Refactored and optimized legacy mobile codebases in Java and Swift, resolving performance issues and improving maintainability.",
            "Enhanced web application rendering performance through React and TypeScript component optimization and efficient state management.",
            "Collaborated with cross-functional teams to deliver new features and prototypes aligned with client requirements."
        ],
        techStack: "Ionic React, Typescript, React, Java, Swift"
    },
    {
        company: "Emerio, Philippines",
        year: "September 2018 – June 2019",
        role: ".NET Developer (Contract)",
        content: [
            "Developed and maintained cross-platform mobile application features using Xamarin for Android and iOS insurance workflows.",
            "Enhanced policy creation, client enrollment, and offline data synchronization modules to support field operations and agent productivity.",
            "Implemented unit testing and increased coverage to improve stability and reduce regression issues during feature rollouts.",
            "Managed Git workflows, branching strategies, pull requests, and code reviews to support high-quality collaborative development."
        ],
        techStack: "C#, .NET Core, Xamarin, MSSQL Lite"
    },
    {
        company: "Collabera, Philippines",
        year: "March 2018 – September 2018",
        role: ".NET Developer (Contract)",
        content: [
            "Developed and maintained POS and table management modules with real-time updates and interactive UI features using UWP.",
            "Supported debugging, feature integration, and peer code reviews to maintain code quality and architectural consistency.",
            "Contributed to MVC.NET and JavaScript web application development, integrating shared business logic and service endpoints."
        ],
        techStack: "C#, .NET Core, UWP, MVC.NET, JavaScript"
    },
    {
        company: "Yokogawa Techno-Info, Philippines",
        year: "June 2016 – March 2018",
        role: "Software Engineer",
        content: [
            "Migrated legacy VB6 applications to VB.NET, refactoring outdated components to improve modularity, readability, and long-term maintainability.",
            "Established coding standards and migration procedures to reduce technical debt and accelerate modernization work.",
            "Enhanced hybrid mobile applications with AngularJS and Monaca Framework, including RESTful API validation and client-server data flow improvements.",
            "Developed internal ASP.NET and JavaScript tools, including leave management and biometric data retrieval platforms.",
            "Provided software maintenance and technical support to diagnose and resolve application and system-level issues."
        ],
        techStack: "VB.NET, ASP.NET, AngularJS, Monaca Framework, PostgreSQL"
    },
    {
        company: "Harbour Centre Port Terminal Inc., Philippines",
        year: "May 2014 – June 2016",
        role: "Web Developer",
        content: [
            "Designed and implemented internal web applications using jQuery, JavaScript, and C# to automate operational tasks and reduce manual workload.",
            "Upgraded legacy systems and deployed software patches to improve stability, maintain security compliance, and support evolving business requirements.",
            "Developed prototypes and proof-of-concept implementations to validate new system features before production deployment.",
            "Collaborated with department heads and stakeholders to gather requirements, demonstrate solutions, and support smooth adoption."
        ],
        techStack: "C#, VB, JavaScript, jQuery, MSSQL"
    }
]
