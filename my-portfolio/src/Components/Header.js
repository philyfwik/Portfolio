import React from 'react';

import Typed from 'react-typed';

export const Header = () => {       // when showing pictures use opacity ft hover (https://www.w3schools.com/css/css_image_transparency.asp)
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>my personal portfolio</h1>
                <Typed 
                    className='typed-text'
                    strings={["God", "Family", "Soccer", "Basketball"]} // use this for personality traits
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href='#' className='btn-main-offer'>contact me</a>
            </div>
            
        </div>
    )
}

export default Header;