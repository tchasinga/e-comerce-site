import { useState } from 'react';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <div className={`container ${isRegister ? 'active' : ''}`}>
      <div className={`form-container ${isRegister ? 'sign-up' : 'sign-in'}`}>
        <form>
          <h1>{isRegister ? 'Create Account' : 'Sign In'}</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaGooglePlusG /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          <span>{isRegister ? 'or use your email for registration' : 'or use your email password'}</span>
          {isRegister && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {isRegister && <button>Sign Up</button>}
          {!isRegister && <a href="#">Forget Your Password?</a>}
          <button>{isRegister ? 'Sign Up' : 'Sign In'}</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            {isRegister && <button onClick={toggleForm}>Sign In</button>}
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            {!isRegister && <button onClick={toggleForm}>Sign Up</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
