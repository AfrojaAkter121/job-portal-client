import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Contex/AuthContext';
import { useLocation, useNavigate } from 'react-router';

const Google = () => {
    const {googleAccount} = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleAccount = () => {
        googleAccount()
        .then(res => {
            console.log(res.user)
            navigate(`${location.state || "/"}`, { replace: true });
        }).catch(err => {
            console.log(err.message)
        })
    }


    return (
        <div>
            <button onClick={handleAccount} className="w-full flex items-center justify-center gap-2 border rounded-full py-2 font-semibold hover:bg-red-200 hover:text-black">
            <FaGoogle size={24} />
            Continue with Google
          </button>
        </div>
    );
};

export default Google;