// Header Component: Accepts title and subtitle as props, both are strings.
const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <header>
    {/* Display title */}
    <h1>{title}</h1>
    
    {/* Display subtitle */}
    <h2>{subtitle}</h2>
  </header>
);

export default Header;

   
   