import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const JobCard = ({ job }) => {

    const { title, location, _id, description, company, requirements,  salaryRange, company_logo } = job;

  return (
    <div className="relative max-w-sm p-6 rounded-2xl shadow-lg border-2 border-red-300 bg-white  overflow-hidden">
      {/* 🔴 Top-Right Gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-100 to-transparent rounded-bl-full pointer-events-none"></div>

      {/* 🔴 Bottom-Left Gradient */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-100 to-transparent rounded-tr-full pointer-events-none"></div>

      {/* Top Section */}
      <div className="flex items-center gap-3">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-12 h-12 rounded-xl object-cover"
        />
        <div className='mt-4'>
          <h2 className="font-semibold text-gray-800">{company}</h2>
          <p className="text-sm flex items-center text-gray-600"><FaLocationDot className='text-red-500 mr-1' size={16} />{location}</p>
        </div>
      </div>

      {/* Job Title */}
      <h3 className="text-xl font-bold text-gray-700 mt-4">{title}</h3>

      {/* Job Meta */}
      <div className="flex items-center text-sm text-gray-500 gap-4 mt-4">
        <span>salary : {salaryRange.min} -    {salaryRange.max} {salaryRange.currency}</span>
     
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-4
      ">
        {description}
      </p>

      {/* Skills */}
      <div className="flex gap-2 flex-wrap text-red-400 my-6">
        {
          requirements.map((skill, index) => (
            <span key={index} className="bg-red-100 px-3 py-1 rounded-full text-xs">
              {skill}
            </span>
          ))
        }
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-8">
        <span className="text-red-500 font-bold text-lg">
          $250<span className="text-sm text-gray-400">/Hour</span>
        </span>
        <Link to={`/jobs/${_id}`}>
        <button className="bg-red-100 text-red-400 px-4 py-2 rounded-xl font-medium hover:bg-blue-200 transition">
          See More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
