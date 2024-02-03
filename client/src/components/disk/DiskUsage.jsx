/* eslint-disable react/prop-types */
// Modules Helper Functions
import { byteConversion } from "../../modules/conversions";

// Local Styles
import "./styles/styles.css";

/**
 * Creates the disk usage values for available, free, and total 
 * @param {object: {available: number, free: number, total: number}} systemInformation.diskUsage
 * @returns component with Available (GB), Free (GB), and Total (TB)
 */
function DiskUsage({ diskUsage }) {
  const available = byteConversion(diskUsage.available);
  const free = byteConversion(diskUsage.free);
  const total = byteConversion(diskUsage.total);
  return (
    <div className="disk-item-container">
      <div className="disk-item">Available: {available.gigabytes.toFixed(2)} GB</div>
      <div className="disk-item">Free: {free.gigabytes.toFixed(2)} GB</div>
      <div className="disk-item">Total: {total.terabyte.toFixed(2)} TB</div>
    </div>
  );
}

export default DiskUsage;
