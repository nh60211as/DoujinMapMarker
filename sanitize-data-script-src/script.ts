import { GroupData } from '../src/types/GroupData';
import URLCleaner from '@backrunner/url-cleaner';

export interface GroupDataWithSanitizationResult {
  groupId: string;
  groupName: string;
  groupLink: string | null;
  menuLink: string | null;
  sanitizedGroupLink: string | null;
  sanitizedMenuLink: string | null;
}

export async function getUnsanitizedGroupDataList(
  groupDataList: Array<GroupData>,
): Promise<Array<GroupDataWithSanitizationResult>> {
  const cleaner = getUrlCleaner();

  const result: Array<GroupDataWithSanitizationResult> = [];

  for (let index = 0; index < groupDataList.length; index++) {
    const groupData = groupDataList[index];
    const groupDataWithSanitizationResult: GroupDataWithSanitizationResult = {
      groupId: groupData.groupId,
      groupName: groupData.groupName,
      groupLink: null,
      menuLink: null,
      sanitizedGroupLink: null,
      sanitizedMenuLink: null,
    };

    if (groupData.groupLink !== null) {
      const groupLinkResult = await cleaner.cleanURLWithResult(
        groupData.groupLink,
      );

      if (groupLinkResult.modified) {
        groupDataWithSanitizationResult.groupLink = groupLinkResult.originalUrl;
        groupDataWithSanitizationResult.sanitizedGroupLink =
          groupLinkResult.url;
      }
    }

    if (groupData.menuLink !== null) {
      const menuLinkResult = await cleaner.cleanURLWithResult(
        groupData.menuLink,
      );

      if (menuLinkResult.modified) {
        groupDataWithSanitizationResult.menuLink = menuLinkResult.originalUrl;
        groupDataWithSanitizationResult.sanitizedMenuLink = menuLinkResult.url;
      }
    }

    if (
      groupDataWithSanitizationResult.sanitizedGroupLink !== null ||
      groupDataWithSanitizationResult.sanitizedMenuLink !== null
    ) {
      result.push(groupDataWithSanitizationResult);
    }
  }

  await disposeUrlCleaner(cleaner);

  return result;
}

function getUrlCleaner(): URLCleaner {
  return new URLCleaner({
    handleRedirects: true, // Enable automatic redirection for known URL shorteners
    redirectTimeout: 3000, // Optional: Set timeout for redirect requests (default: 5000ms)
    useDefaultLists: true, // Use built-in filter lists
    filterLists: [
      {
        name: 'additional-tracking-params',
        raw: `
      # Facebook related
      *$removeparam=rdid

      # Instagram relate
      *$removeparam=igshid
    `,
      },
    ],
  });
}

async function disposeUrlCleaner(cleaner: URLCleaner) {
  await cleaner.dispose();
}
