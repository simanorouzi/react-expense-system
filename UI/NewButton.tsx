import * as React from 'react';
import styles from './Button.module.css';

const NewButton = (props) => {
  return (
    <button type={props.type} className={styles.bbutton}>
      {props.children}
    </button>
  );
};

export default NewButton;
