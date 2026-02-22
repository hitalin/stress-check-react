// SectionDescription.tsx
import type React from "react";
import styles from "../styles.module.css";

interface SectionDescriptionProps {
  description: string;
  isLastSection: boolean;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({ description, isLastSection }) => {
  return (
    <div className={styles.sectionDescription} data-last-section={isLastSection}>
      <p>{description}</p>
    </div>
  );
};

export default SectionDescription;
