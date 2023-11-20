import React, { useState } from 'react'

export default function CourseDetail() {
  const [dropDown, setDropDown] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    if (!dropDown) {
      setDropDown(true)
    } else {
      setDropDown(false)
    }
  }
  return (
    <div className="w-80">
      <div className="header-course ">
        <h1>Module 2 - Fundamental Programming with C</h1>
        <p>Module 2 - Fundamental Programming with C</p>
        <div className="d-flex">
          <p className="me-5">cơ bản</p>
          <p>1134 học viên đăng kí</p>
        </div>
        <div className="d-flex align-items-center">
          <img
            className="img-teacher me-2"
            src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/359413404_6218093088301275_8793809324786303578_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kCbnm_pvUs8AX_sMWhR&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBzylw-2Eb0TRP3Boepwft0dPhpN1H1DCLLCoId9GChlQ&oe=655A5691"
            alt=""
          />
          <p className="m-0">Nguyễn Trọng Nhân</p>
        </div>
      </div>
      <div className="navbar-course-detail mt-3 d-flex">
        <ul className="me-5 w-100" style={{ listStyle: 'none' }}>
          <li className="me-4">
            <h3>Mô tả</h3>
            <p>Module 2 - Fundamental Programming with C</p>
          </li>
          <li className="me-4">
            <h3>Bạn sẽ học</h3>
            <p>học ăn</p>
            <p>học gói</p>
            <p>học nói</p>
            <p>học mở</p>
          </li>
          <li className="me-4">
            <h3>Yêu cầu</h3>
            <p>Thành thạo máy tính</p>
          </li>
          <li className="me-4">
            <h3>Nội dung</h3>
            <div className="content-course-detail">
              <div className="dropdown">
                <button
                  className="btn btn-light d-flex w-100 justify-content-between"
                  type="button"
                  onClick={(e) => handleClick(e)}
                >
                  <p className="m-0">
                    <i className="bi bi-chevron-compact-down me-3"></i>
                    [M2] Session 01 - Giới thiệu về ngôn ngữ lập trình C
                  </p>
                  <p className="m-0">2 bài học</p>
                </button>
                {dropDown ? (
                  <div>
                    <ul style={{ listStyle: 'none' }}>
                      <li>ehhe</li>
                      <li>heheh</li>
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </li>
          <li className="me-4">
            <h3>Giảng viên</h3>
            <div className="d-flex align-items-center">
              <img
                className="img-teacher me-2"
                src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/359413404_6218093088301275_8793809324786303578_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kCbnm_pvUs8AX_sMWhR&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBzylw-2Eb0TRP3Boepwft0dPhpN1H1DCLLCoId9GChlQ&oe=655A5691"
                alt=""
              />
              <p className="m-0">Nguyễn Trọng Nhân</p>
            </div>
          </li>
        </ul>
        <div className="">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="https://28tech.com.vn/assets/img/khoa-hoc/c.png"
              className="card-img-top"
              alt="..."
            />
            <button className="btn btn-danger m-3">Tham gia ngay</button>
            <div className="card-body">
              <ul className="p-0" style={{ listStyle: 'none' }}>
                <li className="d-flex justify-content-between">
                  <p className="m-0">Chương</p>
                  <p className="m-0">9</p>
                </li>
                <hr className="p-0" />
                <li className="d-flex justify-content-between">
                  <p className="m-0">Bài kiểm tra</p>
                  <p className="m-0">1</p>
                </li>
                <hr className="p-0" />
                <li className="d-flex justify-content-between">
                  <p className="m-0">Thời lượng</p>
                  <p className="m-0">111 giờ</p>
                </li>
                <hr className="p-0" />
                <li className="d-flex justify-content-between">
                  <p className="m-0">Cấp độ</p>
                  <p className="m-0">Cơ bản</p>
                </li>
                <hr className="p-0" />
                <li className="d-flex justify-content-between">
                  <p className="m-0">Chứng nhận</p>
                  <p className="m-0">Có</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
