import Main from './Main'; 

function Skills() {
  return (
    <Main title="Skills"> {/* Main component with title prop */}
      <section>
        {/* Programming Languages Section */}
        <h2>Programming Languages</h2>
        <p>Python, Java, C, HTML/CSS, JavaScript, Assembly, Bash, Go, SQL</p>

        {/* Developer Tools Section */}
        <h2>Developer Tools</h2>
        <p>VS Code, Git, GitHub, Spyder, Unix</p>

        {/* Laboratory Skills Section */}
        <h2>Laboratory Skills</h2>
        <p>Single-cell RNA sequencing, Cell Ranger, genome sequencing, statistical/data analysis</p>
      </section>
    </Main>
  );
};

export default Skills;


