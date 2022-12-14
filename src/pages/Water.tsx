import CustomNavBar from '../components/NavBar';
import CustomCard from '../components/TotalCo2Card';
import CustomBarChart from '../components/WaterBarChart';
import CustomLineChart from '../components/WaterLineChart';
import CustomDonutChart from '../components/WaterDonutChart';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Water() {

  return (
    <Container fluid>

      <CustomNavBar/>

      <Row fluid>
        <Col xs={12} md={8}>
          <CustomBarChart/>
        </Col>
        <Col xs={6} md={4}>
          <CustomDonutChart/>
        </Col>
      </Row>

      <Row fluid>
        <Col xs={6}>
          <CustomLineChart/>
        </Col>
        <Col xs={6}>
          <CustomCard/>
        </Col>
      </Row>

      <Row fluid>
        <Col xs={6}>
          Recommandations:
          - Take stairs
          - Take less planes
          - Eat less red meat
        </Col>
        <Col xs={6}>
          Compute your personal emission
        </Col>
      </Row>
    </Container>
  );
}

export default Water;