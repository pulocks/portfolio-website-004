import React from 'react';
import './Projects.css';
import project1 from '../../images/restaurant-web.png';
import project2 from '../../images/Screenshot_Pioneer Bank.png';
import project3 from '../../images/calc.JPG';

const Projects = () => {
    return (
        <div className="projects">
            <div className="card-deck">
                <div className="card">
                    <h4 className="card-title">Red Onion Restaurant</h4>
                    <a href={project1} download><img src={project1} className="card-img-top" alt="..."/></a>
                    <div class="card-body">
                        <p className="card-text">A simple Restaurant website. Customers will view breakfast, lunch and dinner items available in the restaurant and add to their cart. They must login to show their cart items and review them. In order to place the order they must give credit card information. After successfully place the order they will get Order Id.</p>
                    </div>
                    <div style={{textAlign: 'center'}} className="card-footer">
                        <a href="https://red-onion-restaurant-1a482.web.app" target="blank"><button className="btn btn-success">View Website</button></a>
                    </div>
                </div>
                <div class="card">
                    <h4 className="card-title">Pioneer Bank</h4>
                    <a href={project2} download><img src={project2} className="card-img-top" alt="..."/></a>
                    <div class="card-body">
                        <p class="card-text">A simple website for Bank transaction. Users will sign in by their email and password in the system. The they can deposit and withdraw the amount. Balances will be changed accordingly.</p>
                        </div>
                    <div style={{textAlign: 'center'}} class="card-footer">
                        <a href="https://pioneer-bank-001.netlify.app" target="blank"><button className="btn btn-success">View Website</button></a>
                    </div>
                </div>
                <div class="card">
                    <h4 class="card-title">Calculator</h4>
                    <a href={project3} download><img src={project3} className="card-img-top" alt="..."/></a>
                    <div class="card-body">
                        <p class="card-text">A simple Scientific Calculator to perform mathematical calculation.</p>
                    </div>
                    <div style={{textAlign: 'center'}} class="card-footer">
                        <a href="https://simple-00-calculator.netlify.app" target="blank"><button className="btn btn-success">View Website</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;