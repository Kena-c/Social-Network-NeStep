import React from "react";
import c from '../Marketplace.module.css';

const MarketplaceSidebar = () => {


    let searchText = React.createRef();
    let search = () => {
        let text = searchText.current.value;
        alert(text);
    }

    return (
        <div className={c.MarketplaceSidebar}>
            <h1>Marketplace</h1>
            <div><input ref={searchText}
                        placeholder='Search Marketplace'
                        type="search" name='search'/>
                <button onClick={search}>search</button></div>
            <div>Browse all</div>
            <div>Notifications</div>
            <div>Inbox</div>
            <div>Buying</div>
            <div>Selling</div>
            <h2>+Create new listing</h2>
            <div>Filters</div>
            <p>Astana, Kazakhstan*Withing 65 kilometers</p>
        </div>
    )
}
export default MarketplaceSidebar;