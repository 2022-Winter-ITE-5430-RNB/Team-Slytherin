import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='About'>About</Link>
        </li>
        <li>
          <Link to='Contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='FAQS'>FAQS</Link>
        </li>
        <li>
          <Link to='Create'>Create New</Link>
          </li>
          <li>
          <Link to='events'>Events</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
        <li>
          <Link to='raise'>Raise</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
