const attachments = [
  {
    pretext: "Notification test from GitHub Actions",
    title: "From GitHub Actions",
    text: "Hello World",
    color: "#6ff",
  },
];

const data = {
  username: "GitHub Actions Cron",
  icon_emoji: ":cat:",
  attachments,
};

const options = {
  "method": "POST",
  "headers": [["Content-Type", "application/json"]],
  "body": JSON.stringify(data),
};

const webhookUrl = Deno.env.get("SLACK_INCOMING_WEBHOOK_URL");

try {
  await fetch(webhookUrl, options);
} catch (err) {
  console.log("ERROR!!");
}
