import React from 'react';
import { LoginBg } from '../../assets';
import { Gap, Link, Input, Button } from '../../components/atoms';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  return (
    <div className="main-page">
      <div className="left">
        <img
          src={LoginBg}
          className="bg-image"
          alt="register-bg"
        />
      </div>
      <div className="right">
        <p className="title">Login</p>
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
            title="Login"
            onClick={() => {
              history.push('/');
            }}
          />
        </a>

        <Gap height={100} />
        <a href="/register">
          <Link
            title="Belum punya akun, silahkan daftar"
            onClick={() => {
              history.push('/register');
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Login;
