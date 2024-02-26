import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    {
      _id: "2",
      title: "Can I get the course for free?",
    },
    {
      _id: "3",
      title: "Redux Toolkit Not Updating State as Expected",
    },
    {
      _id: "4",
      title: "How do I use express as a custom server in NextJS?",
    },
    {
      _id: "5",
      title: "Async/Await Function Not Handling Errors Properly",
    },
  ];

  const popularTags = [
    {
      _id: "1",
      name: "NEXTJS",
      totalQuestions: 4,
    },
    {
      _id: "2",
      name: "NEXT JS",
      totalQuestions: 3,
    },
    {
      _id: "3",
      name: "DEMO",
      totalQuestions: 2,
    },
    {
      _id: "4",
      name: "TEST",
      totalQuestions: 2,
    },
    {
      _id: "5",
      name: "JAVASCRIPT",
      totalQuestions: 2,
    },
  ];

  return (
    <section className="no-scrollbar background-light900_dark200 light-border shadow-light-300 sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 dark:shadow-none max-xl:hidden">
      <div className="flex flex-col">
        <h3 className="h3-bold text-dark200_light900">Hot Network</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => {
            return (
              <Link
                href={`/question/${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {popularTags.map((tag) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
