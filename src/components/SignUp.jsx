import React from 'react'

export default function SignUp() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <h3 className="mb-5">Đăng kí</h3>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <p className="m-0">Họ tên</p>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div className="form-outline mb-4">
                <p className="m-0">Địa chỉ email</p>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Nhập địa chỉ email"
                />
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <p className="m-0">Mật khẩu</p>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div className="form-outline mb-3">
                <p className="m-0">Nhập lại mật khẩu</p>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                  Đăng ký
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Bạn đã có tài khoản?{' '}
                  <a href="#!" className="link-danger">
                    Đăng nhập
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
