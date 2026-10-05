export type Project = { title: string; kind: string; live: string; github?: string };

export const projects: Project[] = [
  { title: "Periodic Table", kind: "Web app", live: "https://periodic-table-theta-cyan.vercel.app/", github: "https://github.com/Nessrine88/periodic-table" },
  { title: "E-Commerce Website", kind: "Web app", live: "https://ecommerce-store-puce-ten.vercel.app/en", github: "https://github.com/Nessrine88/ecommerce-store" },
  { title: "Siher Community", kind: "UI/UX", live: "https://si-frontend-five.vercel.app/communityPage", github: "https://github.com/Nessrine88/siFrontend" },
  { title: "Map.ca", kind: "Web app", live: "https://map.ca/" },
  { title: "JPlatform", kind: "UI/UX", live: "https://jplatform.sjapathway.com/" },
  { title: "Eplatform", kind: "Web app", live: "https://eplatform.sjapathway.com/" },
  { title: "Ibtikar Template", kind: "Web app", live: "https://services-app-five.vercel.app/" },
  { title: "Portfolio Template 1", kind: "Web app", live: "https://portfolio-2-pi-beige.vercel.app/" },
  { title: "Portfolio Template 2", kind: "Web app", live: "https://portfolio-1-rho-ten.vercel.app/" },
];

export const services = [
  { title: "Responsive websites", text: "Fast, accessible sites that look right on every screen." },
  { title: "Web applications", text: "Modern, scalable apps built with React, Next.js and Rails." },
  { title: "UI/UX design", text: "Intuitive interfaces that turn ideas into polished products." },
];

export const skills = ["Next.js", "TypeScript", "React", "Ruby on Rails", "UI/UX design"];
