import type { NextPage } from "next";
import School from "../components/school";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const SCHOOLS: string[] = [
    "College of Arts & Sciences",
    "School of Engineering & Applied Sciences",
    "School of Education & Human Development",
    "School of Continuing & Professional Studies",
    "Other Schools",
  ];

  return (
    <Layout>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold min-w-min">Browse by Schools</h1>
        {SCHOOLS.map((school) => (
          <School key={school} name={school} classes={[]} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
