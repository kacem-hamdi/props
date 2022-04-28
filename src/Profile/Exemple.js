import React from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
function Exemple(props) {
    const { fullName, Bio, Profession } = props
    const handleName=()=>alert(fullName)
    return (
        <Card style={{ width:"600px"}}>
  <Card.Body>
  {props.children}
    <Card.Title className="title">FullName:{fullName}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted bio">Bio:{Bio}</Card.Subtitle>
    <Card.Text className="text">
    Profession:{Profession}
    </Card.Text>
    <Card.Link href="#" onClick={handleName}>Card Link</Card.Link>
   
  </Card.Body>
</Card>

    )
}
Exemple.defaultProps=
{
   fullName :'default fullName',
   Profession :'default Profession',
   Bio :'default Bio',
}
Exemple.propTypes = {
  title:PropTypes.string,
  Profession:PropTypes.string,
  Bio:PropTypes.string
}





export default Exemple