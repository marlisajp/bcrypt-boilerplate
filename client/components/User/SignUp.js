import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/authActions';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassphrase, setAdminPassphrase] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(
      signup({
        email,
        password,
        firstName,
        lastName,
        username,
        isAdmin,
        adminPassphrase,
      })
    );
  };

  return (
    <form>
      <input
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder='First Name'
      />
      <input
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder='Last Name'
      />
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <label>
        Admin
        <input
          type='checkbox'
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
      </label>
      <label>
        Admin Passphrase
        <input
          type='text'
          value={adminPassphrase}
          onChange={(e) => setAdminPassphrase(e.target.value)}
        />
      </label>
      <button onClick={handleSignUp}>Sign Up</button>
    </form>
  );
};

export default SignUp;
