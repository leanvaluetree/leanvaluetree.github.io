---
layout: layouts/base.njk
title: Lean Value Tree
---

<div class="container">

  <h1 class="hero mb-0">
    Valida le tue idee prima di renderle reali
  </h1>

  <div class="row my-2">
    <div class="col-lg-7">
    </div>
    <div class="col-lg-5">
Come designer, sviluppatori e strategist abbiamo infinite possibilità per migliorare la vita dei nostri clienti grazie al digitale. Ma come essere sicuri che la funzionalità che abbiamo in mente è quella giusta per il nostro pubblico? Come esplorare diverse soluzioni prima di scegliere quella da implementare?
<br>
<br>
Grazie al catalogo Secret Validation Society scoprirai come partire con il piede giusto mettendo al centro il valore per l’utente per creare  servizi realmente utili e apprezzati.
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
