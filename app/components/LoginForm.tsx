// LoginForm.jsx
import React from 'react';
import { FormEvent } from 'react';

interface Props {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
  text: string;
}

const LoginForm = (props: Props) => {
  const handleSubmit = props.handleSubmit;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email:</label>
          <input id="email" name="email" type="text" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>
        <div>
          <button className="btn btn-active btn-neutral" type="submit">{props.text}</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
