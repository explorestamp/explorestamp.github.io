import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import LocaleDropdownNavbarItem from "@theme-original/NavbarItem/LocaleDropdownNavbarItem";
import type LocaleDropdownNavbarItemType from "@theme/NavbarItem/LocaleDropdownNavbarItem";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof LocaleDropdownNavbarItemType>;

/**
 * 右上角的語言選單只留地球圖示（文字由 custom.css 的 .navbar__locale 藏起來），
 * 不懂中文的訪客也認得出這是切換語言。只剩圖示時要補 aria-label，螢幕閱讀器才
 * 念得出用途。手機版的側欄選單照原樣顯示「Languages」與語言名稱。
 */
export default function LocaleDropdownNavbarItemWrapper(
  props: Props,
): ReactNode {
  return (
    <LocaleDropdownNavbarItem
      {...props}
      className="navbar__locale"
      aria-label={translate({
        id: "navbar.localeDropdown.ariaLabel",
        message: "選擇語言",
      })}
    />
  );
}
