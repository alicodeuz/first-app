import React from 'react'

export default class Button extends React.Component {

  login = () => {
    console.log('I am login')
    console.log(this.props)
  }

  logOut() {
    console.log('Log out');
    console.log(this.props)
  }

  render() {
    console.log(this)
    const { status = "primary", title = "Download", outline = false } = this.props;
    const className = `btn btn-${outline ? 'outline-' : ''}${status} rounded-pill px-3`;

    return (
      <button {...this.props} className={className} onClick={this.login} onDoubleClick={this.logOut.bind(this)}>
        {title}
      </button>
    )
  }
}
