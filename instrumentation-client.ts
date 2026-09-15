import { initBotId } from "botid/client/core";

// お問い合わせフォーム（TOPページ「/」の Server Action）を bot 判定の対象にする。
initBotId({
  protect: [
    {
      path: "/",
      method: "POST",
    },
  ],
});
