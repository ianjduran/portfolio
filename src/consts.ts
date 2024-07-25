import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ian Javier Duran Román",
  DESCRIPTION: "Welcome to my portfolio, a good balance betweeen software development and creative design.",
  AUTHOR: "Ian Duran",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  {
    TEXT: "Resume",
    HREF: ""
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "ianjduran@gmail.com",
    HREF: "mailto:ianjduran@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "ianjduran",
    HREF: "https://github.com/ianjduran"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "ianjduran",
    HREF: "https://www.linkedin.com/in/ianjduran/",
  }
]

