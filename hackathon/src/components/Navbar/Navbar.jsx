import React, {Component} from 'react';
import './Navbar.css';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <header className="mob-12 tab-12 dsk-12 flex background-nav ">


                     <div className="mob-12 tab-12 dsk-12 ">

                        <ul className=" tab-12 mob-12 dsk-12 flex align-nav ul-padding justify-nav  ">

                        <li className=" style-none mob-3 tab-3 dsk-4 flex justify-nav " >  <a href="#" className="text-deco-none color-txt-nav"> ????? </a>  </li>
                        <li className=" style-none mob-3 tab-3 dsk-4 flex justify-nav ">  <a href="#" className="text-deco-none color-txt-nav"> ????? </a>  </li>
                        <li className=" style-none mob-3 tab-3 dsk-4 flex justify-nav ">  <a href="#" className="text-deco-none color-txt-nav"> ????? </a>  </li>

                        </ul>


                     </div>

                  

                </header>


            </div>
        );
    }
}

export default Navbar;