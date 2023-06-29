// import { v4 as uuid } from "uuid";
// import { formatDate } from "../utils/authUtils";

// /**

// export const posts = [
//   {
//     _id: uuid(),
//     content:
//       "Just had my mind blown at the A.R. Rahman concert! 🎶🤩 An absolute musical genius, his melodies transported me to another world. The energy, the soul-stirring compositions, and the electrifying atmosphere... it was an unforgettable experience! 🎵✨",
//     mediaURL:
//       "https://res.cloudinary.com/dxnbnviuz/video/upload/v1686375304/socialMedia/concert-video_nlsijt.mp4",
//     mediaAlt: "Concert Video",
//     likes: {
//       likeCount: 3,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "adityaj",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "💻🌐 Web development is the gateway to digital possibilities! From crafting engaging user experiences to bringing ideas to life, it's a world where creativity meets technology. Embrace the power of code and let's build a better web together! ✨🚀",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 5,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "emilysmith",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Stepping into the fashion scene like a style supernova! From runway inspirations to street chic, I'm here to make heads turn and trends ignite. Fashion is my canvas, and I'm painting it with confidence and flair.",
//     mediaURL:
//       "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686382827/socialMedia/fashion_vvomwh.jpg",
//     mediaAlt: "Fashion Store Image",
//     likes: {
//       likeCount: 4,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "jamesmurf",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Exciting news! Embarking on a new storytelling adventure as I dive into the realms of imagination to craft my upcoming book. Words are my enchanting brushstrokes, painting vivid worlds and compelling characters. Join me on this literary journey as we uncover tales that will captivate your heart and ignite your imagination!",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 9,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "imkriti",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Just had the most incredible experience at the Met Gala! ✨🌟 The fashion extravaganza was an artistic playground, where imagination and couture collided. Rubbing shoulders with fashion icons and witnessing breathtaking creations was a dream come true. Feeling inspired and ready to push the boundaries of style in my own designs! 🌹💃 ",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 6,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "avaturn",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Dream big, hustle harder! Success is not a destination; it's a journey of resilience, determination, and unwavering belief in your vision. Embrace challenges as opportunities, learn from failures, and keep pushing forward. Remember, every setback is a setup for a remarkable comeback. You have the power to create your own path to greatness!",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 2,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "aryan987",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content: "Just finished my new piece! Show some love guys!",
//     mediaURL:
//       "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686383929/socialMedia/eye-sketch_hlwies.jpg",
//     mediaAlt: "Eye Sketch",
//     likes: {
//       likeCount: 4,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "livparker",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Food is my love language, and every bite tells a delicious story! From savory delights to sweet indulgences, I'm on a gastronomic adventure to explore flavors, share recipes, and celebrate the culinary wonders of the world. Join me on this mouthwatering journey as we savor the joys of good food together! Bon appétit! 🍽️✨",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 5,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "rohaaan",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Food is my love language, and every bite tells a delicious story! From savory delights to sweet indulgences, I'm on a gastronomic adventure to explore flavors, share recipes, and celebrate the culinary wonders of the world. Join me on this mouthwatering journey as we savor the joys of good food together! Bon appétit! 🍽️✨",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 5,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "rohaaan",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "🌸💖 Embracing the beauty of self-love and cherishing the serenity of mental peace. Taking moments to nurture my soul, practice gratitude, and prioritize self-care. Remember, you deserve love, compassion, and inner tranquility. Let's bloom together and radiate positivity into the world!",
//     mediaURL:
//       "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686384490/socialMedia/love-yourself_juubpp.jpg",
//     mediaAlt: "Love Yourself written on wall",
//     likes: {
//       likeCount: 7,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "wilsarah",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Adventure awaits as I set my sights on the mesmerizing city-state of Singapore! From vibrant streets to stunning skylines, I'm ready to explore the cultural tapestry, indulge in delectable cuisine, and uncover hidden gems. Join me on this exhilarating journey as I embark on an unforgettable travel escapade in the Lion City!",
//     mediaURL:
//       "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686384788/socialMedia/singapore_p4bvfo.jpg",
//     mediaAlt: "Singapore",
//     likes: {
//       likeCount: 3,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "jacobmitch",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       " Hackathon success unlocked! Proud and thrilled to have secured the second prize in an exhilarating coding showdown. 💪💻 It was an incredible experience collaborating, coding, and pushing boundaries to build innovative solutions. Grateful for the supportive team and the opportunity to showcase my skills. Onwards and upwards, the journey of a web developer continues! 🚀✨",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 2,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "emilysmith",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "💜 The rhythm that transcends borders, the melodies that touch hearts. BTS, a powerhouse of talent and inspiration, continues to captivate the world with their music and message. From their electrifying performances to their genuine connection with ARMY, they redefine the meaning of artistry. Grateful to be a part of this incredible fandom. Together, we soar with BTS! ✨🚀 #BTS #ARMY #MusicMagic",
//     mediaURL:
//       "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686385359/socialMedia/bts_qkwp0a.jpg",
//     mediaAlt: "BTS",
//     likes: {
//       likeCount: 6,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "wilsarah",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Exploring the world, one destination at a time, and creating lifelong connections along the way! 🤝🗺️ Thrilled to embark on thrilling adventures, immerse in diverse cultures, and embrace the beauty of humanity. Let's meet, share stories, and build lasting friendships on this incredible journey called life. Travel and friendship are the greatest treasures that enrich our souls! 🌐💙 ",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 2,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "jacobmitch",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "From nurturing tiny seeds to witnessing blooms unfold, this newfound hobby has brought me closer to nature's beauty. Each touch of soil and every whisper with plants is a gentle reminder of life's delicate balance. Grateful for this peaceful escape and the joy it brings. Join me in cultivating beauty, one seed at a time! 🌷🌼",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 3,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "emilysmith",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Excited to strum the strings of my new musical companion! 🎶🎉 Just bought a new Guitar! This beautiful guitar is now an extension of my soul, ready to accompany me on melodies and lyrics yet to be discovered. From heartfelt ballads to energetic riffs, we're about to create magic together. Get ready for some soul-stirring tunes coming your way!",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 1,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "adityaj",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "🍽️📸 Embarking on a mouthwatering journey as I dive into the world of food blogging! 🌟✨ From savoring delectable dishes to capturing culinary delights, I'm thrilled to share my gastronomic adventures with fellow food enthusiasts. Join me as we explore flavors, unravel hidden gems, and celebrate the joy of good food together. Let the foodie adventures begin! ",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 4,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "rohaaan",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content: "Went for a casual walk! Came across this beauty!",
//     mediaURL:
//       "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686386134/socialMedia/sunset_pwhudr.jpg",
//     mediaAlt: "Sunset view",
//     likes: {
//       likeCount: 1,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "imkriti",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content: "It's my Birthday today!",
//     mediaURL:
//       "https://res.cloudinary.com/dxnbnviuz/image/upload/v1686386278/socialMedia/cake_g0csez.jpg",
//     mediaAlt: "A piece of cake",
//     likes: {
//       likeCount: 5,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "livparker",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Through the lens, I capture moments that tell stories, freeze memories, and ignite emotions. Photography, my window to the world, where creativity meets vision. From breathtaking landscapes to candid portraits, I'm endlessly inspired by the beauty that surrounds us.",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 7,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "aryan987",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Forever grateful for the guiding light and unconditional love of my incredible parents. They have been my rock, my inspiration, and my unwavering support system. Their love and sacrifices have shaped me into the person I am today. Words cannot express how blessed I am to have them by my side. Mom and Dad, you are my heroes, my forever source of love and strength. ❤️",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 8,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "jamesmurf",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
//   {
//     _id: uuid(),
//     content:
//       "Excitement is soaring as the Goa adventure awaits! Sun-kissed beaches, vibrant shacks, and endless fun with friends. The countdown begins for an unforgettable getaway filled with laughter, memories, and beach vibes. Get ready for sandy toes, epic sunsets, and the magic of Goa. Let's make this trip one for the books! 🌊🎉",
//     mediaURL: "",
//     mediaAlt: "",
//     likes: {
//       likeCount: 4,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "avaturn",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//     comments: [],
//   },
// ];

import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "sfgjuk_ftbj_6789_fghuSD",
    content:
      "Excited to share my first e-commerce website built using ReactJS, mockbee server, vanilla CSS🥳. https://glamour-ecommerce.vercel.app/",
    mediaURL:
      "https://res.cloudinary.com/dqlasoiaw/video/upload/v1686771977/tech-social/Glamour_Ecommerce_-_Google_Chrome_2023-06-08_17-22-56_online-video-cutter.com_uaylnt.mp4",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fyjksd_gb3j_37h8_fy7kBW",
        username: "davidkyle",
        text: "Awesome work Sudipta 🔥",
      },
      {
        _id: "hjThfd_6jfY_49H3_ks5kAt",
        username: "julieadams",
        text: "The UI is very beautiful with smooth, responsive and great colour combination. The user experience is amazing 🤩 with working backend.",
      },
    ],
    username: "schakraborty",
    createdAt: "2023-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "jdAd6u_gd8u_4g89_sHk3ED",
    content:
      "I’m happy to share that I’m starting a new position as Senior Software Engineer at Google!",
    mediaURL:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686811863/tech-social/shutterstock_630500720-4_bwekkt.jpg",
    likes: {
      likeCount: 23,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "gskytu_gdku_5789g_hsK4uRF",
        username: "linaabott",
        text: "Congratulations John!",
      },
    ],
    username: "johnwilliam",
    createdAt: "2022-03-12T10:35:21+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "gs5eubh_7hrk_6dg5_GfguQB",
    content:
      "I write my first technical blog about querySelector() and querySelectorAll() on elements in JavaScript. https://sudipta26.hashnode.dev/introducing-queryselector-and-queryselectorall-on-elements-in-javascript",
    mediaURL:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686808219/tech-social/EDAef5fL7_zkli5s.jpg",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "schakraborty",
    createdAt: "2022-08-31T10:15:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "gdko7tg_hdJu_1298_gfkiDR",
    content:
      "Optimizing Android app performance: Minimize APK size and optimize resource usage for faster app installation and startup.",
    mediaURL:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686814593/tech-social/How_to_Become_an_Android_Developer_qe0mpv.jpg",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "davidkyle",
    createdAt: "2022-03-12T11:25:24+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "gukRj5k_f5bj_6s89_fg5uSy",
    content:
      "Complete Backend Developer Roadmap in 2023. 150+ Free + Paid Resources. Drop a 👋 in the comments. Make sure you follow me so that I can DM You.",
    mediaURL:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686843689/tech-social/FyZwDsoXgAIi2H-_ydbpe4.jpg",
    likes: {
      likeCount: 17,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fhy5d8_jr2K_17h8_jAk6BW",
        username: "schakraborty",
        text: "👋",
      },
    ],
    username: "linaabott",
    createdAt: "2023-06-12T10:25:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e5Hyswe_btry_5g06_fGrYH3dc",
    content:
      "🚀Join us at agprop and help shape the future of real estate! We're hiring talented interns and developers for Full Stack, Frontend, Backend, UI/UX, & DevOps roles. Work with cutting-edge tech like cloud and machine learning. Send your resume to vrijraj.s@agprop.in",
    mediaURL:
      "https://res.cloudinary.com/dqlasoiaw/image/upload/v1686846308/tech-social/FvRFiZ9XoAA3xxo_n0rclt.jpg",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "julieadams",
    createdAt: "2022-04-22T10:25:24+05:30",
    updatedAt: formatDate(),
  },
];
