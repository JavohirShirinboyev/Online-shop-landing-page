import React from 'react'
import {MdOutlineShoppingBasket} from "react-icons/md"
import iphoneImg from "../assets/iphones.png"

export default function Home() {
  return (
    <div className="home">
        <div className="main">
            <div className="side1">
                <h3>
                    Get the new iphone 12 pro
                </h3>
                <p>
                    A transformative triple-camera system that adds
                    tons of capability without <br /> complexity
                </p>
                <div className="buttons">
                    <a href="#" className='btn'>
                        Buy Now
                        <MdOutlineShoppingBasket />
                    </a>
                    <a href="#" className='btn'>
                        With $599 with trade-in
                    </a>
                </div>
            </div>
            <div className="side2">
                <img src={iphoneImg} alt="iphone image" />
            </div>
        </div>
    </div>
  )
}
