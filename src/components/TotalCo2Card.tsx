import Card from 'react-bootstrap/Card';
import { total_co2_total } from './data'

function CustomCard() {
  return (
    <Card border="light" style={{ width: '18rem' }}>
      <Card.Header>
        Total Consumption 
      </Card.Header>
      <Card.Body>
        <script type="text/javascript">
          document.write(total_co2_total);
        </script>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
