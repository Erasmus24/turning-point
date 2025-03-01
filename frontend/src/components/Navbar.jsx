import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/employer">Employer Dashboard</Link>
      <Link to="/jobseeker">Job Seeker Dashboard</Link>
      <Link to="/admin">Admin Panel</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;