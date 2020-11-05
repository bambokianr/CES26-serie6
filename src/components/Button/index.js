import React, { useCallback } from 'react';
import './styles.css';

function Button({ children, isClear = false, onClick = () => {} }) {
  const isOperator = useCallback(val => {
    return !isNaN(val) || val === "." || val === "=";
  }, []);

  return (
    <div 
      className={`button-wrapper ${!isOperator(children) && 'operator'} ${!!isClear && 'clear-button'}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
export default Button;