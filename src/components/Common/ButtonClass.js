import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor')
    this.state = {
      likes: 0,
      status: false,
    }
  }



  login = () => {
    console.log('I am login')
    console.log(this.props)
  }

  logOut() {
    console.log('Log out');
    console.log(this.props)
  }

  handleLike = () => {
    // this.state.like = 2;
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    console.log(this)
    const { status = "primary", title = "Download", outline = false } = this.props;
    const className = `btn btn-${outline ? 'outline-' : ''}${status} rounded-pill px-3`;
    console.log('object')
    return (
      <button
        {...this.props}
        className={className}
        onClick={this.login}
        onDoubleClick={this.logOut.bind(this)}
      >
        {title}
      </button>
    )
  }
}
