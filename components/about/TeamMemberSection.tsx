import { TeamMember } from "@/types/TeamMember";
import TeamMemberCard from "./TeamMemberCard";
import Header from "../Header";
import { FadeInUpWhenVisible } from "@/transitions/FadeInUpWhenVisible";

interface TeamMemberSectionProps {
  members: Array<TeamMember>;
}

export default function TeamMemberSection({ members }: TeamMemberSectionProps) {
  return (
    <section>
      <Header title={"Meet the Team"} subtitle={"This is who we are"} />
      <div className="flex flex-col justify-center items-center gap-10 mt-5">
        {members.map((member, index) => (
          <FadeInUpWhenVisible
            key={member.name}
            delay={(index + 1) * 0.2 + 0.4}
          >
            <TeamMemberCard teamMember={member} />
          </FadeInUpWhenVisible>
        ))}
      </div>
    </section>
  );
}
