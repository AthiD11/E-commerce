import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '400px',
  width:'100%',
  border:'3px solid#ccc',
  borderRadius:'18px',
  objectFit:'cover',
};
const Ccc = () => (
  <Carousel autoplay>
    <div>
      <img src='https://wallpaperaccess.com/full/1164055.jpg'style={contentStyle}/>
    </div>
    <div>
      <img src='https://wallpaperaccess.com/full/680075.jpg' style={contentStyle}/>
    </div>
    <div>
    <img src='https://wallpaperaccess.com/full/2842960.jpg' style={contentStyle}/>
    </div>
    <div>
      <img src='https://wallpaperaccess.com/full/429011.jpg' style={contentStyle}/>
    </div>
  </Carousel>
);
export default Ccc;