import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='not-found'>
            <h2>404! Page not found..! :(</h2>

            <Link to={'/'}>
            <Button className="loginButton"  variant="contained" color="error">Go to home</Button></Link>
        </div>
    );
};

export default PageNotFound;