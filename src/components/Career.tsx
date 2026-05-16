import "./styles/Career.css";

const experience = [
  {
    role: "Research Assistant",
    organization: "Indian Institute of Management (IIM) Sambalpur",
    period: "Aug 2024 - Mar 2025",
    description:
      "Conducted qualitative research, stakeholder engagement analysis, and insight synthesis. Supported workshops and outreach activities with structured communication and content framing.",
  },
  {
    role: "Assistant Professor - Psychology",
    organization: "JAIN University, Bengaluru",
    period: "May 2024 - Jul 2024",
    description:
      "Delivered applied psychology content for business and psychology students. Designed presentations and simplified complex concepts for diverse audiences.",
  },
  {
    role: "Psychology Research Scholar & Teaching Assistant",
    organization: "Indian Institute of Technology (IIT) Guwahati",
    period: "Jul 2021 - Apr 2024",
    description:
      "Researched organizational behavior and decision-making. Assisted HRM and OB courses, translating theory into applied case discussions and insight reports.",
  },
  {
    role: "Talent Acquisition & Research Associate",
    organization: "Factspan Data Analytics",
    period: "Dec 2020 - Mar 2021",
    description:
      "Handled behavioral screening, candidate research, and decision-fit assessment for analyst and business roles. Supported sourcing and communication strategies.",
  },
];

const Career = () => {
  return (
    <section className="career-section section-container" id="experience">
      <div className="career-container">
        <div className="section-heading">
          <p className="section-label">Experience</p>
          <h2>Research, teaching, and applied psychology experience.</h2>
        </div>
        <div className="career-info">
          {experience.map((item) => (
            <article className="career-info-box" key={item.role}>
              <div className="career-info-in">
                <div className="career-role">
                  <h3>{item.role}</h3>
                  <h4>{item.organization}</h4>
                </div>
                <p className="career-period">{item.period}</p>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
