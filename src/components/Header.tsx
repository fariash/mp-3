interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header>
      {/* Display title */}
      <h1>{title}</h1>
      
      {/* Display subtitle */}
      <h2>{subtitle}</h2>
    </header>
  );
}

export default Header;
