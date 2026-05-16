import { lazy, Suspense } from "react";
import "./styles/Landing.css";

const InsightScene = lazy(() => import("./InsightScene"));

const Landing = () => {
  return (
    <section className="landing-section" id="home">
      <div className="landing-container">
        <p className="landing-kicker">
          Psychology | Consumer Behavior | User Research
        </p>
        <div className="landing-grid">
          <div className="landing-intro">
            <h1>Abhipsa Satpathy</h1>
            <p>
              Psychology postgraduate translating behavioral insight into
              consumer research, market-facing content, and clear decision
              support for marketing and user research teams.
            </p>
            <div className="landing-actions">
              <a href="#contact">Get in touch</a>
              <a
                href="https://linkedin.com/in/abhipsasatpathy9"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <Suspense fallback={<div className="insight-scene-fallback" />}>
            <InsightScene />
          </Suspense>
          <aside className="landing-profile" aria-label="Career snapshot">
            <figure className="resume-preview">
              <img
                src="/images/abhipsa-cv-preview.png"
                alt="Abhipsa Satpathy CV preview"
              />
              <figcaption>CV snapshot</figcaption>
            </figure>
            <div>
              <span>Based in</span>
              <strong>Zhuhai, Guangdong, China</strong>
            </div>
            <div>
              <span>Target roles</span>
              <strong>Marketing, Brand Content, UX Research</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Qualitative insight and behavior analysis</strong>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Landing;
