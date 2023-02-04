import React from "react";
import { Link } from "react-router-dom";

function Klub({key,klub}) {

    return (
        <div className="col">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-5 col-sm-4">
                            <img className="img-fluid w-4" src="https://www.freepnglogos.com/uploads/football-png/football-transparent-image-14.png"  alt='Lab' />
                        </div>
                        <div className="col-7 col-sm-8">
                            <div className="card-body">
                                <h5><b>{klub.naziv}</b></h5>
                                <h5>{klub.grad}</h5>
                                <h6><i>{klub.predsednik}</i></h6>
                                <Link to="/kontaktiraj">
                                    <button className="btn btn-success btn-sm" type="button" >Kontaktiraj</button>
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
    );
  }
  
  export default Klub
  