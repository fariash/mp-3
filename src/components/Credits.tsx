import Main from './Main'; 
import '../style.css'; 

export default function Credit() {
  return (
    <Main title="Credits"> {/* Using Main component with title */}
    <section>
    {/* Profile picture with alt text */}
    <img src="IMG_8526.jpg" alt="Picture of Faria" className="profile-pic" />
    <div>
    <p>This website was designed and developed by Faria Shahriar. All images are not authorized for any use.
    Special thanks to the following tools and resources that made this project possible:
    </p>
        <li>React</li>
        <li>TypeScript</li>
        <li>CSS</li>
        <li> BU CS391</li>
  </div>
</section>
</Main>
  );
}

