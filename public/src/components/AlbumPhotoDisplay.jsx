import React from 'react';

const AlbumPhotoDisplay = ({photos, albums, selectAlbum}) => {


  const slides = photos.map((photo, i) => {
    if (i !== 0) {
      return (<div className="item" data-slide-number={i} onClick={()=>{console.log(i)}}><img src={photo.url} alt="Second Slide" /><div className="carousel-caption"><h3 >{photo.description}</h3></div></div>)
    }
  })
  const indicators = photos.map((photo, i) => {
    if (i !== 0) {
      return (<li className="" data-slide-to={i} data-target="#myCarousel"><img alt="" src={photo.url}/></li>)
    }
  })
  return (
    <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
      {/*Wrapper for carousel items*/}
      <div className="carousel-inner cont-slider">
        <div className="item active" data-slide-number="0" onClick={()=>{console.log(0)}}>
            <img src={photos[0].url} alt="First Slide" /><div className="carousel-caption"><h3 >{photos[0].description}</h3></div>
        </div>
        {slides}
      </div>
      {/*Carousel controls*/}
      <a className="carousel-control left" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a className="carousel-control right" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>

    {/*Carousel indicators*/}
    <ol className="carousel-indicators">
      <li className="" data-slide-to="0" data-target="#myCarousel">
        <img alt="" src={photos[0].url}/>
      </li>
      {indicators}
    </ol>
    </div>
  )
}

export default AlbumPhotoDisplay;

/*<div class="row hidden-phone" id="slider-thumbs">
              <div class="span12">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"><a className="thumbnail" id="carousel-selector-0"><img alt="" src={photos[0].url}/></a></li>
                    {indicators}
                </ol>
              </div>
            </div>

<div className="carousel-caption"><h3 >{photos[4].description}</h3></div>
            */
