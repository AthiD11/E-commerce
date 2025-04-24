import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardActions from '@mui/joy/CardActions';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router';

const Cards = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: 300,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          '&:hover .hoverImg': {
            opacity: 1,
          },
          '&:hover .mainImg': {
            opacity: 0,
          },
        }}
      >
        <img
          src={props.image}
          alt={props.name}
          className="mainImg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.4s ease-in-out',
            opacity: 1,
          }}
        />
        <img
          src={props.hover}
          alt={`${props.name} hover`}
          className="hoverImg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.4s ease-in-out',
            opacity: 0,
          }}
        />
      </Box>

      <CardContent>
        <Typography level="title-lg">{props.name}</Typography>
        <Typography level="body-sm" sx={{ mb: 1 }}>
          Brand: {props.brand} | Category: {props.cat}
        </Typography>
        <Typography level="body-md">
          <span style={{ textDecoration: 'line-through', marginRight: '8px', color: 'red' }}>
            <i className="fa-solid fa-dollar-sign"></i>{props.price}
          </span>
          Buy at <i className="fa-solid fa-dollar-sign text-success"></i>{' '}
          <u className="text-success">{props.dis}</u>
        </Typography>
      </CardContent>

      <CardActions buttonFlex="0 1 120px" sx={{ mt: 'auto' }}>
        <IconButton variant="outlined" color="neutral">
          <FavoriteBorder />
        </IconButton>
        <Button variant="outlined" color="success">
          Buy
        </Button>
        <Button variant="solid" color="success" component={Link} to={`/movies/${props.id}`}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
