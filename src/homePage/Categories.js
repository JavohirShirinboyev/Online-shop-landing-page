import React, { useState } from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import {AiOutlineMenu} from 'react-icons/ai';


const Categories = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className='categories'>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
            <DropdownToggle caret>
                <AiOutlineMenu className='menuIcon'/>
                All categories
            </DropdownToggle>
            <DropdownMenu {...args}>
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
      </Dropdown>

      <ul className="links">
        <li className='link-item'>
            <a href="#" className='item active'>Home</a>
        </li>
        <li className='link-item'>
            <a href="#" className='item'>New Arrivals</a>
        </li>
        <li className='link-item'>
            <a href="#" className='item'>Trending</a>
        </li>
        <li className='link-item'>
            <a href="#" className='item'>Deals For You</a>
        </li>
        <li className='link-item'>
            <a href="#" className='item'>Discounts</a>
        </li>
        <li className='link-item'>
            <a href="#" className='item'>Weekly Offers</a>
        </li>
        <li className='link-item'>
            <a href="#" className='item'>Become A Vendor</a>
        </li>

      </ul>
    </div>
  )
}

export default Categories;
