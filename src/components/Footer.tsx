import { Link } from 'react-router-dom';
function Footer()  {
  return (
    <footer>
      <p>
        All Rights Reserved by Faria Shahriar ©{' '}  {/* "Credits" is a clickable link that opens in a new tab */}
        <Link to="./Credits">Credits</Link>
      </p>
    </footer>
  );
};

export default Footer;
