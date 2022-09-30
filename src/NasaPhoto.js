import React from "react";

const dummyData ={
    date: "2022-09-30",
  explanation: "A planet-wide collaboration resulted in this remarkable array of sunrise photographs taken around the September 2022 equinox. The images were contributed by 24 photographers, one in each of 24 nautical time zones around the world. Unlike more complicated civil time zone boundaries, the 24 nautical time zones are simply 15 degree longitude bands corresponding to 1 hour steps that span the globe. Start at the upper right for the first to experience a sunrise in the nautical time zone corresponding to Coordinated Universal Time (UTC) + 12 hours. In that time zone, the photographer was located in Christchurch, New Zealand. Travel to the west by looking down the column and then moving to the column toward the left for later sunrises as the time zone offset in hours from UTC decreases. Or, you can watch a video of September 2022 equinox sunrises around planet Earth.",
  hdurl: "https://apod.nasa.gov/apod/image/2209/SunriseATWImageCollageFinal4800px.jpg",
  title: "Equinox Sunrise Around the World"
  }

const NasaPhoto = (props) => {
    return (
        <div className='nasa-photo-wrapper'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>

        </div>
    )
}

export default NasaPhoto;