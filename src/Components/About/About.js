import React from 'react'
import "../About/style.css";
import pp from "../../images/ppppppp.jpg";

export const About = () =>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column">
                         <h1>Mr <strong className="brand-name">Raisul islam piaus</strong></h1>
                         <p className="my-3">I'm full stack developer Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                         
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2 header-img">
                         <img src={pp} className="img-fluid animated" alt="ppppppp.jpg"/>

                     </div>
                     </div>

                </div>

            </div>

        </div>

        </section>
        </>
    )
}