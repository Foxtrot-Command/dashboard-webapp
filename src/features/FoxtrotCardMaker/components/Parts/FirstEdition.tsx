export const FirstEdtion = () => {
  const handleAmountPosition = (amount: number) => {
    if (Number(amount) === 11) return 50;
    if (Number(amount) >= 10) return 36;
    if (Number(amount) === 7) return 83;
    return 75;
  };

  return (
    <g id="FirstEdtion" transform="translate(120.000000, 0.000000)">
      <image
        id="firstEdtion"
        type="MSBitmapLayer"
        x={-10} // 30
        y={60} // 50
        width={90}
        height={260}
        href="/images/parts/stats/firstEdition.webp"
      />
    </g>
  );
};

export default FirstEdtion;
