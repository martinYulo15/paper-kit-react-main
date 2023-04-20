/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Maps from "views/cmpis/maps";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">¡INGRESA!</h3>
                <div className="social-line text-center">
                  
                </div>
                <Form className="register-form">
                  <label>Correo electronico</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <label>Contraseña</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contraseña" type="Contraseña" />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="black"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                   ¿Olvidaste tu contraseña?
                  </Button>
                </div>
              </Card>
              <center>
              <Maps />
              </center>


              <div className="col text-center">
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
