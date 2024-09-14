import "./MenuItem.css";
import ArchivedIcon from "../icons/ArchivedIcon";
import SharedIcon from "../icons/SharedIcon";
import HomeIcon from "../icons/HomeIcon";
import TrashIcon from "../icons/TrashIcon";
import YoursIcon from "../icons/YoursIcon";
interface Props {
  property: "all" | "yours" | "shared" | "archived" | "trash";
}

const MenuItem = ({ property }: Props) => {
  let title = "";
  switch (property) {
    case "all": {
      title = "All projects";
      break;
    }
    case "yours": {
      title = "Your projects";
      break;
    }
    case "shared": {
      title = "Shared with you";
      break;
    }
    case "archived": {
      title = "Archived";
      break;
    }
    case "trash": {
      title = "Trash";
      break;
    }
  }
  return (
    <li>
      <a className="flex items-center ml-2 px-2 py-3 text-[#505064] rounded-lg hover:cursor-pointer hover:text-[#34347B] hover:bg-[#C1C1D0]/55 transition-all duration-300 ease-in-out">
        {property === "all" && <HomeIcon />}
        {property === "yours" && <YoursIcon />}
        {property === "archived" && <ArchivedIcon />}
        {property === "shared" && <SharedIcon />}
        {property === "trash" && <TrashIcon />}
        <span className="ms-3">{title}</span>
      </a>
    </li>
  );

  //   return <div className="menuItem">{title}</div>;
};

export default MenuItem;
