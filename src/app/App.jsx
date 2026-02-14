import { Link } from "react-router-dom";
import { AppRouter } from "@/app/providers/router/ui/AppRouter";

function App() {
  return (
    <>
      <nav style={{ padding: 16, display: "flex", gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/308-winchester">.308 (test)</Link>
      </nav>

      <AppRouter />
    </>
  );
}

export default App;
