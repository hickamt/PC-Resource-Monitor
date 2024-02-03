/* eslint-disable react/prop-types */
import { byteConversion } from "../../modules/conversions";

/**
 * Creates memory resources for free and total memory 
 * @param {object: {freeMemory: number, totalMemory: number}} systemInformation
 * @returns memory resource object with memory in units GB
 */
function MemoryUsage({systemInformation}) {
  return (
    <div className="memory-item-container">
      <div className="memory-item">Free: {byteConversion(systemInformation.freeMemory).gigabytes.toFixed(2)} GB</div>
      <div className="memory-item">Total: {byteConversion(systemInformation.totalMemory).gigabytes.toFixed(2)} GB</div>
    </div>
  )
}

export default MemoryUsage;