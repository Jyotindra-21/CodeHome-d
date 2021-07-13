import React from "react";
import style from "./Home.module.css";
import { Link , useHistory} from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
  };
  const history = useHistory();
  function startRegister() {
      history.push('/register');
  }
  return (
    <div className={style.cardWrapper}>
      <Card title="Welcome to CodeHome!" icon="microphone-alt-solid">
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum delectus
          quia dicta nobis voluptas rem dignissimos aut cupiditate dolorem
          corrupti.
        </p>
        <div>
          <Button text="Get your username" onClick={startRegister}/>
        </div>
        <div className={style.signinWrapper}>
          <span className={style.hasInvite} >Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
