import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUsername, setPassword } from "../actions/userActions";

import List from "../components/List"

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Layout extends React.Component {

    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.search = this.search.bind(this);

        this.state = {
            articles: [],
            isLoading: false,
            searchTerm: ''
        };
    }

    componentDidMount () {
        this.search(DEFAULT_QUERY);
    }

    search (term) {
        this.setState({ isLoading: true })
        fetch(API + term)
            .then(response => response.json())
            .then(data => this.setState({
                articles: data.hits,
                isLoading: false
            }));
    }

    handleClick () {
        console.log(this.state);
        this.search(this.state.searchTerm);
    }

    handleChange (event) {
        this.setState({searchTerm: event.target.value});
    }

    render () {
        if (this.state.isLoading) {
            return (<h1>Loading...</h1>);
        }

        return (
            <div className="alert alert-dark" role="alert">
                <h1>Records Returned : {this.state.articles.length}</h1>
                <List listName={DEFAULT_QUERY} items={this.state.articles}/>
                <input
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Search" />
                <button onClick={this.handleClick} type="submit" className="btn btn-primary">Submit</button>
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