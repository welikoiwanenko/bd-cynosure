import './index.css';
import cynosure from '../cynosure.png';

function StartScreen(props) {
  const { handleClick } = props;
  return (
    <div className="start-screen">
      <img className="logo" src={cynosure} alt="logo" />
      <h1 className="title">DATA SHARD SEQUENCE</h1>
      <button className="start-button" onClick={() => handleClick()}>START READING</button>
    </div>
  );
}

export default StartScreen;
