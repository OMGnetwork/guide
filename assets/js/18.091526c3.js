(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{180:function(e,a,t){"use strict";t.r(a);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=t(6),s=Object(n.a)(r,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[t("h1",{attrs:{id:"plasma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plasma","aria-hidden":"true"}},[e._v("#")]),e._v(" Plasma")]),e._v(" "),t("p",[t("strong",[e._v("Plasma is a framework for building scalable blockchain applications")]),e._v(" without sacrificing security. A plasma chain is its own blockchain and can have whatever functionality and consensus mechanism the builder desires. The defining feature and limitation is that all state transitions must be tracked on the root chain (we're using Ethereum as our root); but rather than every individual transaction being submitted to the root chain, many transactions can be squished together and submitted to the root chain as a single state change. Users can exit funds from a plasma chain onto the root chain whenever they want, and need to do so in the event of a malicious child chain to recover their funds.")]),e._v(" "),t("p",[t("strong",[e._v("Plasma chains are not side chains.")]),e._v(" The biggest distinction is plasma's exit mechanism. Whereas users of a side chain must rely solely on the honesty and security of the side chain, users of a plasma chain have funds secured by the chain's consensus as well as an interactive exit game that detects malicious behavior. In other words, when a side chain breaks, state is lost; when a plasma chain breaks, state is exited but remains intact.")]),e._v(" "),t("p",[e._v("OmiseGO is researching and developing a specific implementation with the required properties and functions for a decentralized exchange, but plasma design and implementation has been a very collaborative effort across the Ethereum community, with many different designs being explored and implemented by many different teams. Just for reference, here are some of the designs being worked on.")]),e._v(" "),t("h2",{attrs:{id:"different-plasma-flavors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#different-plasma-flavors","aria-hidden":"true"}},[e._v("#")]),e._v(" Different Plasma flavors")]),e._v(" "),t("h3",{attrs:{id:"plasma-mvp-minimal-viable-plasma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plasma-mvp-minimal-viable-plasma","aria-hidden":"true"}},[e._v("#")]),e._v(" Plasma MVP (Minimal Viable Plasma)")]),e._v(" "),t("p",[e._v("The MVP specification lays out a utxo payments blockchain.\n"),t("a",{attrs:{href:"https://ethresear.ch/t/minimal-viable-plasma/426",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"plasma-moremp-more-minimal-plasma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plasma-moremp-more-minimal-plasma","aria-hidden":"true"}},[e._v("#")]),e._v(" Plasma MoreMP (More Minimal Plasma)")]),e._v(" "),t("p",[e._v("Implements the MVP smart contract specification with minor modifications for clarity.\n"),t("a",{attrs:{href:"https://github.com/kfichter/more-minimal-plasma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"plasma-morevp-more-viable-plasma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plasma-morevp-more-viable-plasma","aria-hidden":"true"}},[e._v("#")]),e._v(" Plasma MoreVP (More Viable Plasma)")]),e._v(" "),t("p",[e._v("Makes security and UX improvements to the MVP design including removal of confirmation signatures and adds the ability to exit inputs as well as outputs.\n"),t("a",{attrs:{href:"https://ethresear.ch/t/more-viable-plasma/2160",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"plasma-cash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plasma-cash","aria-hidden":"true"}},[e._v("#")]),e._v(" Plasma Cash")]),e._v(" "),t("p",[e._v("Assets deposited into a Plasma Cash chain are represented as non-fungible tokens (NFTs). Blocks are different from Plasma MVP, in that each Plasma Cash block allocates a slot for each token. When a token is transacted, a record of that transaction is places at the corresponding slot. Plasma Cash removes Plasma MVP's exit time constraints and reduces user storage and computation requirements by only requiring users watch their own value.\n"),t("a",{attrs:{href:"https://ethresear.ch/t/plasma-cash-plasma-with-much-less-per-user-data-checking/1298",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"plasma-xt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plasma-xt","aria-hidden":"true"}},[e._v("#")]),e._v(" Plasma XT")]),e._v(" "),t("p",[e._v("Introduces checkpointing from the plasma chain to the root chain, which allows for periodic finalization of a coin's ownership in order to reduce the amount of data which must be stored and verified by each user to limit the storage and computation requirements per coin.\n"),t("a",{attrs:{href:"https://ethresear.ch/t/plasma-xt-plasma-cash-with-much-less-per-user-data-checking/1926",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"plasma-debit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plasma-debit","aria-hidden":"true"}},[e._v("#")]),e._v(" Plasma Debit")]),e._v(" "),t("p",[e._v("A proposal for enabling partial balances (spending only part of the value of a non-fungible token) in a Plasma Cash construction by making every token a payment channel between the user and the chain operator.\n"),t("a",{attrs:{href:"https://ethresear.ch/t/plasma-debit-arbitrary-denomination-payments-in-plasma-cash/2198",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn more"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"current-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-state","aria-hidden":"true"}},[e._v("#")]),e._v(" Current state")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/omisego/elixir-omg/blob/develop/docs/tesuji_blockchain_design.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tesuji Plasma"),t("OutboundLink")],1),e._v(" is the first iteration of OmiseGO plasma-based implementation. The design is based on Minimal Viable Plasma. Tesuji is currently on our internal testnet. Audits are in progress with Quantstamp and Synthetic Minds — those audits have already proved useful as we've received and reacted to some preliminary feedback. The internal testnet is an MVP implementation.")]),e._v(" "),t("h3",{attrs:{id:"bi-weekly-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bi-weekly-updates","aria-hidden":"true"}},[e._v("#")]),e._v(" Bi-weekly updates")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1 - August 9, 2018"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2 - August 27, 2018"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3 - September 10, 2018"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4 - September 25, 2018"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5 - October 8, 2018"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-6",target:"_blank",rel:"noopener noreferrer"}},[e._v("#6 - October 22, 2018"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://kb.omgcommunity.org/contents/deep-dive/plasma/current-state/plasma-update-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7 - November 5, 2018"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),t("p",[e._v("For more on Plasma, see these excellent community-produced resources :")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.learnplasma.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn Plasma"),t("OutboundLink")],1),e._v(", a community-led education initiative")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/crypto-economics/what-is-plasma-plasma-cash-6fbbef784a",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Plasma? Plasma Cash?"),t("OutboundLink")],1),e._v(" by Jinglan Wang")]),e._v(" "),t("li",[e._v("This "),t("a",{attrs:{href:"https://media.consensys.net/the-state-of-plasma-1-6b48c1e4b295",target:"_blank",rel:"noopener noreferrer"}},[e._v("primer"),t("OutboundLink")],1),e._v(" from Consensys")]),e._v(" "),t("li",[e._v("This nifty "),t("a",{attrs:{href:"https://www.learnplasma.org/en/learn/compare.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("chart"),t("OutboundLink")],1),e._v(" comparing different plasma designs")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/omisego/elixir-omg/blob/develop/docs/tesuji_blockchain_design.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plasma Tesuji"),t("OutboundLink")],1),e._v(" Github repository")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.goodaudience.com/how-omisego-will-bring-plasma-in-everyones-daily-life-45c9d81a3258",target:"_blank",rel:"noopener noreferrer"}},[e._v("How OmiseGO will bring Plasma in everyone's daily life"),t("OutboundLink")],1),e._v(" by u/pwolf88")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/@acb_/plasma-8bba7e1b1d0f",target:"_blank",rel:"noopener noreferrer"}},[e._v("An introduction to Plasma"),t("OutboundLink")],1),e._v(" by Alexander Butler")])])])},[],!1,null,null,null);s.options.__file="plasma.md";a.default=s.exports}}]);