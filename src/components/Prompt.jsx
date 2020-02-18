import React from 'react';
import PropTypes from 'prop-types';

function Prompt({
  name, title, addName, addTitle, promptSubmit,
}) {
  return (
    <div className="prompt">
      <form onSubmit={promptSubmit}>
        <input type="text" placeholder="Add name" onChange={addName} value={name} />
        <input type="text" placeholder="Add board title" onChange={addTitle} value={title} />
        <button className="btn-green" type="submit" disabled={!(name && title)}>
          Get started
          <i className="fas fa-angle-double-right" />
        </button>
      </form>
    </div>
  );
}

Prompt.defaultProps = {
  name: '',
  title: '',
  addName: () => {},
  addTitle: () => {},
  promptSubmit: () => {},
};

Prompt.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  addName: PropTypes.func,
  addTitle: PropTypes.func,
  promptSubmit: PropTypes.func,
};

export default Prompt;
