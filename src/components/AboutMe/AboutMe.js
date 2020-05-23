import React from 'react';
import './AboutMe.css';

const AboutMe = () => {

    const expertiseLevel = [
        {id: 1, topic: 'HTML', level: 80}, {id: 2, topic: 'CSS', level: 80}, {id: 3, topic: 'JavaScript', level: 75}, 
        {id: 4, topic: 'React', level: 75}, {id: 5, topic: 'BootStrap', level: 70}, {id: 6, topic: 'Node', level: 60}, 
        {id: 7, topic: 'MongoDB', level: 60}, {id: 8, topic: 'Redux', level: 50}, {id: 9, topic: 'Firebase', level: 65}
    ];

    const topicStyle = {
        display: 'flex',
        marginBottom: '20px',
    }


    return (
        <div className="about">
            <div className="my-info">
                <h2>About</h2>
                <hr/>
                <p>I am from Bangladesh. I am a passionate Web Developer. I have strong proficiency in HTML, CSS and JavaScript. I build website using popular JavaScript Library React. I have also knowledge on Bootstrap, Node, MongoDB and Firebase. I can build any professional website. I will give 100% Web Solution.</p>
            </div>
            <div className="my-competency">
                {
                    expertiseLevel.map(ex => 
                        <div key={ex.id} style={topicStyle}>
                            <div style={{backgroundColor: 'lightBlue', width: '20%', padding: '5px'}}>
                                <h5>{ex.topic}</h5>
                            </div>
                            <div style={{backgroundColor: 'blue', width: ex.level*3}}>

                            </div>
                            <div style={{backgroundColor: 'lightBlue', padding: '5px', width: 350 - ex.level*3}}>
                                <h5>{ex.level}%</h5>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AboutMe;