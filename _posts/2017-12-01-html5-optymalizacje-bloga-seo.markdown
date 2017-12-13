---
layout: post
title:  "HTML5 - optymalizacja kodu pod platformę Blogową"
author: Krzysztof Wielicki
date:   2017-12-01 21:17:02 +0100
tags: ["seo", "semantyka"]
categories: ["html5"]
thumbnail: blog-introduction.jpg
comments: true
---

W trakcie pisania bloga, zacząłem się zastanawiać nad tym, w jaki sposób mogę go zoptymalizować pod
kątem SEO  oraz semantyki kodu HTML.

W związku z tym, że spędziłem nad tymi zagadnieniami nieco więcej czasu niż zakładałem z początku,
postanowiłem podzielić się z Wami moją nabytą wiedzą.

## SEO (Tag HEAD)
1 znacznik _title_ - treść w nim zawarta powinna bardzo precyzyjnie opisywać przyporządkowaną do niego stronę. Okazuje się bowiem, że powinniśmy być oszczędni w liczbie liter, którą zawrzemy w tym elemencie. Jest to związane z tym, że najpopularniejsza przeglądarka na świecie (czyt. _Google_) wyświetla od 50 do 60 znaków. Jako ciekawostkę dodam, że na desktopie długość bloku, w którym przechowywany jest m.in. tytuł strony wynosi 600px - reszta tekstu po nim jest ukrywana. Jeśli mimo to, zdecydujecie się na użycie większej liczby znaków niż zalecana miejcie świadomość, że anchor nie posiada atrybutu title, więc potencjalny użytkownik trafiający na taki tytuł nie jest w stanie "odebrać" w całości jego sensu bez wejścia na taką stronę.

Poczas pisania tego artykułu znalazłem bardzo ciekawą stronę, przy pomocy której możesz przetestować jak będzie prezentował się Twój tytuł w wyszukiwarce googla - <a href="https://moz.com/learn/seo/title-tag" target="blank" title="Sprawdź jak będzie prezentował się Twój title">link</a>

A teraz spójrz na rekomendowaną strukturę znacznka <title> przez Mozille.
<pre class="pre--secondary">
Primary Keyword - Secondary Keyword | Brand Name
<pre>

- pamiętaj, aby nie powielać treści w znaczniku title
- nie używaj takich treści jak "Strona główna" lub "Witaj na stronie głównej" - to jest zbyt oczywiste
