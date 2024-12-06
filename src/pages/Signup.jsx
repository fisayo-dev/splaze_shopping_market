import landing_social_media from "../assets/app_images/landing_social_media.png";
const Signup = () => {
  return (
    <div className="form-grid-signup">
      <div className="bg-white">
        <div className="grid justify-items-center ">
          <img src={landing_social_media} alt="" />
        </div>
      </div>
      <div className="bg-yellow-300"></div>
    </div>
  );
};

export default Signup;
