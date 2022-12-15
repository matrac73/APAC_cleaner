import Card from 'react-bootstrap/Card';


function CustomCard() {
  return (
    <Card border="light" style={{ width: '18rem' }}>
      <Card.Header>
        Sources
      </Card.Header>
      <Card.Body>
        <a href ='https://app.electricitymaps.com/zone/SG'>
            Elecrticity Map <br />
        </a>
        <a href ='https://www.sciencedirect.com/science/article/pii/S0921344919303829'>
            Science Direct <br />
        </a>
        <a href ='https://www.holmen.com/en/paper/sustainability/sustainability-stories/how-to-undrestand-carbon-footprints/'>
            Holmen <br />
        </a>
        <a href ='https://www.tandfonline.com'>
            Tandfonline <br />
        </a>
        <a href ='https://8billiontrees.com/carbon-offsets-credits/carbon-ecological-footprint-calculators/plastic-carbon-footprint/#:~:text=For%201%20kilogram%20(kg)%20of,2%20per%20kg%20of%20plastic'>
            8 billion trees <br />
        </a>
        <a href ='https://www.aluminium.fr/en/stake/climate-and-carbon-footprint/'>
            Aluminium <br />
        </a>
        <a href ='https://www.ecosperity.sg/content/dam/ecosperity-aem/en/reports/Environmental-Impact-of-Key-Food-Items-in-Singapore_Oct2019.pdf'>
            Ecosperity <br />
        </a>
        <a href ='https://www.bbc.com/future/article/20200317-climate-change-cut-carbon-emissions-from-your-commute'>
            BBC <br />
        </a>
        <a href ='https://www.urbanrail.net/as/sing/singapore.htm#:~:text=Carriages%20are%203.2m%20wide,via%20third%20rail%20at%20750V.'>
            UrbanTrail <br />
        </a>
        <a href ='https://www.bts.gov/archive/publications/journal_of_transportation_and_statistics/volume_03_number_03/paper_01/table_b01'>
            BTS.gov <br />
        </a>
        <a href ='https://www.lta.gov.sg/content/ltagov/en/getting_around/driving_in_singapore/driving_rules_and_regulations.html'>
            LTA.gov <br />
        </a>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
