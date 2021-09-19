import texts from './texts';

/**
 * Translate texts.
 *
 * @param {object} key text to be translated
 * @return string text translated to the selected language
 */
function getText(locale, key) {
    return texts[locale][key] ? texts[locale][key] : texts['en'][key];
}

/**
 * Find other available languages on the website.
 *
 * @return [languages] available on your websites, extracting the one being currently used
 */
function getLangs(locale, locales, defaultLocale) {
    // Returning all available languages, except the current
    return locales.filter((lang) => lang !== locale);
}

export { getText, getLangs }