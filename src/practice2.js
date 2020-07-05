const desc = (sections) => {
    return sections.sort((a,b) => b.index - a.index);
}

const inject = (items, sections) => {
    let cloneItems = [...items];
    desc(sections).forEach( section => {
        cloneItems.splice( section.index, 0, section.content );
    });
    return cloneItems;
}
export { inject };