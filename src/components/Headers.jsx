import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
      inviteHidden: true,
    };
  }

    handleOnFavorite = () => {
      const { favorited } = this.state;
      this.setState({
        favorited: !favorited,
      });
    }

    handleHideInvite = () => {
        const {inviteHidden} = this.state;
        this.setState({
            inviteHidden: !inviteHidden,
        })
    }

    render() {
      const { favorited, inviteHidden } = this.state;
      const {
        members, name, title, submitted, changeName, addMember
      } = this.props;
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
              <button className="header-btn" type="button" onClick={this.handleOnFavorite}><i className="far fa-star" aria-label="Favorite" style={{ color: favorited ? 'gold' : '' }} /></button>
              <span>|</span>
              <button className="header-btn" type="button">Personal</button>
              <span>|</span>
              <button className="header-btn" type="button">
                <i className="fas fa-lock" />
                <span>Private</span>
              </button>
              <span>|</span>
              { submitted && members.map(name => <button className="initials" type="button" key={name}>{name[0].toUpperCase()}</button>)}
              <div className="invite-section">
                  <button className="header-btn" type="button" onClick={this.handleHideInvite}>Invite</button>
                  <div className="module invite" style={{display: inviteHidden ? "none" : ""}} onSubmit={addMember}>
                      <div className="module-header">
                          <h2>Invite To Board</h2>
                          <button type="button" onClick={this.handleHideInvite}><i className="fas fa-times"/></button>
                      </div>
                      <form>
                        <input type="text" placeholder="Name" value={name} onChange={changeName}/>
                        <button className="btn-green" type="submit" disabled={!name || members.map(entry => entry.toLowerCase()).includes(name.toLowerCase())}>Send Invitation</button>
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
}

Headers.defaultProps = {
  members: [],
  name: '',
  title: '',
  submitted: false,
};

Headers.propTypes = {
  members: PropTypes.array,
  name: PropTypes.string,
  title: PropTypes.string,
  submitted: PropTypes.bool,
};

export default Headers;
