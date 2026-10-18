import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import FooterLinkItem from "@theme-original/Footer/LinkItem";
import type FooterLinkItemType from "@theme/Footer/LinkItem";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof FooterLinkItemType>;

/**
 * footer 的連結項目多認一個 `locale` 屬性（docusaurus.config.ts 的「語言」欄）：
 * 帶了就連到「同一頁的那個語言版本」，而不是設定裡寫的 `to`，切換語言後不會
 * 被丟回首頁。做法跟右上角的語言選單一樣（LocaleDropdownNavbarItem）：
 * `pathname://` 讓 Link 整頁重新載入，換語系一定要重載。
 */
export default function FooterLinkItemWrapper(props: Props): ReactNode {
  const { locale } = props.item as Props["item"] & { locale?: string };
  if (!locale) return <FooterLinkItem {...props} />;
  return <LocaleLink locale={locale} label={props.item.label ?? locale} />;
}

function LocaleLink({
  locale,
  label,
}: {
  locale: string;
  label: string;
}): ReactNode {
  const {
    i18n: { currentLocale, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const isCurrent = locale === currentLocale;
  return (
    <Link
      className={clsx(
        "footer__link-item",
        isCurrent && "footer__link-item--current",
      )}
      to={`pathname://${alternatePageUtils.createUrl({
        locale,
        fullyQualified: false,
      })}`}
      target="_self"
      autoAddBaseUrl={false}
      lang={localeConfigs[locale]?.htmlLang}
      aria-current={isCurrent ? "true" : undefined}
    >
      {label}
    </Link>
  );
}
