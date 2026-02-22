import { describe, expect, it } from "vitest";
import type { Question } from "../types";
import { calculateScore } from "./calculateScore";

describe("calculateScore", () => {
  it("sums scores for non-reverse questions", () => {
    const questions: Question[] = [
      { id: 1, text: "Q1", score: 3, reverse: false },
      { id: 2, text: "Q2", score: 2, reverse: false },
    ];
    expect(calculateScore(questions)).toBe(5);
  });

  it("applies reverse scoring (5 - score)", () => {
    const questions: Question[] = [
      { id: 1, text: "Q1", score: 1, reverse: true },
      { id: 2, text: "Q2", score: 4, reverse: true },
    ];
    // (5-1) + (5-4) = 4 + 1 = 5
    expect(calculateScore(questions)).toBe(5);
  });

  it("handles mixed reverse and non-reverse", () => {
    const questions: Question[] = [
      { id: 1, text: "Q1", score: 3, reverse: false },
      { id: 2, text: "Q2", score: 2, reverse: true },
    ];
    // 3 + (5-2) = 3 + 3 = 6
    expect(calculateScore(questions)).toBe(6);
  });

  it("returns 0 for empty array", () => {
    expect(calculateScore([])).toBe(0);
  });
});
