import type { NextPage } from "next";
import School from "../components/school";

const Home: NextPage = () => {
  const SCHOOLS: string[] = [
    "College of Arts & Sciences",
    "School of Engineering & Applied Sciences",
    "School of Education & Human Development",
    "School of Continuing & Professional Studies",
    "Other Schools",
  ];

  return (
    <div className="bg-poop h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Browse by Schools</h1>
      {SCHOOLS.map((school) => (
        <School name={school} classes={[]} />
      ))}
    </div>
  );
};

export default Home;
