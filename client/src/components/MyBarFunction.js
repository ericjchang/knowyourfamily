import React, { useState, useContext } from "react";
import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { MyContext, themes } from '../App'

export default()=>{
  const dispatch = useDispatch()
  const history = useHistory()
  const [gemName, setGemName] = useState('') // yg dinput
  const data = useSelector(state=> state.GameReducer.games) // arr games
  const { theme, changeTheme } = useContext(MyContext)

  const toIndividualPage =()=> { history.push('/inputIndividual') }
  const toSearchPage =()=> { history.push('/search') }
  const toLogin = () => { history.push("/login") }
  const toMap = () => { history.push("/map") }
 
  const findGame = (e) => { //SEARCH
    // e.preventDefault()
    // console.log(gemName)
    // let arr = []
    // if (data.length > 0) {
    //   for(let i = 0; i < data.length; i++){
    //     let counter = 0
    //     let storeName = data[i].name.toUpperCase()
    //     let inputName = gemName.toUpperCase()
    //     for(let j = 0; j < storeName.length; j++){
    //       for(let k = 0; k < inputName.length; k++){
    //         if(j === k && storeName[j] === inputName[k]) counter++
    //       }
    //     }
    //     if(counter === storeName.length || counter === inputName.length) arr.push(data[i])
    //   }
    //   dispatch({
    //     type: 'SEARCH_GAME',
    //     game: arr
    //   })
    // }
  }

  return (
    <div>
      <Navbar expand="lg" style={{ position: 'fixed', width: "100%", 'zIndex': '100', backgroundColor: `${themes[theme].foreground}`}}>
        <Navbar.Brand><Link to="/" style={{color:`${themes[theme].background}`}}>Famtree</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Create" id="basic-nav-dropdown" >
              <NavDropdown.Item onClick={toIndividualPage} >Create a Profile</NavDropdown.Item>
              <NavDropdown.Item ><Link to="/inputIndividual">Create a Family</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#testimoniSec" style={{color:"white"}}>Testimony</Nav.Link>
            <Nav.Link href="#offersSec" style={{color:"white"}}>Offers</Nav.Link>
            <Nav.Link href="#applyYourDataSec" style={{color:"white"}}>Apply Your Data</Nav.Link>
            <Nav.Link href="#aboutUsSec" style={{color:"white"}}>About Us</Nav.Link>
          </Nav>
          <Form inline onSubmit={findGame}>
            <Navbar.Brand><i className="fa fa-search fa-2x" onClick={toSearchPage}></i></Navbar.Brand>
            <Button className="btn btn-danger" onClick={toMap}>See Nearby</Button>
            <button className="btn btn-outline-light ml-2" onClick={changeTheme}>Change Theme</button>
            <Navbar.Brand><i className="fa fa-user-circle fa-2x ml-2" onClick={toLogin}></i></Navbar.Brand>
            {/* <FormControl type="text" placeholder="Find a name" className="mr-sm-2 ml-2" onChange={(e)=>{ setGemName(e.target.value)}}/>
            <button className="btn" onClick={findGame} style={{backgroundColor: `${themes[theme].background}`}}>
              <Link to="/search" style={{color:`${themes[theme].foreground}`}} >Search </Link>
            </button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}