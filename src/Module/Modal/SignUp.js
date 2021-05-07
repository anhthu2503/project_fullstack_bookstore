import React from 'react';

const SignUp = () => {
    return (
        // sign up Modal
        <div className="modal fade" id="myModal_btn" tabindex="-1" role="dialog" aria-labelledby="myModal_btn" aria-hidden="true">
            <div className="agilemodal-dialog modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Register Now</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body pt-3 pb-5 px-sm-5">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <img src="images/p3.png" className="img-fluid" alt="login_image" />
                            </div>
                            <div className="col-md-6">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <p clpss="recipient-name">Your Name</p>
                                        <input type="text" className="form-control" placeholder=" " name="Name" id="recipient-name1" required="" />
                                    </div>
                                    <div className="form-group">
                                        <p className="recipient-email" >Email</p>
                                        <input type="email" className="form-control" placeholder=" " name="Email" id="recipient-email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <p className="password1" >Password</p>
                                        <input type="password" className="form-control" placeholder=" " name="Password" id="password1" required="" />
                                    </div>
                                    <div className="form-group">
                                        <p className="password2" >Confirm Password</p>
                                        <input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required="" />
                                    </div>
                                    <div className="sub-w3l">
                                        <div className="sub-agile">
                                            <input type="checkbox" id="brand2" value="" />
                                            <p className="mb-3">
                                                <span></span>I Accept to the Terms & Conditions</p>
                                        </div>
                                    </div>
                                    <div className="right-w3l">
                                        <input type="submit" className="form-control" value="Register" />
                                    </div>
                                </form>
                                <p className="text-center mt-3">Already a member?
                                    <a href="#login" data-toggle="modal" data-target="#exampleModal1" className="text-dark login_btn">
                                        Login Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;