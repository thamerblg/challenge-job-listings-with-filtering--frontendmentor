import { useEffect, useState } from "react";
import JobList from "./components/JobList";

import { jobs } from "./data";
import Filter from "./components/Filter";

function App() {
  // eslint-disable-next-line
  const [jobsList, setJobsList] = useState(jobs);

  var initialFilterTags = { role: [], languages: [], level: [], tools: [] };
  const [filterTags, setFilterTags] = useState(initialFilterTags);

  const handleFilter = (category, value) => {
    setFilterTags((prevFilterTags) => {
      const updatedFilterTags = { ...prevFilterTags };
      const categoryList = updatedFilterTags[category];

      if (categoryList && !categoryList.includes(value)) {
        updatedFilterTags[category] = [...categoryList, value];
      }

      return updatedFilterTags;
    });
  };

  const filterJobs = () => {
    const filteredJobs = jobs.filter((job) => {
      const { role, languages, level, tools } = filterTags;
      const roleMatch = role.length === 0 || role.includes(job.role);
      const languagesMatch =
        languages.length === 0 ||
        languages.every((language) => job.languages.includes(language));
      const levelMatch = level.length === 0 || level.includes(job.level);
      const toolsMatch =
        tools.length === 0 || tools.every((tool) => job.tools.includes(tool));

      return roleMatch && languagesMatch && levelMatch && toolsMatch;
    });

    setJobsList(filteredJobs);
  };

  const handleRemove = (category, index) => {
    setFilterTags((prevfilterTags) => {
      const updatedfilterTags = { ...prevfilterTags };
      updatedfilterTags[category].splice(index, 1);
      return updatedfilterTags;
    });
  };

  const handleRemoveAll = () => {
    setFilterTags(initialFilterTags);
  };

  useEffect(
    () => {
      filterJobs();
    }, // eslint-disable-next-line
    [filterTags]
  );

  console.log(Object.values(filterTags).every((arr) => arr.length === 0));

  return (
    <>
      <header>
        <img
          src="/images/bg-header-desktop.svg"
          alt="bg header desktop"
          className="d-none d-lg-block"
        />
        <img
          src="/images/bg-header-mobile.svg"
          alt="bg header mobile"
          className="d-block d-lg-none"
        />
      </header>
      <main className="position-relative pt-md-4 px-3">
        {!Object.values(filterTags).every((arr) => arr.length === 0) && (
          <Filter
            filterTags={filterTags}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        )}

        <JobList jobsList={jobsList} handleFilter={handleFilter} />
      </main>
    </>
  );
}

export default App;
