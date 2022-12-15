import Card from 'react-bootstrap/Card';
// import { total_co2_total } from './data'

function CustomCard() {
  return (
    <Card border="light" style={{ width: '18rem' }}>
      <Card.Header>
        What is your personal emission ?
      </Card.Header>
      <Card.Body>
        <a href = 'https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/'>
          Click Here to discover
        </a>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
