import React from "react";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";

type Subject = {
  subject: string;
  descr: string;
};

export async function getStaticPaths() {
  const jar = new CookieJar();
  const client = wrapper(axios.create({ jar }));
  await client.head("https://sisuva.admin.virginia.edu/ihprd/signon.html");

  await client.get(
    "https://sisuva.admin.virginia.edu/psp/ihprd/UVSS/SA/s/WEBLIB_HCX_CM.H_COURSE_CATALOG.FieldFormula.IScript_Main?&cmd=uninav&Rnode=LOCAL_NODE&uninavpath=Root{PORTAL_ROOT_OBJECT}.HighPoint{HIGHPOINT}.Campus%20Experience{HPT_CAMPUS_EXPERIENCE}.Find%20Classes{HPT_CX_CLASS_INFORMATION}"
  );
  const subjects = (
    await client.get(
      "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_CM.H_COURSE_CATALOG.FieldFormula.IScript_CatalogSubjects?institution=UVA01&"
    )
  ).data.subjects;

  const paths = subjects.map((s: Subject) => ({
    params: {
      subject: s.subject,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params) throw "url param is null";
  const subjectParam = context.params.subject;

  const jar = new CookieJar();
  const client = wrapper(axios.create({ jar }));

  await client.head("https://sisuva.admin.virginia.edu/ihprd/signon.html");
  const courses = (
    await client.get(
      `https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_CM.H_COURSE_CATALOG.FieldFormula.IScript_SubjectCourses?institution=UVA01&subject=${subjectParam}`
    )
  ).data;

  return {
    props: { courses },
  };
}

export default function Subject() {
  const test = useRouter().query;

  return <h1>{test.subject}</h1>;
}
