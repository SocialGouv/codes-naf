const {default: fetch} = require("node-fetch");
const parse = require("csv-parse/lib/sync");

const NAF_CSV_URL =
  "https://www.data.gouv.fr/fr/datasets/r/c5eec925-3adc-411c-b4f9-6c33e6a87482";

/**
 * Try to require some JSON
 *
 *
 * @returns {Promise<CodesNaf>} 
 */
const downloadCSV = async () => {
  const csv = await fetch(NAF_CSV_URL).then((r) => r.text());
  return parse(csv, {
    columns: true,
    skip_empty_lines: true,
  }).map(( /** @type {CodeNafInput} */record) => ({
    id: record.Code,
    label: record.Libellé,
  }));
};

if (require.main === module) {
  downloadCSV().then(records => console.log(JSON.stringify(records, null, 2))).catch(console.error)
}


