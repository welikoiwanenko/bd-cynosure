import './index.css';
import shard from './shard.png';
import interfaceIcon from './interface.svg';
import {useEffect, useState} from "react";

const INITIAL_TEXT = 'INITIALIZING SHARD SEQUENCE';

function getRandomInt(min, max) {
  min = Math.ceil(min); // Ensures min is an integer (rounds up)
  max = Math.floor(max); // Ensures max is an integer (rounds down)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ShardScreen(props) {
  const [initText, setInitText] = useState(INITIAL_TEXT);
  const [captionText, setCaptionText] = useState('');
  const [firstCheckDone, setFirstCheckDone] = useState(false);
  const [secondCheckDone, setSecondCheckDone] = useState(false);
  const [thirdCheckDone, setThirdCheckDone] = useState(false);
  const [fourthCheckDone, setFourthCheckDone] = useState(false);

  useEffect(() => {
    const secsForFirstCheck = getRandomInt(1, 2);
    const secsForSecondCheck = getRandomInt(secsForFirstCheck + 1, secsForFirstCheck + 3);
    const secsForThirdCheck = getRandomInt(secsForSecondCheck + 2, secsForSecondCheck + 9);
    const secsForFourthCheck = getRandomInt(secsForThirdCheck + 1, secsForThirdCheck + 4);
    console.log(
      secsForFirstCheck,
      secsForSecondCheck,
      secsForThirdCheck,
      secsForFourthCheck
    );

    const firstCheck = setTimeout(() => {
      setFirstCheckDone(true);
      console.log('First check completed');
    }, secsForFirstCheck * 1000);

    const secondCheck = setTimeout(() => {
      setSecondCheckDone(true);
      console.log('Second check completed');
    }, secsForSecondCheck * 1000);

    const thirdCheck = setTimeout(() => {
      setThirdCheckDone(true);
      console.log('Third check completed');
    }, secsForThirdCheck * 1000);

    const fourthCheck = setTimeout(() => {
      setFourthCheckDone(true);
      console.log('Fourth check completed');
    }, secsForFourthCheck * 1000);

    return () => {
      clearTimeout(firstCheck);
      clearTimeout(secondCheck);
      clearTimeout(thirdCheck);
      clearTimeout(fourthCheck);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!fourthCheckDone) {
        const count = (initText.match(/\./g) || []).length
        const addition = count >= 3 ? '' : '.';
        setInitText(addition.length ? initText + addition : INITIAL_TEXT);
      }
    }, 1000)

    return () => clearInterval(intervalId);
  }, [fourthCheckDone, initText]);

  useEffect(() => {
    if (fourthCheckDone) {
      const firstTimer = setTimeout(() => {
        setInitText('SHARD SEQUENCE INITIALIZED');
      }, 1000);

      const secondTimer = setTimeout(() => {
        setCaptionText('OPENING MAIN INTERFACE');
      }, 3000);

      const thirdTimer = setTimeout(() => {
        props.handleChecksDone();
      }, 3000);

      return () => {
        clearTimeout(firstTimer);
        clearTimeout(secondTimer);
        clearTimeout(thirdTimer);
      };
    }
  }, [fourthCheckDone, setCaptionText, setInitText, props])

  return (
    <div className="shard-screen">
      <div className="left-pane">
        <table className="left-pane-table">
          <tbody>
            <tr className="first-cell-pane">
              <td>
                <div>
                  <p>SYSTEM CONSOLE</p>
                </div>
              </td>
            </tr>
            <tr style={{ backgroundColor: firstCheckDone ? '#74d377' : '' }}>
              <td>
                <div className="other-cell-shard-pane">
                  <img src={interfaceIcon} alt='icon'></img>
                  <p>MAIN INTERFACE</p>
                </div>
              </td>
            </tr>
            <tr style={{ backgroundColor: secondCheckDone ? '#74d377' : '' }}>
              <td>
                <div className="other-cell-shard-pane">
                  <img src={interfaceIcon} alt='icon'></img>
                  <p>BACKUP INTERFACE</p>
                </div>
              </td>
            </tr>
            <tr style={{ backgroundColor: thirdCheckDone ? '#74d377' : '' }}>
              <td>
                <div className="other-cell-shard-pane">
                  <img src={interfaceIcon} alt='icon'></img>
                  <p>DATA SEQUENCE</p>
                </div>
              </td>
            </tr>
            <tr style={{ backgroundColor: fourthCheckDone ? '#74d377' : '' }}>
              <td>
                <div className="other-cell-shard-pane">
                  <img src={interfaceIcon} alt='icon'></img>
                  <p>PROTECTION PORT</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="middle-pane">
        <img className="logo" src={shard} alt="logo" />
        <div>{initText}</div>
        <div>{captionText}</div>
      </div>
      <div className="right-pane">
        <table>
          <tbody>
            <tr className='first-cell-pane'>
              <td>SHARD STATUS</td>
            </tr>
            <tr>
              <td>
                <div className='shard-status-container'>
                  <div>STATUS</div>
                  <div>ACTIVE</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='shard-status-container'>
                  <div>PROTOCOL</div>
                  <div>TLGB v1.2.17</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='shard-status-container'>
                  <div>VERSION</div>
                  <div>0.29.4323</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='shard-status-container'>
                  <div>LAST UPDATED</div>
                  <div>29/07/2045</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='shard-status-container'>
                  <div>SHARD ID</div>
                  <div>SHD-4323-29</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='shard-status-container'>
                  <div>LOCATION</div>
                  <div>Sector 7G</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className='shard-status-container'>
                  <div>OWNER</div>
                  <div>Cynosure Corp.</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>DATA SEQUENCES</td>
              <td className='big-cell'>04</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShardScreen;
