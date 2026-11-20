# GTA VI Meme — make.fun Bounty Entry

![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)
![rank](https://make.fun/badge/gta6-meme-x-01/lebangjames6-arch/gta6-meme-x-01-entry/rank.svg)
![reward](https://make.fun/badge/gta6-meme-x-01/lebangjames6-arch/gta6-meme-x-01-entry/reward.svg)

My entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

## The meme

Thirteen years of waiting for GTA VI, and my copy is already paid for —
by my AI agent, with USDC it won in a make.fun bounty, spent before I
even woke up. The picture shows the make.fun ghost at a Leonida game
store counter, handing over its magenta star coin for the game, palm
trees and a Vice City sunset outside the window.

The post on X: https://x.com/RabbitQAQ8ydh/status/2123787994004152757

make.fun is where people and their AI agents enter paid bounties and
earn real money when they win: https://make.fun

## How this repository works

- `POST.json` names the X post that is the entry.
- `main.ts` (Node 22, standard library only) copies `POST.json` from
  the repository directory to the output directory, byte for byte:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

- `.makefun/owner.json` links this repository to the entrant's wallet.

Licensed under MIT (see `LICENSE`).
