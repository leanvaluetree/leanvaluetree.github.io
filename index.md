---
layout: layouts/base.njk
title: Lean Value Tree
---

{%- for tool in tools -%}
<div>
  <a href="/tools{{ tool.url }}">
    {{tool["Nome tool"]}}
  </a>
</div>
{%- endfor -%}