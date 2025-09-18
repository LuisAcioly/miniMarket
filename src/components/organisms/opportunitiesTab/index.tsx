import OpportunitiesTable from "../../molecules/opportunitiesTable";
import { useOpportunity } from "../../../hooks/useOpportunity";

const OpportunitiesTab = () => {
    const {opportunities} = useOpportunity();

    return (
        <div className="w-full max-w-4xl flex flex-col gap-3">
            <OpportunitiesTable opportunities={opportunities}/>
        </div>
    );
};

export default OpportunitiesTab;
