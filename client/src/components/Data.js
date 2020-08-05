import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Container, Row, Col, Spinner, Card, Button } from "react-bootstrap";
// const url = 'https://api.covid19api.com'
const url = 'http://localhost:4000'

export default () => {
    const [ selectedData, setSelectedData ] = useState([])
    const [ menus, setMenu ] = useState(["Fun", "Joy", "Happy"])

    useEffect(() => {
        axios.get(`${url}/games`)
          .then(( response ) => {
              console.log('THIS IS IT', response.data)
              setSelectedData(response.data);
        })
        .catch(err => { console.log(err) })
    }, []);
    
    function getGameDetail(event, id) { 
        event.preventDefault()
        console.log('Masuk Get Detail', id) 
    }

    return (
        <>
          <ul> {menus.map((menu, idx) => { return <li key={idx}>{menu}</li> })} </ul>
          <Row>
          {selectedData.map((game, idx) => { 
              return  <Col md={3} key={game.id}>
                        <Card style={{ marginBottom: 10 + 'px'}}>
                            <Card.Img variant="top" src={game.img} style={{height: 300 + 'px'}}/>
                            <Card.Body>
                                <Card.Title className="card-title text-center">{game.name}</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group mx-auto">
                                        <button onClick={event => { getGameDetail(event, game.id) } } className="btn btn-sm btn-outline-warning">
                                        {/* <Link to={url} style={{ color: "black" }}> */}
                                            Game Detail
                                        {/* </Link> */}
                                        </button>
                                        {/* {keadaan && (
                                        <Button variant="outline-dark" >
                                            Add To Favourite
                                        </Button>
                                        )} */}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                      </Col>
          })}
          </Row>
        
        </>
      );
};



















// class Data extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       selectedData: ['Empty Selected Country']
//     };
//   }
//   componentDidMount(){
//     this.fetchCovid()
//   }
  
// //   fetchCovid (event) {
// //     // covidAPI.get('/summary')
// //     // fetch('https://api.covid19api.com/countries')
// //     axios.get(`${url}/summary`)
// //       .then(( response ) => {
// //         this.setState({ selectedData: response.data.Countries });
// //         console.log('INI STATE -->', this.state.selectedData)
// //     })
// //     .catch(err => { console.log(err) })
// //   };

//   getCountry(){
//       console.log('Masuk Get Country')
//   }

//   render() {
//     return (
//       <>
//         <ul>
//         {this.props.menus.map((menu, idx) => {
//             return <li key={idx}>{menu}</li>
//         })}
//         </ul>
//         {this.state.selectedData.map((country, idx) => { 
//             return  <div key={idx} className="card mb-3 shadow">
//                         <h3 className="card-header">{country.Country} | {country.CountryCode}</h3>
//                         <div className="card-body">
//                             <h5 className="card-title">Total Confirmed: {country.TotalConfirmed}</h5>
//                             <p className="card-title">Deaths: {country.TotalDeaths} | Recovered: {country.TotalRecovered}</p>
//                             <button onClick={event => { this.getCountry(event) } } className="btn btn-outline-primary mb-2">See Country</button>
//                         </div>
//                     </div>
//         })}
        
//         {/* 
//             <input type="text" value={this.state.selectedData} onChange={event => this.handleChange(event)} />
//             <button class="btn btn-primary" onClick={this.handleSubmit}>Submit</button> 
//         */}

//       </>
//     );
//   }
// }


