# moje poznámky v průběhu vypracovávání

- sama od sebe bych se do nasazení metody .play pustila přes onClick na button a pak v handleClick přiřazení .play na current toho refu u audia... jenže to je špatně :-)
- nutné to řešit přes useEffect, který bude reagovat na změnu stavu playing (který se změní po kliknutí na button) !!!

- pro import pole s jednotlivými řádky textu písně ze souboru lyrics-lines.js v src složce: v lyrics-lines.js uvedeno `export default [{}, {}...]` a v index.jsx hlavní app je na začátku `import lines from './lyrics-lines.js';` tedy bez `{lines}` nebo aniž by bylo potřeba ukládat to pole v .js souboru do nějaké proměnné (`const lines = []` a následně export lines)
- lines do props, tam přemapovat pro jednotlivé řádky; nezapomeň `key={index}` (nikoliv `{line.index}`) a bacha, index musí být až na druhém místě té metody, tedy nikoliv:
`{lines.map((index, line) => <p key={index}>{line.text}</p>)}` ale
`{lines.map((line, index) => <p key={index}>{line.text}</p>)}`

- přiřazení refu pouze na aktuální řádek vyřešit ternárním operátorem stejně když se přidává třída, tedy v elementu `<p>` při přemapování:
`ref={currentLineIndex === index ? currentLineRef : null}`

- přiřazení refu mám, ale nefunguje mi console.log pro jeho current v useEffectu... stále je to undefined, ačkoliv měním stav a měním index aktuálního řádku (při změně stavu má dojít k useEffectu)
**!!! ŘEŠENÍ: při založení refu jsem to měla chybně v {} !!!** (zlblá např. z destruktur props v {} anebo založení stavů v [] ), tedy špatně takto:
`const {currentLineRef} = useRef();`
namísto správného:
`const currentLineRef = useRef();`

