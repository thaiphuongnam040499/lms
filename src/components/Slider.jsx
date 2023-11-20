import React from 'react'

export default function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://appmaster.io/api/_files/hRaLG2N4DVjRZJQzCpN2zJ/download/"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tsh.io/wp-content/uploads/2022/07/typescript-new-features-lead.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://asia-1.console.stringee.com/upload/IMG_XQR6BZV9GU1LJWRM.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
