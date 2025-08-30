import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://cdn.dribbble.com/userupload/23345404/file/original-7048504bab53c9a9698088e1e76ba0de.png?resize=752x&vertical=center'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
      <div className='app'>
        <Header />
      </div>
    )    
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);