// import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Divider, Link, Typography } from '@mui/material';
import '../assets/homepage.css';

const Homepage = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();

function handleOpenJct() {
  navigate("/jct");
}

  return (
    <div className="home-page">
      <Navbar />
      <h2 className="home-h2">Explore our famous Boat Houses from Kerala</h2>
      <Divider />

      <h2 id="top-boats" className="t1">
        Top Boats
      </h2>
      <div className="card-body1">
        <Card className="c" sx={{ maxWidth: 200 }}>
        
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708520856/jcthouseboat_ghforl.jpg"
              alt="jct"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                KJM Boathouse
              </Typography>
              <p className="c-p">#1 in Boat Houses in Kerala</p>
          <Link className="h-link" to="/jct">
              <h2 className="c-h2">9.5/10</h2>
              <button onClick={handleOpenJct}>Book Now</button>



                
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="c" sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708521222/grantvilla_murpsc.jpg"
              alt="grandvilla"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* Grand Villa */}
                German Villa
              </Typography>
              <p className="c-p">#2 in Boat Houses in Kerala</p>
              <h2 className="c-h2">9.4/10</h2>
              <Link className="h-link" to="/grandvilla">
                Book Now
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="c" sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708521586/crusi_ifqgyk.jpg"
              alt="crusi"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Santner Cruises
              </Typography>
              <p className="c-p">#3 in Boat Houses in Kerala</p>
              <h2 className="c-h2">9.3/10</h2>
              <Link className="h-link" to="/spicecoast">
                Book Now
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="c" sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708940031/kera_p0gjuq.jpg"
              alt="kera"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pavilion Gem
              </Typography>
              <p className="c-p">#4 in Boat Houses in Kerala</p>
              <h2 className="c-h2">9.2/10</h2>
              <Link className="h-link" to="/kerala">
                Book Now
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <h2 className="service">SERVICES</h2>
      <div className="cardbody1-d">
        {/* Your service content here */}
      </div>

      <hr />

      <h2 id="luxury" className="lux">
        High Class Boats
      </h2>
      <div className="card-body2">
        <Card className="c" sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/harmony_b77qrt.jpg"
              alt="harmony"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Harabba Houseboats
              </Typography>
              <p className="c-p">#4 in Boat Houses in Kerala</p>
              <h2 className="c-h2">9.1/10</h2>
              <Link className="h-link" to="/harmony">
                Book Now
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="c" sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/xandari_ymkfos.jpg"
              alt="xandari"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Xavier Riverscapes
              </Typography>
              <p className="c-p">#5 in Boat Houses in Kerala</p>
              <h2 className="c-h2">9.0/10</h2>
              <Link className="h-link" to="/xandari">
                Book Now
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="about">
        {/* Your about content here */}
      </div>

      <hr />

      <h2 id="budget-friendly" className="bf">
        Within your budget
      </h2>
      <p className="bfp">
        Introducing MyBook.com, the premier boathouse booking app that brings you unparalleled access to budget-friendly waterfront accommodations. Whether you are craving a serene lakeside retreat or envisioning a cozy getaway on the river, MyBook.com has you covered. With seamless booking processes and a commitment to affordability, MyBook.com empowers you to embark on unforgettable waterfront experiences without compromise. Start planning your next adventure today with MyBook.com and discover the perfect boathouse getaway that won't stretch your budget.
      </p>
      <div className="cb">
        <Card className="c" sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708521586/crusi_ifqgyk.jpg"
              alt="crusi"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Senwaria Cruises
              </Typography>
              <p className="c-p">#3 in Boat Houses in Kerala</p>
              <h2 className="c-h2">9.3/10</h2>
              <Link className="h-link" to="/spicecoast">
                Book Now
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="c" sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708940031/kera_p0gjuq.jpg"
              alt="kera"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kariana
              </Typography>
              <p className="c-p">#4 in Boat Houses in Kerala</p>
              <h2 className="c-h2">9.2/10</h2>
              <Link className="h-link" to="/kerala">
                Book Now
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="c" sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              className="cm"
              component="img"
              height="120"
              image="https://res.cloudinary.com/dcc7xkmex/image/upload/v1708538708/harmony_b77qrt.jpg"
              alt="harmony"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Harmony Houseboats
              </Typography>
              <p className="c-p">#4 in Boat Houses in Kerala</p>
              <h2 className="c-h2">9.1/10</h2>
              <Link className="h-link" to="/harmony">
                Book Now
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
