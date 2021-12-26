import React, { memo } from 'react';

const InputBox = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  
  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className='addForm' onSubmit={onSubmit}>
      <input type='text' ref={inputRef} className='addInput' name="" placeholder="please enter here.." />
      <button>추가</button>
    </form>
  );
});

export default InputBox;
