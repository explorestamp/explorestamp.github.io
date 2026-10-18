import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import IconLanguage from "@theme/Icon/Language";
import FooterLinkItem from "@theme-original/Footer/LinkItem";
import type FooterLinkItemType from "@theme/Footer/LinkItem";
import type { WrapperProps } from "@docusaurus/types";

import styles from "./styles.module.css";

type Props = WrapperProps<typeof FooterLinkItemType>;

/**
 * footer 的連結項目多認一個 `localeDropdown` 屬性（docusaurus.config.ts 的
 * 「語言」欄）：帶了就畫成語言下拉選單，而不是一般連結。參考 lifepicks 的
 * footer：按鈕顯示目前的語言，選單往上展開。
 */
export default function FooterLinkItemWrapper(props: Props): ReactNode {
  const { localeDropdown } = props.item as Props["item"] & {
    localeDropdown?: boolean;
  };
  if (!localeDropdown) return <FooterLinkItem {...props} />;
  return <FooterLocaleDropdown />;
}

/**
 * 每個選項連到「同一頁的那個語言版本」，算法跟右上角的語言選單
 * （LocaleDropdownNavbarItem）一樣；`pathname://` 讓 Link 整頁重新載入，
 * 換語系一定要重載。
 */
function FooterLocaleDropdown(): ReactNode {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 點選單外面或按 Esc 就收起來。
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.switcher} ref={ref}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-label={translate({
          id: "footer.localeDropdown.ariaLabel",
          message: "選擇語言",
        })}
        onClick={() => setOpen((v) => !v)}
      >
        <IconLanguage width={16} height={16} />
        {localeConfigs[currentLocale]?.label}
        <span className={styles.caret} aria-hidden />
      </button>
      {open && (
        <ul className={styles.menu}>
          {locales.map((locale) => (
            <li key={locale}>
              <Link
                className={clsx(
                  styles.option,
                  locale === currentLocale && styles.optionActive,
                )}
                to={`pathname://${alternatePageUtils.createUrl({
                  locale,
                  fullyQualified: false,
                })}`}
                target="_self"
                autoAddBaseUrl={false}
                lang={localeConfigs[locale]?.htmlLang}
                aria-current={locale === currentLocale ? "true" : undefined}
              >
                {localeConfigs[locale]?.label}
                {locale === currentLocale && <span aria-hidden>✓</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
