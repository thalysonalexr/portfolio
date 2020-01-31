/**
 * get a language browser pt-BR or en-US (default)
 * @return {string}
 */
export const getDocumentLanguage = () => (navigator.language || navigator.userLanguage) ? 'pt_BR' : 'en_US'
