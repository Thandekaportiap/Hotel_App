import 'tailwindcss/tailwind.css';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../components/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ userId }) => {
  // console.log(userId)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const user = auth.currentUser;

      if (user) {
        try {
          const userData = await getDoc(doc(db, 'users', user.uid));
          if (userData.exists()) {
            setUserDetails(userData.data());
          } else {
            toast.error('No user data found!');
          }
        } catch (error) {
          toast.error('Error fetching user data: ' + error.message);
        }
      } else {
        setUserDetails(null);
      }
      setLoading(false);
    };

    fetchUserData();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) setUserDetails(null);
    });

    return () => unsubscribe();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

 
  
  return (
  
    <div className="flex items-center justify-center h-screen ">
    <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200 max-w-3xl w-full">
        <div className="px-6 py-5">
            <h3 className="font-serif text-3xl leading-6 font-medium text-[#003060]">
                {userDetails?.firstName}'s Profile
            </h3>
            <p className="mt-1 max-w-2xl text-2xl text-gray-600">
                This is some information about  {userDetails.firstName}
            </p>
        </div>
        <div className="border-t border-gray-200 px-6 py-5">
            <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-2xl font-medium text-[#003060]">Full names</dt>
                    <dd className="mt-1 text-2xl text-gray-900 sm:mt-0 sm:col-span-2">
                        {userDetails?.firstName} {userDetails?.lastName}
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-2xl font-medium text-[#003060]">Email address</dt>
                    <dd className="mt-1 text-2xl text-gray-900 sm:mt-0 sm:col-span-2">
                        {userDetails?.email}
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-2xl font-medium text-[#003060]">Phone number</dt>
                    <dd className="mt-1 text-2xl text-gray-900 sm:mt-0 sm:col-span-2">
                        {userDetails?.mobile}
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-2xl font-medium text-[#003060]">Address</dt>
                    <dd className="mt-1 text-2xl text-gray-900 sm:mt-0 sm:col-span-2">
                        123 Main St<br/>
                        Anytown, PMB 12345
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</div>
  );
};

export default UserProfile;
