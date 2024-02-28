import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

// const questions = [
//   {
//     _id: "1",
//     title: "Cascading Deletes in SQLAlchemy?",
//     tags: [
//       { _id: "1", name: "Python" },
//       { _id: "2", name: "SQL" },
//     ],
//     author: {
//       _id: "1",
//       name: "John Smith",
//       picture: "url_to_picture",
//       clerkId: "clerk_id_here",
//     },
//     upvotes: ["user_id_1", "user_id_2"],
//     views: 100,
//     answers: [
//       { answerId: "1", text: "Sample answer" },
//       { answerId: "2", text: "Another sample answer" },
//     ],
//     createdAt: new Date("2023-07-01T00:00:00"),
//   },
//   {
//     _id: "2",
//     title: "How do I use express as a custom server in NextJS?",
//     tags: [
//       { _id: "1", name: "Next13" },
//     ],
//     author: {
//       _id: "2",
//       name: "Jane Doe",
//       picture: "url_to_picture",
//       clerkId: "clerk_id_here",
//     },
//     upvotes: ["user_id_1", "user_id_2"],
//     views: 150,
//     answers: [{ answerId: "1", text: "Sample answer" }],
//     createdAt: new Date("2023-07-01T00:00:00"),
//   },
// ];

export default async function Home() {
  const result = await getQuestions({});
  console.log(result.questions);

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Looping through questions */}
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There&aposs no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
