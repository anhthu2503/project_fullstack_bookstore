import React from 'react';

const SignIn = () => {
    return (
        // signin Modal
        <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModal1" aria-hidden="true">
            <div className="agilemodal-dialog modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body  pt-3 pb-5 px-sm-5">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <img src="images/p3.png" className="img-fluid" alt="login_image" />
                            </div>
                            <div className="col-md-6">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <p className="recipient-name">Your Name</p>
                                        <input type="text" className="form-control" placeholder=" " name="Name" id="recipient-name" required="" />
                                    </div>
                                    <div className="form-group">
                                        <p className="col-form-label">Password</p>
                                        <input type="password" className="form-control" placeholder=" " name="Password" required="" />
                                    </div>
                                    <div className="right-w3l">
                                        <input type="submit" className="form-control" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;