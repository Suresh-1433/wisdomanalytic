import './index.css'
import {Component} from 'react'

import { Link } from 'react-router-dom';
import UserDetail from '../UserDetail.js/index.js';

class Home extends Component{
    
    state = {searchInput:'',UserData:[],darkmode:false}

    componentDidMount(){
        this.getUserData()
    }
    getgeo=(datas)=>({
      lat:datas.lat,
      lng:datas.lng
    })

    getaddress = (data)=>({
        street:data.street,
        suite:data.suite,
        city:data.city,
        zipcode:data.zipcode,
        geo:this.getgeo(data.geo)
    })

    getUserData = async ()=>{
       const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const data = await response.json()
       const UpdatedData = data.map(eachItem=>({
        id:eachItem.id,
        name:eachItem.name,
        username:eachItem.username,
        email:eachItem.email,
        address:this.getaddress(eachItem.address)
       }))
       this.setState({UserData:UpdatedData,loader:false})
     
    }

    onInput=(event)=>{
      this.setState({searchInput:event.target.value})
    }
    
   rendergetsendaddress = ()=>{
     const {UserData} = this.state
      return(
        <div>
           {this.renderUserData()}
           <ul>
          {
             UserData.map(eachItem=>(
              <div className='adressdetails'>
                <UserDetail  street = {eachItem.address.street} 
                suite={eachItem.address.suite}
                 city ={eachItem.address.city}
                zipcode ={eachItem.address.zipcode}
                lat = {eachItem.address.geo.lat}
                lan ={eachItem.address.geo.lng}
                />
            
              </div>
             ))
          }
        </ul>
       
        </div>
       
      )
   }

   onToggleMode = () => {
      this.setState( prevState => {
        const { darkmode } = prevState
        return {
          darkmode: !darkmode
        }
      })
    }

   renderUserData = () =>{
    const {searchInput,UserData,darkmode} = this.state
    const filteredsearch = UserData.filter(eachItem=>eachItem.name.includes(searchInput))
    
    
return(
  
  <div className={ darkmode ? 'Darkmode' : 'LightMode'}>
   
  <div className='search'>
             <div>
                <h1>Home Page</h1>
               <input type='search' onChange={this.onInput} value={searchInput} placeholder='Search here'/> 
             </div>
   
              <button onClick={this.onToggleMode} type="button" className={ darkmode ? 'Darkmodebutton' : 'LightModelight'} > { darkmode ? 'LightMode' : 'DarkMode'}</button>
               
    </div>
             <ul className='cardsContainer'>
               
                 {
                     filteredsearch.map(eachItem=>(
                 <Link className='nav-link' to='/address'>
                         <div className='cardsList'>
                             <p>Name : {eachItem.name}</p>
                             <p>UserName: {eachItem.username}</p>
                             <p>Email: {eachItem.email}</p>
                         </div> </Link>
                     ))
                 }
              
             
              
             </ul>
 </div>
)
   }

  
render(){    
  const {loader} = this.state  
return(
         <div>  
           
          {this.rendergetsendaddress()} 

         </div>
      )
    }
}

export default Home;
