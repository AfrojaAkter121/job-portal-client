import React, { useEffect, useState } from "react";
import { FaBriefcase, FaClock, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

const RightSideDetails = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/jobs').then(res => res.json())
    .then(data => setJobs(data))
    })
console.log(jobs)

  return (
    <div>
      <div>
        <div className="max-w-md bg-white rounded-xl shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Similar Jobs
          </h2>
          <ul className="space-y-4">
            {jobs.map((job, index) => (
              <li key={index} className="flex items-start gap-3 border border-red-300 p-3 rounded-lg">
                <div className="flex-shrink-0">
                  <img
                    src={job.company_logo}
                    alt={job.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  </div>
                <div>
                  <h3 className="font-medium text-gray-800">{job.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 gap-2 flex-wrap">
                    <span className="flex items-center gap-1">
                      <FaBriefcase /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {job.posted}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
                    <span className="flex items-center gap-1">
                      <FaDollarSign /> {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSideDetails;
