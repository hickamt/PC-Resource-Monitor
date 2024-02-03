/**
 * @todo
 * Figure out how to create a unit test config using 'jest' in a Vite framework
 * Jest will require babel, but this requires NodeJS syntax which does not work
 * within a client side app. So WTF.
 * Anyway, cpuCalculations was hand tested and approved by the dude writing this shit.
 */
import { totalCoreUsage } from "./cpuCalculations";

describe("totalCoreUsage", () => {
  it("should calculate total CPU usage as a percentage of total available resources", () => {
    const cpuUsage = [
      {
        times: {
          idle: 100,
          irq: 20,
          nice: 20,
          sys: 20,
          user: 20,
        },
      },
      {
        times: {
          idle: 200,
          irq: 40,
          nice: 40,
          sys: 40,
          user: 40,
        },
      },
    ];

    const result = totalCoreUsage({ cpuUsage });

    // The total idle time is 300, and the total usage time is 300.
    // So, the total CPU usage should be (300 / (300 + 300)) * 100 = 50.
    expect(result).toBe(50);
  });
});
