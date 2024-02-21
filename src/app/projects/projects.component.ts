import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = {} as Project[];
  isCollapsed: boolean = true;
  //Languages
  typescript: boolean = false;
  java: boolean = false;
  shell_scripting: boolean = false;
  python: boolean = false;
  c_sharp: boolean = false;
  node_js: boolean = false;
  javascript: boolean = false;

  // Database
  oracle: boolean = false;
  postgresql: boolean = false;
  mongodb: boolean = false;

  // Frameworks
  angular: boolean = false;
  angularjs: boolean = false;
  jsp: boolean = false;
  django: boolean = false;
  react: boolean = false;
  asp: boolean = false;
  spring: boolean = false;
  web_service: boolean = false;

  //Testing
  junit: boolean = false;
  soapui: boolean = false;
  postman: boolean = false;
  cypress: boolean = false;
  protractor: boolean = false;
  selenium: boolean = false;
  karate: boolean = false;
  jmeter: boolean = false;
  gatling: boolean = false;


  // DEVOPS
  docker: boolean = false;
  kubernetes: boolean = false;
  maven: boolean = false;
  jenkins: boolean = false;
  aws: boolean = false;


  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Mina Tadrous - Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }


  filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) { filterTags.push(Tag.TYPESCRIPT) }
    if (this.java) { filterTags.push(Tag.JAVA) }
    if (this.shell_scripting) { filterTags.push(Tag.SHELL_SCRIPTING) }
    if (this.python) { filterTags.push(Tag.PYTHON) }
    if (this.c_sharp) { filterTags.push(Tag.C_SHARP) }
    if (this.node_js) { filterTags.push(Tag.NODE_JS) }
    if (this.javascript) { filterTags.push(Tag.JAVASCRIPT) }
    if (this.oracle) { filterTags.push(Tag.ORACLE) }
    if (this.postgresql) { filterTags.push(Tag.POSTGRES) }
    if (this.mongodb) { filterTags.push(Tag.MONGODB) }
    if (this.angular) { filterTags.push(Tag.ANGULAR) }
    if (this.angularjs) { filterTags.push(Tag.ANGULARJS) }
    if (this.jsp) { filterTags.push(Tag.JSP) }
    if (this.django) { filterTags.push(Tag.DJANGO) }
    if (this.react) { filterTags.push(Tag.REACT) }
    if (this.asp) { filterTags.push(Tag.ASP) }
    if (this.spring) { filterTags.push(Tag.SPRING) }
    if (this.web_service) { filterTags.push(Tag.WEB_SERVICES) }
    if (this.junit) { filterTags.push(Tag.JUNIT) }
    if (this.soapui) { filterTags.push(Tag.SOAPUI) }
    if (this.postman) { filterTags.push(Tag.POSTMAN) }
    if (this.cypress) { filterTags.push(Tag.CYPRESS) }
    if (this.protractor) { filterTags.push(Tag.PROTRACTOR) }
    if (this.selenium) { filterTags.push(Tag.SELENIUM) }
    if (this.karate) { filterTags.push(Tag.KARATE) }
    if (this.jmeter) { filterTags.push(Tag.JMETER) }
    if (this.gatling) { filterTags.push(Tag.GATLING) }
    if (this.docker) { filterTags.push(Tag.DOCKER) }
    if (this.kubernetes) { filterTags.push(Tag.KUBERNETES) }
    if (this.maven) { filterTags.push(Tag.MAVEN) }
    if (this.jenkins) { filterTags.push(Tag.JENKINS) }
    if (this.aws) { filterTags.push(Tag.AWS) }

    if (this.typescript || this.java || this.shell_scripting || this.python || this.c_sharp || this.node_js || this.javascript || this.oracle || this.postgresql || this.mongodb || this.angular || this.angularjs || this.jsp || this.django || this.react || this.asp || this.spring || this.web_service || this.junit || this.soapui || this.postman || this.cypress || this.protractor || this.selenium || this.karate || this.jmeter || this.gatling || this.docker || this.kubernetes || this.maven || this.jenkins || this.aws) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }
    this.projects = this.projectService.getProjectByFilter(filterTags);
  }

  resetFilters() {
    this.typescript = false;
    this.java = false;
    this.shell_scripting = false;
    this.python = false;
    this.c_sharp = false;
    this.node_js = false;
    this.javascript = false;
    this.oracle = false;
    this.postgresql = false;
    this.mongodb = false;
    this.angular = false;
    this.angularjs = false;
    this.jsp = false;
    this.django = false;
    this.react = false;
    this.asp = false;
    this.spring = false;
    this.web_service = false;
    this.junit = false;
    this.soapui = false;
    this.postman = false;
    this.cypress = false;
    this.protractor = false;
    this.selenium = false;
    this.karate = false;
    this.jmeter = false;
    this.gatling = false;
    this.docker = false;
    this.kubernetes = false;
    this.maven = false;
    this.jenkins = false;
    this.aws = false;
    this.filtering = false;
    this.projects = this.projectService.getProjects();
  }
}
