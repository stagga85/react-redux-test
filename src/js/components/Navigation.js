import React from "react";

const populateNavBar = (items, onLinkSelect) => {
    return items.map(item => (
        <li onClick={onLinkSelect.bind(this, item)} className="nav-item pull-left" key={item.id}>
            <a className="nav-link" href={item.url}>{item.title}</a>
        </li>
    ));
};

const Navigation = ({ items = [], onSubmitSearch, searchValue, onSearchChange, onLinkSelect }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">{}</span>
            </button>
            <a className="navbar-brand" href="#">WebNots</a>
            <div className="collapse navbar-collapse justify-content-between" id="navbar1">
                <ul className="navbar-nav">
                    {populateNavBar(items, onLinkSelect)}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input value={searchValue} onChange={ onSearchChange } className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button onClick={ onSubmitSearch } className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navigation;