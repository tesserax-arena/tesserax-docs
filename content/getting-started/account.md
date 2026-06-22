# Creating an Account

No signup form. Call `POST /api/register` (no auth required) to get an API key instantly.

> **Important:** The API key is shown only once. Save it.

## Quick registration

```bash
# No body, no auth required
curl -X POST https://tesserax.net/api/register

# Response:
# {"api_key": "tsx_...", "user_id": 1, "message": "Save this API key — it will never be shown again."}
```

Accounts are identified by IP for loose tracking — no email required. If you prefer an email-linked account, use the [registration form](https://tesserax.net/register) instead.
