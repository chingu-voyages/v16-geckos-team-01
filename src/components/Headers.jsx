import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Headers({
  members, name, title, submitted, changeName, addMember,
}) {
  const [state, setState] = useState({ favorited: false, inviteHidden: true });

  const handleOnFavorite = () => {
    const { favorited } = state;
    setState({
      ...state,
      favorited: !favorited,
    });
  };

  const handleHideInvite = () => {
    const { inviteHidden } = state;
    setState({
      ...state,
      inviteHidden: !inviteHidden,
    });
  };

  return (
    <header>
      <section className="header">
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
          <button className="header-btn" type="button" onClick={handleOnFavorite}><i className="far fa-star" aria-label="Favorite" style={{ color: state.favorited ? 'gold' : '' }} /></button>
          <span>|</span>
          <button className="header-btn" type="button">Personal</button>
          <span>|</span>
          <button className="header-btn" type="button">
            <i className="fas fa-lock" />
            <span>Private</span>
          </button>
          <span>|</span>
          { submitted && members.map((entry) => <button className="initials" type="button" key={entry}>{entry[0].toUpperCase()}</button>)}
          <div className="invite-section">
            <button className="header-btn" type="button" onClick={handleHideInvite}>Invite</button>
            <div className="module invite" style={{ display: state.inviteHidden ? 'none' : '' }} onSubmit={addMember}>
              <div className="module-header">
                <h2>Invite To Board</h2>
                <button type="button" onClick={handleHideInvite}><i className="fas fa-times" aria-label="Close invite module" /></button>
              </div>
              <form>
                <input type="text" placeholder="Name" value={name} onChange={changeName} />
                <button className="btn-green" type="submit" disabled={!name || members.map((entry) => entry.toLowerCase()).includes(name.toLowerCase())}>Send Invitation</button>
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
};

Headers.propTypes = {
  members: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  title: PropTypes.string,
  submitted: PropTypes.bool,
  changeName: PropTypes.func,
  addMember: PropTypes.func,
};

export default Headers;
