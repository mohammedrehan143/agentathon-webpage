import React, { useState } from 'react';

interface ProblemStatement {
  id: number;
  titleShort: string;
  titleFull: string;
  background: string;
  problem: string;
  objective: string;
}

const problemStatements: ProblemStatement[] = [
  {
    id: 1,
    titleShort: "ResumeVault AI",
    titleFull: "ResumeVault AI — Agentic Career Database & Personalized Resume Assistant",
    background: "Arjun is a final-year engineering student with solid skills, multiple projects, internships, and certifications. Every time he applies for a job, he spends hours rewriting his resume from scratch — still unsure if it matches what the company wants. His applications rarely get responses, not because he lacks skills, but because his resume fails to communicate the right things to the right employer at the right time.",
    problem: "Job seekers today have no centralized place to store their career data, and no intelligent system to turn that data into a job-specific, ATS-friendly resume automatically. Every application becomes a manual, time-consuming process with no guarantee of relevance or success.",
    objective: "Build an Agentic AI system that serves as a user's universal career database — storing skills, projects, achievements, certifications, and experiences — and automatically generates a personalized, job-specific resume the moment a job description is provided. The system should also assist in job discovery and application."
  },
  {
    id: 2,
    titleShort: "WealthPath AI",
    titleFull: "WealthPath AI — Personalized Financial Roadmap for Early Retirement",
    background: "Priya earns a decent salary every month but has no savings, no investments, and no financial plan. She dreams of retiring early and living life on her own terms — but every time she tries to understand personal finance, she gets lost in jargon, complex tools, and advice that doesn't fit her life. She doesn't need a finance degree. She just needs someone to tell her what to do, step by step, in simple words.",
    problem: "The majority of young earners are financially unaware and have no access to personalized, affordable financial guidance. Generic advice doesn't account for individual income, lifestyle, debts, or goals — leaving people stuck in a cycle of earning without ever building real wealth.",
    objective: "Build an Agentic AI personal finance assistant that collects a user's complete financial picture, understands their goals and lifestyle, and generates a simple, personalized, and adjustable roadmap to help them save smarter, invest better, reduce debt, and achieve financial independence as early as possible."
  },
  {
    id: 3,
    titleShort: "TripMind AI",
    titleFull: "TripMind AI — Intelligent Group Travel Planner for Every Kind of Traveler",
    background: "Ravi is organizing a family vacation. His group includes a 5-year-old, two teenagers, and his parents in their 60s — all with different needs, energy levels, and interests. On top of that, he has a fixed budget, no idea about the weather at the destination, and no clue which hotel is right for a group this diverse. Every travel platform gives him the same popular tourist list. Nothing is built for the real complexity of group travel.",
    problem: "Travel planning tools today are generic and one-size-fits-all. They don't account for group composition, age-specific needs, real-time weather, or budget constraints all at once — leaving travelers overwhelmed, underprepared, and often disappointed.",
    objective: "Build an AI-powered travel planning assistant that takes in group details — including ages, budget, destination, and travel dates — and generates a fully personalized trip plan covering transport options, stay recommendations, places to visit, local food, age-appropriate activities, and weather-based packing advice."
  },
  {
    id: 4,
    titleShort: "SecureAgent AI",
    titleFull: "SecureAgent AI — Multi-Agent Agentic Platform for Intelligent Code Security Analysis",
    background: "A fast-growing startup shipped a major product update. Three days later, hackers exploited a critical vulnerability that had been sitting undetected in the codebase for months. The security scanner had generated over 300 alerts — but developers ignored them because the reports were vague, overwhelming, and offered no clear direction. By the time the breach was discovered, the damage was irreversible.",
    problem: "Modern security scanners detect issues but fail to explain them, prioritize them, or fix them in a way developers can act on. The disconnect between security tools and developer workflows leaves codebases exposed — especially in fast-moving teams where no dedicated security engineer exists.",
    objective: "Build a multi-agent AI security platform where specialized agents collaborate to scan a repository, detect real vulnerabilities, assess threat severity using live intelligence, and deliver clear, developer-friendly fix recommendations — all integrated directly into the development workflow."
  }
];

const ProblemStatements: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const activePS = activeId ? problemStatements.find(ps => ps.id === activeId) : null;

  return (
    <section className="ps-section reveal" id="problem-statements">
      <div className="section-header">
        <div className="section-badge">Challenges</div>
        <div className="section-title">Problem Statements</div>
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
              <span className="ps-tab-number">0{ps.id}</span>
              <span className="ps-tab-title">{ps.titleShort}</span>
            </button>
          ))}
        </div>

        {activePS && (
          <div className="ps-display-card">
            <div className="ps-display-content">
              <div className="ps-display-header">
                <h3 className="ps-display-title">{activePS.titleFull}</h3>
              </div>
              
              <div className="ps-grid">
                <div className="ps-info-block">
                  <h4 className="ps-block-label">Background</h4>
                  <p className="ps-block-text">{activePS.background}</p>
                </div>
                
                <div className="ps-info-block">
                  <h4 className="ps-block-label">Problem</h4>
                  <p className="ps-block-text">{activePS.problem}</p>
                </div>

                <div className="ps-info-block ps-full-width">
                  <h4 className="ps-block-label">Objective</h4>
                  <p className="ps-block-text">{activePS.objective}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProblemStatements;
