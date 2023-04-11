import { useEffect, useState } from 'react';

const defaultFocus =
  'focus:outline-none focus:border-[#66afe9] focus:ring-0 focus:ring-[#66afe9]';
const defaultBorder = 'outline-none border-[#c3c6d4] ring-0 ring-[#c3c6d4]';
const defaultClass =
  'w-full h-[40px] px-4 py-2 text-[#555555] font-extralight border border-solid rounded';

export type InputEmailProps = {
  additionalCSS?: string;
  onEmailChange: (email: string) => void;
  onFocusCSS?: string;
  placeholderText: string;
  showErrorEmail?: boolean;
};

export const InputEmail = ({
  additionalCSS,
  onEmailChange,
  onFocusCSS,
  placeholderText,
  showErrorEmail: isInvalidEmail,
}: InputEmailProps) => {
  const [cssClass, setCssClass] = useState('');

  useEffect(() => {
    setCssClass(
      `${defaultClass} ${defaultFocus} ${defaultBorder} ${
        additionalCSS && additionalCSS
      }`
    );
    return () => {
      setCssClass('');
    };
  }, [additionalCSS]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onEmailChange(value);
  };

  const onFocusSignUp = () => {
    if (onFocusCSS) {
      setCssClass(`${defaultClass} ${onFocusCSS}`);
    } else {
      setCssClass(`${defaultClass} ${defaultFocus} ${defaultBorder}`);
    }
  };

  const onBlurSignup = () => {
    setCssClass(
      `${defaultClass} ${defaultFocus} ${defaultBorder} ${additionalCSS}`
    );
  };

  return (
    <div className="box-border relative w-full ">
      <input
        onBlur={onBlurSignup}
        onFocus={onFocusSignUp}
        type="email"
        autoComplete="email"
        placeholder={placeholderText}
        tabIndex={0}
        onChange={handleEmailChange}
        required
        className={cssClass}
      />
      {isInvalidEmail && (
        <p className="box-border flex text-sm font-light leading-5 font-Figtree text-[#d83a52]">
          Please enter a valid email address
        </p>
      )}
    </div>
  );
};
