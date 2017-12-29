Wykorzystywane są dwa pliki "config"
- _config.yml
- _config_prod.yml

W pliku _config_prod.yml znajdują się dwie deklaracje dot. elementów
które są wykorzystywane wyłącznie na produkcji.

# Uruchomienie środowiska DEVELOPERSKIEGO poleceniem z konsoli:
bundle exec jekyll serve --config=_config_develop.yml

# Uruchomienie środowiska PRODUKCYJNEGO poleceniem z konsoli:
bundle exec jekyll serve