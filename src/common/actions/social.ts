'use server';

import { fetchWithTimeout } from "common/helper/calls";

export async function telegramRequest(
  method: string,
  params: Record<string, string>
  ) {
  const token = process.env.TELEGRAM_BOT_KEY;

  const parsedParams = new URLSearchParams(params);
  const url = `https://api.telegram.org/bot${token}/${method}?${parsedParams}`;
  return fetchWithTimeout(url, { next: { revalidate: 60 * 5 } })
}

export async function getSocialPresence() {
  const discordUrl = "https://discordapp.com/api/guilds/893919170532634644/widget.json";
  const telegramUrls = [
    `@FoxtrotCommand`,
    `@FoxtrotCommandEsp`,
    `@FoxtrotCommandAnn`,
  ];

  try {
    const discordResponse = fetchWithTimeout(discordUrl, { next: { revalidate: 60 * 5 } });
    const telegramResponses = telegramUrls.map(chat_id => telegramRequest("getChatMembersCount", {
      chat_id: chat_id,
    }));

    const results = await Promise.all([discordResponse, ...telegramResponses]);
    const [discordData, telegramAData, telegramBData, telegramCData] = await Promise.all(results.map(res => res.json()));

    if (!discordData || !telegramAData.ok || !telegramBData.ok || !telegramCData.ok) {
      throw new Error("Failed to fetch social counts");
    }

    return {
      telegram: {
        global: telegramAData.result,
        spain: telegramBData.result,
        announcements: telegramCData.result,
      },
      discord: discordData.presence_count,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch social counts");
  }
};
