import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class Reg extends React.Component {
  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4 shadow-sm">
              <h2> Registration Form </h2>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>First Name <span class="required">*</span></Form.Label>
                      <Form.Control placeholder="First Name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Last Name <span class="required">*</span></Form.Label>
                      <Form.Control placeholder="Last Name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="formGroupEmail">
                      <Form.Label>Login Username<span class="required">*</span></Form.Label>
                      <Form.Control type="email" placeholder="Login Username" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form>
                      <Form.Group as={Col} controlId="formGroupEmail">
                        <Form.Label>Email address︁<span class="required">*</span></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col>
                    <Form>
                      <Form.Group as={Col} controlId="formGroupEmail">
                        <Form.Label>Confirm Email address<span class="required">*</span></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Address<span class="required">*</span></Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Row className="mb-3">
                  <Col>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City<span class="required">*</span></Form.Label>
                      <Form.Control placeholder="Current City" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>State <span class="required">*</span></Form.Label>
                      <Form.Control placeholder="State" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip<span class="required">*</span></Form.Label>
                      <Form.Control placeholder="Pin Code" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="number">
                      <Form.Label>Mobile No<span class="required">*</span></Form.Label>
                      <Form.Control placeholder="Mobile Number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label>Vendor Name<span class="required">*</span> </Form.Label>
                      <Form.Control placeholder="Vendor Name as per GST Regestraction" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="g-2">
                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label>Bussiness GST No <span class="required">*</span></Form.Label>
                      <Form.Control placeholder=" GST Regestraction Number" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group as={Col} id="formGridCheckbox">
    <Form.Check type="checkbox" label="The information Provided by me is correct as per my knowledge " />
  </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>

      </div>
    )
  };
}
export default Reg;