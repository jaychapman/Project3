import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <nav>
            <div className="menuContainer">
                <div className="menuGroup">
                    <Link to="/">
                        <>Home</>
                    </Link>
                    <Link to="/customer">
                        <>Find Home Care</>
                    </Link>
                    <Link to="/join">
                        <>Join our Network</>
                    </Link>
                    <Link to="review">
                        <>Reviews</>
                    </Link>
                </div>
            </div>
        </nav>
        )
    }
}

export default NavBar;