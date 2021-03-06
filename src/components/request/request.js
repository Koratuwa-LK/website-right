import React, { Component } from 'react';
import styles from './request.module.css';
import { Grid, TextField, Select, MenuList, MenuItem, InputLabel, Slider, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import axios from '../../stocks-list';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
class Request extends Component {

    state = {
        name: '',
        size: '',
        eco_centre: '',
        vege: '',
        location: '',
        shipping: '',
        price: ''
    }

    handleChangename (event) {
        this.setState({
            name: event.target.value
        })
    }

    handleChangelocation (event) {
        this.setState({
            location: event.target.value
        })
    }

    handleChangevege (event) {
        this.setState({
            vege: event.target.value
        })
    }

    handleChangeshipping (event) {
        this.setState({
            shipping: event.target.value
        })
    }

    handleChangeeco_centre (event) {
        this.setState({
            eco_centre: event.target.value
        })
    }

    handleChangesize = (event, freshval) => {
        this.setState({
            size: freshval
        })
    }

    handleChangeprice (event) {
        this.setState({
            price: event.target.value
        })
    }

    



    request() {
        console.log(this.state.name,
        this.state.size,
        this.state.eco_centre,
        this.state.vege,
        this.state.location,
        this.state.shipping)

        axios.post('/requests.json', {vege: this.state.vege, size: this.state.size, price: this.state.price, buyer: this.state.name, eco_centre: this.state.eco_centre, buyer_location: this.state.location, shipping: this.state.shipping})


    }


    render () {
        return (
            <div className={styles.main}>
            <h1 style={{marginBottom: 10}}>REQUEST STOCKS</h1>
            {/* <a href="/pool" style={{color: '#f57e42'}}> */}CHECK CURRENT REQUESTS SUMMARY{/* </a> */} <a href="/pool" style={{color: '#f57e42'}}><ArrowForwardIcon style={{marginTop: 10}}/></a>

           
        <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6}>
        <div className={styles.tile}>
        <h4>Fill out the request</h4>
        <TextField
        value={this.state.name}
        onChange={this.handleChangename.bind(this)} className={styles.textfield} variant="filled" required label="Name" placeholder="Name" InputLabelProps={{
            style:{color: 'white'}
        }} />
        <br/>
        <TextField
        value={this.state.location}
        onChange={this.handleChangelocation.bind(this)} className={styles.textfield} multiline rows={4} variant="filled" required label="Location (address)" placeholder="Location" InputLabelProps={{
            style:{color: 'white'}
        }}/>

        <br/>

        <TextField
        value={this.state.price}
        onChange={this.handleChangeprice.bind(this)} className={styles.textfield} variant="filled" required label="Price you ask (Rs)" placeholder="Price you ask" InputLabelProps={{
            style:{color: 'white'}
        }}/>

        <br/>

        <InputLabel className={styles.label} id="demo-simple-select-label" style={{color: 'white'}}>Vegetable</InputLabel>
        <Select
        variant="filled"
        className={styles.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.vege}
          onChange={this.handleChangevege.bind(this)}
        >
          <MenuItem value={'Potato'}>Potato (අල)</MenuItem>
          <MenuItem value={'Beet'}>Beet (බීට්)</MenuItem>
          <MenuItem value={'Carrot'}>Carrot (කැරට්)</MenuItem>
          <MenuItem value={'Pumpkin'}>Pumpkin (වට්ටක්කා)</MenuItem>
          <MenuItem value={'Cabbage'}>Cabbage (ගෝවා)</MenuItem>
          <MenuItem value={'Brinjal'}>Brinjal (වම්බටු)</MenuItem>
          <MenuItem value={'Beans'}>Beans (බෝංචි)</MenuItem>
          <MenuItem value={'Tomato'}>Tomato (තක්කාලි)</MenuItem>
          <MenuItem value={'Chili'}>Chili (මිරිස්)</MenuItem>
          
        </Select>

        <InputLabel className={styles.label} style={{color: 'white'}}>Eco Centre</InputLabel>
        <Select
        variant="filled"
        className={styles.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
            value={this.state.eco_centre}
            onChange={this.handleChangeeco_centre.bind(this)}
        >
          <MenuItem value={'Meegoda'}>Meegoda</MenuItem>
            <MenuItem value={'Dambulla'}>Dambulla</MenuItem>
        </Select>

        <br/>

        <InputLabel className={styles.label} style={{color: 'white'}}>size (kg)</InputLabel>
     

        <Slider
        defaultValue={10}
        // getAriaValueText={this.valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={40}
        onChange={this.handleChangesize}
        marks
        min={10}
        // max={this.props.location.state.size}
        max={1000}
      />

      <br/>
      <InputLabel className={styles.label} style={{color: 'white'}}>Stock clearence method</InputLabel>
     
      <RadioGroup aria-label="gender" name="gender1" value={this.state.shipping} onChange={this.handleChangeshipping.bind(this)}>
        <FormControlLabel value="ship" style={{color: 'black'}} control={<Radio />} label="Ship with cash on delivery" color="black"/>
        <FormControlLabel value="collect" control={<Radio />} label="Collect at the eco centre" />
        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>

      <br/>

      <Button onClick={() => {this.request()}} variant="contained">make the request</Button>


        </div>
        </Grid>
        </Grid>
            </div>
            
        )
    }
}


export default Request;