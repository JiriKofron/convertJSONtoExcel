const xlsx = require('xlsx');
const json = require('./new-signi-translations-management.json');

function convertJSONToExcel(jsonData) {
    const ws = xlsx.utils.json_to_sheet(jsonData);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "translations");
    xlsx.writeFile(wb, "translations.xlsx");
}

const header = Object.keys(json.default);
const headerRow = header.map(h => {
    let row = {};
    Object.keys(json.default[h]).forEach(k => {
        if (!json.default[h][k]) {
            return;
        }

        row[k] = json.default[h][k].toString();
    });
    return row;
});

convertJSONToExcel(headerRow);

console.log('Excel file created successfully.');