import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Contex/AuthContext';

const Google = () => {
    const {googleAccount} = use(AuthContext)
    const handleAccount = () => {
        googleAccount()
        .then(res => {
            console.log(res.user)
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