import React from "react";

const Filter = ({ filterTags, handleRemove, handleRemoveAll }) => {
  return (
    <div className="filter-bar content-width shadowed rounded-3 bg-white py-3 px-4 mx-auto d-flex align-items-center justify-content-between gap-3 position-absolute top-0 start-50 translate-middle">
      <div className="d-flex gap-3 flex-wrap">
        {Object.entries(filterTags).map(
          ([category, values]) =>
            values.length > 0 && (
              <div className="d-flex gap-3" key={category}>
                {values.map((value, index) => (
                  <div className="d-flex" key={`${category}-${index}`}>
                    <span className="filter d-inline-block rounded-start">
                      {value}
                    </span>
                    <button
                      className="remove-btn btn bg-dark-cyan rounded-0 rounded-end"
                      onClick={() => handleRemove(category, index)}
                    >
                      <img src="/images/icon-remove.svg" alt="remove" />
                    </button>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
      <button
        className="clear-btn btn cyan p-0"
        onClick={() => handleRemoveAll()}
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;
