const parseData = ( input ) => {
    return input.data.map( row => {
        let output = {};
        input.column.forEach((columnData, columnIndex) => {
            output[columnData.name] = row[columnIndex];
        });
        return output;
    });
}

export { parseData };