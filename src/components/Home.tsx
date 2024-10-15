import '../style.css'; 

export default function Home() {
  return (
    <main>
      <section>
        {/* Profile picture with alt text */}
        <img src="IMG_8526.jpg" alt="Picture of Faria" className="profile-pic" />
        
        {/* Container for description */}
        <div>
          <p>
            Hello! My name is Faria Shahriar and I am from Clinton, Massachusetts! I am currently a senior at Boston
            University studying computer science with a minor in biology. In my introductory and upper-level coursework
            at BU, I've developed a strong passion for the field of bioinformatics. Through various experiences, I have
            been able to apply my knowledge to the world around me and am now extremely interested in pursuing
            opportunities related to these fields. My ultimate goal is to study bioinformatics/computational biology
            in graduate school.
          </p>

          <p>
            Thank you for visiting my website! Here you will find my work experiences, projects, skills, and other
            information that might be of interest to you. Feel free to reach out to me at farias@bu.edu!
          </p>
        </div>
      </section>
    </main>
  );
}
