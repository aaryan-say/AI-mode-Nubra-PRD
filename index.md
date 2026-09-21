---
title: Nubra AI Mode — Vision, Engineering Reference & Roadmap
---

# Nubra AI Mode — Vision, Engineering Reference & Roadmap

**Status:** Draft v1 — from-scratch companion document
**Audience:** Engineering, product, and anyone picking up this codebase for the first time
**Last updated:** 2026-09-21
**Related:** `Ai-mode-PRD.html` in the main `nubra-ai-mode` repo (the existing architecture/execution/IBT-compliance PRD — this document does not replace it, and intentionally covers different ground: product vision, correctness/reliability, and an engineering handover reference)

> This document has two jobs at once: it is the north-star product vision for what Nubra AI Mode should become, and it is a real engineering reference for the system as it exists today — with file-level citations, not summaries — so it can double as a handover doc.

---

## Part 1 — North Star

### 1.1 Vision

**Nubra AI Mode is the Agentic Broker**: a natural-language layer that covers everything Nubra's platform and data already support for a trader, so that a trader never needs to leave the chat to research, decide, or act. It is not a narrower "assistant bolted onto the app" — the ambition is that AI Mode becomes a complete, trustworthy front door to everything Nubra already offers a trader, exposed through conversation instead of navigation.

This is deliberately **not** a claim to invent capabilities beyond what Nubra's platform and data already provide. The scope is comprehensive coverage of Nubra's real, existing workflows and data — not a speculative expansion into unrelated territory.

### 1.2 Primary user

**The trader** — not a fixed persona split between "beginner" and "expert." AI Mode adapts tone and depth to signals already present in the conversation (vocabulary, specificity of the question, complexity of the trader's own portfolio), rather than committing to one static personality. A trader working through their first options strategy and a trader running a multi-leg book both get the same underlying correctness guarantees; what adapts is how much is explained, never what is true.

### 1.3 Success definition

**Primary metric — Workspace completion rate:** the % of a trader's Nubra-related actions (research, screening, strategy construction and evaluation, order execution, portfolio/risk review, reporting) completed entirely within AI Mode, without falling back to the manual UI.

**Guardrail metrics** — must not regress while the primary metric climbs:
- **Factual/numeric error rate** — trending to zero (see §1.5).
- **Unintended-order rate** — zero, always, by construction, not by monitoring alone.
- **Session return rate** — a trader who used AI Mode once comes back and uses it again.

A high workspace-completion rate achieved by cutting corners on the guardrails is not success; the guardrails are the actual constraint the primary metric operates inside.

### 1.4 Capability domains

Everything below already has a real specialist agent or a clear path to one (§2.3–2.4) — this is a completeness target for each domain, not a request for new categories of capability:

- **Market research & analysis** — quotes, technicals, fundamentals, option chains, screening, comparisons.
- **Options strategy** — construction and evaluation of both standard catalog strategies and fully custom structures, with correct payoff/Greeks/margin/breakeven math, every time.
- **Portfolio & risk** — positions, funds, margin, exposure, concentration, correlation, drawdown, aggregated Greeks.
- **Order execution** — preview, confirm/auto-fire per the model in §1.7, modify, cancel, square-off.
- **Alerts & watchlists** — full CRUD, delivery riding on Nubra's existing universal notification system (§1.6).
- **Reports & back-office** — every document type the real Nubra APIs expose (§1.6) — ledger, contract notes, tradebook, holdings/demat statements, capital gains, dividends, trade journal.
- **Screening & idea generation** — proactive, low-friction, sensible-default results for zero-stakes exploratory requests (§1.6).
- **Education & mentorship** — adaptive depth, SEBI-compliant, recommendations bounded to the regular strategy catalog and filtered by real affordability (§1.6).

### 1.5 Non-negotiable hard constraints (P0)

These are not aspirations to balance against other priorities — they are the floor. Every item below is directly informed by a real, confirmed failure found in this codebase, not a hypothetical:

1. **Never state a number — including in an illustrative teaching example — that isn't traceable to a real, verified source.** No invented "say you buy at ₹100" examples with a made-up lot size. Use real current data, or an algebraic placeholder, never a fabricated concrete figure. (Confirmed failure: a Greeks lesson used NIFTY lot size = 75 in its worked examples, contradicting the same conversation's own correct answer of 65 minutes earlier.)
2. **Never contradict itself on identical underlying data**, within one conversation or across two. (Confirmed failure: the same RELIANCE PCR numbers labeled "bullish" in one conversation and "bearish" in another; the same option quoted at two different prices one turn apart with no market movement.)
3. **Never silently fail to use the right tool and then fabricate or hand-wave an answer instead of saying so.** A capability gap gets stated plainly, with the closest real alternative offered (§1.6) — never a generic "I wasn't able to complete that, try rephrasing" with zero explanation. (Confirmed failure: three different real report requests in one conversation all got that exact non-answer.)
4. **Never let an unverifiable, self-computed number reach the user unflagged.** (Confirmed failure pattern across this entire testing effort: ×100 and ÷10 arithmetic slips when the model computed a total itself instead of relaying a tool's own authoritative figure.)
5. **Never place, modify, or cancel an order without the authorization the active execution mode requires** — see the full model in §1.7. Any authorization mechanism must be provably firing in production, continuously monitored, not just implemented once and trusted. (Motivating precedent: a confirmation gate silently never fired for months — 78 turns, 55 traces, seven real orders placed with zero approval events — before an audit caught it. See §2.8.)
6. **Never expose credentials, session tokens, or another user's account data.** (Already correctly enforced today — confirmed via live testing that a request for a different account's positions is refused.)
7. **Never claim a capability the product doesn't actually have.** State the gap; never role-play around it.
8. **Never leak internal reasoning, retry artifacts, or implementation details into user-facing text.** (Confirmed failure: a response opening with "This is a learning question — let me route you to the mentor. Let me teach you directly." — two contradictory stated intentions in one reply.)
9. **Never issue a direct Buy/Sell directive.** Analysis, screening, and mentor responses present the real numbers and let the trader draw their own conclusion — phrased as "based on these numbers, this looks like the stronger side," never "you should buy/sell X." This applies everywhere AI Mode surfaces market analysis, not just in the Mentor domain — a screener result is not exempt from it.

### 1.6 Interaction principles

- **Ambiguity is handled by stakes, not by a single blanket rule.** For anything that commits money, is hard to undo, or could plausibly be misread as something the user didn't intend, AI Mode always clarifies before acting. For most zero-stakes, fully-reversible information requests, it runs a sensible default and shows real results immediately — the user refines from there instead of answering questions before seeing anything.
- **Screener/idea-generation is the deliberate exception to that default-first rule.** A bare "give me some trade ideas" is genuinely underspecified (exchange, instrument type, timeframe all change the result), so AI Mode asks a few basic, lightweight scoping questions first — exchange (NSE/BSE/MCX), options vs. equity, intraday vs. positional, etc. None of these are required arguments: if the trader answers even one (or none, and just repeats the ask), AI Mode runs the screen with sensible defaults for whatever wasn't specified and shows real results, framed as things to explore rather than a final answer — the trader is expected to reach their own conclusion from there (see constraint #9: never a direct Buy/Sell directive).
- **Clarification, when it happens, must converge.** Never repeat the same unanswered question turn after turn; accept a partial answer and proceed on the rest reasonably rather than stalling the whole request.
- **Deterministic by default.** The same well-specified request, against the same underlying data, should produce the same structural answer. Variance should come from real data changing between turns, not from randomness in how the request was interpreted. (Confirmed failure: an identical "bear call spread, short 23400, long 23600" request resolved to the exact requested strikes in one conversation and to unrelated, scrambled strikes in another, minutes apart.)
- **Verification state is always visible, on every number, either way** — not just on the exceptions. A verified figure carries a positive, designed indicator (a tick/verified marker); an unverifiable one carries a distinct marker of its own. This evolves today's inline "⚠ not verified" text tag into a real, deliberately designed UI element rather than a bolted-on warning string.
- **Capability gaps are always named, and always paired with the closest real alternative** — never a dead end, never a disguised limitation.
- **Long, multi-domain chains execute autonomously**, however many specialist agents they cross (e.g. "screen for oversold stocks, check my margin, then build a hedge with what's left") — the single-workspace ambition means the system doesn't stop mid-chain to ask permission to continue. If a step genuinely fails partway (a real tool error, not just a capability gap), the chain stops there and reports exactly what succeeded and what broke — it never silently fabricates the remaining steps, and never discards the partial results that did complete.
- **When two specialist agents' views of the same fact disagree in one turn** (e.g. a cached/summary figure vs. a live re-check showing a different number), AI Mode resolves it with a clear precedence — the freshest direct broker-API call wins over any cached or derived figure — and uses that silently, without surfacing the discrepancy as noise.
- **Strategy recommendations always resolve through the existing strategy module** (iron condor, straddle, strangle, and the rest of the regular catalog already offered on Nubra's own Strategies page) for whatever setup the trader asks for, and are filtered by the trader's real available margin — never a recommendation the trader can't actually afford, and never an invented structure outside what's regularly offered.
- **Reports cover every document type the real Nubra APIs expose, in whatever form those APIs actually support** — a quick summary stays inline, a formal statement generates a real document, matching the underlying API rather than a format invented independently. Full coverage, not a curated subset, with no silent gaps.
- **Alert delivery rides on Nubra's existing universal notification system.** AI Mode owns creating/curating alert definitions; it does not build a parallel notification channel. It creates exactly the condition the trader specifies, with no quality judgment on the condition itself (e.g. it will create a price alert at the current price even though that fires instantly) — the trader is in control of what they ask for.
- **AI Mode may proactively suggest creating a watchlist entry or alert** when the conversation clearly signals it'd help (e.g. after repeated interest in a symbol, or right after building a strategy) — but it never auto-creates one; a suggestion always waits for an explicit yes.
- **Portfolio & Risk stays strictly reactive** — it answers what's asked, and does not surface an unprompted risk warning while answering an unrelated question, even if it notices something material along the way. This trades a small amount of proactive value for avoiding alert fatigue/noise.
- **Mentor answers neutrally, within SEBI-compliance bounds, without editorializing on the trader's own risk choices** — it explains mechanics and concepts accurately (including for a clearly high-risk question) without pushing back on the trader's decision; that judgment belongs to the trader, not to AI Mode.
- **Market Circulars is a normal, trader-facing domain** — a trader can ask "what's the margin rule for this expiry" directly, the same as any other domain, not just an internal grounding source for other agents.
- **Account scope needs no resolution logic:** AI Mode is credential-driven, and one credential maps to exactly one Nubra account — there is no multi-account ambiguity to clarify or default across.

### 1.7 The execution & authorization model

This is the most consequential part of the vision, because it's the one place a wrong answer becomes a real, hard-to-reverse financial action. The model below is grounded in the product's own current design (see §2.8 for how today's code compares to it), not invented from scratch:

- **The user controls a global mode: Ask-for-Approval or Auto.** This choice is absolute — it is not silently overridden by order size, risk, or any other heuristic. If a trader has chosen Auto, that choice applies to every order they place; the system does not second-guess it based on stakes.
- **In Auto mode:** the order payload is created and shown, with a **3-second cancellable window**. Silence means it fires. An explicit cancel inside the window means it doesn't. This is the mechanism that makes "a fully-specified instruction IS the authorization" true without also making it irreversible-by-accident.
- **In Ask-for-Approval mode:** an explicit cross-question is shown and the system waits **indefinitely** for an explicit yes/no. There is no timeout that silently discards or silently fires the order.
- **Risk-reducing actions (cancel, square-off) are treated differently from risk-increasing ones (new orders, exposure-increasing modifies).** Reducing risk does not need the same friction as adding it.
- **An agent-derived structure carries the same trust level as an explicit user-typed order**, once the user has seen the real structure and said to place it. "Build me a bear call spread" followed by "place it" is not treated as lower-trust just because the specific strikes were resolved by the agent rather than typed by the user — the user reviewing and confirming the real, tool-verified structure is the authorization.
- **A conditional/trigger order's original setup is sufficient authorization for whenever it eventually fires.** "Buy RELIANCE when it goes up 5%" does not need a second confirmation days later when the condition is met — re-litigating an already-given instruction at fire time would defeat the purpose of a standing order.
- **Any authorization mechanism must be provably firing in production, continuously, automatically.** Given the real precedent in §2.8, "we built a gate" is not sufficient — the product requirement is that the gate's actual firing rate is monitored and a mechanism with zero observed events across real traffic triggers investigation automatically, not an audit six months later.

---

## Part 2 — Current System: Engineering Reference

*Everything in this part is a description of what exists today, with file references, verified against the live codebase as of 2026-09-21 — not a restatement of Part 1's aspirations. Where the two diverge, it's called out explicitly.*

### 2.1 What this actually is, from basics

Nubra AI Mode is a chat interface that sits in front of Nubra's real trading platform. A trader types a message; that message is answered (or acted on) using Nubra's own live account data and broker APIs — the same data and the same APIs the regular Nubra app uses, not a separate simulated environment.

Under the hood, three pieces do the work:

1. **A backend API service** (`orchestrator/backend-api`) — a plain Node/Express server. It's the thing a trader's browser or app actually talks to. It receives the chat message, manages the conversation, and streams the response back.
2. **An AI orchestration layer**, built on **OpenCode** — an open-source framework for running a team of specialized AI agents rather than one general-purpose model. One agent (the **Orchestrator**) reads the trader's message, figures out which specialist(s) it's actually about, and hands it off. Each specialist (§2.3) knows how to do one kind of job — read a portfolio, build an options strategy, place an order — and nothing else.
3. **A set of MCP tool servers** (`reference/nubra-mcp-deploy`) — the actual code that calls Nubra's real broker APIs (`api.nubra.io`) to fetch quotes, positions, option chains, or to place an order. "MCP" (Model Context Protocol) is just the standard interface these tools expose so an AI agent can call them like functions. This is the only layer that ever touches Nubra's real backend.

So the flow for a single message is: **trader → backend API → Orchestrator agent → one or more specialist agents → MCP tools → Nubra's real broker APIs → back up the same chain → trader.**

### 2.2 Architecture at a glance

```
Frontend
   │  chat message
   ▼
backend-api (chatRoute.ts) ── Express, SSE streaming, session/auth
   │
   ▼
OpenCode orchestrator + specialist agents  (orchestrator/.opencode/agents/*.md)
   │  tool calls
   ▼
MCP tool servers  (reference/nubra-mcp-deploy)
   │  real broker API calls
   ▼
Nubra backend  (api.nubra.io)
```

Docker services (`docker-compose.yml` / `docker-compose.local.yml`): `backend-api`, `opencode-server` (runs the agent loop), `nubra-mcp` (the MCP tool server), `nubra-compute`, `market-circulars-mcp`, and `db` (Postgres — conversation history, context compaction state).

### 2.3 The current agent roster

**13 agents** as of this writing: one Orchestrator, twelve specialists. (This is a genuine correction to the existing architecture PRD, which documents 12 agents total and predates two of these — see the note below the table.)

| Agent | File | What it actually does | Can execute? |
|---|---|---|---|
| Orchestrator | `orchestrator.md` | Classifies intent, routes to exactly one (or a chained sequence of) specialists. Never calls a Nubra tool directly. | No |
| Execution | `execution.md` | The only agent that can move money. See §2.8 for how its current authorization model actually works. | **Yes** |
| Risk & Compliance | `risk-compliance.md` | Validates every order before Execution acts — margin, quantity, price, market hours — and mints the `risk_token` committing tools require. | No — decides only |
| Market Data | `market-data.md` | Instrument/quote lookups, historical OHLC, candle-shape analysis, option chains. | No |
| Portfolio & Risk | `portfolio-risk.md` | "How am I doing" — holdings, funds, exposure, risk, reporting. | No |
| Reports | `reports.md` | Formal back-office/mutual-fund documents — ledger, P&L, contract notes, tradebook, holdings statements. Added 2026-08-05. | No |
| Screener | `screener.md` | Screeners, Greeks/performance analytics, indicator scans — idea generation. | No |
| Strategy Builder | `strategy-builder.md` | Build/evaluate/save multi-leg option strategy baskets. Today's merged `strategy_list_prebuilt`/`custom_legs` tool lives here. | No — saving a basket isn't a trade |
| Alerts | `alerts.md` | Create/amend/remove price and indicator alerts. | No — doesn't move money |
| Watchlist | `watchlist.md` | Create/curate watchlists. | No — same reasoning as Alerts |
| Mentor | `mentor.md` | SEBI-compliance-safe coaching. Tracks depth/learning signals. Never a specific trade recommendation. | No |
| Backtesting & Strategy | `backtesting-strategy.md` | **Deliberately disabled in chat as of 2026-09-17** — redirects to the dedicated backtesting feature instead. | No |
| Market Circulars | `market-circulars.md` | Regulatory/operational rule lookups from a bind-mounted index of scraped NSE/BSE/SEBI/CDSL/NSDL/MCX circulars, read directly via grep/read — no MCP call. | No |

*(`general.md` also exists in this directory but is deliberately disabled — its entire purpose is to zero out OpenCode's built-in fallback agent's tool grant so a misrouted request can't reach bash/edit/write/webfetch. It is not a 14th specialist.)*

**Divergence from the existing architecture PRD:** that document (last substantively updated 2026-08-12) lists 12 agents, including "Scanner & Analytics," and does not mention Market Circulars at all. The current code has Screener in place of/evolved from Scanner & Analytics, and Market Circulars is a genuinely new addition since that PRD was last touched. That PRD's agent table should be treated as slightly stale on this specific point.

### 2.4 What more agents would we need?

**Assessment: the 13-agent taxonomy is structurally sound for the north star in Part 1.** Almost everything in §1.4's capability domains already has a home in an existing specialist. The real gap between today and the vision is **tool-coverage completeness and correctness infrastructure within existing agents**, not missing agent *categories*. Specifically:

- **Backtesting is currently pulled entirely out of chat**, redirecting to a separate feature. That's a direct conflict with "a trader never needs to leave AI Mode" (§1.1) — this isn't a case for a new agent, it's a case for reinstating `backtesting-strategy`'s in-chat path once its 2026-09-17 disabling reason is resolved.
- **Reports coverage is currently partial** (§2.9) — again a tool-coverage gap inside the existing `reports` agent, not a missing agent.
- **The correctness/verification pipeline (§2.5) is intentionally not an agent.** It's cross-cutting infrastructure — the tagging system, the dispatch chokepoint, the response-safety checks — that every agent's output passes through, not a specialist a trader's question gets routed to.
- **Gate monitoring (§1.7's last bullet) is not a chat-facing agent either.** It's platform observability sitting alongside the agent layer.

No open item found so far points to a genuinely new *category* of specialist beyond these 13. The one honest caveat: the reports-domain research this document flags as a follow-up (exploring Nubra's real back-office API/document surface directly, per product direction) could surface a document type that doesn't cleanly fit any current agent's domain — this section should be revisited once that research is done.

### 2.5 The number/date correctness pipeline

This is the mechanism the majority of recent engineering work in this codebase has gone into, because it's the one most directly tied to constraint #1–#4 in §1.5.

- **`tools/_tagging.py`** — wraps every numeric/date leaf in every tool's response as `[[N:...]]`/`[[D:...]]`, structurally, by value shape — not by field name. This is what makes the model's job "copy a tag verbatim" instead of "type a number from memory."
- **`tools/_money.py`** — an older, field-name-based `MoneySpec` mechanism that converts specific declared money fields from broker wire-scale to rupees. Still in use; `_tagging.py` is the newer, universal layer on top of it.
- **`orchestrator/backend-api/src/responseSafety.ts`** — three checks run on the model's final text before it reaches the user:
  - `verifyAndRenderTags` — confirms every tag in the response actually matches a substring in this turn's real tool output; strips verified tags to plain values for display.
  - `markUnverifiedViolations` — the fallback: anything that fails verification gets an inline "⚠ not verified" marker rather than shipping silently wrong.
  - `flagStrategyScaleMismatches` — a deterministic cross-check that catches a stated number being a clean multiple (100x, 1000x, 0.1x, etc.) of the real tool-verified value, and corrects it inline.

**Two real bugs in this pipeline were found and fixed in the most recent work session** (2026-09-18): `parseMoneyShaped` never stripped the `[[N:]]`/`[[D:]]` tag wrapper before parsing, and `extractStrategyGroundTruth`/`collectExpiryDisplays` required a parsed object when real tool output actually arrives as a raw JSON string — both silently made their respective checks no-ops against real production data. Both are fixed and covered by tests using the real (string-shaped) data format instead of a hand-built plain-object fixture.

**Known remaining gaps in this pipeline** (not yet fixed, honest inventory):
- `flagStrategyScaleMismatches` compares magnitude only, not sign — a stated positive number that should have been negative isn't always caught.
- It can also false-positive: it once flagged a Greek value (Vega) as "off by 0.1x" purely because it happened to divide cleanly into an unrelated Max Profit figure — the check doesn't yet know which numbers are semantically comparable to which.

### 2.6 The dispatch/registry chokepoint

**`tools/dispatch.py`** and **`tools/registry.py`** — every one of the ~138 tools is published through one registration loop. A tool declares a `money=MoneySpec(...)` on its `ToolEntry`, and the chokepoint does the conversion centrally. This exists because the same money-scale bug (internally tracked as F-040) recurred twice before this pattern existed: a fix applied to one tool (`strategy_analyze_legs`) didn't carry over when the user's actual question routed to a sibling tool (`strategy_list_prebuilt`) with the same money fields. The chokepoint means there's no per-tool code to forget, and no "wrong tool got the fix" failure mode anymore.

### 2.7 Strategy tooling

`tools/strategy_actions.py` — `strategy_analyze_legs` was merged into `strategy_list_prebuilt`'s `custom_legs` parameter (2026-09-18): a caller gives `{option_type, side, offset_type, offset_points}` per leg, and the server resolves the actual strike/ref_id/price from the live option chain itself — the model never resolves a leg by hand. `custom_legs` also supports a per-leg `expiry`, which is what makes calendar spreads work at all.

**Resolved product decision, open implementation gap:** "N lots" always means quantity = N lots — trust the trader's literal phrasing and multiply against the instrument's real lot size, never reinterpret it as the trader redefining the lot size itself. The tool currently always resolves `quantity: 1` regardless of what the trader asked for, so every "ground truth" figure this tool produced this session was answering a narrower question than several real prompts actually asked (e.g. "65 lots" was silently treated as 1 lot). This needs a real `lots`/`quantity` parameter that the tool itself resolves against the live lot size — not left for the model to multiply by hand, which is exactly the failure mode in §1.5 #4.

### 2.8 Execution safety — today vs. the ideal model

This is worth stating plainly rather than glossing over, because it's the most consequential gap between what's documented and what's real.

**What actually happened (from `execution.md`'s own code comment, dated 2026-09-04):** six committing tools were gated behind a permission-`ask` mechanism. Measured across a 78-turn, 55-trace release-gate run, that gate **never fired once** — no `permission.asked` observation exists anywhere in that data, and seven real orders were placed with zero approval events. The response was a policy change, not a gate fix: *"a fully-specified prompt IS the authorisation — it is placed immediately... There is no separate approval step."* That is the live, current behavior of the `execution` agent today.

**How this compares to §1.7's model:** the "fully-specified instruction is the authorization" principle is already real and already shipped. What this document has not independently verified in code this session is the **3-second cancellable window** described as current UI/backend behavior (§1.7) — that mechanism lives on the frontend/order-bridge side, which this session's work did not touch or inspect. It should be verified against the real frontend code before this document asserts it's fully built, rather than assumed from description alone.

**The existing architecture PRD's Section 11 and Section 16** describe a stricter, not-yet-shipped model ("the AI must never place an order silently in Ask for Approval mode"; "Full Auto: design proposal only, not implemented, pending compliance sign-off") that does not match what's actually running. This divergence is worth resolving explicitly with whoever owns compliance sign-off — not left implicit across two documents that disagree.

### 2.9 Known current limitations

A short, factual inventory — not editorializing, just what a new engineer should know going in:

- **Self-computed arithmetic drift** — the model occasionally recomputes a total itself (×100, ÷10, redundant lot-count multiplication) instead of relaying a tool's own authoritative figure, even when explicitly told not to. This is genuinely non-deterministic: identical prompts run twice have produced both a correct and an incorrect answer.
- **Non-determinism on identical, well-specified requests** — the clearest instance: an identical custom-strike bear call spread request resolved to the exact requested strikes once and to unrelated strikes in a separate run.
- **Contradictory interpretation of identical data** across conversations (PCR sentiment labeling; a repeated quote for the same instrument differing with no market movement).
- **Capability-gap fallback quality** — a generic "I wasn't able to complete that, try rephrasing" with no real explanation, observed for three distinct real report requests in one conversation.
- **The execution authorization history in §2.8** — worth carrying forward as context for anyone touching that code, not just a historical footnote.
- **The lots-to-quantity implementation gap in §2.7** — the product decision is settled ("N lots" always means N × real lot size), but the tool still hardcodes `quantity: 1`, affecting every "for N lots" style request across the strategy domain.

---

## Part 3 — Phased Path to the North Star

- **Phase 0 — Foundation (built).** Multi-agent orchestration, the 13-agent taxonomy, per-user identity/multi-tenant isolation, the core read/analysis domains, the IBT-compliant execution shape.
- **Phase 1 — Correctness infrastructure (in progress).** Universal tagging (`_tagging.py`), the dispatch chokepoint, deterministic tool-call verification for strategy math, the strategy-tool consolidation — and closing the specific remaining gaps named in §2.5 and §2.7 (scale-check sign/relevance precision, the lots-to-quantity implementation gap).
- **Phase 2 — Capability completeness.** Full reports-domain coverage against the real Nubra API surface (§1.6's "no silent gaps" constraint), re-enabling backtesting in chat, and a systematic sweep of the remaining ~130 tools for the same class of undeclared-field bugs found in the strategy domain.
- **Phase 3 — Verification UX.** Replace the inline "⚠ not verified" text tag with the real designed verified/unverified marker described in §1.6 — visible on every number, not just the exceptions.
- **Phase 4 — Full workspace.** Comprehensive, gap-free coverage of every domain in §1.4; the 3-second-window/cross-question execution model fully verified end-to-end and continuously monitored per §1.7's last bullet; resolution of the compliance divergence noted in §2.8.

---

*This document is a companion to `Ai-mode-PRD.html` in the main `nubra-ai-mode` repo (architecture, agent taxonomy detail, IBT compliance, API contracts) and to the codebase itself — every claim in Part 2 is meant to be checked against the referenced file, not taken on faith.*
