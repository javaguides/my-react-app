import React from 'react';
import   './style.css';
function SignUpPage() {
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <div className="name-group">
                    <div className="form-group">
                        <input type="text" placeholder="First Name" className="first-name" />
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name" className="last-name" />
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password"
                        required />
                </div>
                <div className="btn-group">
                    <button className="button">Admin</button>
                    <button className="button">User</button>
                    <button className="button">Owner</button>
                </div>
                <div className="form-group">
                    <button type="submit">Sign Up</button>
                </div>
                <div className="signup-link">
                    <a href="#"> <u>Don't have an account?Sign Up</u></a>
                </div>
            </div>
        </div>
    );
}
export default SignUpPage;
