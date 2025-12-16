import React from "react";
import PropTypes from "prop-types";
import ScrollProgressBar from "../ScrollProgressBar";

const StickyHeader = ({ show, children }) => {
  return (
    <div className={`${show ? "block" : "hidden"} sticky top-0 bg-white z-50`}>
      <div className="px-8 py-6">{children}</div>
      <ScrollProgressBar />
    </div>
  );
};

StickyHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StickyHeader;
