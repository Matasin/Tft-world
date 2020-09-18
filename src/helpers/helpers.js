export const replaceInString = ( string ) => {
    return string.replace("'", '').replace(/ /g, '').replace('-', '').toLowerCase();
};
// .replace('TFT4_', '').replace('Set4_', '')