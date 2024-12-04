const Landing = () => {
  return (
    <div>
      <div className="py-5">
        <div className="container mx-auto md:px-16 px-5">
          <div className="mt-5">
            <div className="flex gap-10 items-center">
              <div className="grid gap-4 text-left">
                <h2 className="text-4xl capitalize font-bold">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
