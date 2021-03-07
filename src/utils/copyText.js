import React, { useState, useRef } from 'react';

function CopyText() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    e.target.focus();
    setCopySuccess('copied');
  }

  return (
    <div>
      {
        /* Logical shortcut for only displaying the button if the copy command
      exists */ document.queryCommandSupported(
          'copy'
        ) && (
          <div>
            <button onClick={copyToClipboard}>Copy</button>
            {copySuccess}
          </div>
        )
      }
      <form>
        <textarea ref={textAreaRef} value='Some text to copy' />
      </form>
    </div>
  );
}

export default CopyText;
