import "./styles/Education.css";

const education = [
  {
    degree: "Diploma in Guidance & Counseling",
    school: "NCERT - Regional Institute of Education",
    period: "2019 - 2020",
    result: "Grade A",
  },
  {
    degree: "M.A. in Psychology",
    school: "Utkal University",
    period: "2016 - 2018",
    result: "73.94%",
  },
  {
    degree: "B.A. (Hons) Psychology",
    school: "Ravenshaw University",
    period: "2013 - 2016",
    result: "70.5%",
  },
];

const Education = () => {
  return (
    <section className="education-section section-container" id="education">
      <div className="section-heading">
        <p className="section-label">Education</p>
        <h2>Academic foundation in psychology and counseling.</h2>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <div>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
            </div>
            <div className="education-meta">
              <span>{item.period}</span>
              <strong>{item.result}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
