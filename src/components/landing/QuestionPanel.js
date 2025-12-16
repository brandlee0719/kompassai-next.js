import Text from "../Text";
import QuestionTag from "./QuestionTag";


const qa = [
  {
    question: "What are KompassAI credits?", 
    answer: "Yes."
  },
  {
    question: "What is the difference between price plans?", 
    answer: "Yes."
  },
] // TODO


export default function QuestionPanel({ background = "bg-white" }) {
  return (
    <div className="flex flex-col items-center bg-white pb-10 sm:pb-[120px] md:pb-[160px]  overflow-hidden">
      <div
        className="w-full my-[20px] sm:mt-[80px]  md:mt-[80px] mb-[64px] font-OutfitBold text-[3rem] text-center text-stone-950"
      >
        Questions you might have
      </div>
      <QuestionTag question="What are KompassAI credits?" answer="Yes" />
      <QuestionTag question="What is the difference between price plans?" answer="Yes" />
      <QuestionTag question="Why can’t sign up to KompassAI with my email address?" answer="Yes" />
      <QuestionTag question="Does KompassAI integrate with my CRM?" answer="Yes" />
      <QuestionTag question="Do you have any larger plans, or plans for large team size?" answer="Yes" />
      <QuestionTag question="What are KompassAI credits?" answer="Yes" />
      <QuestionTag question="What are KompassAI credits?" answer="Yes" />
    </div>
  );
}
