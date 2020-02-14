import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };
  }

    handleOnFavorite = () => {
      const { favorited } = this.state;
      this.setState({
        favorited: !favorited,
      });
    }

    render() {
      const { favorited } = this.state;
      const {
        name, title, submitted, changeTitle,
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
              { submitted && <button className="initials" type="button">{name[0].toUpperCase()}</button>}
            </div>
          </section>
          <section className="options-bar">
            <div className="header-section">
              { submitted && <div className="title header-btn" contentEditable suppressContentEditableWarning onChange={changeTitle}>{title}</div>}
              <button className="header-btn" type="button" onClick={this.handleOnFavorite}><i className="far fa-star" aria-label="Favorite" style={{ color: favorited ? 'gold' : '' }} /></button>
              <span>|</span>
              <button className="header-btn" type="button">Personal</button>
              <span>|</span>
              <button className="header-btn" type="button">
                <i className="fas fa-lock" />
                <span>Private</span>
              </button>
              <span>|</span>
              { submitted && <button className="initials" type="button">{name[0].toUpperCase()}</button>}
              <button className="header-btn" type="button">Invite</button>
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
  name: '',
  title: '',
  submitted: false,
  changeTitle: () => {},
};

Headers.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  submitted: PropTypes.bool,
  changeTitle: PropTypes.func,
};

export default Headers;
