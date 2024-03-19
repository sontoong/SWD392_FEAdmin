import { Applicant } from "../app/models/applicant";
import { Comment } from "../app/models/rating";
import { CompanyDetail } from "../app/models/company";
import { EnterpriseInfo } from "../app/models/enterprise";
import { Income } from "../app/models/income";
import { Nation } from "../app/models/language";
import {
  Project,
  Skill,
  OptionalRequirements,
  FreelancerProject,
  EnterpriseProject,
  OutsideProject,
  Field,
  SkillField,
} from "../app/models/project";
import { Transaction } from "../app/models/transaction";
import { Education, Experience, FreelancerDetail } from "../app/models/user";

export const nations: Nation = {
  all: { label: "Tất cả", value: "all" },
  vn: { label: "Việt Nam", value: "vn" },
  us: { label: "Hoa Kì", value: "us" },
  cn: { label: "Trung Quốc", value: "cn" },
};

const skills: Skill[] = [
  { label: "Front-end Developer", value: "Front-end Developer" },
  { label: "Back-end Developer", value: "Back-end Developer" },
  { label: "Full-stack Developer", value: "Full-stack Developer" },
  { label: "Mobile Developer", value: "Mobile Developer" },
  { label: "UI/UX Designer", value: "UI/UX Designer" },
  { label: "Data Scientist", value: "Data Scientist" },
  { label: "Data Engineer", value: "Data Engineer" },
];

export const fields: Field[] = [
  { label: "IT", value: "it" },
  { label: "Nấu ăn", value: "cook" },
];

const field: SkillField = {
  label: "IT",
  value: "it",
};

const field1: SkillField = {
  label: "Nấu ăn",
  value: "cook",
};

const optionalRequirements: OptionalRequirements = {
  minimumCompletedProjects: "all",
  language: "all",
  nation: "all",
  rating: "all",
  skills: skills,
  questions: ["Câu 100", "Câu 2", "Câu 3"],
};

export const project: Project = {
  id: "1",
  title: "Lập trình Front-end",
  createdBy: "Nguyễn Văn A",
  createdById: "1",
  description: "Viết app ứng dụng android",
  isVerified: true,
  paidAmount: 0,
  projectField: field,
  publishedTime: 1708532861000,
  isCompleted: false,
  language: "en",
  timeToComplete: "<1 month",
  freelancerRequirement: "junior",
  optionalRequirements: optionalRequirements,
  funding: "hourly",
  initialFunding: 0,
  projectType: "longterm",
  privacy: "public",
  applicationCount: 5,
  inviteSent: 6,
  inviteAccepted: 3,
  freelancerCount: 10,
  contract: {
    date: 1708532861000,
    depositType: "full",
    fund: 0,
  },
};

export const oproject1: OutsideProject = {
  title: "FPT Fap",
  description: "Tôi tạo và quản lý database và flow cho project",
  jobRole: "Back-end Developer",
  startEndDate: [1708532861000, 1708532861000],
  images: [],
  projectDocumentImages: [{ image: { name: "img1" }, description: "" }],
};

export const education1: Education = {
  school: "FPT University",
  degree: "Bachelor",
  startEndYear: [1704042000000, 1704042000000],
  description: "Khóa học Full-Stack Development",
};

export const experience1: Experience = {
  company: "FPT",
  jobRole: "Back-end Developer",
  nation: "vn",
  startEndYear: [1704042000000, 1704042000000],
  description: "Khóa học Full-Stack Development",
};

export const freelancer: FreelancerDetail = {
  id: "1",
  role: "freelancer",
  dob: 1708532861000,
  email: "nguyena@gmail.com",
  username: "Nguyễn Văn A",
  phone: "0123456789",
  address:
    "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh 715650",
  nation: "vn",
  isVerified: true,
  averageRating: 3.5,
  ratingCount: 10,
  createdAt: 1708532861000,
  description: `20 năm trong Full-Stack Development + UI/UX
Facebook: fb.com/user/JoeBiden`,
  desireSalary: 50000,
  languages: ["vn", "en"],
  projectCount: 5,
  experienceLevel: "junior",
  firstName: "Nguyễn",
  middleName: "Văn",
  lastName: "A",
  jobRole: "Front-end Developer",
  profilePicture: "",
  skills: skills,
  outsideProjects: [oproject1],
  educations: [education1],
  experiences: [experience1],
  rating: [
    {
      name: "quality",
      rating: 0,
      ratingCount: 0,
    },
    {
      name: "price",
      rating: 0,
      ratingCount: 0,
    },
    {
      name: "time",
      rating: 0,
      ratingCount: 0,
    },
    {
      name: "response",
      rating: 0,
      ratingCount: 0,
    },
    {
      name: "talking",
      rating: 0,
      ratingCount: 0,
    },
  ],
  jobField: { label: "IT", value: "it" },
};

export const projects: Project[] = [project];
export const freelancers: FreelancerDetail[] = [freelancer];

const comment: Comment = {
  title: "Nguyen Van A",
  avatar: "",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a erat ut nibh dignissim bibendum id eu est. Nunc libero nisl, vestibulum id sodales sit amet, condimentum ut velit. Curabitur scelerisque laoreet maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus, diam nec accumsan suscipit, quam mi dictum felis, vestibulum dictum lectus ex sit amet nibh. Maecenas ultrices elit eget cursus auctor. Donec venenatis nisl odio, quis ...",
  rating: 4.5,
};

const comment2: Comment = {
  title: "Nguyen Van A",
  avatar: "",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a erat ut nibh dignissim bibendum id eu est. Nunc libero nisl, vestibulum id sodales sit amet, condimentum ut velit. Curabitur scelerisque laoreet maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus, diam nec accumsan suscipit, quam mi dictum felis, vestibulum dictum lectus ex sit amet nibh. Maecenas ultrices elit eget cursus auctor. Donec venenatis nisl odio, quis ...",
  rating: 4.5,
};

export const comments: Comment[] = [comment, comment2];

export const companyDetail: CompanyDetail = {
  enterpriseCountry: { label: "Việt Nam", value: "vn" },
  companyName: "FPT Software",
  website: "http://domainexpansion.com",
  videoLink: "https://youtu.be/dQw4w9WgXcQ?si=kCbyzyW8_XaVT8-j",
  companySize: "10-20",
  introduction:
    "This is the place for cooking, like Gordon's grilled cheese sandwich.",
  industryFields: [field1, field],
  companyDocument: "FunnyMemeFrom9GAG.png",
  registrationDocumentType: "Giấy phép ĐKKD",
  identificationNumber: 333333333333333,
  companyCountry: "Việt Nam",
  taxNumber: 33333333333333,
  address: "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam",
  companyEmail: "CoolMathGame@gmail.com",
  companyPhone: "33333333333333",
};

export const enterpriseInfo: EnterpriseInfo = {
  id: "1",
  firstName: "Nguyễn",
  middleName: "Văn",
  lastName: "A",
  dateOfBirth: 1708532861000,
  enterpriseCountry: { label: "Việt Nam", value: "vn" },
  documentType: "Hộ chiếu",
  enterpriseDocument: "FunnyMemeFrom9GAG.png",
  documentNumber: 33333333333333,
  enterpriseEmail: "CoolMathGame@gmail.com",
  enterprisePhone: "33333333333333",
  companyDetail: companyDetail,
  projectList: projects,
  currentHiringProject: 3,
};

export const FreelancerProjects: FreelancerProject[] = [
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "stopped",
    signature: "Thuan",
  },
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "doing",
    signature: "Thuan",
  },
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "contracting",
    signature: "",
  },
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "verifying",
    signature: "",
  },
  {
    ...project,
    startDate: 1708532861000,
    endDate: 1708532861000,
    status: "denied",
    signature: "",
  },
];

export const EnterpriseProjects: EnterpriseProject[] = [
  { ...project, applicationCount: 5, freelancerCount: 10, status: "hiring" },
  { ...project, applicationCount: 5, freelancerCount: 10, status: "closed" },
  { ...project, applicationCount: 5, freelancerCount: 10, status: "doing" },
];

export const Incomes: Income[] = [
  {
    customer: "Nguyễn Văn Cường",
    customerId: "",
    projectId: "",
    incomeAmount: 5000000,
    serviceFee: 15000000,
  },
  {
    customer: "Nguyễn Văn Cường",
    customerId: "",
    projectId: "",
    incomeAmount: 5000000,
    serviceFee: 15000000,
  },
  {
    customer: "Nguyễn Văn Cường",
    customerId: "",
    projectId: "",
    incomeAmount: 5000000,
    serviceFee: 15000000,
  },
  {
    customer: "Nguyễn Văn Cường",
    customerId: "",
    projectId: "",
    incomeAmount: 5000000,
    serviceFee: 15000000,
  },
];

export const Transactions: Transaction[] = [
  {
    name: "Nguyễn Văn Cường",
    date: 1708532861000,
    id: "#15XE335NME",
    moneyAmount: 5000000,
    type: "cash-out",
  },
  {
    name: "Nguyễn Văn Cường",
    date: 1708532861000,
    id: "#15XE335NME",
    moneyAmount: 5000000,
    type: "transaction",
  },
];

export const Applicants: Applicant[] = [
  {
    id: "",
    projectId: "",
    name: "Nguyễn Văn A",
    date: 1708532861000,
    money: 0,
    time: 0,
    questions: [
      {
        question: "Câu 1",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
      {
        question: "Câu 2",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
      {
        question: "Câu 3",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
    ],
  },
  {
    id: "",
    projectId: "",
    name: "Nguyễn Văn A",
    date: 1708532861000,
    money: 0,
    time: 0,
    questions: [
      {
        question: "Câu 1",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
      {
        question: "Câu 2",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
      {
        question: "Câu 3",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut condimentum turpis. Aenean accumsan vel turpis id dictum. Maecenas lobortis, ante quis volutpat dignissim, mi magna viverra enim, quis lacinia arcu metus nec leo. Sed accumsan sed eros non rhoncus. Integer sagittis diam eget justo commodo dapibus. Ut at maximus sem, vitae laoreet leo.",
      },
    ],
  },
];
