import { CommonModule } from '@angular/common';
import { Component, inject, Inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormQuery, FormQueryFieldLogic, FormRoot } from '@codeffekt/ce-core-data';
import { CeFormQueryEvt, CeFormQueryService, CeSearchboxModule, FormQueryBuilder, FormQueryLogicBuilder } from '@codeffekt/ce-core';
import { ReplaySubject } from 'rxjs';

export interface FiltersDialogConfig {
  root?: FormRoot;
  query?: FormQuery;
}

export interface FiltersDialogRes {
  query?: FormQueryFieldLogic;
}

@Injectable()
export class FilterFormQueryService {

  private model!: FormRoot;
  private filter: string = "";
  private queryBuilder!: FormQueryBuilder;
  private evt$: ReplaySubject<CeFormQueryEvt> = new ReplaySubject(1);
  private logicBuilder: FormQueryLogicBuilder = new FormQueryLogicBuilder();

  setModel(root: FormRoot) {
    this.model = root;
    this.logicBuilder.setModel(this.model);
    this.evt$.next({ type: "model" });
  }

  getModel() {
    return this.model;
  }

  setFilter(filter: string) {
    this.filter = filter;    
  }

  setQueryBuilder(qb: FormQueryBuilder) {
    this.queryBuilder = qb;
  }

  clearFilter() {    
  }

  setPaginationFirstPage() {
  }

  evt() {
    return this.evt$;
  }

  load() {
  }
}

@Component({
  selector: 'ce-filters-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    CeSearchboxModule,
  ],
  providers: [
    {
      provide: CeFormQueryService,
      useClass: FilterFormQueryService,
    }
  ],
  templateUrl: './filters-dialog.component.html',
  styleUrl: './filters-dialog.component.scss'
})
export class FiltersDialogComponent {

  public initialFilter: string = "";
  
  public filterModified = false;

  public query?: FormQueryFieldLogic;

  private logicBuilder = new FormQueryLogicBuilder();

  private formQueryService = inject(CeFormQueryService);

  static open(dialog: MatDialog, config: FiltersDialogConfig): MatDialogRef<FiltersDialogComponent, FiltersDialogRes> {
    return dialog.open(FiltersDialogComponent, { data: config });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public config: FiltersDialogConfig,
    private dialogRef: MatDialogRef<FiltersDialogComponent, FiltersDialogRes>,
  ) {
    this.initQueryService();
  }

  onFilterChange(filter: string) {
    this.filterModified = true;    
    this.query = this.logicBuilder.fromFilter(filter);    
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close({ query: this.query });
  }

  private initQueryService() {    
    if (this.config.query?.queryFields) {
      const filter = this.logicBuilder.toFilter(this.config.query.queryFields);
      this.formQueryService.setFilter(filter);
      this.initialFilter = filter;      
    }
    if (this.config.root) {
      this.formQueryService.setModel(this.config.root);
      this.logicBuilder.setModel(this.config.root);
    }
  }

}
