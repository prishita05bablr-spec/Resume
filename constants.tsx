import { ExperienceItem, EducationItem, SkillItem } from './types';
import { 
  BarChart3, 
  PieChart, 
  Database, 
  TrendingUp, 
  Users, 
  Search,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const RESUME_DATA = {
  name: "Prishita Girdhar",
  title: "Business Analytics & Market Strategy",
  tagline: "Transforming data into actionable business strategies.",
  contact: {
    phone: "+91-9991049590",
    email: "prishita05bablr@xime.org",
    location: "Bangalore, India"
  },
  summary: "PGDM-BA Candidate at XIME Bangalore with 14 months of professional experience in digital performance insights and market research. Expert in translating client requirements into strategic growth initiatives using SQL, Power BI, and consumer behavior analysis.",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "gfk",
    role: "Junior Analyst",
    company: "GFK-Nielsen IQ",
    period: "Mar 2023 – May 2024",
    location: "Gurgaon, Haryana",
    description: [
      "Delivered actionable digital performance insights and strategy recommendations by analyzing industry trends, campaign outcomes, and client data.",
      "Translated client requirements into actionable insights by collecting and analyzing data on emerging digital products.",
      "Conducted comprehensive market research to generate insights on industry trends and consumer behavior, analyzing data from multiple retail sources."
    ]
  },
  {
    id: "westin",
    role: "Intern",
    company: "The WESTIN",
    period: "Dec 2019 – Mar 2020",
    location: "Gurgaon, Haryana",
    description: [
      "Managed timely preparation and presentation of buffet; efficiently handled daily kitchen operations.",
      "Acquired comprehensive skills in culinary techniques, kitchen safety, food hygiene, menu planning, and effective kitchen management."
    ]
  },
  {
    id: "asian-hospital",
    role: "Research Intern",
    company: "Asian Hospital",
    period: "Jun 2017 - Jul 2017",
    location: "Faridabad",
    description: [
      "Conducted primary research by designing and administering surveys to gather client feedback.",
      "Assessed satisfaction levels and identified actionable insights for service enhancement.",
      "Compiled and analyzed feedback data to detect patterns for improving client experience."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "xime",
    degree: "PGDM-BA",
    institution: "XIME Bangalore",
    year: "2025 - 2027",
    score: "-"
  },
  {
    id: "banasthali",
    degree: "Undergraduate Degree",
    institution: "Banasthali Vidhyapith",
    year: "2016 - 2019",
    score: "7.2/10.00 CGPA"
  },
  {
    id: "12th",
    degree: "12th Grade, CBSE",
    institution: "DAV Public School",
    year: "2016",
    score: "69%"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    category: "Technical & Data",
    skills: ["SQL", "Power BI", "Microsoft Office", "Data Management", "Data Accuracy"]
  },
  {
    category: "Business & Strategy",
    skills: ["Market Research", "Consumer Insight", "Product Management", "Strategy", "Creative Problem Solving"]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Product Management Professional Certificate",
    issuer: "LinkedIn Learning",
    details: "Product lifecycle management, positioning, road mapping, and customer journey mapping."
  }
];
