import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <footer className="mob-12 tab-12 dsk-12 background-footer ">

                    <div className="mob-12 tab-12 dsk-12">

                        <ul className="tab-12 mob-12 dsk-12 flex space-around align-nav ul-padding font-color-footer">

                            <ul className="mob-3 tab-3 dsk-4 ul-padding ">

                               
                                <li className="style-none flex justify-footer">?????</li>
                                <li className="style-none flex justify-footer">?????</li>
                                <li className="style-none flex justify-footer">?????</li>

                            </ul>

                            <ul className="mob-3 tab-3 dsk-4">

                                <li className="style-none flex justify-footer">?????</li>
                                <li className="style-none flex justify-footer">?????</li>
                                <li className="style-none flex justify-footer">?????</li>

                            </ul>

                            <ul className="mob-3 tab-3 dsk-4">

                                <li className="style-none flex justify-footer">?????</li>
                                <li className="style-none flex justify-footer">?????</li>
                                <li className="style-none flex justify-footer">?????</li>

                            </ul>

                            <ul className="mob-3 tab-3 dsk-4">

                                <li className="style-none flex justify-footer">?????</li>
                                <li className="style-none flex justify-footer">?????</li>
                                <li className="style-none flex justify-footer">?????</li>

                            </ul>

                        </ul>

                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;