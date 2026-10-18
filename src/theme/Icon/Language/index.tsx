import type { ComponentProps, ReactNode } from "react";
import { Globe } from "lucide-react";

/**
 * Docusaurus 內建的語言圖示是「文A」翻譯符號；換成地球，大家一看就知道是
 * 切換語言。右上角的語言選單與 footer 的語言下拉選單都用這一個。
 */
export default function IconLanguage({
  width = 20,
  height = 20,
  ...props
}: ComponentProps<"svg">): ReactNode {
  return (
    <Globe
      width={width}
      height={height}
      strokeWidth={1.75}
      aria-hidden
      {...props}
    />
  );
}
