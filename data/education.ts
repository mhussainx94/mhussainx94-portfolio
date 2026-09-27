import type { EducationEntry } from "@/types";

export const education: EducationEntry[] = [
  {
    id: "nutech-bscs",
    institution: "National University of Technology (NUTECH)",
    degree: "BS",
    field: "Computer Science",
    location: "Islamabad, Pakistan",
    startDate: "2024-09",
    endDate: "2028",
    studentId: "F24605062",
    coursework: [
      "Cyber Security",
      "Information Security",
      "Network Security",
      "Networking Fundamentals",
      "Cloud Computing",
      "ICT (HTML, CSS, JavaScript)",
      "Programming Fundamentals (C++)",
      "Data Structures & Algorithms (C++)",
      "Object-Oriented Programming (Java)",
      "Python Programming (Artificial Intelligence)",
      "Applied Databases (PostgreSQL)",
    ],
    universityProjects: [
      {
        id: "odoo-security-scanner",
        title: "Odoo Security Scanner",
        description:
          "Developed a vulnerability assessment tool for Odoo applications to identify common security misconfigurations and potential vulnerabilities.",
        technologies: ["Python", "Odoo", "Vulnerability Assessment"],
      },
      {
        id: "dark-web-crawler",
        title: "Dark Web Crawler",
        description:
          "Built a cybersecurity research crawler to collect and analyze publicly accessible dark-web information for threat intelligence and security research.",
        technologies: ["Python", "Web Crawling", "Threat Intelligence"],
      },
      {
        id: "cipher-log",
        title: "Cipher Log",
        description:
          "Developed a controlled keylogging project to study input-capture techniques, system-level behavior, and endpoint security detection and mitigation.",
        technologies: ["Python", "Endpoint Security", "Security Research"],
      },
    ],
  },
];
