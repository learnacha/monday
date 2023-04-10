type LineTextLineProps = {
  thinBorder?: boolean;
  separatorText?: string;
};

const lineStyle = `border-t-[1px] border-[#d0d4e4] h-1/2 self-end w-[200px]`;

export const LineTextLine = ({
  separatorText = 'Or',
  thinBorder = false,
}: LineTextLineProps) => {
  const separatorLeft = thinBorder
    ? lineStyle
    : `${lineStyle}  border-t-[2px] mr-2`;
  const separatorRight = thinBorder
    ? lineStyle
    : `${lineStyle}  border-t-[2px] ml-2`;

  return (
    <div className="grid gap-[8px] grid-cols-[1fr,auto,1fr] mx-4">
      <div className={separatorLeft} data-testid="line-text-line" />
      <div className="text-base font-light leading-6">{separatorText}</div>
      <div className={separatorRight} />
    </div>
  );
};
