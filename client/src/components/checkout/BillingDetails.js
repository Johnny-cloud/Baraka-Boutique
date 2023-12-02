// This code returns the billing details for the checkout section
import { Form } from "react-bootstrap"
import { useContext } from "react"
import AppContext from "../context/AppContext"

const BillingDetails = () => {
    const {currentCustomer} = useContext(AppContext)

  return (
        <div>
        <h4>Billing Details</h4>
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder={currentCustomer.name.split(" ")[0]} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder={currentCustomer.name.split(" ")[1]} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Company Name( Optional )</Form.Label>
                    <Form.Control placeholder="None Company" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country / Region</Form.Label>
                    <Form.Control placeholder="Kenya" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>State address</Form.Label>
                    <Form.Control placeholder="P.O Box" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Town / City</Form.Label>
                    <Form.Control placeholder="Nairobi" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder="Kenya" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Zip code</Form.Label>
                    <Form.Control placeholder="+254" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="07xx xxx xxx" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control placeholder={currentCustomer.email} />
                </Form.Group>
            </Form>
        </div>
    </div>

  )
}
export default BillingDetails