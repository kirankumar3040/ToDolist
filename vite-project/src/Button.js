import React, { Component } from 'react';

class App extends Component {
  state = {
    bgColor: 'white',  // Default background color
  };

  // Event handler to change the background color
  handleColorChange = (color) => {
    this.setState({ bgColor: color });
  };

  render() {
    return (
      <div 
        className="App" 
        style={{ backgroundColor: this.state.bgColor, height: '100vh', transition: 'background-color 0.5s ease' }}
      >
        <h1>Change Background Color</h1>
        
        {/* Button for each color */}
        <button onClick={() => this.handleColorChange('red')}>Red</button>
        <button onClick={() => this.handleColorChange('green')}>Green</button>
        <button onClick={() => this.handleColorChange('blue')}>Blue</button>
        <button onClick={() => this.handleColorChange('yellow')}>Yellow</button>
        <button onClick={() => this.handleColorChange('purple')}>Purple</button>
      </div>
    );
  }
}

export default App;