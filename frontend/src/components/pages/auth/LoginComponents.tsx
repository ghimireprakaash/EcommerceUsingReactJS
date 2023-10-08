import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../assets/images/e-commerce-logo.png";
import loginRegisterSchema from "../schema/LoginRegisterSchema";

export default function LoginComponents() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginRegisterSchema),
  });

  const onSubmitHandler = (data: unknown) => {
    console.log(data);
  };

  return (
    <section className="auth-form vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <div className="img-fluid">
                    <img src={logo} />
                  </div>
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <h2 className="h1 fw-bold mb-0">Ecommerce Platform</h2>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          {...register("email")}
                        />

                        <p>{errors.email?.message}</p>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          {...register("password")}
                        />

                        <p>{errors.password?.message}</p>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={handleSubmit(onSubmitHandler)}
                        >
                          Login
                        </button>
                      </div>
                      <Link className="small text-muted" to="*">
                        Forgot password?
                      </Link>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link to="/register" style={{ color: "#393f81" }}>
                          Register here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
