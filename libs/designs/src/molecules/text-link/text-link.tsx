import Link from 'next/link';

export type TextLinkProps = {
  text: string;
  linkText: string;
  linkUrl: string;
  isLight?: boolean;
};

export const TextLink = ({ text, linkText, linkUrl, isLight }: TextLinkProps) => {
  const fontThickness = isLight ? 'font-light' : 'font-normal';
  const linkColor = isLight ? 'light-blue' : 'dark-blue';

  return (
    <div data-testid={fontThickness} className={`font-Figtree text-[#323338] text-base text-center ${fontThickness}`}>
      {text}
      {` `}
      <div className={`inline-block ml-2 ${linkColor} `} data-testid={linkColor}>
        <Link
          href={linkUrl}
          style={{
            textDecoration: 'underline',
            color: 'blue',
            fontSize: 30,
          }}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};
