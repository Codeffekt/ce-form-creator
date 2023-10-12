import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CeCodeEditorConfig } from '@codeffekt/ce-code-editor';
import { firstValueFrom } from 'rxjs';

const ASSETS_SRC_PATH = '/assets/examples';

@Component({
  selector: 'app-layout-example-viewer',
  templateUrl: './layout-example-viewer.component.html',
  styleUrls: ['./layout-example-viewer.component.scss']
})
export class LayoutExampleViewerComponent implements OnInit {

  @Input() title!: string;
  @Input() src!: string;
  @Input() showTs = false;
  @Input() showCss = false;
  @Input() showHtml = false;

  viewSource = false;
  htmlCode: string = '';
  scssCode: string = '';
  tsCode: string = '';

  config: CeCodeEditorConfig = {
    readOnly: true,
    preserveContent: true
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadSources();
  }

  private async loadSources() {
    if (this.showHtml) {
      this.htmlCode = await this.fetchSource(`${ASSETS_SRC_PATH}/${this.src}.component.html`);
    }

    if (this.showTs) {
      this.tsCode = await this.fetchSource(`${ASSETS_SRC_PATH}/${this.src}.component.ts`);
    }

    if (this.showCss) {
      this.scssCode = await this.fetchSource(`${ASSETS_SRC_PATH}/${this.src}.component.scss`);
    }
  }

  private async fetchSource(url: string) {
    return await firstValueFrom(this.http.get(url, { responseType: 'text' }));
  }
}
