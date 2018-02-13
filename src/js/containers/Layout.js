import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUsername, setPassword } from "../actions/userActions";

class Layout extends React.Component {

    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let username = this.props.user.username;

        this.props.setUsername(username.toUpperCase());
    }

    render () {
        return (
            <div onClick={this.handleClick} className="alert alert-dark" role="alert">
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setUsername,
        setPassword
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)