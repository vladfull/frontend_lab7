import React from 'react'

const Image = (props) => {
    return (
        <a href="https://kmr.gov.ua/" target="_blank" rel="noreferrer">
          <img
            id="kyiv-image"
            src={props.src}
            alt={props.alt}
            style={{ width: `${props.size}%` }}
          />
        </a>
      );
}

export default Image