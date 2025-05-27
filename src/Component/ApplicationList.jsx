import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplications }) => {
  const applications = use(myApplications);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            applications.map((application,index) => <JobApplicationRow 
            index={index}
            key={application._id}
            application={application}>

            </JobApplicationRow>)
          }
        </tbody>
      
      </table>
    </div>
  );
};

export default ApplicationList;
