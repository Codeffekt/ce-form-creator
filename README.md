# CeFormCreator

Librairie Angular pour l'édition des formulaires Codeffekt

## Installation

```console
npm i @codeffekt/ce-form-creator
```


## Compilation

```console
npm run build:lib
```

## Publication

```console
npm run publish:lib
```

## Intégration 

Dans le fichier app.module.ts ajouter l'initialisation des modules Ngxs

```typescript
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  imports: [
    ...
     NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
})
export class AppModule { }
```
Dans la version 4.0 de Ngxs les options *suppressErrors* et *injectContainerState* seront à *faux*, voici la [documentation](https://www.ngxs.io/advanced/options) 

Dans le module souhaitant utiliser l'éditeur 

```typescript
import { CeFormCreatorModule } from '@codeffekt/ce-form-creator';

@NgModule({
  imports: [
    ...
    CeFormCreatorModule
  ],
})
export class AppModule { }
```

## Tests

TBD

## Links

[NGXS - Power of selectors](https://www.youtube.com/watch?v=y3F99IsnNvI) : Vidéo intéressante concernant les selectors de Ngxs
