import React from 'react';

class Button extends React.Component {
  
  clickHandlr = () => {
    const name = this.props.name;
    if ( name === 'Hit' ) { this.reset(); }

    else if ( name === 'Strike' ) {
      if ( this.props.strikes === 2 ) { this.reset(); }
      else { this.increaseStrikes(); } }

    else if ( this.props.name === 'Ball' ) {
      if ( this.props.balls === 3 ) { this.reset(); }
      else { this.props.setBalls( this.props.balls + 1 ) } }

    else {
      if ( this.props.strikes < 2 ) { this.increaseStrikes() }
    }
  };

  reset = () => {
    this.props.setBalls  ( 0 );
    this.props.setStrikes( 0 );
  };

  increaseStrikes = () => {
    this.props.setStrikes( this.props.strikes + 1 );
  }

  render() {
    return (
      <button onClick={ this.clickHandlr }>{ this.props.name }</button>
    );
  }

}

export default Button;
