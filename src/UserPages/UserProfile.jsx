
import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import { auth, db } from './Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const UserProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [userDetails, setUserDetails] = useState(null);

  const ProfilePic = require('../assets/Profilepic.jpeg');
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser; // Get the current user

      if (user) {
        try {
          const userData = await getDoc(doc(db, 'users', user.uid));
          if (userData.exists()) {
            setUserDetails(userData.data());
          } else {
            toast.error('No user data found!');
            setUserDetails(null);
          }
        } catch (error) {
          toast.error('Error fetching user data: ' + error.message);
          console.error('Error fetching user data:', error);
        }
      } else {
        setUserDetails(null);
      }
    };

    // Fetch user data when the component mounts
    fetchUserData();
    
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setUserDetails(null);
      } else {
        fetchUserData(); // Fetch user data when user state changes
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div
      className={`font-sans antialiased leading-normal tracking-wider bg-cover ${
        isDarkMode ? 'text-gray-100' : 'text-gray-900'
      }`}
      style={{
        backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')"
      }}
    >
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      
        <div
          id="profile"
          className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl mx-6 lg:mx-0 ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
          } opacity-75`}
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')"
              }}></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Your Name</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              What you do
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              Your Location - 25.0000° N, 71.0000° W
            </p>
            <p className="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

            <div className="pt-12 pb-8">
              <button className="bg-[#68bbe3] hover:bg-[#0e86d4] text-white font-bold py-2 px-4 rounded-full">
                Edit
              </button>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              {['facebook', 'twitter', 'github', 'unsplash', 'dribbble', 'instagram', 'youtube'].map(platform => (
                <a className="link" href="#" key={platform} data-tippy-content={`@${platform}_handle`}>
                  <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24">
                    <title>{platform.charAt(0).toUpperCase() + platform.slice(1)}</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.421.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.072-4.85.072s-3.585-.015-4.85-.072c-1.17-.055-1.805-.249-2.227-.413a3.4 3.4 0 0 1-1.381-.896c-.419-.422-.679-.82-.896-1.382-.164-.422-.36-1.057-.413-2.227-.057-1.266-.072-1.646-.072-4.85s.015-3.585.072-4.85c.055-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.419-.419.82-.679 1.382-.896.422-.164 1.057-.36 2.227-.413C8.415 2.176 8.703 2.16 12 2.16z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      
        <div className={`w-full lg:w-2/5 lg:rounded-r-lg lg:rounded-l-none shadow-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} mx-6 lg:mx-0`}>
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold pt-8 lg:pt-0">Some Title</h2>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2  opacity-25"></div>
          
            {/* Add your image here */}
            <img src={ProfilePic} alt="Profile" className="mt-4 rounded-lg" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default UserProfile;
