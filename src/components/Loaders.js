import React from 'react';
import Loader from 'react-loader-spinner';

const divStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export default class Loaders extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <Loader timeout={3000} type="Bars" color="#3d5575" height={80} width={80} />
      </div>
    );
  }
}
