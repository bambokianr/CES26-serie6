import React, { useCallback } from 'react';
import './styles.css';

import { useDispatch } from 'react-redux';
import { displayOperation, calculateOperation, clearDisplay } from '../../store/modules/operation/actions';

function Button({ children, isClear = false }) {
  const dispatch = useDispatch();

  const isSpecificOperator = useCallback(val => {
    return !isNaN(val) || val === "." || val === "=";
  }, []);

  const handleDisplayOperation = useCallback((val) => {
    const correctVal = val === "X" ? "*" : val;
    dispatch(displayOperation(correctVal));
  }, [dispatch]);
  
  const handleCalculateOperation = useCallback(() => {
    dispatch(calculateOperation());
  }, [dispatch]);

  const handleClearDisplay = useCallback(() => {
    dispatch(clearDisplay());
  }, [dispatch]);

  const handleActionToDispatch = useCallback(() => {
    if(isClear) handleClearDisplay();
    else if(children === "=") handleCalculateOperation();
    else handleDisplayOperation(children);
  }, [children, isClear, handleDisplayOperation, handleCalculateOperation, handleClearDisplay]);

  return (
    <div 
      className={`button-wrapper ${!isSpecificOperator(children) && 'operator'} ${!!isClear && 'clear-button'}`}
      onClick={handleActionToDispatch}
    >
      {children}
    </div>
  );
}
export default Button;