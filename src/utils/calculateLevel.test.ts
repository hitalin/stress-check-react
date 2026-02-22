import { describe, expect, it } from "vitest";
import { calculateLevel } from "./calculateLevel";

describe("calculateLevel", () => {
  it("method1: true when scores[2] >= 77", () => {
    const scores = [0, 50, 77, 30];
    const values = [[], [1, 2], [5, 5, 5], [3, 3]];
    const result = calculateLevel(scores, values);
    expect(result.method1).toBe(true);
  });

  it("method1: true when scores[1]+scores[3] >= 76 and scores[2] >= 63", () => {
    const scores = [0, 40, 63, 36];
    const values = [[], [1, 2], [5, 5, 5], [3, 3]];
    const result = calculateLevel(scores, values);
    expect(result.method1).toBe(true);
  });

  it("method1: false when conditions not met", () => {
    const scores = [0, 30, 50, 20];
    const values = [[], [1, 2], [5, 5, 5], [3, 3]];
    const result = calculateLevel(scores, values);
    expect(result.method1).toBe(false);
  });

  it("method2: true when totals[2] <= 12", () => {
    const scores = [0, 30, 50, 20];
    const values = [[], [5, 5], [3, 3, 3], [5, 5]];
    // totals[2] = 9
    const result = calculateLevel(scores, values);
    expect(result.method2).toBe(true);
  });

  it("method2: true when totals[1]+totals[3] <= 26 and totals[2] <= 17", () => {
    const scores = [0, 30, 50, 20];
    const values = [[], [5, 5], [5, 5, 5], [5, 5]];
    // totals[1]=10, totals[2]=15, totals[3]=10 → 10+10=20 <= 26 && 15 <= 17
    const result = calculateLevel(scores, values);
    expect(result.method2).toBe(true);
  });

  it("method2: false when conditions not met", () => {
    const scores = [0, 30, 50, 20];
    const values = [[], [5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]];
    // totals[1]=20, totals[2]=20, totals[3]=20 → neither condition met
    const result = calculateLevel(scores, values);
    expect(result.method2).toBe(false);
  });

  it("calculates totals correctly", () => {
    const scores = [0, 30, 50, 20];
    const values = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    const result = calculateLevel(scores, values);
    expect(result.totals).toEqual([3, 7, 11, 15]);
  });
});
