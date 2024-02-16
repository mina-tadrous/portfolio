import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperienceOpen=false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Mina Tadrous - Resume')
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Mina_Resume.pdf');
    link.setAttribute('download', 'Mina_Resume.pdf');
    link.click();
    link.remove();
  }

}
