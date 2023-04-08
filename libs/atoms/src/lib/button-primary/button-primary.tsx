type ButtonPrimaryProps = {
  isLoading?: boolean;
  onHandleSubmit: () => void;
  text?: string;
};

export const ButtonPrimary = ({
  isLoading = false,
  onHandleSubmit,
  text,
}: ButtonPrimaryProps) => {
  const loadSpinnner = () => (
    <div
      className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-white rounded-full"
      role="status"
      aria-label="loading"
    ></div>
  );

  const loadButtonText = () => (
    <>
      <div>{text || `Next`} </div>
      <svg
        height="20"
        width="20"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        className="box-border relative ml-4"
      >
        <path
          clipRule="evenodd"
          d="M2.24999 10.071C2.24999 9.65683 2.58578 9.32104 2.99999 9.32104L15.3315 9.32105L10.7031 4.69273C10.4103 4.39983 10.4103 3.92496 10.7031 3.63207C10.996 3.33917 11.4709 3.33917 11.7638 3.63207L17.6725 9.54071C17.9653 9.83361 17.9653 10.3085 17.6725 10.6014L11.7638 16.51C11.4709 16.8029 10.996 16.8029 10.7031 16.51C10.4103 16.2171 10.4103 15.7423 10.7031 15.4494L15.3315 10.821L2.99999 10.821C2.58578 10.821 2.24999 10.4853 2.24999 10.071Z"
          fill="currentColor"
          fillRule="evenodd"
          className="box-border"
        />
      </svg>
    </>
  );

  return (
    <button
      type="button"
      onClick={onHandleSubmit}
      className="bg-[#0073ea] rounded whitespace-nowrap select-none px-8 py-4 box-border outline-none w-full min-w-full h-full cursor-pointer flex justify-center items-center text-white text-base text-[18px]"
    >
      {isLoading ? loadSpinnner() : loadButtonText()}
    </button>
  );
};
