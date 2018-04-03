import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      calculate: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      changeInfo: '',
      totalChange: 0
      
    };
    this.amountDue = this.amountDue.bind(this);
    this.amountReceived = this.amountReceived.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  amountDue(e) {
    this.setState({amountDue: e.target.value});
  }
  
  amountReceived(e) {
    this.setState({amountReceived: e.target.value});
  }

  calculate() {
    const amountDue = this.state.amountDue * 100;
    const amountReceived = this.state.amountReceived * 100;
    let changeDue;
    var twenties;
    var tens;
    var fives;
    var ones;
    var quarters;
    var dimes;
    var nickels;
    var pennies;

    if (amountDue < amountReceived) {
      changeDue = amountReceived - amountDue;
    } else {
      console.log('false');
      alert('You need to pay more!');
      return;
    }

    let totalChange = (changeDue / 100);

    if (changeDue > 1999) {
       var twenties = Math.floor(changeDue / 2000) ;
      changeDue %= 2000;
    } else {
       var twenties = 0;
    }

    if (changeDue > 999) {
       var tens = Math.floor(changeDue / 1000) ;
      changeDue %= 1000;
    } else {
       var tens = 0;
    }

    if (changeDue > 499) {
       var fives = Math.floor(changeDue / 500) ;
      changeDue %= 500;
    } else {
       var fives = 0;
    }

    if (changeDue > 99) {
       var ones = Math.floor(changeDue / 100) ;
      changeDue %= 100;
    } else {
       var ones = 0;
    }

    if (changeDue > 24) {
       var quarters = Math.floor(changeDue / 25) ;
      changeDue %= 25;
    } else {
       var quarters = 0;
    }

    if (changeDue > 9) {
       var dimes = Math.floor(changeDue / 10) ;
      changeDue %= 10;
    } else {
       var dimes = 0;
    }

    if (changeDue > 4) {
       var nickels = Math.floor(changeDue / 5) ;
      changeDue %= 5;
    } else {
       var nickels = 0;
    }

    if (changeDue > 0) {
       var pennies = Math.round(changeDue) ;
    } else {
       var ones = 0;
    }
    
    this.setState({
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies,
      changeInfo: 'The total change due is $' + totalChange,
      totalChange
    });

  }

  render() {
    return (
      <div className='container'>
        Amount Due
      <input
          name='amountDue'
          value={this.state.amountDue}
          type='number'
          onChange={this.amountDue}
        /> Amount Received
        <input
          name='amountReceived'
          value={this.state.amountReceived}
          type='number'
          onChange={this.amountReceived}
        />
        <button type='button' className='btn btn-primary' onClick={this.calculate}>Calculate</button>

        <div className='row'>
        
          <div className='col-xs-6 col-sm-3'>
            <h3>Twenties</h3>
            <p>{this.state.twenties}</p>
          </div>

          <div className='col-xs-6 col-sm-3'>
            <h3>Tens</h3>
            <p>{this.state.tens}</p>
          </div>

          <div className='col-xs-6 col-sm-3'>
            <h3>Fives</h3>
            <p>{this.state.fives}</p>
          </div>

          <div className='col-xs-6 col-sm-3'>
            <h3>Ones</h3>
            <p>{this.state.ones}</p>
          </div>

        </div>

        <div className='row'>
          <div className='col-xs-6 col-sm-3'>
            <h3>Quarters</h3>
            <p>{this.state.quarters}</p>
          </div>

          <div className='col-xs-6 col-sm-3'>
            <h3>Dimes</h3>
            <p>{this.state.dimes}</p>
          </div>

          <div className='col-xs-6 col-sm-3'>
            <h3>Nickels</h3>
            <p>{this.state.nickels}</p>
          </div>

          <div className='col-xs-6 col-sm-3'>
            <h3>Pennies</h3>
            <p>{this.state.pennies}</p>
          </div>
          
        </div>
        
        <div className="card alert alert-success bg-success text-white text-center p-3">
          <strong className='col-h1' id='output'>{this.state.changeInfo}</strong>
        </div>

      </div>
    )
  }
}


export default App;