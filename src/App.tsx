import "./App.css";
import AroLogo from "./icons/AroLogo";
import MenuItem from "./components/MenuItem";
import DocumentOverview from "./components/DocumentOverview";
import { CreateButton } from "./components/CreateButton";
import Divider from "./components/Divider";
import VerticalLayoutGroup from "./components/VerticalLayoutGroup";
function App() {
  return (
    <div className="dashboard-all">
      <div className="side-panel">
        <div className="overlap-group2">
          <div className="aro-logo">
            <AroLogo />
          </div>

          {
            <div className="menu">
              <MenuItem property="all" />
              <MenuItem property="yours" />
              <MenuItem property="shared" />
              <MenuItem property="archived" />
              <MenuItem property="trash" />
            </div>
          }
        </div>
        <div className="button">
          <CreateButton />
        </div>
      </div>
      <VerticalLayoutGroup />
      <div className="mt-[30px] ml-[330px] w-[100vw]">
        <Divider />
      </div>
      <DocumentOverview />
    </div>
  );
}

export default App;
//<File></File>
