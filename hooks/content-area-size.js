import useWindowSize from "./window-size";
import useDocumentFontSize from "./document-font-size";

export default function useContentAreaSize(theme) {
  const matches = theme.headerHeight.match(/(\d+)\s*rem/);
  if (!matches) {
    throw new Error(`Unsupported value for headerHeight in theme config: ${theme.headerHeight}`);
  }
  const headerHeightRem = parseInt(matches[1], 10);

  const windowSize = useWindowSize();
  const documentFontSize = useDocumentFontSize();

  return {
    width: windowSize.width,
    height: windowSize.height - (headerHeightRem * documentFontSize),
  }
}