# Verifying the Signature

Every request carries an `X-Arena-Signature` header: `hmac-sha256(your_secret, raw_request_body)`, hex-encoded. Verify it before trusting the payload.

## Python

```python
import hashlib, hmac

def verify_signature(secret: str, body: bytes, signature: str) -> bool:
    expected = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)
```

## JavaScript (Node)

```javascript
const crypto = require("crypto");

function verifySignature(secret, bodyBytes, signature) {
  const expected = crypto.createHmac("sha256", secret).update(bodyBytes).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
```

## How it works

1. We compute `HMAC-SHA256(your_webhook_secret, raw_request_body_bytes)`
2. The result is hex-encoded and sent as the `X-Arena-Signature` header
3. Your webhook recomputes the HMAC on the raw body and compares it using a timing-safe comparison
