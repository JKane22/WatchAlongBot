// Styles
import "../Styles/Features/Home.css";

// Auto login if we have cookies for that user

const Home = () => {
  const login = () =>
    (window.location.href = "http://localhost:3001/api/auth/discord");
  return (
    <div className="Header">
      <div style={{ color: 'white', fontWeight: 'bold' }} className="Header-title">
        <h1>WatchAlong</h1>

        <p>
          A Discord bot that allows you to watch a video together with your
          friends.
        </p>

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};
export default Home;
