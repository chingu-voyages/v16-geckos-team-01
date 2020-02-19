import React from 'react';
import PropTypes from 'prop-types';

function Prompt({
  name, title, addInfo, promptSubmit,
}) {
  return (
    <div className="prompt">
      <form onSubmit={promptSubmit}>
        <input type="text" placeholder="Add name" onChange={addInfo} name="name" value={name} />
        <input type="text" placeholder="Add board title" onChange={addInfo} name="title" value={title} />
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
  addInfo: () => {},
  promptSubmit: () => {},
};

Prompt.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  addInfo: PropTypes.func,
  promptSubmit: PropTypes.func,
};

export default Prompt;
