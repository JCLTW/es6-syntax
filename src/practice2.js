Array.prototype.insert = function( index, content ) {
    this.splice( index, 0, content );
};

const desc = (sections) => {
    return sections.sort((a,b) => b.index - a.index);
}

const inject = (items, sections) => {
    let cloneItems = [...items];
    desc(sections).forEach( section => {
        cloneItems.insert( section.index, section.content );
    });
    return cloneItems;
}
export { inject };