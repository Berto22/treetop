import React from 'react'

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="col">
                    <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"></img>
                    <h2>Design</h2>
                    <p>Make your projects look great and interact beautifully.</p>
                    <a href="#">Learn More</a><br></br>
                </div>
                <div className="col">
                    <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg"></img>
                    <h2>Develop</h2>
                    <p>Use modern tools to turn your design into a web site</p>
                    <a href="#">Learn More</a><br></br>
                </div>
                <div className="col">
                    <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/deploy.svg"></img>
                    <h2>Deploy</h2>
                    <p>Use modern tools to turn your design into a web site</p>
                    <a href="#">Learn More</a><br></br>
                </div>
            </div>
            
        </section>
    )
}
