


const SigninFields = () => {


    return(
      
        <div className="signinFields">
            <h3 className="signinFields-h3"> Unlock Performance. Elevate Rewards.</h3>
            <div className="signinFields-input">
                <label htmlFor="input-id">Name<span>*</span></label>
                <input type="text" placeholder="Enter admin account name" id="input-id"/>
            </div>
            <div className="signinFields-input">
                <label htmlFor="input-id">Password<span>*</span></label>
                <input type="password" placeholder="Enter admin pin" id="input-id"/>
            </div>
             <h5 className="signinFields-h5">
                <a href="#">Forgot password?</a>
             </h5>
             <button id="signin-btn" type="submit">Sign In</button>
        </div>
    );
}

export default SigninFields;