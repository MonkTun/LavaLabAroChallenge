import FileDocumentLogo from "./assets/file-document.svg";
import "./File.css";
import FileDocument from "../icons/FileDocument";

const File = () => {
  return (
    <div className="file">
      <div className="display">
        <FileDocument></FileDocument>
      </div>
      <div className="text">
        <div className="text-wrapper">Assignment 1</div>
        <div className="time-stamp">44m ago</div>
      </div>
    </div>
  );
};

export default File;

///*<img src={FileDocumentLogo} className="logo" alt="document logo" />*/
