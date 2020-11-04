import React from 'react';
import { useSelector } from 'react-redux';

export default function Calculator() {
  const state = useSelector(state => state);

  console.log(state);
  return (
    <div>Calculator</div>
  );
}