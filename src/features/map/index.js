import React from "react";
import { SPRITE_SIZE } from "../../config/constants";
import { connect } from 'react-redux'
import './styles.css'

function getTileSprite(type) {
  switch(type) {
    case 0:
      return 'grass'
    case 5:
      return 'rock'
    case 6:
      return 'tree'
    default:
      console.log('15')

  }
}

function MapTile(props) {
  return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
    }}
    />
    ;
}

function MapRow(props) {
  return <div
    className="row"
    style={{
      height: SPRITE_SIZE,
    }}
    >
  {
    props.tiles.map( tile => <MapTile tile={tile} /> )
  }
  </div>
}

function Map(props) {
  return (
    <div
      style={{
        position: 'relative',
        top: "0px",
        left: "0px",
        width: "800px",
        height: "400px",
        border: "4px solid green"
      }}
    >
      {
        props.tiles.map( row => <MapRow tiles={row} /> )
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
  }
}

export default connect(mapStateToProps)(Map);
