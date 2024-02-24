import React, { useState, useEffect } from 'react';

const AggregationDate: React.FC = () => {
  const [aggregationDate, setAggregationDate] = useState(new Date());

  useEffect(() => {
    // コンポーネントがマウントされたときに現在の日時を設定
    setAggregationDate(new Date());
  }, []); // 空の依存配列を指定して、このエフェクトを一度だけ実行

  return (
    <div>
      日時：{aggregationDate.getFullYear()}年{aggregationDate.getMonth() + 1}月{aggregationDate.getDate()}日 {aggregationDate.getHours()}:{aggregationDate.getMinutes() < 10 ? '0' : ''}{aggregationDate.getMinutes()}
    </div>
  );
};

export default AggregationDate;