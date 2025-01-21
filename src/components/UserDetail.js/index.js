import './index.css'
import { Link } from 'react-router-dom'
   const UserDetail = props =>{
        const {street,suite,zipcode,lat,lan} = props
        
        return(
            <div className="address">
                  <p>Street:{street}</p>
                  <p>Suite: {suite}</p>
                  <p>Zipcode: {zipcode}</p>
                  <p>Latitude:{lat}</p>
                  <p>Langitude:{lan}</p>
             <Link className='nav-link' to='/'>Back to Home</Link>
            </div>

          
          
        )
    }

export default UserDetail