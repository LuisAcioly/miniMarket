import { useState } from "react";
import Tabs from "../../molecules/tabs";
import BasicTemplate from "../../templates/basicTemplate";
import LeadsTab from "../../organisms/leadsTab";
import OpportunitiesTab from "../../organisms/opportunitiesTab";

const MainPage = () => {
    const [tab, setTab] = useState<string>("leads")
    return (
        <BasicTemplate>
            <Tabs tab={tab} handleTab={(newTab: string) => setTab(newTab)} />
            <div id="default-tab-content">
                {tab === "leads" && <LeadsTab/>}
                {tab === "opportunities" && <OpportunitiesTab/>}
            </div>
        </BasicTemplate>
    );
};

export default MainPage;