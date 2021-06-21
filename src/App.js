import Navbar from "./components/navbar";
import Badge from "./components/badge";
import BadgeForm from "./components/badgeForm";

function App() {
  return (
      <div>
        <Navbar/>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <Badge />
            <BadgeForm/>
        </div>
      </div>
  )
}

export default App;
