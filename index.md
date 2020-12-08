---
layout: layouts/base.njk
title: Lean Value Tree
---

<div class="container">

  <h1 class="hero">
    <!-- Valida il tuo prodotto con i nostri fantastici workshop -->
    Valida le tue idee prima di renderle reali
  </h1>

  <div class="row my-5">
    <div class="col-md-7">
    </div>
    <div class="col-md-5">
      Quando si vuole validare un prodotto è fondamentale analizzarlo in ogni sua parte, partendo dalla fattibilità, analizzando la desiderabilità senza mai tralasciare la redditività. Bene, abbiamo la soluzione che fa a caso tuo: un bel workshop! La nostra raccolta ti aiuterà a capire quale si adatta meglio a te e al tuo team.
    </div>
  </div>

  <div class="py-3 filter-container">
    <b>Tutti</b>
    <span class="ml-3">Feasability</span>
    <span class="ml-3">Viability</span>
    <span class="ml-3">Desirability</span>
    <span class="float-right font-bon-vivant"><img src="/images/logo.svg"></span>
  </div>

  <div class="pt-5">
  <div class="row">
    {%- for tool in tools -%}
<a class="col-md-6 text-black py-2 mt-5 link-container" href="/tools{{tool.url}}">
<div class="card border-0">
{% if tool.normalized == 'a-b-test' or tool.normalized == 'button-to-nowhere' %}
<div id="{{tool.normalized}}"></div>
{% else %}
<img src="/images/{{tool.image}}" class="card-img-top" alt="..." />
{% endif %}
<div class="card-body">
<h4 class="card-title link mt-0">{{tool['Nome tool']}}</h4>
<p class="card-text">{{tool['Descrizione di massima']}}</p>
<br/>
</div>
</div>
</a>
    {%- endfor -%}
  </div>
  </div>
</div>
