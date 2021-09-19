import LangSwitcher from '../../components/lang-switcher';
import { getText } from '../../locales';
import { useRouter } from 'next/router';

export default function IndexPage() {
    const { locale } = useRouter();
    const textTitle = getText(locale, 'title');
    const destPage = 'about';
    return (
        <>
            <h1>{textTitle}</h1>
            <LangSwitcher redirectTo={`${destPage}`} />
        </>
    )
}
