import React from 'react';

import { useSelector } from 'react-redux';

import './styles.css';

import Input from '../Input';
import Button from '../Button';

export default function Calculator() {
  const { display } = useSelector(state => state.operation);

  return (
    <div>
      <Input value={display} />
      <Button isClear>clear</Button>
      <div className="row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>/</Button>
      </div>
      <div className="row">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>X</Button>
      </div>
      <div className="row">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </div>
      <div className="row">
        <Button>.</Button>
        <Button>0</Button>
        <Button>=</Button>
        <Button>-</Button>
      </div>
    </div>
  );
}