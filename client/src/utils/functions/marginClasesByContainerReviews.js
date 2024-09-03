export const getMarginClasses = (index) => {
    const isFirstRow = Math.floor(index / 3) % 2 === 0;
    const marginRight = isFirstRow ? 'xl:mr-10' : 'xl:ml-10';
    const marginLeft = isFirstRow ? '' : 'xl:ml-4';
    return `${marginRight} ${marginLeft}`;
};
