---
layout: layouts/base.njk
title: Lean Value Tree
---

<h1 class="hero">
  Valida il tuo prodotto con i nostri fantastici workshop
</h1>

<div class="row my-5">
  <div class="col-md-6">
  </div>
  <div class="col-md-6">
    Quando si vuole validare un prodotto è fondamentale analizzarlo in ogni sua parte, partendo dalla fattibilità, analizzando la desiderabilità senza mai tralasciare la redditività. Bene, abbiamo la soluzione che fa a caso tuo: un bel workshop! La nostra raccolta ti aiuterà a capire quale si adatta meglio a te e al tuo team.
  </div>
</div>

{%- for tool in tools -%}
<div>
  <a href="/tools{{ tool.url }}">
    {{tool["Nome tool"]}}
  </a>
</div>
{%- endfor -%}