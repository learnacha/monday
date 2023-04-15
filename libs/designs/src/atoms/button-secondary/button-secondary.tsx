type ButtonSecondaryProps = {
  onHandleSubmit: () => void;
};

const focus = 'focus:outline-none active:scale-95 active:bg-[#dcdfec] hover:bg-[#dcdfec]';
const defaultClass =
  'w-full h-[40px] px-4 py-2 mt-2 mb-16 text-base font-normal text-[#323338] bg-white border border-[#c3c6d4] border-solid rounded cursor-pointer min-w-[400px] transform ease-in-out duration-300 transition: transform 70ms, min-width 100ms cubic-bezier(0.4, 0, 0.2, 1);';

export const ButtonSecondary = ({ onHandleSubmit }: ButtonSecondaryProps) => {
  return (
    <div className="flex mt-0 flex-end">
      <button onClick={onHandleSubmit} type="button" className={`${defaultClass} ${focus}`}>
        Continue
      </button>
    </div>
  );
};
