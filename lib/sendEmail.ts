const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

export function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendNotificationEmail({
  to,
  replyTo,
  subject,
  html,
}: {
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
}): Promise<{ ok: true } | { ok: false; error: "not_configured" | "send_failed" }> {
  if (!RESEND_API_KEY) {
    return { ok: false, error: "not_configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `JHCO Website <${CONTACT_FROM_EMAIL}>`,
        to: [to],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("Resend API error:", res.status, errText);
      return { ok: false, error: "send_failed" };
    }

    return { ok: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { ok: false, error: "send_failed" };
  }
}
