import "./styles/WhatIDo.css";

const strengths = [
  "Consumer Behavior Analysis",
  "Qualitative User Research",
  "Marketing Psychology",
  "Content & Message Framing",
  "Survey & Interview Design",
  "Presentation & Reporting",
];

const tools = [
  "Google Workspace",
  "Microsoft Office",
  "Canva",
  "LinkedIn Research",
  "Basic Excel Analysis",
];

const targetRoles = [
  "Marketing Assistant",
  "Brand / Content Assistant",
  "User Research Assistant",
  "Consumer Insight / UX Research Intern",
  "International Marketing Coordinator",
];

const processSteps = [
  {
    step: "Observe",
    detail: "Read behavior, context, motivation, and communication signals.",
  },
  {
    step: "Frame",
    detail: "Turn raw findings into useful questions, surveys, and messages.",
  },
  {
    step: "Synthesize",
    detail: "Create clear summaries that support content and market decisions.",
  },
];

const WhatIDo = () => {
  return (
    <section className="expertise-section section-container" id="expertise">
      <div className="expertise-layout">
        <div className="section-heading expertise-sticky">
          <p className="section-label">Expertise</p>
          <h2>Core strengths for research, content, and consumer insight.</h2>
          <div className="research-pathway" aria-label="Research pathway">
            {processSteps.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="expertise-grid">
          <article className="expertise-card expertise-card-large">
            <h3>Research & Insight</h3>
            <p>
              Qualitative research, behavioral analysis, and insight synthesis
              shaped by psychology, organizational behavior, and teaching
              experience.
            </p>
            <div className="tag-list">
              {strengths.map((strength) => (
                <span key={strength}>{strength}</span>
              ))}
            </div>
          </article>

          <article className="expertise-card">
            <h3>Tools</h3>
            <ul>
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>

          <article className="expertise-card">
            <h3>Languages</h3>
            <ul>
              <li>English: Professional</li>
              <li>Hindi / Odia: Native</li>
              <li>Chinese: Beginner, learning</li>
            </ul>
          </article>

          <article className="expertise-card expertise-card-wide">
            <h3>Career Targets</h3>
            <div className="target-list">
              {targetRoles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
