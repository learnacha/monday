export const SignupHero = () => {
  return (
    <div className="mt-0 rounded-none overflow-hidden w-[40%] min-w-0 bg-white flex justify-center items-center">
      <div className="w-full h-full mr-0 flex bg-rgb(108, 108, 255) justify-start items-center">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url(https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/new-signup-right-side-assets/welcome-to-monday.png)',
          }}
        />
        <div className="absolute text-base font-bold text-center text-gray-700 w-[10rem] bottom-[10rem]" />
      </div>
    </div>
  );
};
