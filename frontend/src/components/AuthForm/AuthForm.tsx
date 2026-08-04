import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css";


type AuthMode = "login" | "register";


interface AuthFormProps {
    mode: AuthMode;
}


function AuthForm({ mode }: AuthFormProps) {

    const isLogin = mode === "login";


    return (
        <div className={styles.page}>

            <form className={styles.form}>

                <h1>
                    {isLogin ? "Вход" : "Регистрация"}
                </h1>


                {!isLogin && (
                    <input
                        placeholder="Имя"
                        type="text"
                    />
                )}


                <input
                    placeholder="Телефон или почта"
                    type="email"
                />


                <input
                    placeholder="Пароль"
                    type="password"
                />


                <button>
                    {isLogin ? "Войти" : "Зарегистрироваться"}
                </button>


                <p className={styles.switch}>

                    {isLogin ? (
                        <>
                            Нет аккаунта?{" "}
                            <Link to="/register">
                                Зарегистрироваться
                            </Link>
                        </>
                    ) : (
                        <>
                            Уже есть аккаунт?{" "}
                            <Link to="/login">
                                Войти
                            </Link>
                        </>
                    )}

                </p>


            </form>


        </div>
    );
}


export default AuthForm;