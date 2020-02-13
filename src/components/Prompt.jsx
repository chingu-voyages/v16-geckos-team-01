import React from 'react';

function Prompt(props) {
    const { submit } = props;
  return (
    <div className="prompt">
        <form onSubmit={submit}>
            <input type="text" placeholder="Add name"/>
            <input type="text" placeholder="Add board title"/>
            <button type="submit">Get started <i className="fas fa-angle-double-right"></i></button>
        </form>
    </div>
  );
}

export default Prompt;
