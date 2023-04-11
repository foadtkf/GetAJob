import React from "react";
import { useSelector } from "react-redux";
import { useGetAppliedJobsByIdQuery } from "../../features/job/jobApi";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppliedJobsByIdQuery(email);

  if (isLoading) {
    return <Loading />;
  }
  // console.log(data);
  return (
    <div className="  md:px-[10%]">
      <h1 className="text-xl py-5">Applied jobs</h1>
      <div className="gap-5 pb-5">
        {data?.data?.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
