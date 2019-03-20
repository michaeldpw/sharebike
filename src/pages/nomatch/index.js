import React from 'react';
import './nomatch.css'

export default class NoMatch extends React.Component{
    render(){
        return (
            <div className="nomatch">
                <div>
                    <img src="/assets/nomatch.png" alt=""/> 
                    <span>&nbsp;&nbsp;Page not found.</span>
                </div>
            </div>
        )
    }
}