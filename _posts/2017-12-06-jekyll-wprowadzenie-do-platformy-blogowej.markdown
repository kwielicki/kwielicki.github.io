---
title: Jekyll - wprowadzenie do platformy blogowej z wykorzystaniem github pages -
  część pierwsza
date: 2017-12-06 20:17:00 Z
categories:
- Technologia
tags:
- technologia
author: Krzysztof Wielicki
thumbnail: jekyll-wprowadzenie.jpg
comments: true
layout: post
---

<span class="super">J</span>**ekyll** to platforma o której dowiedziałem się dzięki agendzie jednego z moich kolegów.
Wystąpienie to zainteresowało mnie tak bardzo, że postanowiłem stworzyć własnego bloga w oparciu o Jekylla oraz  github pages. Niespodziewałem się, że to będzie tak przyjemne. To właśnie dzięki temu, że praca z Jekyllem przebiegała bardzo sprawnie, postanowiłem podzielić się z Wami tym, co udało mi się osiągnąć.
<div class="clearfix"></div>
<hr class="hr"/>
<h2 class="article-blog__title">
	Jekyll - wybór technologii.
	<small>Dlaczego zdecydowałem się wybrać tę platformę spośród wielu innych jak Ghost czy Thumblr ?</small>
	<span class="article-blog__title-number">01</span>
</h2>

<p class="less">Gruntowne przeanalizowanie dokumentacji Jekylla doprowadziło mnie do przekonania, że posiada on kilka kluczowych właściwośći, które dają mu przewagę nad innymi platformami służącymi do budowania środowisk stricte blogowych.</p>
<p class="less list--after">Aby zobrazować Ci te atuty zaprezentuje je w postaci listy:</p>
1. skrupulatnie przygotowana [dokumentacja](https://jekyllrb.com/docs/home/ ) która przeprowadzi Cię krok po kroku począwszy od instalacji wymaganych zależności po uruchomienie podstawowego szkieletu platformy. Ramowa struktura, którą dostaniesz po pierwszym uruchomieniu Jekkyla, jest doskonałym punktem wyjścia do dalszej pracy z tym narzędziem.
2. podstawą jekylla jest język programania Ruby w którym został napisany, a jego instalacja może zostać przeprowadzona na takich platformach jak Linux, iOS oraz Windows
3. prace z tą platformą wspomagają użyteczne pluginy takie jak chociażby: [Jekyll Admin](https://github.com/jekyll/jekyll-admin). Zarządzanie m.in. postami staje się bardzo proste. Możesz je tworzyć, edytować i publikować z panelu admina. Niestety to rozwiązanie ma jeden minus - jest ono dostępne wyłącznie lokalnie. Dla osób bardziej wymagających polecam _onlinowy_ odpowiednik tj. [Siteleaf](https://www.siteleaf.com/) - jest to rozwiązanie płatne, ale pozwalające na publikowanie postów bez konieczności ręcznego pushowania zmian do githuba. Jedyne co trzeba zrobić to zsynchronizować swoje konto na siteleaf z repozytorium na githubie
4. pełna kompatybilność z github pages. Co to znaczy w praktyce? Tyle, co _brak_ zmartwień na temat hostingu, domeny czy protokołu https. A to wszystko za **darmo** - nie wliczając czasu, który poświęcisz na pisanie kodu
5. stosunkowo niski próg wejścia w tworzeniu customowych templatek. Jest to spowodowane tym, że można je pisać w HTML'u. Podstawowa wiedza dotycząca semantyki tego hipertekstowego języka znaczników w pełni wystarczy aby stworzyć layout, który UX'owo będzie odpowiadał aktualnym trendom

<h2 class="article-blog__title">
	Instalacja Jekylla na Ubuntu 16.04 LTS
	<small>Zacząłem zgodnie z instrukcją od sprawdzenia, czy mam zainstalowanego rubiego...</small>
	<span class="article-blog__title-number">02</span>
</h2>

<div class="terminal">
	<div class="terminal__bar">
    <span class="terminal__ball terminal__ball--red"></span>
    <span class="terminal__ball terminal__ball--yellow"></span>
    <span class="terminal__ball terminal__ball--green"></span>
		<span class="terminal__title"> Terminal</span>
  </div>
  <div class="terminal__screen">
	  <span class="terminal__comment">// Sprawdzam, czy lub jaką wersję Ruby posiadam</span>
    <span class="terminal__font">root@10.0.0.1:~$ ruby -v</span>
  </div>
</div>

<p class="less">Polecenie to powinno zwrócić Ci wynik podobny do  - <code>ruby 2.3.1p112 (2016-04-26) \[x86_64-linux-gnu\]</code>. Jeśli jednak dostałeś komunikat błedu tj. okazało się, że nie posiadasz wymaganego oprogramowania skorzystaj ze strony <a href="https://www.ruby-lang.org/pl/">Język programowania Ruby</a> w celu jego instalacji.</p>
