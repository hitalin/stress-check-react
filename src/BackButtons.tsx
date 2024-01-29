// BackButtons.tsx
import { backButtonClass } from './styles';

interface BackButtonsProps {
  onBack: () => void;
  onBackToTitle: () => void;
}

const BackButtons: React.FC<BackButtonsProps> = ({ onBack, onBackToTitle }) => {
  return (
    <div>
      <button type="button" className={backButtonClass} onClick={onBackToTitle}>タイトル画面に戻る</button>
      <button type="button" className={backButtonClass} onClick={onBack}>一つ前の画面に戻る</button>
    </div>
  );
}

export default BackButtons;