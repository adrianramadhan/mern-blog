import React from 'react';
import { RegisterBg } from '../../assets';
import { Gap, Link, Input, Button } from '../../components/atoms';
import './register.scss';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();

  return (
    <div className="main-page">
      <div className="left">
        <img
          src={RegisterBg}
          className="bg-image"
          alt="register-bg"
        />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input
          label="Full Name"
          placeholder="Full Name"
        />
        <Gap height={18} />
        <Input
          label="Email"
          placeholder="Email"
        />
        <Gap height={18} />
        <Input
          label="Password"
          placeholder="Password"
        />
        <Gap height={50} />
        <a href="/">
          <Button
            title="Register"
            onClick={() => {
              history.push('/');
            }}
          />
        </a>

        <Gap height={100} />
        <a href="/login">
          <Link
            title="Kembali ke Login"
            onClick={() => {
              history.push('/login');
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Register;
