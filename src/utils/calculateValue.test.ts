import { describe, expect, it } from "vitest";
import type { Factor, Question } from "../types";
import { calculateValue } from "./calculateValue";

const makeQuestions = (scores: number[]): Question[] =>
  scores.map((score, i) => ({ id: i + 1, text: `Q${i + 1}`, score, reverse: false }));

describe("calculateValue", () => {
  describe("addition pattern", () => {
    it("sums scores and maps via rates", () => {
      const questions = makeQuestions([3, 2, 4]);
      const factor: Factor = {
        point: 1,
        scale: "test",
        value: 0,
        type: "addition",
        items: [1, 2, 3],
        rates: [
          { min: 3, max: 6, value: 1 },
          { min: 7, max: 9, value: 2 },
          { min: 10, max: 12, value: 3 },
        ],
      };
      // sum = 3+2+4 = 9
      expect(calculateValue(questions, factor)).toBe(2);
    });
  });

  describe("subtraction pattern", () => {
    it("calculates (N*5 - sum) and maps via rates", () => {
      const questions = makeQuestions([3, 2]);
      const factor: Factor = {
        point: 1,
        scale: "test",
        value: 0,
        type: "subtraction",
        items: [1, 2],
        rates: [
          { min: 0, max: 3, value: 1 },
          { min: 4, max: 6, value: 2 },
          { min: 7, max: 10, value: 3 },
        ],
      };
      // (2*5) - (3+2) = 10 - 5 = 5
      expect(calculateValue(questions, factor)).toBe(2);
    });
  });

  describe("complex pattern", () => {
    it("subtracts first N-1 and adds last", () => {
      const questions = makeQuestions([3, 2, 4]);
      const factor: Factor = {
        point: 1,
        scale: "test",
        value: 0,
        type: "complex",
        items: [1, 2, 3],
        rates: [
          { min: 0, max: 5, value: 1 },
          { min: 6, max: 10, value: 2 },
          { min: 11, max: 14, value: 3 },
        ],
      };
      // subtraction of first 2: (2*5) - (3+2) = 5
      // addition of last: 4
      // total = 5 + 4 = 9
      expect(calculateValue(questions, factor)).toBe(2);
    });
  });

  it("filters questions by factor.items", () => {
    const questions = makeQuestions([3, 2, 4, 1]);
    const factor: Factor = {
      point: 1,
      scale: "test",
      value: 0,
      type: "addition",
      items: [1, 3], // only Q1 and Q3
      rates: [
        { min: 0, max: 5, value: 1 },
        { min: 6, max: 8, value: 2 },
      ],
    };
    // sum = 3 + 4 = 7
    expect(calculateValue(questions, factor)).toBe(2);
  });

  it("returns 0 when no rate matches", () => {
    const questions = makeQuestions([1]);
    const factor: Factor = {
      point: 1,
      scale: "test",
      value: 0,
      type: "addition",
      items: [1],
      rates: [{ min: 5, max: 10, value: 3 }],
    };
    expect(calculateValue(questions, factor)).toBe(0);
  });
});
