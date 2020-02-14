import React from 'react';
import PropTypes from 'prop-types';

function Headers(props) {
  const {
    name, title, submitted,
  } = props;
  return (
    <header>
      <section className="header">
        <div>
          <button className="header-btn" type="button"><i className="fas fa-home" aria-label="Home" /></button>
          <button className="header-btn" type="button">
            <i className="fas fa-th-large" />
            <span>Boards</span>
          </button>
          <button className="header-btn" type="button"><i className="fas fa-search" aria-label="Search" /></button>
        </div>
        <h1>
          <i className="fas fa-th-large" />
          Trello
        </h1>
        <div>
          <button className="header-btn" type="button"><i className="fas fa-plus" aria-label="Add" /></button>
          <button className="header-btn" type="button"><i className="fas fa-info-circle" aria-label="About" /></button>
          <button className="header-btn notifications" type="button"><i className="far fa-bell" aria-label="Notifications" /></button>
          { submitted && <button className="initials" type="button">{name[0].toUpperCase()}</button>}
        </div>
      </section>
      <section className="options-bar" />
    </header>
  );
}

Headers.defaultProps = {
  name: '',
  title: '',
  submitted: false,
};

Headers.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  submitted: PropTypes.bool,
};

export default Headers;
