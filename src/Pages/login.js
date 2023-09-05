import React from 'react'
import "../Stlye/login.css"

export const login = () => {
  return (
    <body class="body">
    <div class="container">
    <div class="row">
        <div class="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
            <div class="row">
                <div class="col-lg-6 col-md-8 mx-auto">
                    
                    <div class="card rounded shadow shadow-sm">
                        <div class="card-header">
                            <h3 class="mb-0">Login</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                <div class="form-group">
                                    <label for="uname1">Correo Electronico</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""></input>
                                    
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password"></input>
                                    
                                </div>
                                <div>
                                    <label class="custom-control custom-checkbox">
                                      <input type="checkbox" class="custom-control-input"></input>
                                      <span class="custom-control-indicator"></span>
                                      <span class="custom-control-description small text-dark">Recuerdame</span>
                                    </label>
                                </div>
                                <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                            </form>
                        </div>
                        
                    </div>
                    

                </div>


            </div>
            

        </div>
        
    </div>
    
</div>
</body>
  )
}

export default login;