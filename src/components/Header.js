import { Link } from 'react-router-dom';

import Nav from './Nav';

const Header = (props) => {
  return (
    <div className="header" style={{ background: props.accentColor }}>
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyApp</h1>
        </Link>
        <Nav user={props.user} />
      </div>
    </div>
  );
};

export default Header;