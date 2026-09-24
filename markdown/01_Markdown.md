# GUIA BÀSICA DE MARKDOWN

**Markdown** és un llenguatge de marcat lleuger que permet donar format a un text de manera senzilla. És molt habitual per escriure documentació tècnica, fitxers `README.md`, incidències i apunts de projectes.

No cal memoritzar tota la sintaxi: aquesta guia és una referència que podràs consultar sempre que la necessitis.

## 1. Encapsalaments

Els encapsalaments estructuren el document. Es creen amb el símbol `#`; la quantitat de coixinets defineix el nivell de l'encapçalament. Deixa un espai entre els coixinets i el text.

```markdown
# Encapsalament 1
## Encapsalament 2
### Encapsalament 3
#### Encapsalament 4
##### Encapsalament 5
###### Encapsalament 6
```

Normalment, en un document utilitzarem un únic títol de nivell 1 (`#`) i organitzarem la resta del contingut amb nivells inferiors.

## 2. Text en negreta, cursiva i ratllat

Podem destacar fragments de text amb diferents formats:

```markdown
**Text en negreta** o __Text en negreta__
*Text en cursiva* o _Text en cursiva_
~~Text ratllat~~
```

El resultat és: **text en negreta**, *text en cursiva* i ~~text ratllat~~.

## 3. Llistes

### Llistes no ordenades

Es creen amb `-`, `*` o `+`. És recomanable utilitzar sempre el mateix símbol dins d'un document.

```markdown
- Element 1
- Element 2
  - Sub-element
  - Un altre sub-element
```

### Llistes ordenades

Es creen amb un nombre seguit d'un punt:

```markdown
1. Primer element
2. Segon element
3. Tercer element
```

## 4. Enllaços i imatges

### Enllaços

Un enllaç combina el text que es mostrarà entre claudàtors amb l'adreça entre parèntesis:

```markdown
[Web del Thos](https://www.iesthosicodina.cat)
```

### Imatges

Les imatges tenen una sintaxi semblant, però comencen amb un signe d'exclamació. El text alternatiu és important perquè descriu la imatge si no es pot carregar i millora l'accessibilitat.

```markdown
![Text alternatiu de la imatge](https://exemple.cat/imatge.jpg)
```

Utilitza només imatges pròpies, amb llicència d'ús o d'una font segura. Si no vols incloure cap imatge, pots indicar-ho a l'activitat amb una frase.

## 5. Codi en línia i blocs de codi

### Codi en línia

Per destacar una ordre, un nom de fitxer o una instrucció curta, envolta-la amb una cometa invertida:

```markdown
El fitxer principal del projecte és `README.md`.
```

### Blocs de codi

Per escriure diverses línies de codi, utilitza tres cometes invertides en una línia abans i després del bloc. Pots indicar el llenguatge després de les primeres tres cometes per facilitar el ressaltat de sintaxi.

````markdown
```javascript
function salutacio() {
  console.log("Hola, món!");
}
```
````

## 6. Cites (`>`)

Utilitza `>` per crear una cita, una nota o una frase destacada:

```markdown
> Aquesta és una cita en Markdown.
```

El resultat és:

> Aquesta és una cita en Markdown.

## 7. Taules

Les taules permeten ordenar informació en files i columnes. La segona fila, formada per guions, separa els encapçalaments de les dades.

```markdown
| Encapsalament 1 | Encapsalament 2 | Encapsalament 3 |
|-----------------|-----------------|-----------------|
| Dada 1          | Dada 2          | Dada 3          |
| Dada 4          | Dada 5          | Dada 6          |
```

## 8. Línies horitzontals

Les línies horitzontals serveixen per separar seccions. Es poden crear amb tres guions, asteriscs o guions baixos en una línia independent:

```markdown
---
```

---

## 9. Llista de tasques (checklist)

Les llistes de tasques permeten indicar elements pendents o completats. Cal escriure un guió abans de cada element:

```markdown
- [ ] Tasca pendent
- [x] Tasca completada
```

El resultat és:

- [ ] Tasca pendent
- [x] Tasca completada

---

## 10. Activitat pràctica: `perfil.md`

Crea un fitxer nou anomenat `perfil.md`. Aquest fitxer serà la teva carta de presentació en Markdown i haurà d'estar escrit amb un to adequat per compartir-lo amb companys i professores. No hi incloguis dades personals sensibles, com l'adreça, el telèfon o contrasenyes.

El document ha d'incloure, com a mínim:

1. Un títol principal amb el teu nom o àlies professional i, com a mínim, dos subtítols.
2. Una breu **presentació personal** en què utilitzis text en *negreta* i en *cursiva*.
3. Una llista dels llenguatges de programació i/o tecnologies que coneixes.
4. Una llista ordenada amb tres pel·lícules que t'agraden.
5. Una llista no ordenada amb tres cantants o grups musicals que t'agraden.
6. Un enllaç a una web professional, educativa o tecnològica que t'interessi.
7. Una imatge opcional, pròpia o procedent d'una font segura.
8. Una taula amb tres tecnologies que t'agradaria aprendre, el teu nivell actual i un recurs que puguis consultar.
9. Un bloc de codi amb una instrucció, una ordre de terminal o un petit fragment de codi que coneguis o vulguis aprendre.
10. Una cita amb una frase que t'agradi o et motivi.
11. Un objectiu personal, professional o acadèmic per a aquest curs.
12. Una checklist d'objectius: inclou alguns objectius assolits (`- [x]`) i altres de pendents (`- [ ]`). Ratlla amb `~~ ~~` almenys un objectiu que ja hagis aconseguit.

Abans de lliurar-lo, comprova que el document es visualitza correctament a la previsualització de Markdown de Visual Studio Code i que tots els elements demanats hi apareixen.

> Aquesta és una guia bàsica de Markdown. Fes-la servir com a referència durant tot el mòdul.
