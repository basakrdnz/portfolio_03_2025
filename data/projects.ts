export const exerciseProjects = [
  {
    id: 1,
    title: "REACT PRODUCT LIST",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/projects/productlist_img_1.png",
    hoverImage: "/images/projects/productlist_img_3.png",
    projectUrl: "https://product-list-react-cyan.vercel.app",
    codeUrl: "https://github.com/basakrdnz/product_list_react"
  },
  {
    id: 2,
    title: "NEXT.JS LINKEDIN PAGE",
    techStack: ["HTML", "CSS"],
    image: "/images/projects/linkedin_nextjs_img_1.png",
    hoverImage: "/images/projects/linkedin_nextjs_img_3.png",
    projectUrl: "https://linkedin-profile-page-next.vercel.app",
    codeUrl: "https://github.com/basakrdnz/linkedin_profile_page_next"
  },
  {
    id: 3,
    title: "NEXT.JS TRAVEL PAGE",
    techStack: ["HTML", "CSS"],
    image: "/images/projects/nexttravel_img_1.png",
    hoverImage: "/images/projects/nexttravel_img_2.png",
    projectUrl: "https://next-travel-example-web-page.vercel.app",
    codeUrl: "https://github.com/basakrdnz/Next-Travel-Example-Web-Page"
  },
  {
    id: 4,
    title: "NEXT.JS RICK & MORTY API PAGE",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "API"],
    image: "/images/projects/rickmorty_img_2.png",
    hoverImage: "/images/projects/rickmorty_img_1.png",
    projectUrl: "https://rick-morty-next-api-page.vercel.app",
    codeUrl: "https://github.com/basakrdnz/RickMorty_Next_Api_Page?tab=readme-ov-file"
  },
  {
    id: 5,
    title: "SASS FIGMA HOME PAGE",
    techStack: ["HTML", "CSS"],
    image: "/images/projects/sasshomepage_img_1.png",
    hoverImage: "/images/projects/sasshomepage_img_2.png",
    projectUrl: "https://saas-website-home-page.vercel.app",
    codeUrl: "https://github.com/basakrdnz/Saas-Website-Home-Page"
  },
  {
    id: 6,
    title: "NEXT.JS TICKET FORM PAGE",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    image: "/images/projects/ticketformpage_img_1.png",
    hoverImage: "/images/projects/ticketprompage_img_2.png",
    projectUrl: "https://ticket-form-page.vercel.app",
    codeUrl: "https://github.com/basakrdnz/Ticket-Form-Page"
  },
  {
    id: 7,
    title: "TIME TRACKER WITH VUE",
    techStack: ["HTML", "CSS", "VUE"],
    image: "/images/projects/time_track_img_1.png",
    hoverImage: "/images/projects/time_track_img_2.png",
    projectUrl: "https://time-tracker-vue-one.vercel.app",
    codeUrl: "https://github.com/basakrdnz/time_tracker_vue"
  },
];

export const realWorldProjects = [
  {
    id: 1,
    title: "CRUMBLE KAFE WEBSITE",
    techStack: ["REACT", "TYPESCRIPT", "VITE", "TAILWIND CSS"],
    image: "/images/projects/crumble_web_img.png",
    hoverImage: "/images/projects/crumble_web_img.png",
    projectUrl: "https://www.crumbleofficial.com",
    codeUrl: "https://github.com/basakrdnz/crumble_web_react",
    description: "A modern, responsive React web site for Crumble Kafe featuring healthy and handmade delicacies. Includes menu categories, campaign sections, about us, story, location, and contact sections with Instagram integration."
  },
  {
    id: 2,
    title: "NOVA ESKRIM WEBSITE",
    techStack: ["REACT", "JAVASCRIPT", "VITE", "TAILWIND CSS"],
    image: "/images/projects/nova_web_img_2.png",
    hoverImage: "/images/projects/nova_web_img_2.png",
    projectUrl: "https://nova-eskrim-react.vercel.app",
    codeUrl: "https://github.com/basakrdnz/nova_eskrim_react",
    description: "A modern and user-friendly website for Nova Eskrim, featuring club information, training schedules, achievements, fencing rules, and live match tracking links. Currently in progress, with new features being added."
  },

];

// Geriye uyumluluk için eski projects array'ini de tutuyoruz
export const projects = [...exerciseProjects, ...realWorldProjects];
