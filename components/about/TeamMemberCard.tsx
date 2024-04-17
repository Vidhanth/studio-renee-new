import { archivo } from "@/fonts";
import { TeamMember } from "@/types/TeamMember";

interface TeamMemberCardProps {
  teamMember: TeamMember;
}

export default function TeamMemberCard({ teamMember }: TeamMemberCardProps) {
  return (
    <div className="text-center p-4 max-w-lg flex flex-col gap-y-1">
      <img
        src={teamMember.picture}
        alt={teamMember.name}
        className="w-64 h-64 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className={`${archivo.className} text-2xl font-semibold`}>
        {teamMember.name}
      </h3>
      <p className="text-gray-700 mb-2">{teamMember.jobTitle}</p>
      <p className="text-black">{teamMember.about}</p>
    </div>
  );
}
