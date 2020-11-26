---
layout: layouts/base.njk
title: Lean Value Tree
---

<h1 class="hero">
  Valida il tuo prodotto con i nostri fantastici workshop
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
    <a class="col-md-6 text-black py-2" href="/tools{{tool.url}}">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1585309370118-f40f3fce2f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=50" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{tool['Nome tool']}}</h5>
          <p class="card-text">{{tool['Descrizione di massima']}}</p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </a>
  {%- endfor -%}
</div>
</div>