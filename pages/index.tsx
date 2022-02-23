import type { NextPage } from "next";
import School from "../components/school";
import Layout from "../components/layout";
import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import { parse } from "node-html-parser";

export async function getStaticProps() {
  const jar = new CookieJar();
  const client = wrapper(axios.create({ jar }));

  await client.head("https://sisuva.admin.virginia.edu/ihprd/signon.html");
  const html = (
    await client.get(
      "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_CM.H_CLASS_SEARCH.FieldFormula.IScript_Main"
    )
  ).data;

  const classSearchScripts = parse(html).querySelectorAll("script");
  const searchCriteriaScript = classSearchScripts.find(
    (script) => script.innerText.indexOf("window.highpoint") >= 0
  );

  if (!searchCriteriaScript) throw "searchCriteriaScript is null";

  const searchCriteriaInnerText: string = searchCriteriaScript.innerText;
  const objectIndex: number = searchCriteriaScript.innerText.indexOf("{");
  const schedule = JSON.parse(searchCriteriaInnerText.slice(objectIndex, -1));

  return {
    props: {
      success: true,
      acad_groups: schedule.search_options.acad_groups,
      subjects: schedule.search_options.subjects,
    },
  };
}

type AcadGroup = {
  acad_group: string;
  descr: string;
};

type SubjectGroup = {
  subject: string;
  descr: string;
  acad_groups: string[];
  acad_orgs: string[];
  careers: string[];
  campuses: string[];
};

interface HomeProps {
  success: boolean;
  acad_groups: AcadGroup[];
  subjects: SubjectGroup[];
}

const Home: NextPage<HomeProps> = ({ success, acad_groups, subjects }) => {
  return (
    <Layout>
      <h1 className="text-4xl font-semibold mb-5">Browse by Schools</h1>
      <main className="w-full md:max-w-5xl p-4">
        {acad_groups.map(({ acad_group, descr }: AcadGroup, index) => (
          <div
            className={`${index < acad_groups.length - 1 ? "mb-4" : ""}`}
            key={index}
          >
            <School key={descr} name={descr} classes={[]} />
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default Home;
