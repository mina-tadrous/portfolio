import { Project } from "./Project";
import { Tag } from "./Tag";

export const projects: Project[] = [
    {
        id: 1,
        name: 'Dynamic Auction Platform Development using ASP.NET Core',
        summary: 'Developed a dynamic and user-friendly auction website utilizing ASP.NET Core technology. The project aimed to streamline the auction process and enhance user engagement by providing a seamless and intuitive platform for buying and selling products.',
        description: `<ul>
        <li><b>User Registration:</b> Implemented a user registration system allowing new users to sign up and create accounts securely, ensuring a personalized experience for each user.</li>
        <li><b>Sale Creation:</b> Developed functionality for users to create new sales listings, including the ability to set a starting price for the product being auctioned.</li>
        <li><b>Bidding System:</b> Implemented a robust bidding system that enables registered users to search for products and place bids, with the option to post higher prices than the current highest bid.</li>
        <li><b>Sale Closure:</b> Designed a mechanism for sale owners to close auctions once they reach their desired duration or when they receive a satisfactory bid. The highest bid at the time of closure wins the sale.</li>
        <li><b>Commenting Feature:</b> Integrated a commenting feature that allows registered users to engage with open sale listings by posting comments, fostering community interaction and facilitating communication between buyers and sellers.</li>
        </ul>
		<p>The auction website project successfully delivered a feature-rich and intuitive platform that revolutionized the online auction experience. By prioritizing user engagement, security, and functionality, the project aimed to meet the diverse needs of buyers and sellers, ultimately driving increased participation and satisfaction on the platform. This project served as a showcase of my competence in ASP.NET Core development.</p>`,
        projectLink: '',
        pictures: [],
        tags: [Tag.C_SHARP, Tag.ASP, Tag.SQL_SERVER]
    },
    {
        id: 1,
        name: 'Gaining Competitive Edge Through Customer-Centric ',
        summary: 'Successfully implemented a critical feature to meet customer requirements, leading to a competitive advantage in the market.',
        description: `<ul>
        <li>To meet a customer's condition for considering our company's offer, I took the initiative to develop a key feature within a tight timeframe.</li>
        <li>Conducted a successful demonstration of the feature directly to the customer, ensuring alignment with their needs and expectations.</li>
        <li>As a result of these efforts:</li>
        <ul>
            <li>The account manager was able to submit a compelling offer to the customer, showcasing our commitment to meeting their requirements.</li>
            <li>We gained a significant competitive advantage over our rivals by delivering a solution tailored to the customer's needs in a timely manner.</li>
        </ul>
        </ul>`,
        projectLink: '',
        pictures: ['./assets/PLM_angular1.png', './assets/PLM_TypeScript1.png'],
        tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
    {
        id: 2,
        name: 'Enhancing CPQ Product with Angular Features and UI Testing Automation',
        summary: 'As part of the Product Development Unit, I actively contributed to the advancement of the CPQ (Configure, Price, Quote) application.',
        description: `<ul>
        <li>Developing new features within the Angular-based CPQ application, enriching its functionality and user experience.</li>
        <li>Creating reusable components that were utilized by fellow developers across the CPQ product, promoting consistency and efficiency in development.</li>
        <li>Implementing comprehensive UI testing automation using PROTRACTOR, a Selenium-based framework, to ensure the robustness and reliability of the Angular-powered CPQ application.</li>
        </ul>`,
        projectLink: '',
        pictures: [],
        tags: [ Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PROTRACTOR, Tag.SELENIUM]
    },
    {
        id: 3,
        name: 'IoT Integration in Catalog Manager and Order Care',
        summary: 'Developed, tested, and automated IoT functionalities within the Catalog Manager and Order Care systems.',
        description: `<ul>
            <li> Spearheaded the testing, and automation of IoT functionalities within the Catalog Manager and Order Care systems.</li>
            <li>Created an efficient Bash script to automate administrative tasks, streamlining operations, optimizing time management, and alleviating potential bottlenecks.</li>
            <li> The Scipt utilized across various projects, showcasing commitment to innovation and efficiency.</li>
            <li> Demonstrated proficiency in deploying products on AWS public cloud and handling installation and administration tasks over multiple environments.</li>
            <li> Collaborated with a diverse team of engineers across multiple time zones and geographical locations.</li>
            <li> Addressed the challenge of coordinating team members sharing the same environment by establishing a proactive communication framework using Microsoft Teams. This included creating a dedicated channel for real-time updates, workflow streamlining, and transparency in environment changes, resulting in significant improvements in team coordination and productivity.</li>
        </ul>`,
        projectLink: '',
        pictures: [],
        tags: [Tag.AWS, Tag.SHELL_SCRIPTING, Tag.KUBERNETES, Tag.HELM]
    },
    {
        id: 4,
        name: 'Infrastructure Compatibility Demonstration',
        summary: 'Successfully demonstrated product compatibility with customer infrastructure, expanding the company\'s market reach.',
        description: `<ul>
        <li>Customer expressed strong interest in adopting our product, built on Kubernetes, but insisted on using their own infrastructure.</li>
        <li>Their infrastructure was incompatible with our product.</li>
        <li>Took initiative to install and test our product on their infrastructure.</li>
        <li>
            <strong>Results:</strong>
            <ul>
                <li>Successfully demonstrated product compatibility, enabling offering to customer.</li>
                <li>Expanded company’s market reach by adding customer environment as a compatible setup.</li>
            </ul>
        </li>
        </ul>`,
        projectLink: '',
        pictures: [],
        tags: [ Tag.KUBERNETES, Tag.HELM]
    },
    {
        id: 5,
        name: 'REST API Testing Automation ',
        summary: 'Spearheaded the automation of RESTful API testing for newly developed services, resulting in significant reduction of manual testing efforts.',
        description: `<ul>
        <li>Created detailed test cases in Jira to provide comprehensive coverage of functional requirements and ensure thorough testing of the services.</li>
        <li>Developed API testing automation for the newly developed services.</li>
        <li>Initiated the project by developing preliminary automation scripts using the Intuit Karate framework.</li>
        <li>Executed automated tests on Kubernetes installations to validate functionality and performance under various conditions.</li>
        <li>Integrated the automated testing into the Jenkins pipeline, enabling seamless execution and continuous integration of tests.</li>
        <li>Achieved a minimum 25% reduction in manual testing efforts using Postman by automating test cases and frameworks like Intuit Karate.</li>
        <li>Prepared and successfully conducted training sessions for solution architects to introduce the newly developed microservices, facilitating their adoption and understanding within the team.</li>
        </ul>`,
        projectLink: '',
        pictures: [],
        tags: [ Tag.JENKINS, Tag.KARATE, Tag.JIRA, Tag.POSTMAN, Tag.SOAPUI,Tag.DOCKER, Tag.KUBERNETES, Tag.ORACLE, Tag.POSTGRES]
    },
    {
        id: 6,
        name: 'Elevating Service Stability and Efficiency',
        summary: 'As a dedicated professional for performance testing with a specialization in API testing, I have undertaken various initiatives to enhance the quality and efficiency of newly developed services.',
        description: `<ul>
        <li>Developed and conducting comprehensive performance testing using JMeter to assess and optimize the performance of newly developed services.</li>
        <li>Pioneering the development of a new performance testing tool based on Intuit Karate within the Gatling framework, aimed at further enhancing testing capabilities.</li>
        <li>Ensuring overall product stability through rigorous stability testing, mitigating potential issues and bottlenecks.</li>
        <li>Successfully orchestrating the deployment of test beds for new versions in a Kubernetes environment, facilitating seamless testing and validation processes.</li>
        <li>Edited a shell script to automate running JMeter tests with the newly added services, improving efficiency and test automation.</li>
        </ul>`,
        projectLink: '',
        pictures: [],
        tags: [ Tag.JMETER, Tag.GATLING, Tag.KARATE, Tag.KUBERNETES, Tag.SHELL_SCRIPTING]
    },
	{
        id: 7,
        name: 'Chargin and Billing in One Solution Adaptation Development',
        summary: 'Led the successful development of the Charging and Billing in One Solution customization, focusing on enhancing billing and customer care functionalities. Executed various development, and customization tasks to optimize operations and improve user experience.',
        description: ' <ol><br>        <li><strong>CS 5 Upgrade & BSCS iX R3 Upgrade:</strong> Spearheaded the seamless transition to CS 5 and BSCS iX R3, ensuring system reliability and compatibility with evolving technological standards.</li><br>        <li><strong>Charging and Billing in One (CBiO):</strong> Implemented CBiO solution, consolidating charging and billing functionalities into a unified system, streamlining operations and enhancing efficiency.</li><br>        <li><strong>iX Collections for Dunning:</strong> Successfully integrated iX Collections for Dunning, automating debt collection processes and minimizing revenue leakage.</li><br>        <li><strong>Data Migrations:</strong> Oversaw the smooth transfer of data, maintaining data integrity and minimizing disruptions during migrations.</li><br>        <li><strong>Non-Kernel Customization:</strong> Executed non-kernel customizations to tailor the system to specific business requirements, enhancing flexibility and functionality.</li><br>        <li><strong>Interconnect Price Import Tool (IPIT) Interfaces:</strong> Developed Oracle procedures integrated with Java processes to configure the Ericsson billing system with accurate pricing data, optimizing billing processes.</li><br>        <li><strong>Web Services Layer Customization:</strong> Designed and implemented interfaces connecting BSCS with external modules, facilitating seamless data exchange and system integration.</li><br>        <li><strong>Customer Care Enhancements:</strong> Implemented Oracle procedures to execute business logic, enhancing customer care functionalities and improving service delivery.</li><br>        <li><strong>Itemized Bill Generation:</strong> Customized the web application of BSCS to provide a user-friendly GUI for generating itemized bills, based on MVC architecture, enhancing transparency and customer satisfaction.</li><br>        </ol>',
        projectLink: '',
        pictures: [''],
        tags: [Tag.JAVA, Tag.JSP, Tag.ORACLE, Tag.WEB_SERVICES, Tag.SOAPUI, Tag.MAVEN]
    },
	{
        id: 8,
        name: 'Backward compatability Integration Layer Development',
        summary: 'Contributed significantly to the Integration Layer project in collaboration with Ericsson, focusing on migrating from BSCS 7 to BSCS IX R3. Developed a transitional layer to ensure backward compatibility with existing applications running on BSCS 7, facilitating a seamless upgrade process to BSCS IX R3 without disrupting operations.',
        description: '<ol><br>        <li>Led the development of a transitional layer between existing applications and BSCS IX R3, ensuring backward compatibility and smooth migration.</li><br>        <li>Received handover from the main developer of the tool and implemented change requests, including adding new parameters to commands for integration with the customer\'s CRM system.</li><br>	    <li>Played a pivotal role, demonstrating strong expertise in software development and migration processes. Additionally, contributed to other projects, showcasing versatility and multitasking abilities.</li><br>		</ol>',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA, Tag.JMS, Tag.MAVEN, Tag.JBOSS]
    },
    {
        id: 9,
        name: 'IPTV Adapter',
        summary: 'Contributed to the customization and development of an adapter between the Hotel billing system (Fidelio) and the Ericsson IPTV (Internet Protocol Television) product for the Port Galeb project. Key tasks included developing screens to display user bills, adjusting language settings based on user preferences stored in the hotel billing system, and creating a screen for setting up wakeup calls.',
        description: ' <ol><br>        <li>Developed screens to display the current user bill, enhancing transparency and user experience.</li><br>        <li>Implemented functionality to adjust the language in the IPTV portal based on user language preferences stored in the hotel billing system, ensuring personalized user interactions.</li><br>        <li>Created a screen for setting up wakeup calls, providing added convenience and functionality for users.</li><br>        <li>Developed the Java components responsible for interfacing with the hotel billing system, ensuring seamless integration and data exchange.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA, Tag.JAVASCRIPT, Tag.MAVEN]
    },
    {
        id: 10,
        name: ' Bonus on Incoming Call',
        summary: 'The project involved implementing a bonus system based on incoming calls. This system provided various types of bonuses such as free units and promotions. Responsibilities included developing modules responsible for allocating bonuses and testing the modules for high availability, stability, and input file processing.',
        description: '<ol>        <li>Developed modules responsible for allocating bonuses based on incoming calls.</li><br>        <li>Conducted thorough testing to ensure high availability, stability, and accurate processing of input files.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA]
    },
	{
        id: 11,
        name: 'Mass Provisioning Tool',
        summary: 'The Mass Provisioning Tool aimed to streamline the mass insertion of services into the Mobile Service Delivery Platform (MSDP) Database, reducing configuration time and effort.',
        description: '<ol>        <li>The tool facilitated the mass insertion of services into the MSDP Database.</li><br>        <li>Data for service configuration was extracted from Excel sheets provided by users.</li><br>        <li>The tool automated the insertion process, significantly reducing manual effort.</li><br>        <li>Efficient automation minimized the potential for manual errors during configuration.</li><br>        <li>Continuous refinement and testing ensured the tool\'s robustness and reliability.</li><br>        <li>User guides were created to assist customers in utilizing the tool effectively.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [ Tag.JAVA, Tag.ORACLE]
    },
    {
        id: 12,
        name: ' CMS Adapter',
        summary: 'The CMS Adapter project focused on integrating the Siebel Customer Relationship Management (CRM) system with the BSCS billing system. This integration enabled the CRM to interact with the BSCS database, ensuring that actions performed in the CRM were reflected in the BSCS database. The project was essential for maintaining seamless communication between systems and required the adapter to exhibit high availability and stability.',
        description: '<ol>        <li>The project aimed to associate the Siebel CRM with the BSCS billing system, enabling data exchange between the two systems.</li><br>        <li>Siebel CRM communicated with another system, TIBO, which received messages from Siebel and forwarded them to the adapter.</li><br>        <li>The adapter was responsible for reading from and writing to the BSCS database, ensuring synchronization between CRM and billing data.</li><br>        <li>Key requirements for the adapter included high availability and stability to support uninterrupted operation.</li><br>        <li>Participated in developing the adapter, focusing on executing business logic within the BSCS system.</li><br>       <li>Developed tools to test the stability of the adapter, ensuring reliable performance under varying conditions.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [ Tag.JAVA, Tag.JUNIT]
    },
	{
        id: 13,
        name: 'Database Migration',
        summary: 'The Database Migration project aimed to migrate an Operator legacy postpaid system to the BSCS and Ericsson convergent solution. With 7,000 postpaid subscribers and 1.6 million prepaid subscribers, the migration process involved developing scripts to extract and load subscriber data, ensuring a seamless transition to the new system.',
        description: '<ol><br>        <li>Developed PL/SQL scripts to extract data from Tempo, the legacy postpaid system.</li><br>        <li>Executed the dump subscriber tool on SDP to extract prepaid customers\' data.</li><br>        <li>Loaded prepaid subscriber data into the BSCS database.</li><br>        <li>Developed scripts to insert data into the BSCS Database, including a history of 90 days for postpaid subscribers.</li><br>        <li>Moved all requested postpaid and prepaid subscriber data, including open invoices, payments, rate plans, services, addresses, and other requested data.</li><br>        <li>Performed migration for postpaid subscribers after running the bill cycle on Tempo, ensuring parallel operation of BSCS & Tempo for one month.</li><br>        <li>Participated in high-level and low-level design phases of the project.</li><br>        <li>Developed migration scripts and conducted User Acceptance Testing (UAT) with the customer.</li><br>        <li>Fixed bugs and participated in the cutover during the migration process.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [ Tag.ORACLE, Tag.JAVA]
    },
	{
        id: 14,
        name: 'BSCS IX Migration',
        summary: 'The BSCS IX Migration project involved migrating the legacy billing system to the Ericsson Billing System (BSCS - Business Support and Control System). As Ericsson was the prime integrator for the project, my role as a software developer focused on non-kernel customization for BSCS.',
        description: '<ul><br>        <li>Customized the customer care web application to enable customer service agents to create resources (directory numbers or storage mediums) on the fly while creating new contracts.</li><br>        <li>Implemented customization using MVC architecture for the customer care web application.</li><br>        <li>Participated in the development of the dunning module, which involved methodically communicating with customers to ensure the collection of account receivables.</li><br>        <li>Contributed to the development of the Mass Action tool, designed to execute actions on a large number of customers efficiently.</li><br>        </ul>',
        projectLink: '',
        pictures: [],
        tags: [ Tag.JAVA, Tag. JSP, Tag.ORACLE ]
    },
	{
        id: 15,
        name: 'IN Swap',
        summary: 'IN Swap involved migrating the IN (Intelligent Network) from the Alcatel prepaid system to the Ericsson Charging System. This project was recognized as one of the top 10 projects at Ericsson during that time.',
        description: '<ol><br>        <li>Participated as a software developer for customer adaptation, focusing on developing standalone programs that interface with charging system nodes using charging system protocols which are based on XML over HTTP.</li><br>        <li>Developed adaptation using the Erlang programming language to ensure seamless integration with the Ericsson Charging System.</li><br>       <li>Contributed to the development of a graphical user interface (GUI) to configure adaptations, enhancing usability and ease of configuration.</li><br>       </ol>',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA, Tag.POSTGRES]
    }
];
