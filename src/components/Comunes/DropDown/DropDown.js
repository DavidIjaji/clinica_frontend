import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import './DropDown.css';

function OurDropdown(props) {
    const [dropdown, setDropdown] = useState(false);

    const abrircerrarDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <div className="dropdown">
            <center>
                <Dropdown isOpen={dropdown} toggle={abrircerrarDropdown} size="sm">
                    <DropdownToggle caret >
                        {props.dropdownTitle}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem class = "dd-header" header>{props.dropdownHeader}</DropdownItem>
                        {props.dropdownItems}
                    </DropdownMenu>
                </Dropdown>
            </center>
        </div>
    );
}
export default OurDropdown;