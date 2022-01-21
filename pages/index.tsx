import type { NextPage } from "next";
import School from "../components/school";

const Home: NextPage = () => {
  return (
    <div
      className="bg-isabelline
     h-screen w-screen flex flex-col items-center justify-center"
    >
      <h1>Browse by Schools</h1>
      <School name="College of Arts and Science" classes={["a"]} />
    </div>
  );
};

export default Home;
