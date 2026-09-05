export const profile = {
  name: "Rishabh Sharma",
  role: "Aspiring Software Engineer",
  tagline:
    "I build full-stack, mobile, and AI-curious projects — and I'm always looking for the next thing to learn.",
  location: "Chennai, India",
  email: "rishabh.exe26@gmail.com",
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
    "I'm especially curious about applied AI and open source, and I like projects that combine a few disciplines at once — recently that's meant pairing a native mobile UI with a Python backend and a proper design pass in Figma.",
    "Outside of code, I'm an active member of the Google Developer Program.",
  ],
};

export const languages = ["English", "Hindi", "Tamil", "French", "Japanese"];

export interface Project {
  id: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  url?: string;
  image?: string;
}

// PLACEHOLDER: only one real project on file as of this build.
// Add more entries here — river cleaning bot, smart helmet system, etc. — when copy is ready.
export const projects: Project[] = [
  {
    id: "tidal",
    title: "Tidal — macOS music player",
    year: "2025",
    summary:
      "A vinyl-turntable inspired macOS music player: a SwiftUI client talking to a Python backend for streaming, with search to query and play songs from the library.",
    tags: ["Swift", "SwiftUI", "Python", "REST API", "Figma"],
    url: "https://github.com/Rishabh2603-sus",
    image: "/tidal-preview.png",
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
  { label: "Tools & platforms", items: ["Git & GitHub", "Docker", "AWS", "Linux", "VS Code", "Xcode"] },
];

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
}

// Renamed from "Experience" to "Involvement" — no formal job/internship on file yet.
export const involvement: ExperienceItem[] = [
  {
    id: "inv-1",
    role: "Active Member",
    org: "Google Developer Program",
    period: "Present",
    description: "Engaging with developer communities on emerging technologies, AI tooling, and open-source practices.",
  },
  {
    id: "inv-2",
    role: "Software Engineer Certification",
    org: "HackerRank",
    period: "2024",
    description: "Certified on core software engineering fundamentals through HackerRank's assessment program.",
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
