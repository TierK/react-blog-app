import React, { Component } from 'react';
import './Dialogs.css';


export default class Dialogs extends Component {
    render() {
        return (
            <div className="Dialogs">
                <div className="dialog-cards">
                    <div className="card active">Front End Guy</div>
                    <div className="card">Jhon </div>
                    <div className="card">Lector dr. Mary</div>
                    <div className="card">Back end menager</div>
                    <div className="card">Elisheva</div>
                    <div className="card">Kim</div>
                </div>
                <div className="dialog-messages">
                    <div className="message">
                    A black hole is a region of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it
                    </div>
                    <div className="message">
                    The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.
                    </div>
                    <div className="message">Although the event horizon has an enormous effect on the fate and circumstances of an object crossing it, no locally detectable features appear to be observed
                    </div>
                    <div className="message">
                    In many ways, a black hole acts like an ideal black body, as it reflects no light.
                    </div>
                    <div className="message">
                    Objects whose gravitational fields are too strong for light to escape were first 
                    </div>
                    <div className="message">
                    The first modern solution of general relativity that would characterize a black hole was found by Karl Schwarzschild
                    </div>
                </div>
            </div>
        )
    }
}