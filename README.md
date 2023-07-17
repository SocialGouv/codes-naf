# @socialgouv/codes-naf

[![npm (scoped)](https://img.shields.io/npm/v/@socialgouv/codes-naf)](https://www.npmjs.com/package/@socialgouv/codes-naf)

Liste des [codes NAF](https://fr.wikipedia.org/wiki/Nomenclature_d%27activit%C3%A9s_fran%C3%A7aise) issue de [l'INSEE](https://www.insee.fr/fr/information/2120875)

## Usage

```ts
type CodeNaf = {
  id: string;
  label: string;
};
```

Le JSON brut de **tous** les codes est accessible avec :

```js
// CodeNaf[]
const codesNaf = require("@socialgouv/codes-naf/index.json");
````

Pour récupérer un code en particulier :

```js
const codesNaf = require("@socialgouv/codes-naf");

const naf = codesNaf.find(code => code.id === "10.51");

console.log(naf.label);

// Exploitation de laiteries et fabrication de fromage

```

