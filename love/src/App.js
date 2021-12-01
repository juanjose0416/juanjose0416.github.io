import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

  const onClickHandler = () => {
    axios.post(`http://ec2-34-227-22-49.compute-1.amazonaws.com:8080/send/email`,
    {
      email,
      content: '',
      subject: ''
    }
    )
      .then(res => {
        console.log(res);
        setEmail('');
      });
  }
  const [email, setEmail] = useState('');
  return (
    <div className="App">
      <div className="love__container">
        <h1 className="love__title">HAPPY BIRTHDAY LOVE!</h1>
        <p className="love__text">You have a gift available, write your email to claim it.</p>
        <img className="love__image" src="https://acegif.com/wp-content/uploads/gift-5.gif" alt="gif" />
        <input value={email} className="love__input" placeholder="juanjo_pollagorda@gmail.com" type="email" onChange={(ev) => {
          setEmail(ev.target.value);
        }} />
        <button className="love__button" onClick={() => {onClickHandler()}}>Claim</button>
      </div>
    </div>
  );
}

export default App;
