import * as React from 'react';
import '../UI/cssCourse.css';
import Button from '../UI/Button';
import FormControl from '../UI/FormControl';
import NewButton from '../UI/NewButton';

const CssCourse = () => {
  const Isvalid = false;
  return (
    <div>
      <input
        type="text"
        // for having 2 cssclass
        className={`form-control ${!Isvalid ? 'invalid' : ''}`}
      />
      <button>Click Me</button>

      {/* New Componets */}
      <FormControl invalid={!Isvalid}>
        <label>new lable:</label>
        <input type="text" />
        <Button>New Button</Button>
      </FormControl>
      <NewButton>Module Button</NewButton>
    </div>
  );
};

export default CssCourse;
