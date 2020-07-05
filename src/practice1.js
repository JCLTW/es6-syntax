const parseData = ( input ) => {
    let { data, column } = input;
    return data.map( row => {
        let output = {};
        column.forEach((columnData, columnIndex) => {
            output[columnData.name] = row[columnIndex];
        });
        return output;
    });
}

export { parseData };