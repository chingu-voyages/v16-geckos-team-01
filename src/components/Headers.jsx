import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Headers({
  members, name, title, submitted, changeName, addMember, removeMember,
}) {
  const [state, setState] = useState({ favorited: false, inviteHidden: true, module: '' });

  // Favorite or un-favorite board
  const handleFavorite = () => {
    setState({ ...state, favorited: !state.favorited });
  };

  // Change module displayed
  const handleToggleModule = (e) => {
    setState({ ...state, module: (state.module === e.target.name) ? '' : e.target.name });
  };

  return (
    <header>
      <section className="trello-bar">
        <div className="header-section">
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
        <div className="header-section">
          <button className="header-btn" type="button"><i className="fas fa-plus" aria-label="Add" /></button>
          <button className="header-btn" type="button"><i className="fas fa-info-circle" aria-label="About" /></button>
          <button className="header-btn notifications" type="button"><i className="far fa-bell" aria-label="Notifications" /></button>
          { submitted && <button className="initials" type="button">{members[0][0].toUpperCase()}</button>}
        </div>
      </section>
      <section className="options-bar">
        <div className="header-section">
          { submitted && <div className="title header-btn" contentEditable suppressContentEditableWarning>{title}</div>}
          <button className="header-btn" type="button" name="favorited" onClick={handleFavorite}><i className="far fa-star" aria-label="Favorite" style={{ color: state.favorited ? 'gold' : '' }} /></button>
          <span>|</span>
          <button className="header-btn" type="button">Personal</button>
          <span>|</span>
          <button className="header-btn" type="button">
            <i className="fas fa-lock" />
            <span>Private</span>
          </button>
          <span>|</span>
          { submitted && members.map((entry, i) => (
            <div className="member-info" key={entry}>
              <button className="initials" type="button" name={`module-${entry}`} onClick={handleToggleModule}>{entry[0].toUpperCase()}</button>
              {!i && <i className="fas fa-angle-double-up" />}
              <div className="module" style={{ display: state.module === `module-${entry}` ? '' : 'none' }}>
                <div>
                  <div className="initials">{entry[0].toUpperCase()}</div>
                  <div>
                    <span className="full-name">{entry}</span>
                    <span className="handle">
                      @
                      {entry.toLowerCase().replace(/\s/g, '')}
                    </span>
                    <span className="edit-profile">Edit profile info</span>
                  </div>
                  <button className="exit-module" type="button" name={`module-${entry}`} onClick={handleToggleModule}><i className="fas fa-times" aria-label="Close member info module" /></button>
                </div>
                {!!i && <button className="remove-member" type="button" name={entry} onClick={removeMember}>Remove Member</button>}
              </div>
            </div>
          ))}
          <div className="invite-section">
            <button className="header-btn" type="button" name="invite" onClick={handleToggleModule}>Invite</button>
            <div className="module invite" style={{ display: state.module === 'invite' ? '' : 'none' }}>
              <div className="module-header">
                <h2>Invite To Board</h2>
                <button className="exit-module" type="button" name="inviteHidden" onClick={handleToggleModule}><i className="fas fa-times" aria-label="Close invite module" /></button>
              </div>
              <form name="inviteHidden" onSubmit={addMember}>
                <input type="text" placeholder="Name" value={name} name="name" onChange={changeName} />
                <button className="btn-green" type="submit" disabled={!name || members.map((entry) => entry.toLowerCase().replace(/\s/g, '')).includes(name.toLowerCase().replace(/\s/g, ''))}>Send Invitation</button>
              </form>
            </div>
          </div>
        </div>
        <div className="header-section">
          <button className="header-btn" type="button">
            <i className="fas fa-concierge-bell" />
            <span>Butler</span>
          </button>
          <button className="header-btn" type="button">
            <i className="fas fa-ellipsis-h" />
            <span>Show Menu</span>
          </button>
        </div>
      </section>
    </header>
  );
}

Headers.defaultProps = {
  members: [],
  name: '',
  title: '',
  submitted: false,
  changeName: () => {},
  addMember: () => {},
  removeMember: () => {},
};

Headers.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  title: PropTypes.string,
  submitted: PropTypes.bool,
  changeName: PropTypes.func,
  addMember: PropTypes.func,
  removeMember: PropTypes.func,
};

export default Headers;
