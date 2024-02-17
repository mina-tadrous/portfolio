import { Project } from "./Project";
import { Tag } from "./Tag";

export const projects: Project[] = [
    {
        id: 1,
        name: 'Product Lifecycle Management',
        summary: 'An Angular project demonstrating agile development in implementing product lifecycle management features.',
        description: 'Through my swift action in delivering critical new features on a tight schedule, I enabled the account manager to present an exceptionally compelling offer to the customer, achieving remarkable business success. This accomplishment underscores my proficiency in Angular, highlighting my ability to provide valuable new solutions.',
        projectLink: 'https://github.com/',
        pictures: ['../assets/PLM_angular1.png', '../assets/PLM_TypeScript1.png'],
        tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
        id: 2,
        name: 'Mobinil Data Charging Swap',
        summary: 'I played a pivotal role in end-to-end testing and later led a multicultural team.',
        description: 'The project aimed to swap the legacy charging system with the new charging system for mobile data charging.',
        projectLink: '',
        pictures: [],
        tags: [Tag.LEADERSHIP]
    },
    {
        id: 3,
        name: 'Zain North Sudan CBiO Solution',
        summary: 'I was involved in Java development, CORBA, JSP, Oracle, and Web Services.',
        description: 'Implementation of various upgrades and customization for Zain North Sudan.',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA, Tag.JSP, Tag.ORACLE]
    },
    {
        id: 4,
        name: 'Wataniya Kuwait Integration Layer',
        summary: 'I led the development of a compatibility layer, enabling seamless migration.',
        description: 'Migration from BSCS 7 to BSCS IX R3 and development of a compatibility layer.',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA, Tag.JBOSS]
    },
    {
        id: 5,
        name: 'Port Galeb IPTV',
        summary: 'I developed Java components to interface with the hotel billing system.',
        description: 'Customization and development of adapters between hotel billing system  and the IPTV product.',
        projectLink: '',
        pictures: [],
        tags: [ Tag.JAVA, Tag.MAVEN, Tag.JAVASCRIPT]
    }
];
