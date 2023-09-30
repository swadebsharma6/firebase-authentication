import { Link } from "react-router-dom";


const Login = () => {


    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;

        const email = form.email.value ;
        const password = form.password.value;

        console.log(email, password);
    }

    return (
        <section>
        <div className="hero h-[80vh] bg-base-100">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left mb-10">
            <h1 className="text-5xl font-bold text-purple-600">Please Login !!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
            <div className="card-body">
             <form onSubmit={handleLogin} >
             <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" name="email" required placeholder="email" className="input input-bordered" />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name="password" required placeholder="password" className="input input-bordered" />
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             </label>
           </div>
           <div className="form-control mt-6">
           <input className="btn btn-primary" type="submit" value="Login" />
           </div>
             </form>
             <p className="py-4">New User ? Go to <Link className="text-primary font-bold" to='/register'>Registration</Link> </p>
            </div>
          </div>
        </div>
      </div> 
        </section>
    );
};

export default Login;