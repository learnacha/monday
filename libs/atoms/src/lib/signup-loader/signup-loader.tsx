export const SignupLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-background.png"
        alt="signup background"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/loader_transparent_new.gif"
          alt="loader"
          className="w-16 h-16 animate-spin"
        />
      </div>
    </div>
  );
};
