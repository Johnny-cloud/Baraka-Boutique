import { Form } from "react-bootstrap"

const BillingDetails = () => {
  return (
    <div>
        <h4>Billing Details</h4>
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Country/Region</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>State address</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Town/City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Zip code</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control />
                </Form.Group>

            </Form>
        </div>
    </div>
  )
}

export default BillingDetails