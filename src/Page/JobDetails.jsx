import React from "react";
import { Link, useLoaderData } from "react-router";
import {
  FaBuilding,
  FaUserTie,
  FaMoneyBillWave,
  FaBriefcase,
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";
import AboutTeamInfo from "../Component/AboutTeamInfo";
import RightSideDetails from "../Component/RightSideDetails";

const JobDetails = () => {
  const {
    title,
    location,
    _id,
    description,
    company,
    requirements,
    salaryRange,
    applicationDeadline,
    jobType,
    category,
  } = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-4 p-6 max-w-7xl  mx-auto">
      <div className="col-span-2 bg-white rounded-xl shadow p-6 border border-gray-200">
        <img
          className="w-full h-80 object-cover rounded-lg mb-5"
          src='https://i.ibb.co/fGV9K0nV/pexels-edmond-dantes-4342493.jpg'
          alt="Company Logo"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>

        <hr className="my-7" />

        <div className="border border-red-300 rounded-lg p-5 mb-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Employment Info
          </h2>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8  text-gray-600">
            <div className="flex items-center gap-2">
              <FaBuilding className="text-blue-500" />
              <span>
                <strong>Company:</strong> {company}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserTie className="text-blue-500" />
              <span>
                <strong>Category:</strong> {category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-blue-500" />
              <span>
                <strong>Salary:</strong> {salaryRange?.min}–{salaryRange?.max}{" "}
                {salaryRange?.currency?.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-blue-500" />
              <span>
                <strong>Job type:</strong> {jobType}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-500" />
              <span>
                <strong>Experience:</strong> 2–4 Years
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" />
              <span>
                <strong>Deadline:</strong> {applicationDeadline}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEdit className="text-blue-500" />
              <span>
                <strong>Status:</strong> Active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>
                <strong>Location:</strong> {location}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
        <AboutTeamInfo></AboutTeamInfo>
        <div className="flex justify-end mt-8">
          <Link to={`/jobApply/${_id}`}>
            <button className="btn-grad">Apply</button>
          </Link>
        </div>
      </div>

      {/* Right Side - optional content */}
      <div className="col-span-1">
        <RightSideDetails/>
      </div>
    </div>
  );
};

export default JobDetails;
