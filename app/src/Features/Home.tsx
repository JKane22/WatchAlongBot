// Styles
import "../Styles/Features/Home.css";

// Authentication

const Home = () => {
  const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';
  return (
    <div className="Header">
      <h1 style={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>
        {" "}
        Looking to WatchAlong with Us?{" "}
      </h1>
      <button
        style={{
          width: "150px",
          height: "50px",
          backgroundColor: "white",
          fontWeight: "bold",
          border: "10px",
          borderRadius: "10px",
          borderColor: "blue",
        }}
        onClick={() => {
          login();
        }}
      >
        {" "}
        Login with Discord!{" "}
      </button>
    </div>
  );
};
export default Home;
