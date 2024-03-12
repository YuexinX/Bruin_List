import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const JIHO: IAuthor = {
    name: "Jiho",
    designation: "Student",
    bio: "CS student at UCLA",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com'
        },
    ]
}

export const MAXWELL: IAuthor = {
    name: "Maxwell",
    designation: "Student",
    bio: "CS student at UCLA",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com'
        },
    ]
}

export const SIERRA: IAuthor = {
    name: "Sierra",
    designation: "Student",
    bio: "CS student at UCLA",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com'
        },
    ]
}

export const WREN: IAuthor = {
    name: "Wren",
    designation: "Student",
    bio: "CS student at UCLA",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com'
        },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Bruinlist';
export const WEBSITE_URL: string = 'https://bruinlist.com';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    logo: {
        type: LogoType.IMAGE,
        logo: '/images/bruinlist-logo.png',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
    ],
    socials: [
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Bruinlist",
    description: "",
    keywords: "",
    url: WEBSITE_URL,
    author: `CS35L`,
    twitterHandle: '',
    ogImage: '/public/images/bruinlist-logo.png',
}