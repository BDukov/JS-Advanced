function fromJsonToHTML(dataAsJson){
    result.push(`<table>`);
    const result = [];
    let data = JSON.parse(dataAsJson);

    const props = Object.keys(data[0]);

    result.push(`</table>`);
    return result.join('\n');

}
fromJsonToHTML(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
)
fromJsonToHTML()