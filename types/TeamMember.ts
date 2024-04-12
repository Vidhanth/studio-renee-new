export interface TeamMember {
  _id: string;
  name: string;
  jobTitle: string;
  about: string;
  picture: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}
