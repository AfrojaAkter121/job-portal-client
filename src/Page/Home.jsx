import React, { Suspense } from 'react';
import Header from '../Component/Header';
import HotJobs from '../Component/HotJobs';

const jobsPromise = fetch('http://localhost:3000/jobs')
.then(res => res.json())

const Home = () => {

    return (
        <div>
            <Header/>
            <Suspense fallback={<div className='text-center text-2xl font-bold'>Loading...</div>}>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;