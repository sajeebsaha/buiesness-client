import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hook/useFirebase';

const Navbar = () => {
  const {user,logOut}=useFirebase()
    return (
        <nav className="navbar container  navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Buisness Tally</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addproduct">AddProduct</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewproduct">ViewProduct</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/searchproduct">searchproduct</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">{user?.email && <button onClick={logOut} className='btn btn-danger'>Logout</button> }</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;