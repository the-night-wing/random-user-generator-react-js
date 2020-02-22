import React from "react";

import { FaImage } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";

import "./ExportUserData.scss";

export const ExportUserData = ({ downloadImage, downloadData }) => {
    return (
        <div className="export-user-data">
            <div className="export-but export-photo" onClick={downloadImage}>
                <FaImage className="icon" /> Export Users Photo
            </div>
            <div className="export-but export-data" onClick={downloadData}>
                <FaFileExport className="icon" /> Export Data Into A File
            </div>
        </div>
    );
};
