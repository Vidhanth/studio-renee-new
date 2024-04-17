import { archivo } from "@/fonts";
import { TeamMember } from "@/types/TeamMember";

interface TeamMemberCardProps {
  teamMember: TeamMember;
}

export default function TeamMemberCard({ teamMember }: TeamMemberCardProps) {
  return (
    <div className="text-center p-4 max-w-lg flex flex-col gap-y-3">
      <img
        src={teamMember.picture}
        alt={teamMember.name}
        className="w-64 h-64 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className={`${archivo.className} text-lg font-semibold`}>
        {teamMember.name}
      </h3>
      <p className="text-black">{teamMember.jobTitle}</p>
      <p className="text-gray-700">{teamMember.about}</p>
    </div>
  );
}
