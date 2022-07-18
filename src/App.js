import './App.css';

function App() {

  return (
    <div className="screen">
      {/* adds video of fire in the background */}
      <video autoPlay muted loop id="myVideo">
       <source src="https://a2development.s3.amazonaws.com/H264HD1080.mov" type="video/mp4" />
      </video>
      <div className="" id="fs-overlay"></div>
      <img 
        id="header-img"
        alt="dungeons and dragons logo"
        src="https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png"
      />
    </div>
  );
}

export default App;
