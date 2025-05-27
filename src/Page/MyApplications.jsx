import React, { Suspense } from 'react';
import ApplicationStat from '../Component/ApplicationStat';
import ApplicationList from '../Component/ApplicationList';
import useAuth from '../hooks/useAuth';
import { myApplications } from '../api/applicationApi';



const MyApplications = () => {
    const {user} = useAuth();
    return (
        <div>
            <ApplicationStat/>
            <Suspense fallback={<div>Loading...</div>}>
            <ApplicationList myApplications={myApplications(user.email)} />
            </Suspense>

        </div>
    );
};

export default MyApplications;