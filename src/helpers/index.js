/**
 * get a language browser pt-BR or en-US (default)
 * @return {string}
 */
export const getDocumentLanguage = () => {
  let language = navigator.language || navigator.userLanguage
  return language === 'pt-BR' ? language : 'en-US'
}
