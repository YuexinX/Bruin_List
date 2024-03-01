import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Bruinlist.</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Categories</Link>
        <Link to="/">Search</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#2774AE',
          borderRadius: '8px' 
        }}>New Listing</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;