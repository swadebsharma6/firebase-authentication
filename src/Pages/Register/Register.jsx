import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const {createUser} = useContext(AuthContext);
 

    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value ;
        const password = form.password.value;

        console.log(name, email, password);

      // create User
      createUser(email, password)
      .then(result=>{
        const user = result.user;
        console.log('created user', user)
      })
      .catch(error =>{
        console.log(error.message)
      })
      

    }

    return (
        <section>
        <div className="hero h-[80vh] bg-base-100">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left mb-10">
            <h1 className="text-5xl font-bold text-purple-600">Please Registration !!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
            <div className="card-body">
             <form onSubmit={handleRegister} >
             <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" name="name" required placeholder="email" className="input input-bordered" />
           </div>
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
           <input className="btn btn-primary" type="submit" value="Register" />
           </div>
             </form>
             <p className="py-4">Already have account ? Go to <Link className="text-primary font-bold" to='/login'>Login</Link> </p>
            </div>
          </div>
        </div>
      </div> 
        </section>
    );
};

export default Register;