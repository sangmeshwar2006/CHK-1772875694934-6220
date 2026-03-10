// ── EduAI Student Dataset ──
const STUDENTS = [
  { id:"STU001", name:"Arjun Mehta",    grade:10, gpa:2.4, attendance:62, engagement:38, pattern:"at-risk",     subjects:{math:48,science:52,english:55,history:60}, trend:-12, submitted:4, total:10, behavior:"withdrawn",    risk:"HIGH" },
  { id:"STU002", name:"Priya Sharma",   grade:10, gpa:3.8, attendance:58, engagement:71, pattern:"visual",      subjects:{math:85,science:79,english:88,history:82}, trend:-8,  submitted:7, total:10, behavior:"distracted",   risk:"HIGH" },
  { id:"STU003", name:"Rahul Verma",    grade:11, gpa:2.9, attendance:74, engagement:45, pattern:"repetition",  subjects:{math:61,science:58,english:70,history:55}, trend:-5,  submitted:6, total:10, behavior:"passive",      risk:"MED"  },
  { id:"STU004", name:"Sneha Patel",    grade:10, gpa:3.2, attendance:88, engagement:55, pattern:"auditory",    subjects:{math:72,science:68,english:85,history:78}, trend:-14, submitted:8, total:10, behavior:"inconsistent", risk:"MED"  },
  { id:"STU005", name:"Kiran Das",      grade:11, gpa:1.8, attendance:41, engagement:22, pattern:"at-risk",     subjects:{math:38,science:42,english:45,history:40}, trend:-22, submitted:2, total:10, behavior:"disengaged",   risk:"HIGH" },
  { id:"STU006", name:"Riya Kapoor",    grade:10, gpa:3.9, attendance:96, engagement:88, pattern:"visual",      subjects:{math:90,science:87,english:92,history:88}, trend:+6,  submitted:10,total:10, behavior:"focused",      risk:"NONE" },
  { id:"STU007", name:"Dev Sharma",     grade:11, gpa:3.5, attendance:91, engagement:82, pattern:"collaborative",subjects:{math:78,science:82,english:80,history:85}, trend:+4,  submitted:9, total:10, behavior:"social",       risk:"NONE" },
  { id:"STU008", name:"Ananya Roy",     grade:10, gpa:3.1, attendance:84, engagement:67, pattern:"visual",      subjects:{math:70,science:75,english:78,history:72}, trend:0,   submitted:8, total:10, behavior:"steady",       risk:"LOW"  },
  { id:"STU009", name:"Vikram Singh",   grade:11, gpa:2.6, attendance:69, engagement:41, pattern:"self-directed",subjects:{math:55,science:60,english:65,history:58}, trend:-9,  submitted:5, total:10, behavior:"independent",  risk:"MED"  },
  { id:"STU010", name:"Meera Joshi",    grade:10, gpa:4.0, attendance:98, engagement:95, pattern:"self-directed",subjects:{math:96,science:94,english:98,history:95}, trend:+8,  submitted:10,total:10, behavior:"exemplary",    risk:"NONE" },
  { id:"STU011", name:"Aditya Kumar",   grade:11, gpa:3.3, attendance:87, engagement:74, pattern:"collaborative",subjects:{math:74,science:78,english:76,history:80}, trend:+2,  submitted:9, total:10, behavior:"cooperative",  risk:"NONE" },
  { id:"STU012", name:"Pooja Nair",     grade:10, gpa:2.1, attendance:55, engagement:30, pattern:"at-risk",     subjects:{math:42,science:48,english:50,history:45}, trend:-18, submitted:3, total:10, behavior:"anxious",      risk:"HIGH" },
  { id:"STU013", name:"Sameer Gupta",   grade:11, gpa:3.6, attendance:93, engagement:85, pattern:"auditory",    subjects:{math:80,science:83,english:88,history:86}, trend:+5,  submitted:10,total:10, behavior:"engaged",      risk:"NONE" },
  { id:"STU014", name:"Divya Krishnan", grade:10, gpa:2.8, attendance:76, engagement:50, pattern:"repetition",  subjects:{math:62,science:65,english:68,history:60}, trend:-3,  submitted:6, total:10, behavior:"hesitant",     risk:"MED"  },
  { id:"STU015", name:"Rohan Bose",     grade:11, gpa:3.4, attendance:89, engagement:78, pattern:"exploratory", subjects:{math:76,science:80,english:74,history:82}, trend:+3,  submitted:9, total:10, behavior:"curious",      risk:"NONE" },
  { id:"STU016", name:"Kavya Reddy",    grade:10, gpa:1.5, attendance:38, engagement:18, pattern:"at-risk",     subjects:{math:30,science:35,english:40,history:33}, trend:-28, submitted:1, total:10, behavior:"withdrawn",    risk:"HIGH" },
  { id:"STU017", name:"Nikhil Iyer",    grade:11, gpa:3.7, attendance:94, engagement:90, pattern:"exploratory", subjects:{math:88,science:91,english:84,history:89}, trend:+7,  submitted:10,total:10, behavior:"inquisitive",  risk:"NONE" },
  { id:"STU018", name:"Shruti Rao",     grade:10, gpa:3.0, attendance:82, engagement:62, pattern:"visual",      subjects:{math:68,science:72,english:75,history:70}, trend:-1,  submitted:8, total:10, behavior:"visual-pref",  risk:"LOW"  },
  { id:"STU019", name:"Amit Shah",      grade:11, gpa:2.3, attendance:65, engagement:35, pattern:"repetition",  subjects:{math:50,science:55,english:52,history:48}, trend:-10, submitted:5, total:10, behavior:"mechanical",   risk:"MED"  },
  { id:"STU020", name:"Tanya Malhotra", grade:10, gpa:3.9, attendance:97, engagement:92, pattern:"collaborative",subjects:{math:91,science:89,english:95,history:93}, trend:+9,  submitted:10,total:10, behavior:"leadership",   risk:"NONE" },
];

const INTERVENTIONS = [
  { id:"INT001", student:"Riya Kapoor",    type:"Personalized Study Plan",    date:"2025-01-15", status:"Active",    outcome:"quiz +18%", category:"academic"    },
  { id:"INT002", student:"Dev Sharma",     type:"Peer Tutoring Match",        date:"2025-01-10", status:"Complete",  outcome:"grade +22%",category:"social"      },
  { id:"INT003", student:"Ananya Roy",     type:"Visual Resource Pack",       date:"2025-01-18", status:"Active",    outcome:"Monitoring", category:"learning"   },
  { id:"INT004", student:"Vikram Singh",   type:"1:1 Counseling Session",     date:"2025-01-20", status:"Scheduled", outcome:"Pending",    category:"behavioral" },
  { id:"INT005", student:"Arjun Mehta",    type:"Attendance Alert to Parents",date:"2025-01-12", status:"Active",    outcome:"attn +10%",  category:"behavioral" },
  { id:"INT006", student:"Pooja Nair",     type:"Anxiety Support Referral",   date:"2025-01-16", status:"Active",    outcome:"Monitoring", category:"wellbeing"  },
  { id:"INT007", student:"Kiran Das",      type:"Emergency Parent Meeting",   date:"2025-01-19", status:"Scheduled", outcome:"Pending",    category:"behavioral" },
  { id:"INT008", student:"Rahul Verma",    type:"Spaced Repetition Program",  date:"2025-01-08", status:"Complete",  outcome:"score +15%", category:"academic"   },
];

const LEARNING_PATTERNS = [
  {
    id: "visual",
    name: "Visual Learners",
    icon: "⚡",
    count: 68,
    color: "#3b82f6",
    desc: "Process information best through diagrams, charts, videos, and spatial content. Strong memory for visual layouts and color-coded systems.",
    traits: ["Diagram-focused", "Color memory", "Mind-mapping", "Video learning"],
    recommendations: ["Infographic summaries", "Color-coded notes", "Video lectures", "Flow charts"],
    avgScore: 76,
    improvement: "+12%"
  },
  {
    id: "auditory",
    name: "Auditory Learners",
    icon: "🎧",
    count: 42,
    color: "#8b5cf6",
    desc: "Learn most effectively through listening, discussion, and verbal explanation. Prefer podcasts, debates, and oral recitation over written text.",
    traits: ["Discussion-driven", "Verbal recall", "Rhythm-memory", "Podcast learning"],
    recommendations: ["Audio recordings", "Group discussions", "Verbal repetition", "Oral quizzes"],
    avgScore: 74,
    improvement: "+9%"
  },
  {
    id: "collaborative",
    name: "Collaborative Learners",
    icon: "🤝",
    count: 57,
    color: "#10b981",
    desc: "Thrive in group settings, peer learning, and project-based activities. Social interaction drives motivation and retention.",
    traits: ["Group synergy", "Peer teaching", "Project-based", "Team motivation"],
    recommendations: ["Study groups", "Peer tutoring", "Group projects", "Team challenges"],
    avgScore: 78,
    improvement: "+14%"
  },
  {
    id: "self-directed",
    name: "Self-Directed Learners",
    icon: "🎯",
    count: 38,
    color: "#f59e0b",
    desc: "Highly autonomous, goal-oriented learners who excel with independent research and self-paced content. Motivated by mastery.",
    traits: ["Goal-oriented", "Self-paced", "Research-driven", "Intrinsic motivation"],
    recommendations: ["Advanced projects", "Research tasks", "Self-assessment", "Skill challenges"],
    avgScore: 82,
    improvement: "+7%"
  },
  {
    id: "repetition",
    name: "Repetition-Based",
    icon: "🔁",
    count: 29,
    color: "#ef4444",
    desc: "Consolidate learning through repetition, drill, and spaced review. Rely on pattern recognition and procedural memory.",
    traits: ["Spaced recall", "Drill practice", "Procedural focus", "Pattern recognition"],
    recommendations: ["Flashcard systems", "Spaced repetition", "Practice drills", "Timed quizzes"],
    avgScore: 68,
    improvement: "+18%"
  },
  {
    id: "exploratory",
    name: "Exploratory Learners",
    icon: "🌊",
    count: 13,
    color: "#06b6d4",
    desc: "Driven by curiosity and discovery. Connect ideas across domains and learn best through open-ended inquiry and experimentation.",
    traits: ["Cross-domain thinking", "Curiosity-driven", "Experimental", "Big-picture focus"],
    recommendations: ["Open-ended projects", "Case studies", "STEM challenges", "Debate exercises"],
    avgScore: 84,
    improvement: "+6%"
  }
];

const PERFORMANCE_WEEKS = {
  "7w": {
    labels: ["W1","W2","W3","W4","W5","W6","W7"],
    math:    [68,70,67,72,71,74,76],
    science: [72,71,73,70,74,75,77],
    english: [75,76,74,77,78,76,80],
    history: [65,67,66,68,69,70,72],
  },
  "30d": {
    labels: ["Jan 1","Jan 8","Jan 15","Jan 22","Jan 29"],
    math:    [65,68,70,73,76],
    science: [70,72,71,74,77],
    english: [73,75,76,78,80],
    history: [63,65,67,69,72],
  },
  "sem": {
    labels: ["Sep","Oct","Nov","Dec","Jan","Feb","Mar"],
    math:    [60,63,65,68,70,73,76],
    science: [65,67,69,71,73,75,77],
    english: [68,70,72,74,76,78,80],
    history: [58,61,63,65,67,69,72],
  }
};
