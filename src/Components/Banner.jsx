import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <>
      {/* <div className={`bg-(${bannerImg}) min-h-20`}></div> */}
      <div className={`bg-${bannerImg} h-80 bg-cover`}>
        {/* <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Banner;
