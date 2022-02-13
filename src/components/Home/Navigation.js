import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='home'>Home</Link>
        </li>
        <li>
          <Link to='events'>Events</Link>
        </li>
        <li>
          <Link to='FAQS'>FAQS</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;