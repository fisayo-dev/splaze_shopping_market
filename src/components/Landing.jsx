import landing_social_media from "../assets/app_images/landing_social_media.png";
const Landing = () => {
  return (
    <div>
      <div className="py-5">
        <div className="container mx-auto md:px-16 px-5">
          <div className="grid md:flex gap-5 justify-between items-center">
            <div className="grid gap-4 text-left">
              <h2 className="text-6xl capitalize font-bold">
                Your All-in-one online store.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                sint aspernatur quis, inventore doloribus recusandae mollitia
                aliquam cumque voluptas fugiat?
              </p>
              <div>
                <button className="px-5 py-3 rounded-full bg-yellow-400">
                  Start purchasing
                </button>
              </div>
            </div>
            <div className="grid items-center">
              <img
                src={landing_social_media}
                alt=""
                className="ml-auto w-5/6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
