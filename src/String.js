import React, { Component } from 'react';

const String = ({ name, onClick }) => (
  <button className="string" onClick={onClick}>{ name }</button>
);

export default String;
