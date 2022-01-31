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
      <div className="h-screen flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-5">Browse by Schools</h1>
        <main className="bg-white mx-auto w-full md:max-w-5xl p-2 rounded-2xl">
          {SCHOOLS.map((school, index) => (
            <div
              className={`${index == SCHOOLS.length - 1 ? "" : "mb-2"}`}
              key={index}
            >
              <School key={school} name={school} classes={[]} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Home;
