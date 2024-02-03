// Modules Helper Functions
import { byteConversion } from "../../modules/conversions";

// Local Styles
import "./styles/styles.css";

function DiskUsage({ diskUsage }) {
  const available = byteConversion(diskUsage.available);
  const free = byteConversion(diskUsage.free);
  const total = byteConversion(diskUsage.total);
  return (
    <div className="disk-usage-container">
      <div className="info">Available: {available.gigabytes.toFixed(2)} GB</div>
      <div className="info">Free: {free.gigabytes.toFixed(2)} GB</div>
      <div className="info">Total: {total.terabyte.toFixed(2)} TB</div>
    </div>
  );
}

export default DiskUsage;
