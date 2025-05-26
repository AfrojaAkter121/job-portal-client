import React, { use } from 'react';
import JobCard from '../shared/JobCart';

const HotJobs = ({jobsPromise}) => {

    const jobs = use(jobsPromise);

    return (
        <div className='mt-16 py-7'>
            <h1 className='text-center text-3xl'>Jobs of the day</h1>
            <p className='text-center py-2'>Search and connect with the right candidates faster.</p>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-5 max-w-6xl mx-auto  my-10'>
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
        </div>
    );
};

export default HotJobs;