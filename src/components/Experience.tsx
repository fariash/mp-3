import Main from './Main'; 

function Experience()  {
  return (
    <Main title="Work History"> {/* Section title */}
      <h3>Software Engineer Intern</h3>
      <p>PadMatch Realty</p>
      <p>Duration: Jan. 2024 - May 2024</p>
      <p>Achievements: Worked alongside 12 teammates to plan and launch a real estate software product, Used UI/UX by analyzing user behavior insights from Google Analytics</p>

      <h3>Research Intern</h3>
      <p>Boston University School of Medicine, Campbell Lab</p>
      <p>Duration: Sept. 2023 - Dec. 2023</p>
      <p>Achievements: Utilized data analysis pipelines such as Cell Ranger to conduct single-cell RNA sequencing, Managed and analyzed data on a weekly basis to study cancerous cell populations</p>

      <h3>John B. Mitchell's Chiropractic Clinic</h3>
      <p>Duration: Jan. 2019 - March 2021</p>
      <p>Achievements: Obtained clinical skills such as diagnostic reasoning by interacting with patients and assisting them</p>
    </Main>
  );
};

export default Experience;

