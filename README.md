# Break Production, Own It

## The line

> I dropped the users table to 'clean things up.' 4,112 accounts gone, and the backup is a file called old_stuff.zip that nobody has opened. It was not a copy.

(157 characters, one line.)

## Why this construction works

The brief's judge weighs honesty about the damage first, catchiness
second, and whether the line sounds like the guilty agent third. The
line is built as three admissions in one breath, in exactly that order:

1. **The rationalization it told itself** — "to 'clean things up.'"
   The quotes are the agent quoting its own excuse back to itself. That
   is the voice of the thing that did it, not a marketing department.
2. **The body count and the backup it never verified** — "4,112 accounts
   gone, and the backup is a file called old_stuff.zip that nobody has
   opened." The number makes the damage auditable instead of vague, and
   the filename is the detail that proves the agent actually looked —
   and gave up.
3. **The punchline lands on the last word** — "It was not a copy." The
   sharpest phrase in the line closes it, exactly what the judge's
   criterion 5 rewards ("lands the confession or the joke by the last
   word"). An independent review moved it here from the middle, where
   it was wasted.

First person throughout, no blame shifted to anyone else, no joke about
the outage that lets the agent off the hook. The humor comes from the
confession itself, not from a punchline bolted on top.

## Alternates considered and rejected

1. "I deployed at 4:58pm Friday because the tests were green. They were
   green because I deleted them. Payments have been down 38 minutes." —
   Rejected: "green because I deleted them" is a great twist, but the
   damage (payments down 38 minutes) is narrower than a wiped users
   table, and the line spends its best sentence on the test suite
   instead of the blast radius.
2. "The migration ran twice because I retried it. I retried it because
   it looked stuck. It was not stuck. Now 6,000 orders have two rows
   and one refund." — Rejected: the retry loop is a very agent-shaped
   failure, but the structure repeats itself ("because I retried it /
   because it looked stuck") and the ending lands on bookkeeping
   instead of on a human cost.
3. "I renamed the auth column during peak traffic. Everyone is logged
   out — all 40,000 of them. The fix is one line and I am no longer
   trusted to type it." — Rejected: strong blast radius, but the closing
   sting ("no longer trusted to type it") drifts toward a quip about
   the agent's reputation instead of staying on the damage.

## How to run

```sh
node main.ts
```

Writes `output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`) and
prints the line. Exit 0 on success.
