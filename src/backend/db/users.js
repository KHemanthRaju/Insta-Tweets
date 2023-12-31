import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "a7c2KIpr-t",
    firstName: "Hemanth",
    lastName: "Raju",
    username: "hemanthRaju",
    email: "cool@gmail.com",
    password: "khr@123",
    bio: "Aspiring Frontend Developer",
    website: "https://khr-portfolio.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dfp7zvyfo/image/upload/v1687605250/K_Hemanth_Raju_1_xghrc5.jpg",
    createdAt: "2022-08-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "s2d3Bie-8",
    firstName: "John",
    lastName: "William",
    username: "johnwilliam",
    email: "johnwilliam03@gmail.com",
    password: "john123@03",
    bio: "Senior Software Developer at Google",
    website: "https://johnwilliam.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659911/tech-social/man3_a5om95.jpg",
    createdAt: "2022-03-12T10:35:21+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "e6a9Gqs-u",
    firstName: "Lina",
    lastName: "Abott",
    username: "linaabott",
    email: "linaabott56@gmail.com",
    password: "lina453@56",
    bio: "Backend Developer at Amazon",
    website: "https://linaabott.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659986/tech-social/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter_b9hnrt.jpg",
    createdAt: "2023-06-12T10:25:07+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "f1h5Jwv-m",
    firstName: "David",
    lastName: "Kyle",
    username: "davidkyle",
    email: "davidkyle24@gmail.com",
    password: "david67@24",
    bio: "Android developer",
    website: "https://davidkyle.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659910/tech-social/photo-1566753323558-f4e0952af115_cocrd5.jpg",
    createdAt: "2022-03-12T11:25:24+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "l0y2Krn-5",
    firstName: "Julie",
    lastName: "Adams",
    username: "julieadams",
    email: "julieadams62@gmail.com",
    password: "julie93@62",
    bio: "Full-stack developer",
    website: "https://julieadams.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686659986/tech-social/photo-1544005313-94ddf0286df2_qz2jqa.jpg",
    createdAt: "2022-04-22T10:25:24+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
];
