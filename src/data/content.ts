export const profile = {
  name: "Rishabh Sharma A",
  role: "Aspiring Software Engineer",
  tagline:
    "I build full-stack, mobile, and AI-curious projects — and I'm always looking for the next thing to learn.",
  location: "Chennai, India",
  email: "rishabh.exe26@gmail.com",
  phone: "+91 8072652048",
  socials: {
    connect: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/rishabh-sharma-415088356/" },
      { label: "GitHub", url: "https://github.com/Rishabh2603-sus" },
    ],
    coding: [
      { label: "LeetCode", url: "https://leetcode.com/u/rishabhsharma2603" },
      { label: "HackerRank", url: "https://www.hackerrank.com/profile/rishabh_exe26" },
      { label: "Codeforces", url: "https://codeforces.com/profile/RishabhSharmaA" },
    ],
  },
};

export const about = {
  paragraphs: [
    "I'm a Computer Science student at R.M.D Engineering College, building software, web, and mobile projects on the side while I learn. I pick up new tools quickly and I'm comfortable adapting as the stack changes underneath me.",
    "I'm especially curious about applied AI and open source, and I like projects that combine a few disciplines at once — recently that's meant pairing a native mobile UI with a Python backend and building AI system copilots in Electron and Swift.",
    "Outside of code, I'm an active member of the Google Developer Program.",
  ],
};

export const languages = ["English (Professional)", "Hindi (Native)", "Tamil (Highly Proficient)", "French (Basic)", "Japanese (Learning)"];

export interface Project {
  id: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: "vorssaint",
    title: "Vorssaint — macOS system monitor & AI copilot",
    year: "2025",
    summary:
      "A real-time system monitoring dashboard (CPU, memory, battery, network, top processes) using Electron, Node.js, system information library, and native Swift, integrated with Gemini API and Ollama for local/cloud AI copilot capabilities.",
    tags: ["Electron", "Node.js", "Gemini API", "Ollama", "Swift"],
    url: "https://github.com/Rishabh2603-sus",
  },
  {
    id: "tidal",
    title: "Tidal — macOS music player",
    year: "2025",
    summary:
      "A vinyl-turntable inspired macOS music player: a SwiftUI client talking to a Python backend for streaming audio with real-time playback controls and library search.",
    tags: ["Swift", "SwiftUI", "Python", "REST API", "Xcode", "Figma"],
    url: "https://github.com/Rishabh2603-sus",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["C++", "Java", "Python", "C", "JavaScript", "Swift"] },
  {
    label: "Frontend & mobile",
    items: ["React.js", "Tailwind CSS", "Flutter", "Android", "HTML5 & CSS3"],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "JWT / OAuth", "Postman"],
  },
  { label: "Computer vision", items: ["OpenCV", "MediaPipe"] },
  { label: "Tools & platforms", items: ["Git & GitHub", "Docker", "AWS", "Linux", "VS Code", "Xcode", "Blender"] },
];

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
}

export const involvement: ExperienceItem[] = [
  {
    id: "inv-1",
    role: "Active Member",
    org: "Google Developer Program",
    period: "Present",
    description: "Engaging with developer communities on emerging technologies, AI tooling, and open-source practices.",
  },
  {
    id: "inv-cert-1",
    role: "Software Engineer & Software Engineer Intern Certifications",
    org: "HackerRank",
    period: "2024",
    description: "Certified on core software engineering fundamentals, data structures, and algorithms through HackerRank.",
  },
  {
    id: "inv-cert-2",
    role: "Claude 101 & AI Fluency for Students",
    org: "Anthropic Education",
    period: "2024",
    description: "Completed Anthropic Education certifications on LLM prompting, AI tools, and applied AI workflows.",
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  org: string;
  period: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.E. Computer Science and Engineering",
    org: "R.M.D Engineering College",
    period: "Expected 2029",
    description:
      "Coursework spanning data structures & algorithms, OOP, operating systems, DBMS, computer networks, and system design. CGPA: 7.5.",
  },
];
