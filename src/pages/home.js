import Badge from "../components/badge";
import BadgeForm from "../components/badgeForm";

const Home = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <Badge />
            <BadgeForm />
        </div>
    )
}

export default Home;
