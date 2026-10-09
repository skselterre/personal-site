export const profile = {
  name: "Shane Selterre",
  headline: "Senior Cloud & AI Solutions Architect",
  eyebrow: "Senior Solutions Architect · Cloud & AI",
  description:
    "Shane Selterre is a Senior Solutions Architect designing Google Cloud and generative AI systems for enterprise teams.",
  h1: "Cloud and AI architecture, built to ship.",
  sub: "I'm Shane Selterre, a Senior Solutions Architect at Promevo. I work with executives and engineering teams to scope, design, and deliver Google Cloud and generative AI systems.",
  location: "Jacksonville, Florida",
  email: "shane@selterre.com",
  linkedin: "https://www.linkedin.com/in/skselterre",
  github: "https://github.com/skselterre",
  about: [
    "I work at the point where a business plan meets the cloud. At Promevo I partner with enterprise technology leaders and their engineering teams to design and roll out Google Cloud and AI solutions: agent platforms on the Agent Development Kit and Model Context Protocol, API integrations through Apigee, and analytics on Looker and BigQuery.",
    "Picking the right infrastructure is the easy half. The AI and data projects I've seen succeed also had clear governance and people ready to use what was built.",
  ],
  stack: ["Google Cloud", "Gemini Enterprise", "ADK", "MCP", "Apigee", "Looker", "BigQuery", "Tableau", "dbt"],
  education: [
    { school: "University of Maine at Farmington", detail: "BS Computer Science, 2006 to 2008" },
    { school: "Rochester Institute of Technology", detail: "Software Engineering, 2004 to 2005" },
  ],
  writing: {
    title: "Writing",
    blurb: "Notes on practical AI deployment and getting more out of Looker.",
    items: [
      { title: "Bring Your Own MCP: Why Gemini Enterprise's Open Connector Edge Matters", href: "https://promevo.com/blog/byo-mcp-gemini-enterprise-open-connectors" },
      { title: "Layer Your LookML: A Practitioner's Guide to Refinements in Looker Core", href: "https://promevo.com/blog/looker-core-optimization-guide" },
    ],
    href: "#",
  },
  podcast: {
    title: "Podcast",
    blurb: "I co-host a show about classic gaming history and the people behind it.",
    items: [{ title: "[PLACEHOLDER] Show name" }, { title: "[PLACEHOLDER] Latest episode" }] as { title: string; href?: string }[],
    href: "#",
  },
  contact: "If you're working on cloud or AI architecture and want a second set of eyes, email me.",
};
