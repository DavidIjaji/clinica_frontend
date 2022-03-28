import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

function OurDropdown(props) {
    const [dropdown, setDropdown] = useState(false);

    const abrircerrarDropdown = () => {
        setDropdown(!dropdown);
    }
    return (
        <div className>
            <br /><br />
            <center>
                <Dropdown isOpen={dropdown} toggle={abrircerrarDropdown} size="lg">
                    <DropdownToggle caret>
                        {props.dropdownTitle}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>{props.dropdownHeader}</DropdownItem>
                        {props.dropdownItems}
                    </DropdownMenu>
                </Dropdown>
            </center>
        </div>
    );
}
export default OurDropdown;