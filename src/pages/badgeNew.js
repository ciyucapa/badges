import Badge from "../components/badge";
import Navbar from "../components/navbar";
import BadgeForm from "../components/badgeForm";

const BadgeNew = () => {
    return (
        <div>
            <Navbar />
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <Badge />
                <BadgeForm/>
            </div>
        </div>
    )
}

export default BadgeNew;
