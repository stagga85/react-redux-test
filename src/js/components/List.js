import React from "react";

const List = ({ listName, items }) => {
    var listItems = items.map(item => {
        return <li className="list-group-item" key={item.objectID}><a href={item.url}>{item.title}</a></li>
    });
    return (
        <ul className="list-group">
            {listItems}
        </ul>
    );
};

export default List;