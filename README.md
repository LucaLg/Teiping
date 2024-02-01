# Teiping

Teiping [ˈteɪpɪŋ'] ist ein https://monkeytype.com/ Klon. Ziel der Applikation is es in einer selbst bestimmten Zeit so viele Wörter wie möglich zu tippen. Die Applikation ist in Angular geschrieben und wurde mithilfe von Tailwind gestyled.

## Installation

Um die Applikation auszführen zu können muss zuerst Angular installiert werden. Dazu muss folgender Befehl ausgeführt werden:

```
npm install -g @angular/cli
```

Danach kann die Applikation mit folgendem Befehl ausgeführt werden:

```
ng serve
```

Die Applikation ist nun unter http://localhost:4200/ erreichbar.

Oder mit dem Dockerfile:

```
docker build -t teiping .
docker run -d -p 80:80 teiping
```

Icons von [https://iconoir.com/] https://iconoir.com/
