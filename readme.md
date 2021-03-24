# KoRo Aufgabe

## Wo ist was?

Den finalen Build der Aufgabe findet Ihr in /dist

Der dev server kann mit ´´´yarn dev´´´ gestartet werden

esLint kann mit ´´´yarn lint´´´ ausgeführt werden

Wen ihr wissen möchtet wie weit ich in ca. 3h gekommen bin einfach zum commit a10079e5b1ee278fdcda6d391fa775a622cb8d63 zurückgehen

## Fazit:

Eine spannende Aufgabe, allerdings hätte ich für die Umsetzung in 3-4 Stunden wahrscheinlich nicht unbedingt React nutzen sollen, sondern eher Vanilla HTML5 und JS. Ich liebe React für seine Modularität und mag den funktionalen Ansatz, allerdings bringt es auch wesentlich mehr Boilerplate mit sich. Allerdings bin ich, bis auf den Code der ganz zum schluss entstanden ist(vorallem InfoTextInputGroup ist fürchterlich kryptisch) recht zufrieden mit der Struktur und der Lesbarkeit der Anwendung. Das ich seid zwei Tagen einen Laptop mit Englischer Tastatur habe und mich noch umgewöhnen muss hat auch nicht unbedingt bei meinen Zeitproblemen geholfen.

## Probleme

Ich habe am Ende eine Gut 5 1/2 Stunden Zeit gebraucht für die ganze Aufgabe. Und selbst dabei sind noch einige Dinge hinten runter gefallen:

- Das Uploadformular hat noch keine funktion. Der nächste Schritt wäre es alle Daten in UploadInfoImage in ein FormaData Objekt zusammenzufassen und mittels ines <button>s an eine API Schnittstelle zu senden. Die Infotexte sind allerdings schon im richtigen format vorhanden.
- Die delete- <button>s sind nicht angemessen gestylt
- Der Container für die <InfoArea>s ist ein kleines bisschen höher als das Bild, ich konnte auf die schnelle nicht herausfinden warum.
- Animationen würden der User Experience an verschiedenen stellen noch sehr helfen, Beispiele hierfür sind die <InfoTextInput> karten oder auch der InfoText in der Anzeige.
- Die PropType validation für die Uploadsektion fehlt.
- Hätte ich ewig Zeit gehabt hätte ich gerne noch tests geschrieben, zum glück habe ich mir das immerhin erstmal gespart.
- <InfoTextInputGroup> bräuchte dringend Kommentare oder müsste nochmal sauber gerefactored werden
- Das <InfoImage> display ist noch nicht für mobil optimiert, das wäre allerdings ein schneller fix
