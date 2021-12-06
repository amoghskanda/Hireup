import logo from './bg1.jpg';
import './App.css';
// import Overlay from "react-image-overlay";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      {/* <Overlay
        url="https://placeimg.com/250/250/any" // required */}
      {/* //   overlayUrl="https://placeimg.com/50/50/any" // required
      //   imageHeight={100}
      //   position={"bottomRight"}
      //   overlayWidth={50}
      //   overlayHeight={50}
      //   overlayPadding={10}
      //   watermark={false}
      // /> */}
      <div className="navbar">
        <label id="logo"> HIREUP </label>
        <label id="jobs"> JOBS </label>
        <label id="ps"> POST JOBS </label>
        <label> FREELANCE </label>
        <label id="login"> LOGIN </label>
        <label id="signup">SIGNUP</label>
      </div>

      <footer id="ft"> CONTACT US</footer>
    </div>
  );
}

export default App;
