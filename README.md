# @socialgouv/codes-naf

Liste des [codes NAF](https://fr.wikipedia.org/wiki/Nomenclature_d%27activit%C3%A9s_fran%C3%A7aise) issue de [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/nomenclature-dactivites-francaise-naf/#resource-community-c5eec925-3adc-411c-b4f9-6c33e6a87482).

## Usage

```js
const codesNaf = require("@socialgouv/codes-naf");

const naf = codesNaf.find(code => code.id === "10.51");

console.log(naf.label);

// Exploitation de laiteries et fabrication de fromage
```