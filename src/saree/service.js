import React from 'react';
import RCUB from '../images/rcub.png';
import Online  from '../images/online.png';
import Career from '../images/career.png';
import Schlorship from '../images/ship.jpg';

const Services = () => {
	return (
            <main role="main" className="container">
               <div id="services">
               <h1> Our Company Serivces</h1>
               </div>
                <div className="container marketing">
               
                    <div className="row">
                            <div className="col-lg-3">
                                <svg className="bd-placeholder-img" width="300" height="300" xmlns="http://www.w3.org/3000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 300x300">
                                    <image href={Schlorship} alt="Tool-img" width="80%" height="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2 style={{ "text-align": "center" }}>Online Schlorship from </h2>
                                <p>
                                <li> N S P</li>
                                <li> S S P</li> 
                                <li> Help A child</li>
                                <li> Jindal </li>
                                </p>
                                <p>Many more scholarship</p> 
                                        
                            </div>
                            <div className="col-lg-3">
                                <svg className="bd-placeholder-img" width="300" height="300" xmlns="http://www.w3.org/3000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 300x300">
                                    <image href={RCUB} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2 style={{ "text-align": "center" }}> Online UG Admsission</h2>
                                <p> <li> UG Cources</li>
                                <ul> BBA</ul>
                                <ul> BCA</ul>
                                <ul> BSC</ul>
                                <ul> B.Com</ul>
                                <ul> BA</ul> </p>
                            </div>
                            <div className="col-lg-3">
                                <svg className="bd-placeholder-img rounded-rectangle" width="300" height="300" xmlns="http://www.w3.org/3000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 300x300">
                                    <image href={Online} alt="Tool-img" width="80%" hight="80%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2 style={{ "text-align": "center" }}>All type of Online Application </h2>
                                <p>
                                <li> Pan Card</li>
                                <li> Adhar PVC Card</li>
                                <li> Income & Cast certifite</li>
                                <li> Ration Card Printout</li>
                                <li> Passport seva</li>
                                <li> Student Bus Pass</li>
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <svg className="bd-placeholder-img rounded-rectangle" width="300" height="300" xmlns="http://www.w3.org/3000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 300x300">
                                    <image href={Career} alt="Tool-img" width="100%" hight="100%" />
                                    <title>Placeholder</title>
                                </svg>
                                <h2 style={{ "text-align": "center" }}>Carees Guidenence</h2>
                                <p>
                                <li> Campus Drive Informaction</li>
                                <li> OFF Campus Drive Informaction</li>
                                <li> Vacuncey Informaction</li>
                                <li> Job Guidenence</li>
                                <li> Many More </li>
                                </p>
                            </div>
                           
                            
                            <hr className="featurette-divider" />
                    </div>
                </div>
            </main>
	)
};

export default Services;