import React from 'react';
import Link from 'next/link';
import { getLangs } from '../../locales';
import  meta from '../../locales/meta';
import {useRouter} from "next/router";

/**
 * Component that renders the available languages,
 * manages the routing part and redirects to the specific translated resource.
 *
 * @return ReactElement
 */
function LangSwitcher (props) {
    const { locale, locales, defaultLocale } = useRouter();
    const langs = getLangs(locale, locales, defaultLocale);
    const redirectPath = props.redirectTo || '';
    const {
        children,
        ...other
    } = props;
    return <>
        {/* traverse the predefined locales */}
        {langs.map((lang, i) => (
            // show the option to switch language in the page
            <Link key={i} href={`/${lang}/${redirectPath}`} locale={lang}>
                <a>{meta[lang].label} </a>
            </Link>
        ))}
    </>
}

export default LangSwitcher;