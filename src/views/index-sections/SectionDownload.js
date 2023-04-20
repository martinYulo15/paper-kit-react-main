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

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Mision</h2>
              <p className="description">
              Nuestra misión en Reigen es mejorar la eficiencia y productividad de la agricultura a través de soluciones tecnológicas innovadoras. Nos esforzamos por brindar a los agricultores un control preciso y conveniente de sus cultivos, lo que les permite aumentar sus rendimientos y reducir el desperdicio de recursos.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Vision</h2>
              <p className="description">
              Nuestra visión en Reigen es ser el líder en soluciones tecnológicas para la agricultura, ayudando a los agricultores a crear un futuro más sostenible y productivo. Nos enfocamos en ofrecer productos y servicios de alta calidad que les permitan maximizar sus cosechas y alcanzar un equilibrio entre eficiencia y sostenibilidad.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Objetivo</h2>
              <p className="description">
              Nuestro objetivo en Reigen es ofrecer soluciones tecnológicas innovadoras para mejorar la eficiencia y productividad de la agricultura. Nos enfocamos en brindar a los agricultores un control preciso y conveniente de sus cultivos, lo que les permite aumentar sus rendimientos, reducir el desperdicio de recursos y lograr un equilibrio entre eficiencia y sostenibilidad. A través de nuestro software avanzado y sistemas de riego automático, buscamos ayudar a los agricultores a alcanzar un futuro más sostenible y productivo.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              
            </Col>
          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
