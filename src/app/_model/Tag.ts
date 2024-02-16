export class Tag {

    // Programming Languages
    static readonly JAVA = new Tag('Java', '#007396');
    static readonly C_SHARP = new Tag('C#', '#239120');
    static readonly SHELL_SCRIPTING = new Tag('Shell Scripting (bash)', '#000000');
    static readonly PYTHON = new Tag('Python', '#3776AB');
    static readonly C_PLUS_PLUS = new Tag('C++', '#00599C');
    static readonly NODE_JS = new Tag('node.js', '#68A063');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#3178C6');
    static readonly RXJS = new Tag('RxJs', '#B7178C');

    // Web Technologies
    static readonly ANGULAR = new Tag('Angular', '#DD0031');
    static readonly NGRX = new Tag('NgRx', '#5A9FCC');
    static readonly ANGULARJS = new Tag('AngularJS', '#E23237');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#F7DF1E');
    static readonly HTML = new Tag('HTML', '#E34F26');
    static readonly CSS = new Tag('CSS', '#1572B6');
    static readonly SERVLETS = new Tag('Servlets', '#CA3435');
    static readonly JSP = new Tag('JSP', '#007396');
    static readonly DJANGO = new Tag('Django', '#092E20');
    static readonly REACT = new Tag('React', '#61DAFB');

    // Databases
    static readonly RELATIONAL_DATABASE = new Tag('Relational Database', '#336791');
    static readonly SQL = new Tag('SQL', '#003B57');
    static readonly PLSQL = new Tag('PLSQL', '#DA5906');
    static readonly ORACLE = new Tag('Oracle', '#F80000');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#336791');
    static readonly MONGODB = new Tag('MongoDB', '#4DB33D');

    // Testing Tools
    static readonly INTUIT_KARATE = new Tag('Intuit Karate', '#00B0D8');
    static readonly PROTRACTOR = new Tag('Protractor', '#9D0216');
    static readonly JUNIT = new Tag('Junit', '#25A162');
    static readonly SOAPUI = new Tag('SoapUI', '#6CBCAD');
    static readonly POSTMAN = new Tag('Postman', '#FF6C37');
    static readonly CYPRESS = new Tag('Cypress', '#17202C');

    // Performance Testing Tools
    static readonly GATLING = new Tag('Gatling', '#F67A10');
    static readonly JMETER = new Tag('JMeter', '#FF6600');

    // DevOps
    static readonly JENKINS = new Tag('Jenkins', '#D24939');

    // Cloud
    static readonly AWS = new Tag('AWS (AWS Cloud Practitioner certified)', '#FF9900');

    // Containerized Management Software
    static readonly DOCKER = new Tag('Docker', '#2496ED');
    static readonly KUBERNETES = new Tag('Kubernetes', '#326CE5');

    // Source Control
    static readonly GIT = new Tag('GIT', '#F05032');
    static readonly SVN = new Tag('SVN', '#809CC9');

    // Team Collaboration Tools
    static readonly JIRA = new Tag('JIRA', '#0052CC');
    static readonly CONFLUENCE = new Tag('Confluence', '#172B4D');
    static readonly GERRIT = new Tag('Gerrit', '#E94E77');
    static readonly OPEN_ALM = new Tag('Open ALM', '#545454');

    // Concepts
    static readonly OBJECT_ORIENTED_PROGRAMMING = new Tag('Object oriented programming', '#F8981D');

    // Operating Systems
    static readonly LINUX = new Tag('Linux', '#FCC624');
    static readonly UNIX = new Tag('Unix', '#FFCC00');
    static readonly WINDOWS = new Tag('Windows', '#0078D6');

    // Additional Skills
    static readonly SPRING_BOOT = new Tag('Spring Boot', '#6DB33F');
    static readonly APACHE_KAFKA = new Tag('Apache Kafka', '#231F20');
    static readonly APACHE_AXIS_2 = new Tag('Apache Axis 2', '#ED9121');
    static readonly MAVEN = new Tag('Maven', '#C71A36');
    static readonly XML = new Tag('XML', '#FF6600');
    static readonly YAML = new Tag('YAML', '#4DB33D');
    static readonly JSON = new Tag('JSON', '#000000');
    static readonly TOMCAT = new Tag('Tomcat', '#EEB200');
    static readonly JBOSS = new Tag('JBoss', '#007396');

    static readonly LEADERSHIP = new Tag('Leadership', '#FFD700');
    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}