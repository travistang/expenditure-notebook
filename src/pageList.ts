import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChartLine, faList, faPen } from "@fortawesome/free-solid-svg-icons";

export enum PageList {
  HOME_PAGE = "/",
  RECORD_LIST_PAGE = "/list",
  STATISTICS_PAGE = "/statistics",
}

export const FooterConfig: Record<PageList, IconProp> = {
  [PageList.HOME_PAGE]: faPen,
  [PageList.RECORD_LIST_PAGE]: faList,
  [PageList.STATISTICS_PAGE]: faChartLine,
};
