import React, { useState, useContext } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { MyContext, themes } from '../App'

export default()=>{
  const dispatch = useDispatch()
  const [gemName, setGemName] = useState('') // yg dinput
  const data = useSelector(state=> state.GameReducer.games) // arr games
  const { theme, changeTheme } = useContext(MyContext)
 
  const findGame = (e) => { //SEARCH
    e.preventDefault()
    let arr = []
    if (data.length > 0) {
      for(let i = 0; i < data.length; i++){
        let counter = 0
        let storeName = data[i].name.toUpperCase()
        let inputName = gemName.toUpperCase()
        for(let j = 0; j < storeName.length; j++){
          for(let k = 0; k < inputName.length; k++){
            if(j === k && storeName[j] === inputName[k]) counter++
          }
        }
        if(counter === storeName.length || counter === inputName.length) arr.push(data[i])
      }
      dispatch({
        type: 'SEARCH_GAME',
        game: arr
      })
    }
  }

  return (
    <div>
      <Navbar style={{width: "100%", 'zIndex': '100', backgroundColor: `${themes[theme].foreground}`}}>
        <Navbar.Brand><Link to="/" style={{color:`${themes[theme].background}`}}>Famtree</Link></Navbar.Brand>
        {/* <Nav className="mr-auto" data-testid="Favourite-Games"> */}
        <Nav className="mr-auto" data-testid="Favourite-Games">
          <Link to="/favGame" style={{color:"white"}}>Register Profile</Link>
        </Nav>
        <Form inline onSubmit={findGame}>
          <FormControl type="text" placeholder="Find a name" className="mr-sm-2" onChange={(e)=>{ setGemName(e.target.value)}}/>
          <button className="btn" onClick={findGame} style={{backgroundColor: `${themes[theme].background}`}}>
            <Link to="/search"style={{color:`${themes[theme].foreground}`}} >Search </Link>
          </button>
          <button className="btn btn-outline-light ml-2" onClick={changeTheme}>Change Theme</button>
        </Form>
      </Navbar>
    </div>
  );
}