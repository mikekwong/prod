import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchUsers } from "../actions";

class UserHeader extends Component {
  // componentDidMount() {
  //   this.props.fetchUsers(this.props.userId);
  //   console.log(this.props);
  // }

  render() {
    const { user } = this.props;
    // const user = this.props.users.find(user => user.id === this.props.userId);
    if (!user) return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // return { users: state.users };
  // bring filter down here into MSTP function for better legibility, can use OWNPROPS which is a second paramater of MSTP to be able to grab the components props (passed down from parent) in order to access it here
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

// const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps)(UserHeader);
