---
layout: post
title:  "Jekyll - wprowadzenie do platformy blogowej z wykorzystaniem github pages - część pierwsza"
author: Krzysztof Wielicki
date:   2017-12-06 21:17:02 +0100
tags: "technologia"
categories: Technologia
thumbnail: jekyll-wprowadzenie.jpg
comments: true
---
O technologii <code>Jekyll</code> dowiedziałem się przypadkowo z agendy jednego z moich kolegów po fachu.
Z racji tego, że było to na tyle ciekawe wystąpienie aby mnie zainteresować tym zagadnieniem
postanowiłem _zabrać się do tematu_ i&nbsp; stworzyć
własnego bloga w oparciu o wcześniej wspomnianego Jekylla wraz z hostingiem na githubie.

Tyle tytułem wstępu czas przejść do historii którą napisałem wspólnie z Jekyllem ...

### Jekyll i jego dokumentacja

Jest napisana w bardzo przejrzysty sposób. Szczegółowo, wykorzystując przykłady twórcy w pełni zobrazowali
cały proces tworzenia bloga. Począwszy od instalacji Jekylla po umieszczeniu go w sieci (hosting - m.in. na <code>github pages</code>);
<hr/>
### W jaki sposób udało mi się zainstalować Jekylla na Ubuntu 16.04 LTS

Zacząłem zgodnie z instrukcją od sprawdzenia, czy mam zainstalowanego rubiego. U mnie było wszystko w porządku, ale gdyby u Ciebie było inaczej
polecam zapoznać się z ich stroną w celu przeprowadzenia instalacji (Ruby jest wymagany) -
<a href="https://www.ruby-lang.org/pl/documentation/installation/" target="blank">ruby-lang.org/pl/</a>

Wykonanie poniższego polecenia w terminalu:
<pre>
$ ruby -v
</pre>
powinno pokazać wynik podobny do tego (mogą różnić się wersje)
<pre>
ruby 2.3.1p112 (2016-04-26) [x86_64-linux-gnu]
</pre>

Teraz możesz przejść do instalacji samego Jekylla wykonując polecenie
<pre>
$ gem install jekyll bundler
</pre>

Sam proces instalacji może potrwać 3-4 minuty. Po jej zakończeniu możemy sprawdzić aktualny status wykonując
<pre>
$ jekyll --version
// Oczekiwany rezultat
jekyll 3.6.2
</pre>

W tym momencie mamy zainstalowaną platformę, która jest przygotowana do implementacji Bloga.

Twórcy przewidzieli dwa scenariusze tj.:
1. zainicjalizowanie Jekylla w już istniejącym katalogu. W tym celu należy wykonać
<code>$ jekyll new . --force</code>.
2. utworzenie katalogu a następnie zainstalowanie Jekylla <code>$ jekyll new nazwa_bloga</code>

Jekyll instaluje się ze standardową templatką, która nie jest zbyt piękna, ale pozwala na sprawdzenie, czy to w ogóle działa.
Ta skórka, to bardzo dobry punkt wyjściowy do stworzenia swojej własnej.

Aby uruchomić server wraz z Twoim demonstracyjnym blogiem, należy w terminalu wykonać polecenie (oczywiście przebywając w dedykowanym katalogu)
<pre>
$ bundle exec jekyll serve
// Zostanie on uruchomiony na standardowym porcie http://localhost:4000/
</pre>

Port 4000 jest domyślnym, ale nie oznacza to że jedynym. Można go zmienić w pliku konfiguracyjnym <code>config.yml</code> ustawiając zmienną
<pre>
// plik konfiguracyjny _config.yml
port: numer-portu // np. port: 5500
</pre>

<hr/>
To by było na tyle jeśli chodzi o pierwszą część. Mam nadzieje, że ten artykuł pomoże Ci lepiej zrozumieć sam proces instalacji.

Część druga już wkrótce. A w niej szeroki opis pliku koniguracyjnego <code>_config.yml</code>.
