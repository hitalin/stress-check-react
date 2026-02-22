// AggregateResults.tsx
import type React from "react";
import { useEffect, useState } from "react";
import styles from "../styles.module.css";
import type { Employee, Factor, Question, Section } from "../types";
import { calculateLevel } from "../utils/calculateLevel";
import { calculateValue } from "../utils/calculateValue";
import RadarChart from "./RadarChart";

type Props = {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
  sections: Section[];
  scores: number[];
};

const AggregateResults: React.FC<Props> = ({ employee, setEmployee, sections, scores }) => {
  const [values, setValues] = useState<{ scale: string; value: number }[][]>([]);
  const [totals, setTotals] = useState<number[]>([]);

  useEffect(() => {
    const valuesNumbers = values.map((value) => value.map((v) => v.value));
    const { method1, method2, totals } = calculateLevel(scores, valuesNumbers);

    if (method1 && method2) {
      setEmployee((prev) => ({ ...prev, level: "high" }));
    } else {
      setEmployee((prev) => ({ ...prev, level: "low" }));
    }
    setTotals(totals);
  }, [scores, values, setEmployee]);

  useEffect(() => {
    setValues(
      sections.map((section) => {
        const questions: Question[] = section.questions || [];
        return (
          section.factors?.map((factor) => ({
            scale: factor.scale,
            value: calculateValue(questions, factor),
          })) ?? []
        );
      }),
    );
  }, [sections]);

  return (
    <div>
      <div className={styles.levelResult} data-level={employee.level}>
        <p>{employee.level === "high" ? "高ストレス者" : "低ストレス者"}です</p>
      </div>
      <div className={styles.sectionResult}>
        {sections.map((section, sectionIndex) => {
          // Skip section0 and section4
          if (sectionIndex === 0 || sectionIndex === 5) return null;

          let factors: Factor[] | undefined;

          if (sectionIndex === 3) {
            const factors4 = values[4]?.map((value) => ({ ...value, point: 0, type: "" })) ?? [];
            factors = [
              ...(values[sectionIndex]?.map((value) => ({ ...value, point: 0, type: "" })) ?? []),
              ...factors4,
            ];
          } else if (sectionIndex !== 4) {
            factors = values[sectionIndex]?.map((value) => ({ ...value, point: 0, type: "" }));
          }

          return (
            factors && (
              <div key={section.step}>
                <div className={styles.aggregatedTotal}>
                  <p>
                    STEP{section.step} {section.name}
                  </p>
                  <p>スコアの合計: {scores[sectionIndex]}</p>
                  <p>評価点の合計: {totals[sectionIndex]}</p>
                </div>
                <div className={styles.sectionGroup}>
                  <p>{section.group}</p>
                </div>
                <RadarChart
                  factors={factors}
                  level={employee.level === "high" || employee.level === "low" ? employee.level : "low"}
                />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default AggregateResults;
