import React from 'react';
import UserProfile from '../UserPages/UserProfile';
import { useNavigate } from 'react-router-dom';


const SidebarLayout = ({userId}) => {
    const navigate = useNavigate();

const handleHome = () => {
  navigate('/');
};
const handleHistory = () => {
  navigate('/bookinghistory');
};
const handleFavorites = () => {
  navigate('/favorites');
};

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800 rounded-2xl">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-[#68bbe3] to-[#003060] px-2 py-4 gap-10 rounded-2xl">
            <div>
              <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Dashboard
              </a>
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <span className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl" onClick={handleHome}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                  <path fill="currentColor" fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6l2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2z" clipRule="evenodd" />
                </svg>
                Home
              </span>
              
              <span  className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl" onClick={handleHistory}>
              <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="2em"
      width="2em">
      <path d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z" />
    </svg>
                Booking History
              </span>
              <span className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl" onClick={handleFavorites}>
              <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em">
      <path d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4-.5-.3-1.1-.1-1.4.4L8.6 8.2 2.9 9c-.3 0-.5.1-.6.3-.4.4-.4 1 0 1.4l4.1 4-1 5.7c0 .2 0 .4.1.6.3.5.9.7 1.4.4l5.1-2.7 5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7 4.1-4c.2-.1.3-.3.3-.5z" />
    </svg>
                Favorites
              </span>
             
            </div>
          </nav>
        </div>
      </div>

     
        {/* Content Area */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <UserProfile userId={userId} />
        </div>
      </div>
    
  );
};

export default SidebarLayout;
