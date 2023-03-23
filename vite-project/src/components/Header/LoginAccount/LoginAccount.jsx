import Profile from '../../../assets/img/profile.svg';
import React from 'react';
import { Link } from 'react-router-dom';

import {Button} from 'react-bootstrap'
function LoginAccount() {

	return (
    <>
      <Button variant="dark">
        <Link to="/biblioteca" className="text-decoration-none text-white">
        <a className="text-decoration-none text-white">
          <img
            alt=""
            src={Profile}
            width="30"
            height="30"
            className="d-inline-block align-center"
          />{' '}
          Luis
          </a>
        </Link>
      </Button>
    </>
  );
}

export default LoginAccount;
