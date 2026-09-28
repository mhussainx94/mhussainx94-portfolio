import type { Project } from "@/types";

/**
 * Project entries are limited to repositories and work with a verifiable
 * GitHub source. Descriptions summarize demonstrated functionality rather
 * than copying repository marketing language.
 */
export const projects: Project[] = [
  {
    id: "odoo-security-scanner",
    title: "Odoo Security Scanner v2.0",
    description:
      "An automated security assessment framework for Odoo web applications. It checks exposed services, TLS, security headers, Odoo-specific endpoints, authentication controls, and known CVEs, then produces JSON, TXT, and HTML reports.",
    category: "application-security",
    projectType: "Security Tool",
    featured: true,
    technologies: ["Python", "Flask", "HTTP/TLS", "CVE Database"],
    githubUrl: "https://github.com/mhussainx94/odoo-security-scanner",
    status: "shipped",
  },
  {
    id: "vdp-pro-safe-recon",
    title: "VDP-PRO Safe Recon Pipeline",
    description:
      "A Bash-based passive reconnaissance pipeline for authorized VDP, bug-bounty, and local lab work. It organizes asset discovery, DNS and HTTP reconnaissance, historical URLs, JavaScript analysis, passive security observations, and structured reporting while keeping intrusive scanning disabled.",
    category: "recon-automation",
    projectType: "Recon Automation",
    featured: true,
    technologies: ["Bash", "Kali Linux", "HTTPX", "DNS", "OSINT"],
    githubUrl: "https://github.com/mhussainx94/vdp-pro-safe-recon",
    status: "shipped",
  },
  {
    id: "personal-cyber-lab",
    title: "Personal Cybersecurity Lab",
    description:
      "A documented self-hosted security lab spanning triple-boot systems, VMware networks, vulnerable targets, and portable environments. It provides a repeatable setup for web security, reconnaissance, vulnerability assessment, penetration testing, and evidence-based reporting.",
    category: "offensive-security",
    projectType: "Security Lab",
    technologies: ["Kali Linux", "VMware", "DVWA", "Metasploitable", "OpenVAS"],
    githubUrl: "https://github.com/mhussainx94/personal-cyber-lab",
    status: "in-progress",
  },
  {
    id: "cipherlog-assembly",
    title: "CipherLog — Assembly Keylogger & Caesar Cipher",
    description:
      "An Assembly-language course project combining a 32-bit MASM32 keylogger demonstration with Caesar-cipher encryption, file I/O, lockout logic, and a Python Tkinter interface. The encryption and decryption logic runs in Assembly.",
    category: "tooling",
    projectType: "Academic Project",
    technologies: ["MASM32", "x86 Assembly", "Python", "Tkinter", "Windows API"],
    githubUrl: "https://github.com/mhussainx94/CipherLog-Assembly",
    status: "shipped",
  },
];
