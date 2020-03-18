import React from 'react';

// TODO: Implement
class Headshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { username, avatarUrl } = this.props;
    return (
      <div>
        <img className="avatar" src={avatarUrl} />
        <div className="username">{username}</div>
      </div>
    );
  }
}

export default Headshot;
