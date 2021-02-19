---
layout: layouts/base.njk
title: Lean Value Tree
---

<div class="container">
  <div id="hero" class="hero"></div>

  <div class="lg:flex my-8">
    <div class="flex-1"></div>
    <div class="flex-1"></div>
    <div class="flex-1">
      Come designer, sviluppatori e strategist abbiamo infinite possibilità per migliorare la vita dei nostri clienti grazie al digitale. Ma come essere sicuri che la funzionalità che abbiamo in mente è quella giusta per il nostro pubblico? Come esplorare diverse soluzioni prima di scegliere quella da implementare?
      <br>
      <br>
      Grazie al catalogo Secret Validation Society scoprirai come partire con il piede giusto mettendo al centro il valore per l’utente per creare  servizi realmente utili e apprezzati.
    </div>
  </div>
  
  <div class="py-5 workshop-header">
    <h4 class="mt-0">Workshop</h4>
    <!-- <b>Tutti</b>
    <span class="ml-3">Feasability</span>
    <span class="ml-3">Viability</span>
    <span class="ml-3">Desirability</span> -->
  </div>

  <div class="pt-5">
  <div class="flex flex-wrap">
{%- for tool in tools -%}
<a class="block w-1/2 text-black py-2 mt-5 link-container" href="/tools{{tool.url}}">
  {% if tool.normalized == 'a-b-test' or tool.normalized == 'button-to-nowhere' %}
  <div id="{{tool.normalized}}" class="border border-black"></div>
  {% else %}
  <img src="/images/{{tool.image}}" class="min-w-full
" alt=""/>
  {% endif %}
  <div class="">
    <h4 class="link mt-0">{{tool['Nome tool']}}</h4>
    <p class="">{{tool['Descrizione di massima']}}</p>
  </div>
</a>
{%- endfor -%}
  </div>
</div>
