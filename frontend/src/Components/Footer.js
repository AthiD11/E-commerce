import React from "react";

const Footer = () => {
  const gradientstyle={
    background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
  };
  const gradienttext={
    background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
    WebkitBackgroundClip:'text',
    WebkitTextFillColor:'transparent'

  }
  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="Col-lg-5 col-sm-12 pt-2"><div
  style={{
    background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign:'center'
  }}
>
  GEARSTRIKE
</div>
</div>
        <div className="col-lg-5 col-sm-12 px-2">
          <h3 className="text-white mb-2"
          >ABOUT US</h3>
          <div
            style={{ height: "3px", width: "80px",...gradientstyle }}
            className="bg-danger mb-2"
          ></div>
          <p className="text-white">
            At Gearstrike, adventure isn't just something we sell — it's
            something we live. We’re a team of outdoor enthusiasts, adrenaline
            chasers. From mountain trails to oceanwaves, we’ve carefully curated the best sports and
            recreation equipment — tested for durability, built for performance,
            and designed for thrill. Whether you are shredding down a mountain
            on a bike, paddling across a still lake, or skating your favorite
            urban path, Gearstrike is here to equip your every move.
          </p>
          <p className="text-white">
            Gearstrike isn’t your average outdoor store — we’re the launchpad
            for your next great adventure. Born from a love for speed, grit, and
            nature, our mission is to connect you with high-performance gear
            that’s as tough and relentless as you are. Mountain bikes.
            Skateboards. Kayaks. Helmets. Apparel that actually keeps up. This
            isn’t just gear. This is Gearstrike.
          </p>
        </div>

        <div className="col-lg-3 col-sm-6 px-2">
          <h3 className="text-white mb-2">Gears</h3>
          <div
            style={{ height: "3px", width: "80px",...gradientstyle }}
            className="bg-danger mb-2"
          ></div>
          <br />
          <p className="text-white">
          1.Backpacks <br/>
          2.Tents & shelters<br/>
          3.Sleeping bags & pads<br/>
          4.Skateboards<br/>
          5.Helmets & protective pads<br/>
          6.Shoes<br/> 
          </p>
          <input
            type="text"
            className="form-control"
            style={{ fontSize: "x-large" }}
          />
          <br />
          <button
            type="button"
            className="btn "
            style={{ borderRadius: "100px", fontSize: "larger",...gradientstyle, }}
          >
            Get Help
          </button>
        </div>

        <div className="col-lg-3 col-sm-6 px-2">
          <h3 className="text-white mb-2">CONTACT DETAILS</h3>
          <div
            style={{ height: "3px", width: "80px",...gradientstyle }}
            className="bg-danger mb-2"
          ></div>
          <br />
          <div className="row">
            <div className="col-2 d-flex justify-content-center">
              <i className="fa-solid fa-location-dot  fs-4" style={{
    background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign:'center'
  }}></i>
            </div>
            <div className="col-10">
              <h5 className="text-white">
                700 5th Avenue, New York City United States
              </h5>
            </div>

            <div className="col-2 d-flex justify-content-center">
              <i className="fa-solid fa-phone fs-4" style={{
    background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign:'center'
  }}></i>
            </div>
            <div className="col-10">
              <h5 className="text-white">1800-1111-2222</h5>
              <small className="text-light">Mon-Fri, 9.00am until 6.30pm</small>
            </div>

            <div className="col-2 d-flex justify-content-center">
              <i className="fa-solid fa-envelope fs-4" style={{
    background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(75, 0, 130))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign:'center'
  }}></i>
            </div>
            <div className="col-10">
              <h5 className="text-white">Gearstrike.com</h5>
              <small className="text-white">We reply within 24 hrs</small>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="p-3 text-center">
          <p className="m-0"style={{...gradienttext}}>
            @Brassyacademy2024. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
