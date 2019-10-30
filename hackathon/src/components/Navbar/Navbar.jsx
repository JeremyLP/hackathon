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

                        <ul className=" tab-12 flex space-around align-nav ul-padding  ">

                        <li className=" style-none tab-3 tab-offset-1 dsk-3 dsk-offset-1" >  <i className="fas fa-skull-crossbones"></i> </li> 
                        <li className=" style-none tab-3 dsk-3 " >  <a href="#" className="text-deco-none color-txt-nav"> ????? </a>  </li>
                        <li className=" style-none tab-3 dsk-3 ">  <a href="#" className="text-deco-none color-txt-nav"> ????? </a>  </li>
                        <li className=" style-none tab-3 dsk-3 ">  <a href="#" className="text-deco-none color-txt-nav"> ????? </a>  </li>

                        </ul>


                     </div>

                  

                </header>


            </div>
        );
    }
}

export default Navbar;