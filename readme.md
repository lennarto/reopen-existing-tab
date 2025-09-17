> [!IMPORTANT]
> ✨ **This is the CLI version.**  
> 👉 The Chrome extension is here: **[lennarto/reopen-existing-tab-extension](https://github.com/lennarto/reopen-existing-tab-extension)**



<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="images/logo_dark.svg" width="300">
  <source media="(prefers-color-scheme: light)" srcset="images/logo_light.svg" width="300">
  <img alt="Fallback image description" src="images/logo_light.svg" width="300">
</picture>
</div>

<h3 align="center">
	Simple CLI to (re)open a specific URL. If no such tab exists, it opens a new one.
</h3>

<img src="images/demo.gif" alt="Demo GIF" width="600">

## 🚀 Installation 
```sh
brew tap lennarto/reopen
brew install reopen
```

## 🔥 Usage
```sh
reopen netflix.com # standard-browser = chrome
reopen safari netflix.com # use specific browser
reopen standard safari # change standard-browser
```
##### Use RAW script without homebrew (no installation required)

```sh
osascript -l JavaScript /scripts/open-chrome-tab.js "https://web.whatsapp.com/"
```
## Browsers
#### ✅ Supported
```sh
reopen standard chrome
reopen standard safari 
reopen standard edge 
reopen standard opera 
```

#### ❌ NOT Supported
Unfortunately, **Arc** and **Firefox** do not allow access to "tabs". They also have very limited AppleScript support. A solution for Firefox might be possible, but needs more development effort. You can upvote the issues to show your interest.

<a href="https://github.com/lennarto/reopen-existing-tab/issues/1" target="_blank">Arc support</a>
<a href="https://github.com/lennarto/reopen-existing-tab/issues/2" target="_blank">Firefox support</a>
 
## 🧩 Integration Examples
You can integrate this with Tools like Apple Shortcuts or <a href="https://folivora.ai/" target="_blank">BetterTouchTool</a> to quickly re-open urls with specific gestures, buttons, or keyboard shortcuts.

#### ‼️ You might need to load your shell config first
BetterTouchTools and Shortcuts (especially in “Run Shell Script”) often run a minimal environment: they don’t load your full shell config. That’s why reopen might be unknown inside these tools, and **you might have to load your shell config before.
In my case, it works with:**
```sh
source ~/.zshrc
reopen "https://netflix.com"
```

#### ‼️ How to Format URLs Correctly in embedded terminals

In the embedded terminals, you might need to put the url in "brackets" and add https://
```sh
reopen netflix.com # works perfectly in normal terminals
reopen "https://netflix.com" # might be needed in embedded terminals (like Shortcuts or BetterTouchtools)
```

### Better Touch Tools

<img src="images/BetterTouchTools.png" alt="Example using BetterTouchTool" width="600">

### Apple Shortcuts

<img src="images/AppleShortcuts.png" alt="Example using BetterTouchTool" width="600">


## 💙 Support 

#### 🐞  Found a bug? Missing a specific feature?
Feel free to file a new <a href="https://github.com/lennarto/reopen-existing-tab/issues" target="_blank">Issue</a>.

#### 🤝 Contact me
I love building digital products, working in it-strategy, or applying ai in real-world use cases. On top of that, i create private it expert reports (🇩🇪 IT-Gutachten) for legal proceedings in germany, especially in criminal cases.
👉 [My website](https://lennie.de) 👈


#### 🍻 Buy me a beer 

If you’ve found something useful, feel free to fuel my next project with a Beer! 🍻 I do have a couple of cool ideas in my backlog 🚀
👉 [My Paypal](https://www.paypal.com/paypalme/ltoertzen) | [Ko-Fi](https://ko-fi.com/lennie) 👈