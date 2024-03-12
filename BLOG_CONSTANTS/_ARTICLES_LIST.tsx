import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { JIHO, MAXWELL, SIERRA, WREN } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/blog/housing1.tsx",
    featureArticle: true,
    preview: {
      author: JIHO,
      date: "3/12/2024",
      articleTitle: "Cant get a plaza double",
      tags: "housing, double, plaza",
      thumbnail: "/public/images/bruinlist-logo.png",
      shortIntro: "",
      category: "housing",
    },
  },
  {
    path: "/pages/blog/classes1.tsx",
    featureArticle: true,
    preview: {
      author: SIERRA,
      date: "3/12/2024",
      articleTitle: "CS 180",
      tags: "classes, cs",
      thumbnail: "/public/images/bruinlist-logo.png",
      shortIntro: "",
      category: "classes",
    },
  },
  {
    path: "/pages/blog/sports1.tsx",
    featureArticle: true,
    preview: {
      author: MAXWELL,
      date: "3/12/2024",
      articleTitle: "UCLA vs USC",
      tags: "sports",
      thumbnail: "/public/images/bruinlist-logo.png",
      shortIntro: "",
      category: "sports",
    },
  },
  {
    path: "/pages/blog/gaming1.tsx",
    featureArticle: true,
    preview: {
      author: JIHO,
      date: "3/12/2024",
      articleTitle: "Valorant best game",
      tags: "gaming, valporant",
      thumbnail: "/public/images/bruinlist-logo.png",
      shortIntro: "",
      category: "gaming",
    },
  },
  {
    path: "/pages/blog/events1.tsx",
    featureArticle: true,
    preview: {
      author: WREN,
      date: "3/12/2024",
      articleTitle: "Gene Block the GOAT",
      tags: "events, geneblock",
      thumbnail: "/public/images/bruinlist-logo.png",
      shortIntro: "",
      category: "events",
    },
  },
  {
    path: "/pages/blog/food1.tsx",
    featureArticle: true,
    preview: {
      author: SIERRA,
      date: "3/12/2024",
      articleTitle: "do NOT go to BPlate",
      tags: "food, bplate",
      thumbnail: "/public/images/bruinlist-logo.png",
      shortIntro: "",
      category: "food",
    },
  },
  {
    path: "/pages/blog/clubs1.tsx",
    featureArticle: true,
    preview: {
      author: WREN,
      date: "3/12/2024",
      articleTitle: "Best CS club at UCLA",
      tags: "clubs, eggert",
      thumbnail: "/public/images/bruinlist-logo.png",
      shortIntro: "",
      category: "clubs",
    },
  },
  {
    path: "/pages/blog/internships1.tsx",
    featureArticle: true,
    preview: {
      author: JIHO,
      date: "3/12/2024",
      articleTitle: "skill issue?",
      tags: "internships, cs",
      thumbnail: "/public/images/bruinlist-logo.png",
      shortIntro: "",
      category: "internships",
    },
  },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
