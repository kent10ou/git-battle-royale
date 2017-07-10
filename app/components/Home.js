import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>Github Battle Royale!</h1>
                <h2>Battle your friends!</h2>
                <Link className='button' to='/battle'>
                    Battle
                </Link>
            </div>
        )
    }
}

export default Home;