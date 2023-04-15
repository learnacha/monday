const defaultClass =
  'rounded whitespace-nowrap select-none min-w-[400px] text-white bg-[#0073ea] flex-1 h-[39px] flex items-center justify-center cursor-pointer p-[9px] text-base w-full leading-5 font-normal mt-8 mb-0 active:scale-95 hover:bg-[#dcdfec] transition-transform transition-min-w duration-70 ease-linear md:duration-100 md:ease-cubic-bezier(0.4, 0, 0.2, 1)';

export const ButtonGooglePrimary = () => {
  return (
    <div className="mt-4">
      <button type="button" className={defaultClass}>
        <div className="w-[32px] h-[32px] bg-white m-[-7px] rounded-l-sm">
          <img
            src="https://cdn.monday.com/images/google-icon.svg"
            alt="Continue with Google"
            className="bg-white block mt-2 ml-[9px] h-[15px]  w-[15px]"
          />
        </div>
        <span className="flex-1 text-center font-light ml-[-25px]">Continue with Google</span>
      </button>
    </div>
  );
};
