import Feed from "@components/Feed.jsx";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Dicover & Share
        <br className="max-md:hiddeb" />
        <span className="orange_gradient text-center">AI Discover</span>
      </h1>
      <p className="desc text-center">Promptopia is a ...</p>
      <Feed />
    </section>
  );
};

export default Home;
