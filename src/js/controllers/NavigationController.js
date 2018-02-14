import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navigation from "../components/Navigation";

import { search } from "../actions/navigationActions";

class NavigationController extends React.Component {

    constructor (props) {
        super(props);
        console.log(this.props.navigation.navItems);
        this.search.bind(this)
        this.state = {
            searchValue: ''
        };
    }

    componentDidMount () {
    }

    search (term) {
        this.props.search(term);
    }

    handleSearchSubmit () {
        console.log('Search!');
        this.search(this.state.searchValue);
    }

    handleSearchChange (event) {
        this.setState({ searchValue: event.target.value });
    }

    handleLinkSelect (item) {
        console.log('clicked: ' + item.id);
    }

    render () {
        const navigation = this.props.navigation;
        return (
           <Navigation
               items={navigation.navItems}
               currentlySelected={navigation.currentlySelected}
               onSubmitSearch={this.handleSearchSubmit.bind(this)}
               searchValue={this.state.searchValue}
               onSearchChange={this.handleSearchChange.bind(this)}
               onLinkSelect={this.handleLinkSelect}
           />
        );
    }
}

function mapStateToProps(state) {
    return { navigation: state.navigation }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        search
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationController);