import React from "react";

const JobItem = ({ item, handleFilter }) => {
  return (
    <li className="mb-lg-4 mb-5">
      <div
        className={`px-4 pb-4 pt-5 pt-md-4 bg-white rounded-3 position-relative d-flex flex-column flex-lg-row justify-content-between align-items-lg-center ${
          item.featured && "featured"
        } `}
      >
        <div className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start gap-3">
          <img src={item.logo} alt="logo" className="logo" />
          <div>
            <div className="d-flex align-items-center gap-4 gap-md-3">
              <span className="color-cyan bold size-5">{item.company}</span>
              {item.new && (
                <div className="badge rounded-pill bg-cyan text-uppercase lh-1">
                  new!
                </div>
              )}
              {item.featured && (
                <div className="badge rounded-pill bg-dark text-uppercase lh-1 me-2">
                  featured
                </div>
              )}
            </div>
            <p className="bold my-1 size-4">{item.position}</p>
            <div className="color-gray">
              <span className="pe-2 pe-md-3 size-5">{item.postedAt}</span>
              <span className="pe-2 pe-md-3">.</span>
              <span className="pe-2 pe-md-3 size-5">{item.contract}</span>
              <span className="pe-2 pe-md-3">.</span>
              <span className="pe-2 pe-md-3 size-5">{item.location}</span>
            </div>
          </div>
        </div>
        <hr className="d-lg-none d-block" />
        <div className="filters d-flex flex-wrap align-items-center gap-3">
          <button
            type="button"
            className="filter btn"
            onClick={() => handleFilter("role", item.role)}
          >
            {item.role}
          </button>
          {item.languages.map((language, index) => (
            <button
              type="button"
              key={index}
              className="filter btn"
              onClick={() => handleFilter("languages", language)}
            >
              {language}
            </button>
          ))}

          <button
            type="button"
            className="filter btn"
            onClick={() => handleFilter("level", item.level)}
          >
            {item.level}
          </button>
          {item.tools.map((tool, index) => (
            <button
              type="button"
              key={index}
              className="filter btn"
              onClick={() => handleFilter("tools", tool)}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </li>
  );
};

export default JobItem;
