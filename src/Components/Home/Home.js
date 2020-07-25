import React from 'react'
import asif from "../../images/website-1.png";
import { NavLink } from 'react-router-dom';
import "../Home/style.css"

export const Home = () =>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column">
                         <h1>Hi <strong className="brand-name">I'm Raisul islam piaus</strong></h1>
                         <h2 className="my-3">I'm full stack developer</h2>
                         <div className="my-3">
                          <NavLink to="/service" className="btn-get-started">Get Started</NavLink>
                           
                         </div>
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2 header-img">
                         <img src={asif} className="img-fluid animated" alt="website-1.png"/>

                     </div>
                     </div>

                </div>

            </div>

        </div>

        </section>
        </>
    )
}