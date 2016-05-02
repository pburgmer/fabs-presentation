# Grunt & fabs: Moderner Build und Workflow für moderne Web-Anwendungen

Dieses Repository enthält die Präsentation zu meinem Vortrag *Grunt & fabs: Moderner Build und Workflow für moderne Web-Anwendungen*.

## Zusammenfassung

Für die meisten Sprachen hat sich in den letzten Jahren und Jahrzehnten ein Tool als Build-System etabliert. Maven für Java, Make für Linux, SBT für Scala usw. und so fort. Doch was ist mit Web-Anwendungen die z.B. auf AngularJS basieren, bei denen die gesamte UI im Browser läuft, die immer komplexer werden, die immer mehr Code enthalten und aus immer mehr einzelnen Dateien bestehen. Wer oder besser gesagt womit baut man hier seine Anwendung? Wer führt Tests aus und wie liefere ich solche eine Anwendung aus? Welche Hürden sind hier zu nehmen? Mit Grunt hat sich 2013 ein modernes JavaScript Pendant zu Ant etabliert. Doch bei genauerer Betrachtung ist Grunt zwar moderner, aber trotzdem ähnlich abstrakt und low-level wie Ant. Hier kommen Bower und fabs ins Spiel: Bower kümmert sich um Dependencies und fabs konfiguriert Grunt um einen feature-reichen, anpassbaren Build zur Verfügung zu stellen. In diesem Beitrag wird gezeigt wie mit Grunt, Bower und fabs ein moderner Build und Development-Workflow mit LiveReload, Test-Ausführung, Code-Minimierung und vielem mehr aufgebaut werden kann um auch große Web-Anwendungen mit mehreren Entwicklern schnell voran treiben und zuverlässig ausliefern zu können.


## Kurz-Bio

Philipp Burgmer studierte an der Hochschule Karlsruhe Informatik und arbeitet als Entwickler, Berater und [Trainer](http://thecodecampus.de) für die [w11k GmbH](http://w11k.de). Er ist Experte für Webtechnologien und beschäftigt sich mit der Gestaltung und Optimierung von Benutzeroberflächen. Privat interessiert er sich für Klettern und DJing.


## Setup

Die Präsentation ist als Web-Anwendung mit [AngularJS](https://angularjs.org/) und [w11k-slides](https://github.com/w11k/w11k-slides) umgesetzt. Um sie lokal laufen zu lassen genügen folgende Aufrufe nach dem Checkout. Anschließend läuft ein lokaler Server (Port siehe Konsolenausgabe).

```
npm install
npm run dist
```