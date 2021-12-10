
import { Button, Form, Col, Row, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  return (
    
<Container style={{ textAlign: "left"}} >
     <Row>
     
    <Col  xs={3} md={3}>
     
        <Card className="nb-2" bg="black">
         
          <Card.Body >
            <Card.Title >Sign In For New Account!</Card.Title>
            </Card.Body>
        </Card>
            </Col>
           
            
              <Form>
            
                  <Col xs={3} md={3}>
                <Form.Group>
                  <Form.Label> First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type your first name..."
                  />
                  <Form.Text className="text-muted">
                    Your first name is required!
                  </Form.Text>
                  
                 
                </Form.Group>
               
                <Form.Group>
                  <Form.Label> Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type your last name..."
                  />
                  <Form.Text className="text-muted">
                    Your last name is required!
                  </Form.Text>
                </Form.Group>
                
                <Form.Group>
                  <Form.Label> Date of birth:</Form.Label>
                  <Form.Control
                    type="date"
                    
                  />
                  <Form.Text className="text-muted">
                    Your birth date is required!
                  </Form.Text>
                </Form.Group>
                

                <Form.Label> Gender:</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicCheckRadio">
                  
    <Form.Check type="radio" label="Man" defaultChecked
              />

    <Form.Check type="radio" label="Women"
              />
  </Form.Group>
  <Form.Group controlId="formEmail">
                  <Form.Label> Email Address:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@example.com"
                  />
                  
                </Form.Group>
                <Form.Group ontrolId="formPassword">
                  <Form.Label> Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                  />
                  
                </Form.Group>
    </Col>           
    
               
                
    <Button variant="primary" size="lg" active type="submit" value="Submit" >
    Submit
  </Button>{' '}
  <Button variant="secondary" size="lg"  active>
    Cancel
  </Button>
              </Form>
              
              </Row>    
          
          </Container>
 
    );
  


  }

      export default SignUp;
     