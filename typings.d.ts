type Base = {
  _id: string;
  _rev: string;
  _updatedAt: string;
  _createdAt: string;
};

export type Image = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};
type SocialPage = {
  _ref: string;
  _type: "reference";
  _key: string;
};

export interface PageInfo extends Base {
  _type: "pageInfo";
  name: string;
  email: string;
  role: string;
  phoneNumber: string;
  profilePic: Image;
  heroImage: Image;
  address: string;
  backgroundInfo: string;
  heroMessage: string[];
  socials: SocialPage[];
}

export interface Social extends Base {
  _type: "social";
  title: string;
  url: string;
}

export interface Project extends Base {
  _type: "social";
  linkToBuild: string;
  title: string;
  summary: string;
  image: Image;
}

export interface Experience extends Base {
  _type: "experience";
  company: string;
  companyImage: Image;
  points: string[];
  jobTitle: string;
}

export interface Skill extends Base {
  _type: "skill";
  title: string;
  image: Image;
}
