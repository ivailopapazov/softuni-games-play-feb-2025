import { useActionState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();

    const loginHandler = (previousState, formData) => {
        const values = Object.fromEntries(formData);
        
        onLogin(values.email);

        // navigate('/games');

        return values;
    };

    const [values, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    console.log(values);

    return (
        <section id="login-page" className="auth">
            <form id="login" action={loginAction}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" disabled={isPending} />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
