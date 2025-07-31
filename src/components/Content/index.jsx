import './index.css';
import shard from './ShardScreen/shard.png';
import cynosure from './cynosure.png';
import { useState } from 'react';
import StartScreen from "./StartScreen";
import ShardScreen from "./ShardScreen";
import Message from "./Message";

function Content() {
  const [stage, setStage] = useState('start'); // 'start', 'puzzle', 'data'
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className='content-container'>
      <div className="content">
        {stage === 'start' && (
          <StartScreen handleClick={() => setStage('shard')} />
        )}

        {stage === 'shard' && (
          <ShardScreen handleChecksDone={() => setShowMessage(true)} />
        )}
      </div>
      {
        showMessage && (
          <Message/>
        )
      }
    </div>

  );
}

export default Content;
