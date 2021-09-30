import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import web from '../Pages/images/img2.png';
import Common from "./Common";

const Home = () => {
    return (
        <> 
          <Common
               name='Make your event more' 
           imgsrc={web}
           bold='Elegent'
            visit="/service"
             btnname='Book your Event now'
                 
          />
             
        </>
    )
}
export default Home