import React from "react";
import "mdbreact/dist/css/mdb.css";
import { FaRegMehRollingEyes,FaRegHeart,FaRegHandPointUp,FaRegCommentDots} from "react-icons/fa";



import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">At the end</h5>
            <p className="well">
             welcome, please visite me again
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">choose one </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"><FaRegMehRollingEyes className="ico" />?</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><FaRegHeart className="ico"/></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><FaRegHandPointUp className="ico"/></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><FaRegCommentDots className="ico"/></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Rami ksaier </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;