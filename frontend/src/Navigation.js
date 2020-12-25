import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/"> <i className="material-icons">
                            NODEJS-REACT-EXPRESS </i>  </Link>
                        
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">NODE JS</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to="/components/Config" className="nav-link">REACT-EXPRESS</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/components/Testapi" className="nav-link">TEST</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/components/stt" className="nav-link">SPEECH To TEXT</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/components/tts" className="nav-link">TEXT To SPEECH </Link>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}