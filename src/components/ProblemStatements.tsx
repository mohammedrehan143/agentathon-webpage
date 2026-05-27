import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface ProblemStatement {
  id: number;
  titleShort: string;
  titleFull: string;
  background: string;
  problem: string;
  objective: string;
  reference?: string;
  referenceLabel?: string;
}

const problemStatements: ProblemStatement[] = [
  {
    id: 1,
    titleShort: "PS1",
    titleFull: "ResumeVault AI — Agentic Career Database & Personalized Resume Assistant",
    background: "Arjun is a final-year engineering student with solid skills, multiple projects, internships, and certifications. Every time he applies for a job, he spends hours rewriting his resume from scratch — still unsure if it matches what the company wants. His applications rarely get responses, not because he lacks skills, but because his resume fails to communicate the right things to the right employer at the right time.",
    problem: "Job seekers today have no centralized place to store their career data, and no intelligent system to turn that data into a job-specific, ATS-friendly resume automatically. Every application becomes a manual, time-consuming process with no guarantee of relevance or success.",
    objective: "Build an Agentic AI system that serves as a user's universal career database — storing skills, projects, achievements, certifications, and experiences — and automatically generates a personalized, job-specific resume the moment a job description is provided. The system should also assist in job discovery and application.",
    reference: "https://github.com/topics/resume-builder",
    referenceLabel: "View Resume Builder Projects"
  },
  {
    id: 2,
    titleShort: "PS2",
    titleFull: "WealthPath AI — Personalized Financial Roadmap for Early Retirement",
    background: "Priya earns a decent salary every month but has no savings, no investments, and no financial plan. She dreams of retiring early and living life on her own terms — but every time she tries to understand personal finance, she gets lost in jargon, complex tools, and advice that doesn't fit her life. She doesn't need a finance degree. She just needs someone to tell her what to do, step by step, in simple words.",
    problem: "The majority of young earners are financially unaware and have no access to personalized, affordable financial guidance. Generic advice doesn't account for individual income, lifestyle, debts, or goals — leaving people stuck in a cycle of earning without ever building real wealth.",
    objective: "Build an Agentic AI personal finance assistant that collects a user's complete financial picture, understands their goals and lifestyle, and generates a simple, personalized, and adjustable roadmap to help them save smarter, invest better, reduce debt, and achieve financial independence as early as possible.",
    reference: "https://www.investopedia.com/financial-advisor-4689736",
    referenceLabel: "Financial Advisor Guide"
  },
  {
    id: 3,
    titleShort: "PS3",
    titleFull: "TripMind AI — Intelligent Group Travel Planner for Every Kind of Traveler",
    background: "Ravi is organizing a family vacation. His group includes a 5-year-old, two teenagers, and his parents in their 60s — all with different needs, energy levels, and interests. On top of that, he has a fixed budget, no idea about the weather at the destination, and no clue which hotel is right for a group this diverse. Every travel platform gives him the same popular tourist list. Nothing is built for the real complexity of group travel.",
    problem: "Travel planning tools today are generic and one-size-fits-all. They don't account for group composition, age-specific needs, real-time weather, or budget constraints all at once — leaving travelers overwhelmed, underprepared, and often disappointed.",
    objective: "Build an AI-powered travel planning assistant that takes in group details — including ages, budget, destination, and travel dates — and generates a fully personalized trip plan covering transport options, stay recommendations, places to visit, local food, age-appropriate activities, and weather-based packing advice.",
    reference: "https://www.skyscanner.net/news/group-travel-planning-apps",
    referenceLabel: "Group Travel Apps"
  },
  {
    id: 4,
    titleShort: "PS4",
    titleFull: "SecureAgent AI — Multi-Agent Agentic Platform for Intelligent Code Security Analysis",
    background: "A fast-growing startup shipped a major product update. Three days later, hackers exploited a critical vulnerability that had been sitting undetected in the codebase for months. The security scanner had generated over 300 alerts — but developers ignored them because the reports were vague, overwhelming, and offered no clear direction. By the time the breach was discovered, the damage was irreversible.",
    problem: "Modern security scanners detect issues but fail to explain them, prioritize them, or fix them in a way developers can act on. The disconnect between security tools and developer workflows leaves codebases exposed — especially in fast-moving teams where no dedicated security engineer exists.",
    objective: "Build a multi-agent AI security platform where specialized agents collaborate to scan a repository, detect real vulnerabilities, assess threat severity using live intelligence, and deliver clear, developer-friendly fix recommendations — all integrated directly into the development workflow.",
    reference: "https://owasp.org/www-project-top-ten/",
    referenceLabel: "OWASP Top 10 Security Risks"
  }
];

const MAX_TEAMS = 15;

interface TeamSelection {
  name: string;
  email: string;
}

const ProblemStatements: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamEmail, setTeamEmail] = useState('');
  const [selectedPsId, setSelectedPsId] = useState<number>(1);
  const [selections, setSelections] = useState<Record<number, TeamSelection[]>>({ 1: [], 2: [], 3: [], 4: [] });

  useEffect(() => {
    fetchSelections();
  }, []);

  const fetchSelections = async () => {
    try {
      const { data, error } = await supabase
        .from('agentathon')
        .select('*');

      if (error) throw error;

      const organized: Record<number, TeamSelection[]> = { 1: [], 2: [], 3: [], 4: [] };
      data?.forEach((row: any) => {
        const psId = Number(row.ps_id);
        if (organized[psId]) {
          organized[psId].push({ name: row.team_name, email: row.email });
        }
      });
      setSelections(organized);
    } catch (err: any) {
      console.error('Error fetching selections details:', err);
      // More descriptive logging for the console
      if (err.message) console.error('Message:', err.message);
      if (err.details) console.error('Details:', err.details);
      if (err.hint) console.error('Hint:', err.hint);
    }
  };

  const openSelectionForm = () => {
    setSelectedPsId(activeId);
    setIsFormOpen(true);
  };

  const handleSelect = async () => {
    if (!teamName.trim()) {
      alert('Please enter your team name.');
      return;
    }
    if (!teamEmail.trim() || !teamEmail.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const allSelected = Object.values(selections).flat();
      if (allSelected.some(t => t.name.toLowerCase() === teamName.trim().toLowerCase())) {
        alert('This team name has already been registered.');
        setIsSubmitting(false);
        return;
      }
      if (allSelected.some(t => t.email.toLowerCase() === teamEmail.trim().toLowerCase())) {
        alert('This email address has already been registered.');
        setIsSubmitting(false);
        return;
      }

      if (selections[selectedPsId].length >= MAX_TEAMS) {
        alert('This problem statement is already full (15 teams).');
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from('agentathon')
        .insert([
          { team_name: teamName.trim(), email: teamEmail.trim(), ps_id: selectedPsId }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        if (error.code === '23505') {
          alert('This team name or email has already been registered.');
        } else {
          alert(`Database error: ${error.message || error.code}`);
        }
      } else {
        setTeamName('');
        setTeamEmail('');
        setIsFormOpen(false);
        alert(`Successfully selected PS${selectedPsId}!`);
        fetchSelections();
      }
    } catch (err: any) {
      console.error('Error saving selection:', err);
      alert('Failed to save selection: ' + (err.message || 'Unknown error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const activePS = problemStatements.find(ps => ps.id === activeId) || problemStatements[0];

  return (
    <section className="ps-section reveal" id="problem-statements">
      <div className="section-header">
        <div className="section-badge">Challenges</div>
        <div className="section-title">Problem Statements</div>
        <div className="section-rule"></div>
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={openSelectionForm}>
            Select Problem Statement
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="ps-modal-overlay">
          <div className="ps-selection-card">
            <button className="ps-modal-close" onClick={() => setIsFormOpen(false)}>×</button>
            <h3 className="ps-modal-title">Problem Statement Selection</h3>
            <div className="ps-input-group">
              <label htmlFor="team-name">Team Name</label>
              <input
                id="team-name"
                type="text"
                className="ps-input"
                placeholder="Enter team name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="ps-input-group">
              <label htmlFor="team-email">Email ID</label>
              <input
                id="team-email"
                type="email"
                className="ps-input"
                placeholder="Enter email address"
                value={teamEmail}
                onChange={(e) => setTeamEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="ps-input-group">
              <label htmlFor="ps-select">Problem Statement</label>
              <select
                id="ps-select"
                className="ps-select"
                value={selectedPsId}
                onChange={(e) => setSelectedPsId(Number(e.target.value))}
                disabled={isSubmitting}
              >
                {problemStatements.map(ps => (
                  <option key={ps.id} value={ps.id}>
                    {ps.titleShort} ({selections[ps.id].length}/{MAX_TEAMS})
                  </option>
                ))}
              </select>
            </div>
            <button 
              className="btn-select" 
              style={{ width: '100%', marginTop: '8px' }} 
              onClick={handleSelect}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Confirm Selection'}
            </button>
          </div>
        </div>
      )}

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
                <span className="ps-count-current">{selections[ps.id].length}</span>
                <span className="ps-count-total">/{MAX_TEAMS}</span>
              </div>
            </button>
          ))}
        </div>

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

            {activePS.reference && (
              <div className="ps-reference">
                <span style={{ fontWeight: 700, fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Reference:</span>
                <a href={activePS.reference} target="_blank" rel="noopener noreferrer" className="ps-ref-link">
                  {activePS.referenceLabel || 'View Resources'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            )}

            <div className="ps-teams-section">
              <h4 className="ps-block-label">Selected Teams</h4>
              <div className="ps-teams-grid">
                {Array.from({ length: MAX_TEAMS }).map((_, i) => {
                  const team = selections[activePS.id][i];
                  return (
                    <div key={i} className={`ps-team-name ${team ? 'filled' : ''}`}>
                      {team ? team.name : `-`}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
