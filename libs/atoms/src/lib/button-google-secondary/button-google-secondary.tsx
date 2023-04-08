export const ButtonGoogleSecondary = () => {
  return (
    <div aria-label="Social media login buttons" role="group" className="flex">
      <button
        type="button"
        className="flex items-center border border-[#c5c7d0] rounded mr-0 px-4 py-3 cursor-pointer mt-1.5 h-11"
      >
        <img
          src="https://cdn.monday.com/images/google-icon.svg"
          alt="Google logo"
          className="w-full h-4 mr-2"
        />
        <div className="text-sm text-[#333333]">Google</div>
      </button>
    </div>
  );
};
