import Header from '../components/Header';
import Logo from '../components/logo';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router';
import React, { useState} from 'react'

// import { useNavigate } from 'react-router';
import Footer from '../components/Footer';

function Login() {
	const [username, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate();
	
	async function login(){
		console.warn(username, password)
        let grant_type = 'password';
        let client_id = 2;
        let client_secret = "ZkPYPKRiUsEzVke7Q5sq21DrVvYmNK5w5bZKGzQo";
		let item = {username, password,grant_type,client_id,client_secret};
	 	let result = await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/auth/login",
			{
				method: 'POST',
			  headers: {
				"Api-key":
				  "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
				"Warehouse-Id": "1",
                "Content-Type": "application/json"
			  },
			   body :JSON.stringify(item)
			})
			result = await result.json();
            if(result.errors) {
                alert(result.errors[0].message);
            } else {
                localStorage.setItem('user-info',JSON.stringify(result));
            }
			navigate("/")
			console.log(result);
			
	}

    return (
        <>
         <Header/>
         <Logo/> 
         <NavBar/>
        <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                    <li><a href="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
                    <li class="active">Login Page</li>
                </ol>
            </div>
	    </div>
        <div className="login">
		<div className="container">
			<h2>Login Form</h2>
		
			<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				
					<input type="text" placeholder="Email Address" onChange = {(e) => setEmail(e.target.value)}/>
					<input type="password" placeholder="Password"  onChange = {(e) => setPassword(e.target.value)}/>
					<div className="forgot">
						<a href="/">Forgot Password?</a>
					</div> 
				
					<button onClick = {login} className = "btn btn-primary"> Login </button>
				
			</div>
			<h4>For New People</h4>
			<p><a href="/register">Register Here</a> (Or) go back to <a href="/">Home<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></p>
		</div>
	</div>

        <Footer/>    
        </>
    )
}

export default Login;