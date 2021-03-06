import React, { Component } from 'react';
import styles from './croplocations.module.css';
import { Button, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import env from '../../keys/env.js';

import axios from '../../stocks-list.js';

class Croplocations extends Component {

    googleMapRef = React.createRef()

    state={
        trips: [],
        show: false,
        find: '',
        lat: 6.0558904,
        lng: 80.1769774,
        croplist : [{lat: 7.9117496 ,lng: 81.0460577, vege: 'potato', title: 'Hashan-potato-80kg'},{lat: 6.0558904,lng: 80.1769774, title: 'beet', vege: 'beet'}],
        croplistfinl: []
    }

    componentDidMount() {
        axios.get('/cropslocations.json')
        .then(response => {
            console.log(response.data)
            
            const request = []
            const obj = response.data
            
            for (let key in obj) {
                request.push({
                    id: key,
                    crop: obj[key].crop,
                    size: obj[key].size,
                    name: obj[key].name,
                    lat: obj[key].lat,
                    lng: obj[key].lng
                })
            }
            this.setState({
                croplistfinl: request
            })
        }).catch(er => {
            console.log(er)
        })
    }

    render () {


        return (
            <div className={styles.main}>
           


                    
                    <div  className={styles.googlebox1} >
                    <Map
          google={this.props.google}
          zoom={8}
          style={{height:600, width: 'auto' ,borderRadius: 10, padding: 40}}
        // className={styles.googleboxinner}
          initialCenter={{ lat: 7.4583349, lng: 80.5936853}}
        >
       {/* {this.state.croplist.map(crop => {{ crop.vege == 'potato' ? <Marker title={crop.title} style={{color: 'green'}} icon={{ url: 'https://i.imgur.com/QkpL7jq.png' }} position={{ lat: crop.lat, lng: crop.lng}} />  :  <Marker title={crop.title} style={{color: 'green'}} icon={ require ('../../assets/pointers/potato.png') } position={{ lat: crop.lat, lng: crop.lng}} /> } */}
{this.state.croplistfinl.map(crop => { if(crop.crop == 'Potato') {
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={require ( '../../assets/pointers/potato.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}if(crop.crop == 'Beet'){
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={ require ('../../assets/pointers/beetpointers.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}if(crop.crop == 'Brinjal'){
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={ require ('../../assets/pointers/brinjl.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}if(crop.crop == 'Carrot'){
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={ require ('../../assets/pointers/crot.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}if(crop.crop == 'Tomato'){
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={ require ('../../assets/pointers/tmto.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}if(crop.crop == 'Beans'){
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={ require ('../../assets/pointers/bns.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}if(crop.crop == 'Pumpkin'){
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={ require ('../../assets/pointers/pmkin.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}if(crop.crop == 'Cabbage'){
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={ require ('../../assets/pointers/cabbage.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}if(crop.crop == 'Chili'){
    return <Marker title={crop.name + '-' + crop.crop + '-' + crop.size + 'kg'} style={{color: 'green'}} icon={ require ('../../assets/pointers/chili.png') } position={{ lat: crop.lat, lng: crop.lng}} />
}
}
        
        )} 
        
        {/* <Marker icon={{ url: 'https://i.imgur.com/QkpL7jq.png' }} position={{ lat: this.state.lat, lng: this.state.lng}} /> */}
         
        
        </Map> 
        </div>


        <div className={styles.legen}>
        {/* <h2>Crops</h2> */}
        <div style={{height: 100,display: 'flex', textAlign: 'center', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/potato.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Potato</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/beetpointers.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Beet</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/brinjl.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Brinjal</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/crot.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Carrot</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/tmto.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Tomato</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/bns.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Beans</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/pmkin.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Pumpkin</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/cabbage.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Cabbage</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/chili.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Chili</h4>
        </div>
        </div>

       
        </div>

        <div className={styles.legeninner}>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/potato.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Potato</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/beetpointers.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Beet</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/brinjl.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Brinjal</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/crot.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Carrot</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/tmto.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Tomato</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/bns.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Beans</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/pmkin.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Pumpkin</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/cabbage.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Cabbage</h4>
        </div>
        <div style={{padding: 10}}>
            <img src={require ('../../assets/pointers/chili.png')}></img><h4 style={{fontSize: 15, fontWeight: 'bold'}}>Chili</h4>
        </div>
        </div>


        


            
            </div>

            
        )
    }
}

export default GoogleApiWrapper({
    apiKey: env.googleapiKeyworking
  })(Croplocations);