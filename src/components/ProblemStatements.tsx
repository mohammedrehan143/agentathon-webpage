import React, { useState } from 'react';

interface ProblemStatement {
  id: number;
  titleShort: string;
  titleFull: string;
  background: string;
  problem: string;
  objective: string;
  reference?: string;
  referenceLabel?: string;
  teams: string[];
}

const problemStatements: ProblemStatement[] = [
  {
    id: 1,
    titleShort: "PS1",
    titleFull: "ResumeVault AI — Agentic Career Database & Personalized Resume Assistant",
    background: "Arjun is a final-year engineering student with solid skills, multiple projects, internships, and certifications. Every time he applies for a job, he spends hours rewriting his resume from scratch — still unsure if it matches what the company wants.",
    problem: "Job seekers today have no centralized place to store their career data, and no intelligent system to turn that data into a job-specific, ATS-friendly resume automatically.",
    objective: "Build an Agentic AI system that serves as a user's universal career database and automatically generates a personalized, job-specific resume.",
    reference: "https://github.com/topics/resume-builder",
    referenceLabel: "View Resume Builder Projects",
    teams: ["Binary Bandits", "THE CODING BUZZERS", "Beginners luck", "Null and void", "Model Makers", "4chaman", "Team modi"]
  },
  {
    id: 2,
    titleShort: "PS2",
    titleFull: "WealthPath AI — Personalized Financial Roadmap for Early Retirement",
    background: "Priya earns a decent salary every month but has no savings, no investments, and no financial plan. She dreams of retiring early but gets lost in finance jargon.",
    problem: "The majority of young earners are financially unaware and have no access to personalized, affordable financial guidance.",
    objective: "Build an Agentic AI personal finance assistant that collects a user's complete financial picture and generates a simple, personalized roadmap.",
    reference: "https://www.investopedia.com/financial-advisor-4689736",
    referenceLabel: "Financial Advisor Guide",
    teams: ["Error 404", "Sheetal Vig & Team", "The Black Hats", "Hydra", "Debug Begginers", "Silicon", "TrioTech"]
  },
  {
    id: 3,
    titleShort: "PS3",
    titleFull: "TripMind AI — Intelligent Group Travel Planner for Every Kind of Traveler",
    background: "Ravi is organizing a family vacation. His group includes a 5-year-old, two teenagers, and his parents in their 60s — all with different needs.",
    problem: "Travel planning tools today are generic and one-size-fits-all. They don't account for group composition, age-specific needs, and budget constraints.",
    objective: "Build an AI-powered travel planning assistant that takes in group details and generates a fully personalized trip plan.",
    reference: "https://www.skyscanner.net/news/group-travel-planning-apps",
    referenceLabel: "Group Travel Apps",
    teams: ["Aura 999+", "4 score", "TVK", "Thala ka bhala", "CODUSOINOUS", "VibeForge", "AI TECHIES", "CodeXX", "Nexora", "PowerPuffGirls"]
  },
  {
    id: 4,
    titleShort: "PS4",
    titleFull: "SecureAgent AI — Multi-Agent Agentic Platform for Intelligent Code Security Analysis",
    background: "A fast-growing startup shipped a major product update. Three days later, hackers exploited a critical vulnerability that was undetected for months.",
    problem: "Modern security scanners detect issues but fail to explain them, prioritize them, or fix them in a way developers can act on.",
    objective: "Build a multi-agent AI security platform where specialized agents collaborate to scan a repository and deliver fix recommendations.",
    reference: "https://owasp.org/www-project-top-ten/",
    referenceLabel: "OWASP Top 10 Security Risks",
    teams: ["Nah, We'd Prompt", "Palmary", "Rangers", "Tech Divas", "Team269", "Non coders"]
  }
];

const ProblemStatements: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const activePS = problemStatements.find(ps => ps.id === activeId) || problemStatements[0];

  return (
    <section className="ps-section reveal" id="hall-of-fame">
      <div className="section-header">
        <div className="section-badge">The Champions</div>
        <div className="section-title">Hall of Fame</div>
        <div className="section-rule"></div>
      </div>

      <div className="hall-of-fame-wrap">
        <div className="winners-grid">
          {/* Runner Up 1 */}
          <div className="winner-card runner-up silver">
            <div className="medal-icon">🥈</div>
            <div className="winner-rank">Runner Up</div>
            <div className="winner-name">Aura 999+</div>
            <div className="winner-project">PS3: TripMind AI</div>
          </div>

          {/* Winner */}
          <div className="winner-card grand-winner gold">
            <div className="crown-icon">🏆</div>
            <div className="winner-rank">Grand Winner</div>
            <div className="winner-name">Binary Bandits</div>
            <div className="winner-project">PS1: ResumeVault AI</div>
            <div className="winner-sparkle"></div>
          </div>

          {/* Runner Up 2 */}
          <div className="winner-card runner-up bronze">
            <div className="medal-icon">🥉</div>
            <div className="winner-rank">2nd Runner Up</div>
            <div className="winner-name">Error 404</div>
            <div className="winner-project">PS2: WealthPath AI</div>
          </div>
        </div>
      </div>

      <div className="section-header" style={{ marginBottom: '32px' }}>
        <div className="section-badge">Innovations</div>
        <div className="section-title">Project Submissions</div>
        <div className="section-rule"></div>
      </div>

      <div className="ps-container">
        <div className="ps-tabs">
          {problemStatements.map((ps) => (
            <button
              key={ps.id}
              className={`ps-tab-btn ${activeId === ps.id ? 'active' : ''}`}
              onClick={() => setActiveId(ps.id)}
            >
              <span className="ps-tab-title">{ps.titleShort}</span>
              <div className="ps-count-wrap">
                <span className="ps-count-current">{ps.teams.length}</span>
                <span className="ps-count-total">Teams</span>
              </div>
            </button>
          ))}
        </div>

        <div className="ps-display-card">
          <div className="ps-display-content">
            <h3 className="ps-display-title">{activePS.titleFull}</h3>
            
            <div className="ps-grid">
              <div className="ps-info-block">
                <h4 className="ps-block-label">Objective</h4>
                <p className="ps-block-text">{activePS.objective}</p>
              </div>

              <div className="ps-info-block">
                <h4 className="ps-block-label">The Teams</h4>
                <div className="teams-chip-container">
                  {activePS.teams.map((team, index) => (
                    <span key={index} className="team-chip">
                      {team}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
