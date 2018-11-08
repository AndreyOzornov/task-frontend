# aucobo mobilefrontend

## styles
We use scss files -> write styles to *styles.scss*.

## multi language support
The language files are stored under `src/locales/`. It's recommended to use the locale as a filename for the translation files.
To serve a new language just add the locale and the filename to the switch-case in the `*simpletexttranslation.service.ts`.
The simpletexttranslation.service.ts is loading JSON arrays from the src/locales folder. They contain key value pairs.

```javascript
[  {"key": "test.test", "value": "This is english."},  {"key": "miau", "value": "The sound of a cat."}]
```

The service is requesting the window.location from the browser and is selecting the right locale and translation from the folder. Standard is en-EN (English).
To get the value for a key value pair use the lookup(key: string) function of the simpletexttranslation.service.ts.
If you want to use the multi language text in the html templates use the simple-translate component with the selector `<sTrans>`.

`<sTrans key=””>TextA</sTrans>`

If you enter a key the component is checking for the corresponding value. If the result of the lookup is not available or still loading the “TextA” Text is shown. If A value exists and is loaded “TextA” gets replaced. sTrans is a inline object and can be used like a `<span>`.

### naming convention
`<page name>.<description>(.<singular/plural>)`

**Domain name:** see component name<br/>
**Description:** for example "heading" etc. ...<br/>
**Singular/plural:** optional to add information to key

Basic UI elements like button texts etc. ... use **app** as domain name

That's it :)


