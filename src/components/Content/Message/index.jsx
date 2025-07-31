import './index.css';

function Message() {
  const dateString = '08/03/2021 12:00:00';
  const showMessage = Date.now() > new Date(dateString).getTime();
  return (
    <div className="message-popup">
      <div className="message-text">
        <p><b>[DATA PACKAGE: 30ed5abd-9303-4531-af3e-8e19993beef7]</b></p>
        <p><b>To:</b> JETT</p>
        <p><b>Subject:</b> BD</p>
        <br/>
        <p><b>Content:</b> Hi, Jett</p>
        <p>If you're reading this — means I still trust you. Or I’m dead. One of those.</p>
        <p>Just wanted to say "Happy Birthday".</p>
        <p>Stay sharp! And a little bit quite...</p>
        <p>Oh, yeah, bd present</p>
        {showMessage
          ? (
            <p>It's early</p>

          )
          : (
            <p>It's early</p>
          )
        }

        <p><b>Uploaded by:</b> V. ALVES [ARASAKA DEFECTOR]</p>
      </div>
    </div>
  );
}

export default Message;
