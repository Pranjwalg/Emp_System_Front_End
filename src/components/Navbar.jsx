import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-2xl">
          TalentForge
          </Link>

          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/employees" className="text-white">
                Employees
              </Link>
            </li>
            <li>
              <Link to="/departments" className="text-white">
                Departments
              </Link>
            </li>
            <li>
              <Link to="/reports" className="text-white">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-white">
                Settings
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-2">
            <img
              src="avatar.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white">John Doe</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
