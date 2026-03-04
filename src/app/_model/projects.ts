import { Project } from "./Project";
import { Tag } from "./Tag";

export const projects: Project[] = [
   {
    id: 1,
    name: 'High-Performance UI for Smart Systems',
    summary: 'Developed a lightweight, high-performance UI for an embedded system using Preact and Nanostores. Focused on maximizing efficiency with a JavaScript/JSX front-end integrated with Spring Boot and MongoDB.',
    description: `<ul>
        <li><b>Lightweight UI Development:</b> Utilized <b>Preact</b> to build an extremely fast and memory-efficient user interface, perfectly suited for the hardware constraints of embedded printing systems.</li>
        <li><b>State Management with Nanostores:</b> Implemented <b>Nanostores</b> for tiny, fast, and framework-agnostic state management, ensuring seamless data flow without the overhead of larger libraries.</li>
        <li><b>Front-End Engineering:</b> Crafted responsive and interactive components using <b>JavaScript (JSX)</b>, <b>HTML5</b>, and <b>CSS3</b>, tailored for specialized device screens.</li>
        <li><b>Full-Stack Integration:</b> Connected the Preact front-end to a robust <b>Spring Boot</b> backend, facilitating efficient communication and real-time device updates.</li>
        <li><b>Database Design:</b> Leveraged <b>MongoDB</b> for flexible, document-oriented data storage, managing device logs and user configurations with high availability.</li>
        <li><b>Performance Optimization:</b> Focused on minimizing bundle sizes and rendering cycles to maintain smooth 60FPS interactions on lower-powered hardware.</li>
        </ul>
        <p>This project highlights expertise in choosing the right tool for the job—balancing the lightweight nature of <b>Preact</b> and <b>Nanostores</b> with the enterprise power of <b>Spring Boot</b> and <b>MongoDB</b> to deliver a high-quality embedded solution.</p>`,
    projectLink: '',
    pictures: ['./assets/React_UI.png'],
    tags: [Tag.REACT, Tag.JAVASCRIPT]
    },
    {
    id: 2,
    name: 'System Simulation & Integration Testing Framework',
    summary: 'Engineered a specialized integration testing module using Spring Boot to simulate embedded system functions. Developed a RESTful API layer to mock hardware interactions, ensuring robust validation of backend microservices and MongoDB integration.',
    description: `<ul>
        <li><b>Spring-Driven Simulation:</b> Designed and architected a custom testing module using <b>Spring Boot</b> that simulates complex embedded system behaviors, allowing for high-fidelity backend validation without physical hardware.</li>
        <li><b>Integration Testing Excellence:</b> Developed a suite of <b>RESTful APIs</b> specifically to mock device-level responses, enabling end-to-end testing of the communication flow between the backend services and the embedded layer.</li>
        <li><b>Microservices Validation:</b> Led the verification of inter-service communication protocols, ensuring that data packets and device commands are processed correctly by the <b>Java</b> backend before deployment.</li>
        <li><b>Environment Isolation:</b> Created a decoupled testing environment that mimics production hardware constraints, significantly reducing regression bugs and improving the reliability of the <b>SaaS</b> delivery pipeline.</li>
        <li><b>Automated Quality Assurance:</b> Integrated the simulation APIs into the CI/CD pipeline, ensuring that every backend update is automatically validated against simulated hardware responses.</li>
        </ul>
        <p>This project demonstrates advanced competence in the <b>Spring Framework</b>, particularly in its application for <b>Integration Testing</b> and <b>Microservices</b>. It highlights a specialized ability to bridge the gap between software and hardware through sophisticated simulation and API design.</p>`,
    projectLink: '',
    pictures: ['./assets/Spring_IntegrationTesting.png'],
    tags: [Tag.SPRING, Tag.JAVA, Tag.JENKINS]
    },
    {
    id: 3,
    name: 'AI-Driven Unified Android Application for Embedded Printing Systems',
    summary: 'Led the end-to-end development of the first production feature in the team using Generative AI (Roo Code), while unifying two Android applications into a single optimized solution for an embedded Android printer, reducing administrative effort by 50%.',
    description: `<ul>
        <li><b>Generative AI Leadership:</b> Spearheaded the first end-to-end production feature in the team using Generative AI (Roo Code), demonstrating AI-assisted software development from design to deployment.</li>
        <li><b>AI Adoption Enablement:</b> Promoted AI-driven development practices through cross-team demos and practical knowledge sharing, accelerating team adoption and improving delivery efficiency.</li>
        <li><b>Application Unification:</b> Consolidated two Android applications (Java-based) into a single cohesive solution by eliminating duplicated modules and restructuring shared logic.</li>
        <li><b>Operational Optimization:</b> Reduced administrative and maintenance effort by 50% by centralizing deployment, configuration management, and monitoring into one application.</li>
        <li><b>Embedded System Environment:</b> Designed to run on Android-enabled embedded printers, supporting device-level operations such as copy and capture workflows.</li>
        <li><b>Technology Stack:</b> React.js component-based UI layer; Android application written in Java handling device interaction; backend APIs built using Spring Framework; bundled with Webpack; Node.js-based tooling; delivered as a SaaS solution within embedded system constraints.</li>
        </ul>
        <p>This project demonstrates leadership in Generative AI adoption, the ability to deliver AI-assisted production features end-to-end, and strong architectural skills in consolidating complex embedded Android systems.</p>`,
    projectLink: '',
    pictures: ['./assets/AI_Android.png'],
    tags: [ Tag.GENERATIVE_AI, Tag.JAVA, Tag.ANDROID, Tag.ROO_CODE, Tag.WEBPACK, Tag.NODE, Tag.EMBEDDED_SYSTEMS]
    },
    {
    id: 4,
    name: 'Unified Android Embedded Printing Solution – Multi-Brand Implementation',
    summary: 'Consolidated two Android applications into a single unified solution for a different printer brand, demonstrating strong Android development expertise, architectural refactoring, and embedded system optimization.',
    description: `<ul>
        <li><b>Application Consolidation:</b> Merged two separate Android applications into one cohesive solution by identifying duplicated modules and restructuring shared components into a unified architecture.</li>
        <li><b>Refactoring & Code Optimization:</b> Refactored core modules to improve maintainability, modularity, and long-term scalability while operating within embedded system constraints.</li>
        <li><b>Embedded System Integration:</b> Developed the on-device Android application in Java to handle hardware communication, downstream services, and printer-specific workflows.</li>
        <li><b>Multi-Brand Adaptation:</b> Successfully adapted the architecture to support a different printer brand, aligning with its hardware APIs and system limitations.</li>
        <li><b>Frontend Architecture:</b> UI layer designed using Angular-like component architecture based on Node and TypeScript, enabling structured and modular interface development.</li>
        <li><b>Backend Integration:</b> Integrated with backend APIs built using the Spring Framework within a SaaS-based ecosystem.</li>
        </ul>
        <p>This project highlights strong Android and Java development capabilities, architectural design skills, and the ability to deliver scalable embedded enterprise solutions across multiple hardware platforms.</p>`,
    projectLink: '',
    pictures: ['./assets/Unified_Two_Android.png'],
    tags: [Tag.JAVA, Tag.ANDROID, Tag.EMBEDDED_SYSTEMS]
    },
    {
    id: 5,
    name: 'Strategic MongoDB Data Migration & Feature Integration',
    summary: 'Spearheaded the migration of production data features in MongoDB using AI-driven development. Optimized migration scripts with GitHub Copilot and ensured a high-availability transition during the final system cutover.',
    description: `<ul>
        <li><b>AI-Accelerated Scripting:</b> Leveraged <b>GitHub Copilot</b> to architect and refine high-performance migration scripts, significantly reducing development time while ensuring robust error handling and data consistency.</li>
        <li><b>Rigorous Validation & Testing:</b> Orchestrated comprehensive pre-migration testing phases, including data integrity checks and performance benchmarking to ensure zero data loss during the transition.</li>
        <li><b>High-Impact Production Cutover:</b> Played a critical role in the real-time "cutover" phase, managing live database operations to ensure a seamless transition with minimal system downtime.</li>
        <li><b>Strategic Problem Solving:</b> Collaborated with cross-functional teams to resolve complex data dependencies, ensuring that all migrated features were fully compatible with the existing microservices architecture.</li>
        </ul>
        <p>This project highlights advanced proficiency in <b>MongoDB</b> data management and the strategic application of <b>Generative AI (GitHub Copilot)</b> to enhance DevOps efficiency. It demonstrates a proven ability to lead high-stakes production migrations with technical precision and minimal operational risk.</p>`,
    projectLink: '',
    pictures: [],
    tags: [Tag.MONGODB, Tag.GITHUB_COPILOT]
    },{
    id: 6,
    name: 'Zero-Overhead Embedded UI for Multi-Brand Printing Systems',
    summary: 'Architected a framework-agnostic, ultra-lightweight UI for specific embedded printer lines. Leveraged Vanilla TypeScript, Webpack, and GitHub Copilot to achieve a minimal memory footprint with high development efficiency.',
    description: `<ul>
        <li><b>AI-Accelerated Vanilla Development:</b> Leveraged <b>GitHub Copilot</b> to rapidly architect complex UI logic and state management in <b>Vanilla TypeScript</b>, maintaining a high-velocity development cycle without the need for heavy frameworks.</li>
        <li><b>Zero-Framework UI Engineering:</b> Engineered the entire front-end using <b>TypeScript</b>, <b>HTML5</b>, and <b>CSS3</b>, bypassing virtual DOM overhead to ensure peak performance on resource-constrained printer hardware.</li>
        <li><b>Custom Webpack Pipeline:</b> Configured a specialized <b>Webpack</b> build process to optimize asset bundling, utilizing tree-shaking and minification to produce the smallest possible production binaries.</li>
        <li><b>Hardware-Specific UI/UX:</b> Designed and implemented responsive interfaces tailored for a distinct brand of embedded printer screens, ensuring intuitive and reliable touch-screen interactions.</li>
        <li><b>Type-Safe Device Communication:</b> Utilized strict TypeScript interfaces to define data contracts for backend API communication, significantly reducing runtime errors and improving codebase maintainability.</li>
        <li><b>Performance-First Architecture:</b> Implemented direct DOM manipulation and optimized rendering cycles, providing near-instantaneous user feedback for hardware-level operations.</li>
        </ul>
        <p>This project highlights a "back-to-basics" approach to high-performance engineering, proving mastery in <b>Vanilla TypeScript</b>, <b>Webpack</b>, and <b>AI-driven development (GitHub Copilot)</b>. It demonstrates the ability to deliver enterprise-grade solutions where extreme hardware constraints make traditional frameworks like React impractical.</p>`,
    projectLink: '',
    pictures: [],
    tags: [Tag.TYPESCRIPT, Tag.WEBPACK, Tag.GITHUB_COPILOT, Tag.EMBEDDED_SYSTEMS]
    },
    {
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
        name: 'Chargin and Billing in One Solution Adaptation Development',
        summary: 'Led the successful development of the Charging and Billing in One Solution customization, focusing on enhancing billing and customer care functionalities. Executed various development, and customization tasks to optimize operations and improve user experience.',
        description: ' <ol><br>        <li><strong>CS 5 Upgrade & BSCS iX R3 Upgrade:</strong> Spearheaded the seamless transition to CS 5 and BSCS iX R3, ensuring system reliability and compatibility with evolving technological standards.</li><br>        <li><strong>Charging and Billing in One (CBiO):</strong> Implemented CBiO solution, consolidating charging and billing functionalities into a unified system, streamlining operations and enhancing efficiency.</li><br>        <li><strong>iX Collections for Dunning:</strong> Successfully integrated iX Collections for Dunning, automating debt collection processes and minimizing revenue leakage.</li><br>        <li><strong>Data Migrations:</strong> Oversaw the smooth transfer of data, maintaining data integrity and minimizing disruptions during migrations.</li><br>        <li><strong>Non-Kernel Customization:</strong> Executed non-kernel customizations to tailor the system to specific business requirements, enhancing flexibility and functionality.</li><br>        <li><strong>Interconnect Price Import Tool (IPIT) Interfaces:</strong> Developed Oracle procedures integrated with Java processes to configure the Ericsson billing system with accurate pricing data, optimizing billing processes.</li><br>        <li><strong>Web Services Layer Customization:</strong> Designed and implemented interfaces connecting BSCS with external modules, facilitating seamless data exchange and system integration.</li><br>        <li><strong>Customer Care Enhancements:</strong> Implemented Oracle procedures to execute business logic, enhancing customer care functionalities and improving service delivery.</li><br>        <li><strong>Itemized Bill Generation:</strong> Customized the web application of BSCS to provide a user-friendly GUI for generating itemized bills, based on MVC architecture, enhancing transparency and customer satisfaction.</li><br>        </ol>',
        projectLink: '',
        pictures: [''],
        tags: [Tag.JAVA, Tag.JSP, Tag.ORACLE, Tag.WEB_SERVICES, Tag.SOAPUI, Tag.MAVEN]
    },
	{
        id: 14,
        name: 'Backward compatability Integration Layer Development',
        summary: 'Contributed significantly to the Integration Layer project in collaboration with Ericsson, focusing on migrating from BSCS 7 to BSCS IX R3. Developed a transitional layer to ensure backward compatibility with existing applications running on BSCS 7, facilitating a seamless upgrade process to BSCS IX R3 without disrupting operations.',
        description: '<ol><br>        <li>Led the development of a transitional layer between existing applications and BSCS IX R3, ensuring backward compatibility and smooth migration.</li><br>        <li>Received handover from the main developer of the tool and implemented change requests, including adding new parameters to commands for integration with the customer\'s CRM system.</li><br>	    <li>Played a pivotal role, demonstrating strong expertise in software development and migration processes. Additionally, contributed to other projects, showcasing versatility and multitasking abilities.</li><br>		</ol>',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA, Tag.JMS, Tag.MAVEN, Tag.JBOSS]
    },
    {
        id: 15,
        name: 'IPTV Adapter',
        summary: 'Contributed to the customization and development of an adapter between the Hotel billing system (Fidelio) and the Ericsson IPTV (Internet Protocol Television) product for the Port Galeb project. Key tasks included developing screens to display user bills, adjusting language settings based on user preferences stored in the hotel billing system, and creating a screen for setting up wakeup calls.',
        description: ' <ol><br>        <li>Developed screens to display the current user bill, enhancing transparency and user experience.</li><br>        <li>Implemented functionality to adjust the language in the IPTV portal based on user language preferences stored in the hotel billing system, ensuring personalized user interactions.</li><br>        <li>Created a screen for setting up wakeup calls, providing added convenience and functionality for users.</li><br>        <li>Developed the Java components responsible for interfacing with the hotel billing system, ensuring seamless integration and data exchange.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA, Tag.JAVASCRIPT, Tag.MAVEN]
    },
    {
        id: 16,
        name: ' Bonus on Incoming Call',
        summary: 'The project involved implementing a bonus system based on incoming calls. This system provided various types of bonuses such as free units and promotions. Responsibilities included developing modules responsible for allocating bonuses and testing the modules for high availability, stability, and input file processing.',
        description: '<ol>        <li>Developed modules responsible for allocating bonuses based on incoming calls.</li><br>        <li>Conducted thorough testing to ensure high availability, stability, and accurate processing of input files.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA]
    },
	{
        id: 17,
        name: 'Mass Provisioning Tool',
        summary: 'The Mass Provisioning Tool aimed to streamline the mass insertion of services into the Mobile Service Delivery Platform (MSDP) Database, reducing configuration time and effort.',
        description: '<ol>        <li>The tool facilitated the mass insertion of services into the MSDP Database.</li><br>        <li>Data for service configuration was extracted from Excel sheets provided by users.</li><br>        <li>The tool automated the insertion process, significantly reducing manual effort.</li><br>        <li>Efficient automation minimized the potential for manual errors during configuration.</li><br>        <li>Continuous refinement and testing ensured the tool\'s robustness and reliability.</li><br>        <li>User guides were created to assist customers in utilizing the tool effectively.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [ Tag.JAVA, Tag.ORACLE]
    },
    {
        id: 18,
        name: ' CMS Adapter',
        summary: 'The CMS Adapter project focused on integrating the Siebel Customer Relationship Management (CRM) system with the BSCS billing system. This integration enabled the CRM to interact with the BSCS database, ensuring that actions performed in the CRM were reflected in the BSCS database. The project was essential for maintaining seamless communication between systems and required the adapter to exhibit high availability and stability.',
        description: '<ol>        <li>The project aimed to associate the Siebel CRM with the BSCS billing system, enabling data exchange between the two systems.</li><br>        <li>Siebel CRM communicated with another system, TIBO, which received messages from Siebel and forwarded them to the adapter.</li><br>        <li>The adapter was responsible for reading from and writing to the BSCS database, ensuring synchronization between CRM and billing data.</li><br>        <li>Key requirements for the adapter included high availability and stability to support uninterrupted operation.</li><br>        <li>Participated in developing the adapter, focusing on executing business logic within the BSCS system.</li><br>       <li>Developed tools to test the stability of the adapter, ensuring reliable performance under varying conditions.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [ Tag.JAVA, Tag.JUNIT]
    },
	{
        id: 19,
        name: 'Database Migration',
        summary: 'The Database Migration project aimed to migrate an Operator legacy postpaid system to the BSCS and Ericsson convergent solution. With 7,000 postpaid subscribers and 1.6 million prepaid subscribers, the migration process involved developing scripts to extract and load subscriber data, ensuring a seamless transition to the new system.',
        description: '<ol><br>        <li>Developed PL/SQL scripts to extract data from Tempo, the legacy postpaid system.</li><br>        <li>Executed the dump subscriber tool on SDP to extract prepaid customers\' data.</li><br>        <li>Loaded prepaid subscriber data into the BSCS database.</li><br>        <li>Developed scripts to insert data into the BSCS Database, including a history of 90 days for postpaid subscribers.</li><br>        <li>Moved all requested postpaid and prepaid subscriber data, including open invoices, payments, rate plans, services, addresses, and other requested data.</li><br>        <li>Performed migration for postpaid subscribers after running the bill cycle on Tempo, ensuring parallel operation of BSCS & Tempo for one month.</li><br>        <li>Participated in high-level and low-level design phases of the project.</li><br>        <li>Developed migration scripts and conducted User Acceptance Testing (UAT) with the customer.</li><br>        <li>Fixed bugs and participated in the cutover during the migration process.</li><br>        </ol>',
        projectLink: '',
        pictures: [],
        tags: [ Tag.ORACLE, Tag.JAVA]
    },
	{
        id: 20,
        name: 'BSCS IX Migration',
        summary: 'The BSCS IX Migration project involved migrating the legacy billing system to the Ericsson Billing System (BSCS - Business Support and Control System). As Ericsson was the prime integrator for the project, my role as a software developer focused on non-kernel customization for BSCS.',
        description: '<ul><br>        <li>Customized the customer care web application to enable customer service agents to create resources (directory numbers or storage mediums) on the fly while creating new contracts.</li><br>        <li>Implemented customization using MVC architecture for the customer care web application.</li><br>        <li>Participated in the development of the dunning module, which involved methodically communicating with customers to ensure the collection of account receivables.</li><br>        <li>Contributed to the development of the Mass Action tool, designed to execute actions on a large number of customers efficiently.</li><br>        </ul>',
        projectLink: '',
        pictures: [],
        tags: [ Tag.JAVA, Tag. JSP, Tag.ORACLE ]
    },
	{
        id: 21,
        name: 'IN Swap',
        summary: 'IN Swap involved migrating the IN (Intelligent Network) from the Alcatel prepaid system to the Ericsson Charging System. This project was recognized as one of the top 10 projects at Ericsson during that time.',
        description: '<ol><br>        <li>Participated as a software developer for customer adaptation, focusing on developing standalone programs that interface with charging system nodes using charging system protocols which are based on XML over HTTP.</li><br>        <li>Developed adaptation using the Erlang programming language to ensure seamless integration with the Ericsson Charging System.</li><br>       <li>Contributed to the development of a graphical user interface (GUI) to configure adaptations, enhancing usability and ease of configuration.</li><br>       </ol>',
        projectLink: '',
        pictures: [],
        tags: [Tag.JAVA, Tag.POSTGRES]
    }
];
