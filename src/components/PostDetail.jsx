import React from 'react'

export default function PostDetail() {
  return (
    <div className="w-80">
      <div className="navbar-course-detail mt-3  d-flex justify-content-between ">
        <div className=" border rounded p-5">
          <h3>Bài viết</h3>
          <div>
            <h3>Advanced Concepts of JavaScript</h3>
            <p>JAVASCRIPT OCTOBER 11, 2022 POSTED BY: admin</p>
            <img
              className=" img-post"
              src="https://tenten.vn/tin-tuc/wp-content/uploads/2022/06/Java-Script-4.jpg"
              alt=""
            />
            <p className="post mt-3" style={{ textAlign: 'justify' }}>
              1. Error Handling Sometimes our codes have errors. These errors
              happen because of our mistakes, maybe an unexpected input, or for
              a hundred other reasons. So, we use try…catch to handle these
              errors. try…catch: It has two main blocks: try and catch. At first
              try block is executed. If there is no error then the catch(error)
              is ignored. If there are occurs then the try execution is stopped
              then catch(error) shows an error.
            </p>
          </div>
        </div>
        <div className="ms-3">
          <div className="card">
            <h4 className="m-2">Bài viết phổ biến</h4>
            <hr className="m-0" />
            <div className="card m-3">
              <div className="d-flex">
                <img
                  className="img-popular me-2 align-items-center d-flex"
                  src="https://www.bkns.vn/wp-content/uploads/2022/12/1-9.webp"
                  alt=""
                />
                <div className="me-2">
                  <h6>Web fullstack java 2.0</h6>
                  <p className="m-0">Chương trình đào tạo web fullstack</p>
                  <p className="m-0">20/11/2023</p>
                </div>
              </div>
            </div>
            <div className="card m-3">
              <div className="d-flex">
                <img
                  className="img-popular me-2 align-items-center d-flex"
                  src="https://www.bkns.vn/wp-content/uploads/2022/12/1-9.webp"
                  alt=""
                />
                <div className="me-2">
                  <h6>Web fullstack java 2.0</h6>
                  <p className="m-0">Chương trình đào tạo web fullstack</p>
                  <p className="m-0">20/11/2023</p>
                </div>
              </div>
            </div>
            <div className="card m-3">
              <div className="d-flex">
                <img
                  className="img-popular me-2 align-items-center d-flex"
                  src="https://www.bkns.vn/wp-content/uploads/2022/12/1-9.webp"
                  alt=""
                />
                <div className="me-2">
                  <h6>Web fullstack java 2.0</h6>
                  <p className="m-0">Chương trình đào tạo web fullstack</p>
                  <p className="m-0">20/11/2023</p>
                </div>
              </div>
            </div>
            <div className="card m-3">
              <div className="d-flex">
                <img
                  className="img-popular me-2 align-items-center d-flex"
                  src="https://www.bkns.vn/wp-content/uploads/2022/12/1-9.webp"
                  alt=""
                />
                <div className="me-2">
                  <h6>Web fullstack java 2.0</h6>
                  <p className="m-0">Chương trình đào tạo web fullstack</p>
                  <p className="m-0">20/11/2023</p>
                </div>
              </div>
            </div>
            <div className="card m-3">
              <div className="d-flex">
                <img
                  className="img-popular me-2 align-items-center d-flex"
                  src="https://www.bkns.vn/wp-content/uploads/2022/12/1-9.webp"
                  alt=""
                />
                <div className="me-2">
                  <h6>Web fullstack java 2.0</h6>
                  <p className="m-0">Chương trình đào tạo web fullstack</p>
                  <p className="m-0">20/11/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
