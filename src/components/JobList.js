import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobsList, handleFilter }) => {
  return (
    <ul className="content-width list-unstyled px-lg-0 mx-auto py-5">
      {jobsList.map((item, index) => (
        <JobItem item={item} key={index} handleFilter={handleFilter} />
      ))}
    </ul>
  );
};

export default JobList;
