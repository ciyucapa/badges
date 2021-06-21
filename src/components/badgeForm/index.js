import Form from "./form";
import useBadgeForm from "../../hooks/useBadgeForm";

const BadgeForm = () => {
    const hook = useBadgeForm();
    return <Form {...hook} />
};

export default BadgeForm;

