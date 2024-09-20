import React from "react";
import { IoDocumentAttachOutline } from "react-icons/io5";
import "../styles/DownloadDocument.css";

const DownloadDocument = ({ href, download_name }) => {
  return (
    <a className="dd--button" href={href} download={download_name}>
      <p className="dd--button__text">
        {" "}
        <IoDocumentAttachOutline className="dd--button__icon" />
        {download_name}
      </p>
    </a>
  );
};
export default DownloadDocument;
