import type { StaticImageData } from "next/image";
import promevo from "@/assets/logo-promevo.png";
import nerdery from "@/assets/logo-nerdery.png";
import bytecode from "@/assets/logo-bytecode.png";
import csx from "@/assets/logo-csx.png";
import td from "@/assets/logo-td.png";

export type Role = { company: string; role: string; dates: string; bullets: string[]; logo?: StaticImageData };

export const experience: Role[] = [
  {
    company: "Promevo",
    logo: promevo,
    role: "Senior Solutions Architect, Cloud & AI",
    dates: "Oct 2025 – Present",
    bullets: [
      "Partner with Sales and Customer Success across the full cycle: discovery, demos, workshops, pilots, and proofs of concept.",
      "Design large-scale cloud, hybrid, and cross-cloud architectures, including Gemini Enterprise and MCP, that map customer business problems to concrete technical approaches.",
      "Build multi-year roadmaps and act as a trusted advisor to executive stakeholders on complex accounts.",
      "Co-sell with Google field teams (FSMs, CE Managers) and position Promevo for high-friction and early-access work.",
      "Set the bar for SOWs, proposals, and repeatable patterns used by the broader SA team.",
    ],
  },
  {
    company: "Nerdery",
    logo: nerdery,
    role: "Senior Data Analyst Consultant",
    dates: "Jan 2025 – Oct 2025",
    bullets: [
      "Subject matter expert for modern visualization and analytics platforms: Looker, Tableau, and Power BI.",
      "Built Gemini natural language querying into client dashboards, improving the insights users could pull from them.",
      "Worked with client technical teams to model, develop, and implement analytics solutions.",
      "Ran interactive training for developers and business users.",
      "Documented and implemented data governance and security best practices.",
    ],
  },
  {
    company: "Bytecode IO",
    logo: bytecode,
    role: "Senior Data Analyst Consultant",
    dates: "Jul 2021 – Nov 2024",
    bullets: [
      "Took data models, reports, and dashboards from ideation to production.",
      "Integrated, transformed, and validated data with SQL, ETL tools, and API integrations.",
      "Advised clients on optimizing their data environments.",
      "Worked with product managers, marketers, and engineers to define requirements, set priorities, and deliver.",
      "Trained both technical and business users.",
    ],
  },
  {
    company: "CSX Technology",
    logo: csx,
    role: "Tableau Design & Development Lead; IT Analyst",
    dates: "Jul 2016 – Jul 2021",
    bullets: [
      "Company-wide subject matter expert and point of contact for Tableau development and support, and author of its dashboard standards and best practices.",
      "Spearheaded a company-wide effort to overhaul and standardize the Tableau Server project folder hierarchy, permissions structure, and use of certified published data sources.",
      "Ran a monthly internal Tableau User Group where employees presented dashboards and got questions answered.",
    ],
  },
  {
    company: "TD Bank Group",
    logo: td,
    role: "Systems Developer II",
    dates: "Nov 2010 – Aug 2015",
    bullets: ["Web services developer using Java EE, XML, and SOA for real-time transactions across all business lines."],
  },
  {
    company: "Earlier",
    role: "Computer Sciences Corporation · Hydrahead New Media · University of Maine",
    dates: "2006 – 2012",
    bullets: ["Programmer Analyst, owner/operator of a small media company, and laptop support technician."],
  },
];
