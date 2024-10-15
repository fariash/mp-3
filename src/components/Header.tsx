// Header Component: Accepts title and subtitle as props, both are strings.
const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <header>
    {/* Display the title */}
    <h1>{title}</h1>
    
    {/* Display the subtitle */}
    <h2>{subtitle}</h2>
  </header>
);

export default Header;

   
   