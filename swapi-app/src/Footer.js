import React from 'react';

const Footer = ({ onClear }) => {
  return (
    <footer>
      <button onClick={onClear}>Clear Planets</button>
    </footer>
  );
};
export default Footer;