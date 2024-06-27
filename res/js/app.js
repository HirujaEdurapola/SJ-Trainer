(function (Scratch) {
    'use strict';

    class RedirectExtension {
        getInfo() {
            return {
                id: 'redirect',
                name: 'Redirect',
                blocks: [
                    {
                        opcode: 'redirect',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'redirect to [URL]',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com'
                            }
                        }
                    }
                ]
            };
        }

        redirect(args) {
            const url = args.URL;
            if (url && url.startsWith('http')) {
                window.location.href = url;
            } else {
                console.error('Invalid URL provided:', url);
            }
        }
    }

    Scratch.extensions.register(new RedirectExtension());
})(Scratch);
","data:text/javascript;,(function(Scratch) { // Name: Animated Text
// ID: text
// Description: An easy way to display and animate text. Compatible with Scratch Lab's Animated Text experiment.
// By: LilyMakesThings
// License: MIT AND LGPL-3.0

/* generated l10n code */Scratch.translate.setup({"de":{"_Animated Text":"Animierter Text"},"fi":{"_# of lines":"rivien määrä","_# of lines [WITH_WORD_WRAP]":"rivien määrä [WITH_WORD_WRAP]","_Animated Text":"Animoitu teksti","_Enable Non-Scratch Lab Features":"Ota Scratch Labin ulkopuoliset ominaisuudet käyttöön","_Hello!":"Hei!","_Here we go!":"Aloitetaan!","_Incompatible with Scratch Lab:":"Ei-yhteensopivia Scratch Labin kanssa:","_Welcome to my project!":"Tervetuloa projektiini!","_[ANIMATE] duration":"animaation [ANIMATE] kesto","_[ANIMATE] text [TEXT]":"[ANIMATE] teksti [TEXT]","_add line [TEXT]":"lisää rivi [TEXT]","_align text to [ALIGN]":"keskitä teksti [ALIGN]","_animate [ANIMATE] until done":"suorita [ANIMATE] animaatio loppuun","_center":"keskelle","_displayed text":"näytetty teksti","_is animating?":"onko animaatio käynnissä?","_is showing text?":"näytetäänkö tekstiä?","_left":"vasemmalle","_rainbow":"sateenkaari","_random font":"satunnainen fontti","_reset [ANIMATE] duration":"palauta [ANIMATE] animaatio normaalikestoiseksi","_reset text width":"nollaa tekstin leveys","_reset typing delay":"nollaa kirjoitusväli","_right":"oikealle","_set [ANIMATE] duration to [NUM] seconds":"aseta [ANIMATE] animaatio [NUM] sekunnin pituiseksi","_set font to [FONT]":"aseta fontiksi [FONT]","_set text color to [COLOR]":"aseta tekstin väriksi [COLOR]","_set typing delay to [NUM] seconds":"aseta kirjoitusväliksi [NUM] sekuntia","_set width to [WIDTH]":"aseta leveydeksi [WIDTH]","_set width to [WIDTH] aligned [ALIGN]":"aseta leveydeksi [WIDTH] ja keskitä [ALIGN]","_show sprite":"näytä hahmo","_show text [TEXT]":"näytä teksti [TEXT]","_start [ANIMATE] animation":"aloita [ANIMATE] animaatio","_text [ATTRIBUTE]":"tekstin [ATTRIBUTE]","_type":"tyyppi","_typing delay":"kirjoitusväli","_with word wrap":"tekstin rivitys mukaan lukien","_without word wrap":"ilman tekstin rivitystä","_zoom":"lähenevä","disableCompatibilityMode":"Tämä ottaa käyttöön uusia lohkoja ja ominaisuuksia, jotka EIVÄT TOIMI virallisessa Scratch Labissa.\n\nHaluatko jatkaa?"},"it":{"_# of lines":"numero di righe","_Animated Text":"Testo Animato","_Enable Non-Scratch Lab Features":"Abilita blocchi non presenti in Scratch Lab","_Hello!":"Ciao!","_Here we go!":"Ecco fatto!","_Incompatible with Scratch Lab:":"Non compatibili con Scratch Lab:","_Welcome to my project!":"Bevenuti nel mio progetto!","_[ANIMATE] duration":"durata [ANIMATE]","_[ANIMATE] text [TEXT]":"testo [TEXT] con effetto [ANIMATE]","_add line [TEXT]":"aggiugi riga [TEXT]","_align text to [ALIGN]":"allinea il testo [ALIGN]","_animate [ANIMATE] until done":"inizia animazione [ANIMATE] e attendi la fine","_center":"centro","_displayed text":"testo animato","_is animating?":"animato","_is showing text?":"testo visibile","_left":"a sinistra","_rainbow":"effetto arcobaleno","_random font":"scelto a caso","_reset [ANIMATE] duration":"resetta durata animazione [ANIMATE]","_reset text width":"resetta larghezza testo","_reset typing delay":"resetta intervallo effetto digitazione","_right":"a destra","_set [ANIMATE] duration to [NUM] seconds":"imposta durata [ANIMATE] a [NUM] secondi","_set font to [FONT]":"usa carattere [FONT]","_set text color to [COLOR]":"imposta colore del testo a [COLOR]","_set typing delay to [NUM] seconds":"imposta intervallo effetto digitazione a [NUM] secondi","_set width to [WIDTH]":"imposta larghezza a [WIDTH]","_set width to [WIDTH] aligned [ALIGN]":"imposta larghezza a [WIDTH] con allineamento [ALIGN]","_show sprite":"mostra sprite","_show text [TEXT]":"mostra testo [TEXT]","_start [ANIMATE] animation":"inizia animazione [ANIMATE]","_text [ATTRIBUTE]":"[ATTRIBUTE] del testo","_type":"effetto digitazione","_typing delay":"intervallo effetto digitazione","_zoom":"effetto zoom"},"ja":{"_# of lines":"行数","_Animated Text":"アニメーションテキスト","_Enable Non-Scratch Lab Features":"Scratch Lab以外の機能を有効にする","_Hello!":"こんにちは!","_Here we go!":"さぁ行こう!","_Incompatible with Scratch Lab:":"Scratch Labとの互換性なし","_Welcome to my project!":"プロジェクトへようこそ!","_[ANIMATE] duration":"[ANIMATE]の長さ","_[ANIMATE] text [TEXT]":"[ANIMATE]アニメーションでテキスト[TEXT]を表示する","_add line [TEXT]":"行を追加して[TEXT]を表示する","_align text to [ALIGN]":"テキストを[ALIGN]寄りにする","_animate [ANIMATE] until done":"アニメーション[ANIMATE]を開始して待つ","_center":"中央","_displayed text":"表示されているテキスト","_is animating?":"アニメーションしている?","_is showing text?":"テキストが表示されているか?","_left":"左","_rainbow":"レインボー","_random font":"ランダムなフォント","_reset [ANIMATE] duration":"アニメーション[ANIMATE]の長さをリセットする","_reset text width":"テキストの幅をリセットする","_reset typing delay":"タイピングアニメーションの間隔をリセット","_right":"右","_set [ANIMATE] duration to [NUM] seconds":"アニメーション[ANIMATE]の長さを[NUM]秒にする","_set font to [FONT]":"フォントを[FONT]にする","_set text color to [COLOR]":"テキストの色を[COLOR]にする","_set typing delay to [NUM] seconds":"タイピングアニメーションの間隔を[NUM]秒にする","_set width to [WIDTH]":"幅を[WIDTH]にする","_set width to [WIDTH] aligned [ALIGN]":"テキストの幅を[WIDTH]、[ALIGN]寄せにする","_show sprite":"スプライトを表示","_show text [TEXT]":"テキスト[TEXT]を表示する","_start [ANIMATE] animation":"アニメーション[ANIMATE]を開始する","_text [ATTRIBUTE]":"テキストの[ATTRIBUTE]","_type":"タイピング","_typing delay":"タイピングアニメーションの間隔","_zoom":"ズーム","disableCompatibilityMode":"これはScratch Labでは動かないブロックや機能を有効にします。\n\n続行しますか?"},"ko":{"_Hello!":"안녕!"},"nb":{"_# of lines":"# av linjer","_Animated Text":"Animert Tekst","_Enable Non-Scratch Lab Features":"Aktiver funksjoner som er ikke tilgjengelig i scratch lab","_Hello!":"Hei!","_Here we go!":"Her går vi!","_Incompatible with Scratch Lab:":"Inkompatibel med Scratch Lab.","_Welcome to my project!":"Velkommen til mitt prosjekt!","_[ANIMATE] duration":"[ANIMATE] varighet","_[ANIMATE] text [TEXT]":"[ANIMATE] tekst [TEXT]","_add line [TEXT]":"legg til linje [TEXT]","_align text to [ALIGN]":"juster teksten til [ALIGN]","_animate [ANIMATE] until done":"animere [ANIMATE] til ferdig","_center":"senter","_displayed text":"vist tekst","_is animating?":"er animerer?","_is showing text?":"viser teksten?","_left":"venstre","_rainbow":"regnbue","_random font":"tilfeldig skrifttype","_reset [ANIMATE] duration":"tilbakestill [ANIMATE] varighet","_reset text width":"tilbakestill tekstbredde","_reset typing delay":"nullstill skriveforsinkelse","_right":"riktig","_set [ANIMATE] duration to [NUM] seconds":"sett [ANIMATE] varighet til [NUM] sekunder","_set font to [FONT]":"sett skrifttype til [FONT]","_set text color to [COLOR]":"sett tekstfarge til [COLOR]","_set typing delay to [NUM] seconds":"sett skriveforsinkelse til [NUM] sekunder","_set width to [WIDTH]":"sett bredde til [WIDTH]","_set width to [WIDTH] aligned [ALIGN]":"sett bredde til [WIDTH] justert [ALIGN]","_show sprite":"vis sprite","_show text [TEXT]":"vis tekst [TEXT]","_start [ANIMATE] animation":"start [ANIMATE] animasjon","_text [ATTRIBUTE]":"tekst [ATTRIBUTE]","_typing delay":"skriveforsinkelse","disableCompatibilityMode":"Dette vil aktivere nye blokker og funksjoner som ikke vil fungere i den offisielle Scratch Lab.\n\nØnsker du å fortsette?"},"nl":{"_# of lines":"aantal regels","_# of lines [WITH_WORD_WRAP]":"aantal regels [WITH_WORD_WRAP]","_Animated Text":"Geanimeerde tekst","_Enable Non-Scratch Lab Features":"Niet-Scratch Lab Functies Inschakelen","_Hello!":"Hallo!","_Here we go!":"Daar gaan we!","_Incompatible with Scratch Lab:":"Incompatibel met Scratch Lab:","_Welcome to my project!":"Welkom bij mijn project!","_[ANIMATE] duration":"duur van [ANIMATE]","_[ANIMATE] text [TEXT]":"[ANIMATE] tekst [TEXT]","_add line [TEXT]":"voeg regel [TEXT] toe","_align text to [ALIGN]":"lijn tekst [ALIGN] uit","_animate [ANIMATE] until done":"start animatie [ANIMATE] en wacht","_center":"midden","_displayed text":"weergegeven tekst","_is animating?":"animatie bezig?","_is showing text?":"tekst aan het tonen?","_left":"links","_rainbow":"regenboog","_random font":"willekeurig lettertype","_reset [ANIMATE] duration":"reset duur van [ANIMATE]","_reset text width":"reset tekstbreedte","_reset typing delay":"reset wachttijd van typ-animatie","_right":"rechts","_set [ANIMATE] duration to [NUM] seconds":"maak duur van [ANIMATE] [NUM] seconden","_set font to [FONT]":"maak lettertype [FONT]","_set text color to [COLOR]":"maak tekstkleur [COLOR]","_set typing delay to [NUM] seconds":"maak wachttijd van typ-animatie [NUM] seconden","_set width to [WIDTH]":"maak breedte [WIDTH]","_set width to [WIDTH] aligned [ALIGN]":"maak breedte [WIDTH] [ALIGN] uitgelijnd","_show sprite":"toon sprite","_show text [TEXT]":"toon tekst [TEXT]","_start [ANIMATE] animation":"start animatie [ANIMATE]","_text [ATTRIBUTE]":"[ATTRIBUTE] van tekst","_type":"typen","_typing delay":"wachttijd van typ-animatie","_with word wrap":"met tekstterugloop","_without word wrap":"zonder tekstterugloop","disableCompatibilityMode":"Dit voegt nieuwe blokken en functies toe die NIET werken in het officiële Scratch Lab.\n\nWil je verdergaan?"},"ru":{"_# of lines":"кол-во строк","_Animated Text":"Анимированный Текст","_Enable Non-Scratch Lab Features":"Включить функции не из Scratch Lab","_Hello!":"Привет!","_Here we go!":"Поехали!","_Incompatible with Scratch Lab:":"Несовместимо со Scratch Lab:","_Welcome to my project!":"Добро пожаловать в мой проект!","_[ANIMATE] duration":"продолжительность анимации [ANIMATE] ","_[ANIMATE] text [TEXT]":"[ANIMATE] текст [TEXT]","_add line [TEXT]":"добавить строку [TEXT]","_align text to [ALIGN]":"выровнять текст по [ALIGN]","_animate [ANIMATE] until done":"анимировать [ANIMATE] текст до конца","_center":"центру","_displayed text":"показанный текст","_is animating?":"анимируется?","_is showing text?":"показывает текст?","_left":"левому краю","_rainbow":"радужный","_random font":"случайный шрифт","_reset [ANIMATE] duration":"сбросить продолжительность анимации [ANIMATE]","_reset text width":"сбросить ширину текста","_reset typing delay":"сбросить задержку печатания","_right":"правому краю","_set [ANIMATE] duration to [NUM] seconds":"задать продолжительность анимации [ANIMATE] в [NUM] секунд","_set font to [FONT]":"задать шрифт в [FONT]","_set text color to [COLOR]":"задать цвет текста в [COLOR]","_set typing delay to [NUM] seconds":"задать задержку печатания в [NUM] секунд","_set width to [WIDTH]":"задать ширину в [WIDTH]","_set width to [WIDTH] aligned [ALIGN]":"задать ширину в [WIDTH] выровненную по [ALIGN]","_show sprite":"показать спрайт","_show text [TEXT]":"показать текст [TEXT]","_start [ANIMATE] animation":"начать анимацию [ANIMATE] текст","_text [ATTRIBUTE]":"[ATTRIBUTE] текста","_type":"печатающийся","_typing delay":"задержка печатания","_zoom":"вырастающий","disableCompatibilityMode":"Это включит новые блоки и особенности которые НЕ БУДУТ РАБОТАТЬ в официальной лаборатории Scratch.\n\nВы желаете продолжить?"},"uk":{"_Animated Text":"Анімований Текст","_left":"ліву","_right":"праву"},"zh-cn":{"_# of lines":"文本行数","_# of lines [WITH_WORD_WRAP]":"[WITH_WORD_WRAP]时的行数","_Animated Text":"艺术字","_Enable Non-Scratch Lab Features":"显示与Scratch Lab不兼容的积木","_Hello!":"你好！","_Here we go!":"现在出发！","_Incompatible with Scratch Lab:":"以下积木与Scratch Lab不兼容：","_Welcome to my project!":"欢迎来到我的作品！","_[ANIMATE] duration":"动画样式[ANIMATE]的完成时间","_[ANIMATE] text [TEXT]":"显示动画样式是[ANIMATE]的文本[TEXT]","_add line [TEXT]":"增加一行文本[TEXT]","_align text to [ALIGN]":"设置文本的展示样式为[ALIGN]","_animate [ANIMATE] until done":"显示动画样式[ANIMATE]并等待","_center":"居中","_displayed text":"显示的文本","_is animating?":"正在显示艺术字？","_is showing text?":"文本显示了？","_left":"居左","_rainbow":"彩虹色","_random font":"随机字体","_reset [ANIMATE] duration":"重置动画样式[ANIMATE]的完成时间","_reset text width":"重置文本宽度","_reset typing delay":"重置逐字显示速度","_right":"居右","_set [ANIMATE] duration to [NUM] seconds":"设置动画样式[ANIMATE]的完成时间是[NUM]秒","_set font to [FONT]":"设置文本的字体为[FONT]","_set text color to [COLOR]":"设置文本的颜色为[COLOR]","_set typing delay to [NUM] seconds":"设置逐字显示速度为[NUM]秒/字","_set width to [WIDTH]":"设置文本的宽度为[WIDTH]","_set width to [WIDTH] aligned [ALIGN]":"设置[ALIGN]样式的宽度为[WIDTH]","_show sprite":"显示角色","_show text [TEXT]":"显示文本[TEXT]","_start [ANIMATE] animation":"显示动画样式[ANIMATE]","_text [ATTRIBUTE]":"文本的[ATTRIBUTE]","_type":"逐字显示","_typing delay":"逐字显示速度","_with word wrap":"有自动换行","_without word wrap":"不换行","_zoom":"移动动画","disableCompatibilityMode":"这将会启用新的功能，这些积木是不兼容Scratch Lab。\n\n是否启用新功能？"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  // This extension was created by making projects with https://lab.scratch.mit.edu/text/
  // To determine block and argument IDs, we extracted project.json and examined the result.
  // To determine block behaviors we simply experiment with Scratch Lab and made sure our
  // blocks do the same things.
  // This extension's code is not based on the source code of Scratch Lab's.

  // by @LilyMakesThings
  const blockIconURI =
    "data:image/svg+xml;,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22284.242%22%20height%3D%22284.242%22%3E%3Cg%20fill-rule%3D%22evenodd%22%20stroke-miterlimit%3D%2210%22%20data-paper-data%3D%22%7B%26quot%3BisPaintingLayer%26quot%3B%3Atrue%7D%22%20style%3D%22mix-blend-mode%3Anormal%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M188.894%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.48%209.888a1671.47%201671.47%200%200%200-4.174%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.83%20522.83%200%200%201-4.065-11.242%20408.343%20408.343%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.519-56.092%2062.329%20157.508H225.43l-9.636-26.111h-54.08l-9.636%2026.11h-43.432l62.768-157.507Z%22%2F%3E%3Cpath%20fill%3D%22%2396f%22%20stroke%3D%22%237240d6%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2229%22%20d%3D%22M188.894%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.48%209.888a1671.47%201671.47%200%200%200-4.174%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.83%20522.83%200%200%201-4.065-11.242%20408.343%20408.343%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.519-56.092%2062.329%20157.508H225.43l-9.636-26.111h-54.08l-9.636%2026.11h-43.432l62.768-157.507Z%22%2F%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M188.894%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.48%209.888a1671.47%201671.47%200%200%200-4.174%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.827%20522.827%200%200%201-4.065-11.242%20408.302%20408.302%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.519-56.092%2062.329%20157.508H225.43l-9.636-26.111h-54.08l-9.636%2026.11h-43.432l62.768-157.507Z%22%2F%3E%3Cpath%20fill%3D%22%23ffa24d%22%20stroke%3D%22%23fff%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%229%22%20d%3D%22M188.894%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.48%209.888a1671.47%201671.47%200%200%200-4.174%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.827%20522.827%200%200%201-4.065-11.242%20408.302%20408.302%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.519-56.092%2062.329%20157.508H225.43l-9.636-26.111h-54.08l-9.636%2026.11h-43.432l62.768-157.507Z%22%2F%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M143.696%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.479%209.888a1671.47%201671.47%200%200%200-4.175%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.827%20522.827%200%200%201-4.065-11.242%20408.343%20408.343%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.519-56.092%2062.33%20157.508h-44.312l-9.637-26.111h-54.08l-9.636%2026.11H63.448l62.768-157.507Z%22%2F%3E%3Cpath%20fill%3D%22%2396f%22%20stroke%3D%22%237240d6%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2229%22%20d%3D%22M143.696%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.479%209.888a1671.47%201671.47%200%200%200-4.175%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.827%20522.827%200%200%201-4.065-11.242%20408.343%20408.343%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.519-56.092%2062.33%20157.508h-44.312l-9.637-26.111h-54.08l-9.636%2026.11H63.448l62.768-157.507Z%22%2F%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M143.696%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.479%209.888a1671.47%201671.47%200%200%200-4.175%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.827%20522.827%200%200%201-4.065-11.242%20408.343%20408.343%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.519-56.092%2062.33%20157.508h-44.312l-9.637-26.111h-54.08l-9.636%2026.11H63.448l62.768-157.507Z%22%2F%3E%3Cpath%20fill%3D%22%23ff774d%22%20stroke%3D%22%23fff%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%229%22%20d%3D%22M143.696%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.479%209.888a1671.47%201671.47%200%200%200-4.175%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.827%20522.827%200%200%201-4.065-11.242%20408.343%20408.343%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.519-56.092%2062.33%20157.508h-44.312l-9.637-26.111h-54.08l-9.636%2026.11H63.448l62.768-157.507Z%22%2F%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M94.748%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.479%209.888-1.27%203.442-2.66%207.263-4.175%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.885%20522.885%200%200%201-4.065-11.242%20408.343%20408.343%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.52-56.092%2062.328%20157.508h-44.311l-9.637-26.111h-54.08l-9.635%2026.11H14.5L77.269%2063.368Z%22%2F%3E%3Cpath%20fill%3D%22%2396f%22%20stroke%3D%22%237240d6%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2229%22%20d%3D%22M94.748%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.479%209.888-1.27%203.442-2.66%207.263-4.175%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.885%20522.885%200%200%201-4.065-11.242%20408.343%20408.343%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.52-56.092%2062.328%20157.508h-44.311l-9.637-26.111h-54.08l-9.635%2026.11H14.5L77.269%2063.368Z%22%2F%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M94.748%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.479%209.888-1.27%203.442-2.66%207.263-4.175%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.885%20522.885%200%200%201-4.065-11.242%20408.302%20408.302%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.52-56.092%2062.328%20157.508h-44.311l-9.637-26.111h-54.08l-9.635%2026.11H14.5L77.269%2063.368Z%22%2F%3E%3Cpath%20fill%3D%22%23ff4c4c%22%20stroke%3D%22%23fff%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%229%22%20d%3D%22M94.748%20119.459c-.706%202.378-1.43%204.69-2.172%206.933-1.05%203.15-2.21%206.445-3.479%209.888-1.27%203.442-2.66%207.263-4.175%2011.462l-5.73%2015.528h30.833l-5.73-15.528a522.885%20522.885%200%200%201-4.065-11.242%20408.302%20408.302%200%200%201-3.37-10.108%20350.767%20350.767%200%200%201-2.112-6.933zm18.52-56.092%2062.328%20157.508h-44.311l-9.637-26.111h-54.08l-9.635%2026.11H14.5L77.269%2063.368Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

  const CUSTOM_STATE_KEY = Symbol();

  const ALIGN_LEFT = 0;
  const ALIGN_RIGHT = 1;
  const ALIGN_CENTER = 2;

  const vm = Scratch.vm;
  const renderer = vm.renderer;
  const gl = renderer.gl;

  let compatibilityMode = true;

  const FONTS = [
    "Sans Serif",
    "Serif",
    "Handwriting",
    "Marker",
    "Curly",
    "Pixel",
    "Scratch",
  ];

  const DEFAULT_COLOR = "#575e75";
  const DEFAULT_FONT = "Handwriting";
  const DEFAULT_ALIGN = ALIGN_CENTER;
  const DEFAULT_FONT_SIZE = 24;
  const DEFAULT_OUTLINE_WIDTH = 0; // 0 = no outline
  const DEFAULT_OUTLINE_COLOR = "#000000";

  const DEFAULT_TYPE_DELAY = 1000 / 15;

  const RAINBOW_TIME_PER = 1000;
  const DEFAULT_RAINBOW_DURATION = 2000;

  const DEFAULT_ZOOM_DURATION = 500;

  const DEFAULT_SHAKE_INTENSITY = 100;
  const DEFAULT_SHAKE_DURATION = 500;

  let globalFrameTime = 0;

  /**
   * @typedef TextState
   * @property {TextCostumeSkin} skin
   */

  // temporary
  if (!renderer.exports || !renderer.exports.Skin || !vm.exports) {
    alert("VM is too old for animated text extension");
    throw new Error("VM is too old");
  }

  const Skin = renderer.exports.Skin;
  const CanvasMeasurementProvider = renderer.exports.CanvasMeasurementProvider;
  const twgl = renderer.exports.twgl;
  const RenderedTarget = vm.exports.RenderedTarget;

  /**
   * @param {number} c
   * @returns {string}
   */
  const formatComponent = (c) => Math.round(c).toString(16).padStart(2, "0");

  /**
   * @param {[number, number, number]} color
   * @returns {string}
   */
  const formatColor = (color) =>
    `#${formatComponent(color[0])}${formatComponent(color[1])}${formatComponent(
      color[2]
    )}`;

  /**
   * @param {number} h hue from 0-1
   * @param {number} s saturation from 0-1
   * @param {number} v value from 0-1
   * @returns {[number, number, number]} RGB channels from 0-255
   */
  const hsvToRGB = (h, s, v) => {
    // https://en.wikipedia.org/wiki/HSL_and_HSV
    var r, g, b;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        (r = v), (g = t), (b = p);
        break;
      case 1:
        (r = q), (g = v), (b = p);
        break;
      case 2:
        (r = p), (g = v), (b = t);
        break;
      case 3:
        (r = p), (g = q), (b = v);
        break;
      case 4:
        (r = t), (g = p), (b = v);
        break;
      case 5:
        (r = v), (g = p), (b = q);
        break;
    }
    return [(r * 255) | 0, (g * 255) | 0, (b * 255) | 0];
  };

  /**
   * @param {CanvasGradient} gradient
   * @param {number} offset number of cycles to offset by
   */
  const addRainbowStops = (gradient, offset) => {
    const NUMBER_STOPS = 20;
    for (let i = 0; i < NUMBER_STOPS; i++) {
      const exactPosition = i / NUMBER_STOPS;
      let offsetPosition = (exactPosition - offset) % 1;
      if (offsetPosition < 0) {
        offsetPosition += 1;
      }
      const rgb = hsvToRGB(offsetPosition, 1, 1);
      gradient.addColorStop(exactPosition, formatColor(rgb));
    }
  };

  class TextCostumeSkin extends Skin {
    constructor(id, drawable) {
      super(id, renderer);

      /** @type {RenderWebGL.Drawable} */
      this.drawable = drawable;
      /** @type {number} */
      this._previousDrawableXScale = 100;

      this.canvas = document.createElement("canvas");
      this.canvas.width = 0;
      this.canvas.height = 0;
      this.ctx = this.canvas.getContext("2d");

      this.text = "";
      this.color = DEFAULT_COLOR;
      this.textWidth = vm.runtime.stageWidth;
      this.fontFamily = DEFAULT_FONT;
      this.baseFontSize = DEFAULT_FONT_SIZE;
      this.align = DEFAULT_ALIGN;
      this.outlineWidth = DEFAULT_OUTLINE_WIDTH;
      this.outlineColor = DEFAULT_OUTLINE_COLOR;

      /** @type {Array<{text: string; width: number;}>} */
      this.lines = [];
      /** @type {[number, number]} */
      this._size = [0, 0];
      /** @type {[number, number]} */
      this._rotationCenter = [0, 0];

      // Updated in _updateFontDimensions
      this.calculatedFontSize = 0;
      this.lineHeight = 0;
      this.verticalPadding = 0;
      this.wrapWidth = 0;

      this._textDirty = false;
      this._textureDirty = false;
      this._renderedAtScale = 1;
      this._renderTime = 0;
      this._reflowTime = 0;

      this.isTyping = false;
      this.typeAnimationInterval = null;
      this.typeDelay = DEFAULT_TYPE_DELAY;

      this.isRainbow = false;
      this.rainbowStartTime = 0;
      this.rainbowTimeout = null;
      this.rainbowDuration = DEFAULT_RAINBOW_DURATION;

      this.isZooming = false;
      this.zoomStartTime = 0;
      this.zoomTimeout = null;
      this.zoomDuration = DEFAULT_ZOOM_DURATION;

      this.isShaking = false;
      this.shakeStartTime = 0;
      this.shakeTimeout = null;
      this.shakeDuration = DEFAULT_SHAKE_DURATION;
      this.shakeIntensity = DEFAULT_SHAKE_INTENSITY;

      /** @type {(() => void)|null} */
      this.resolveOngoingAnimation = null;
    }

    // Part of Skin API
    dispose() {
      if (this._texture) {
        gl.deleteTexture(this._texture);
        this._texture = null;
      }
      this.canvas = null;
      this.ctx = null;
      super.dispose();
    }

    // Part of Skin API
    get size() {
      if (this._needsReflow()) {
        this._reflowText();
      }
      return this._size;
    }

    // Part of Skin API
    useNearest() {
      return false;
    }

    _needsReflow() {
      return (
        this._textDirty ||
        (this.isZooming && this._reflowTime !== globalFrameTime) ||
        (this.isShaking && this._reflowTime !== globalFrameTime) ||
        this._previousDrawableXScale !== Math.abs(this.drawable.scale[0])
      );
    }

    _updateFontDimensions() {
      this.calculatedFontSize = this.baseFontSize;
      if (this.isZooming) {
        // TODO: it looks like Scratch's animation always starts at least a little visible
        const time = globalFrameTime - this.zoomStartTime;
        const progress = Math.max(0, Math.min(1, time / this.zoomDuration));
        this.calculatedFontSize *= progress;
      }
      this.lineHeight = (this.baseFontSize * 8) / 7;
      // Always use the base size for padding. This makes the zoom animation look better.
      this.verticalPadding = this.baseFontSize / 7;
      // Only use horizontal scale for wrap width for compatibility with stretch extension.
      this.wrapWidth =
        this.textWidth / (Math.abs(this.drawable.scale[0]) / 100);
    }

    _getFontStyle() {
      return `${this.calculatedFontSize}px ${this.fontFamily}, sans-serif`;
    }

    _reflowText() {
      this._textDirty = false;
      this._textureDirty = true;
      this._reflowTime = globalFrameTime;
      this._previousDrawableXScale = Math.abs(this.drawable.scale[0]);

      this._updateFontDimensions();
      this.ctx.font = this._getFontStyle();

      // need to make new ones each time to avoid caching incorrectly across fonts
      const measurementProvider = new CanvasMeasurementProvider(this.ctx);
      /** @type {RenderWebGL.TextWrapper} */
      const textWrapper = renderer.createTextWrapper(measurementProvider);

      const lines = textWrapper.wrapText(this.wrapWidth, this.text);
      this.lines = lines.map((line) => {
        const trimmed = line.trimEnd();
        return {
          text: trimmed,
          width: measurementProvider.measureText(trimmed),
        };
      });

      this._size[0] = this.wrapWidth + 2 * this.outlineWidth;
      this._size[1] =
        this.lines.length * this.lineHeight +
        2 * this.verticalPadding +
        2 * this.outlineWidth;

      // Centered horizontally
      this._rotationCenter[0] = this._size[0] / 2;
      // Vertical center is roughly below the first line of text
      this._rotationCenter[1] =
        this.calculatedFontSize * 0.9 +
        this.verticalPadding +
        this.outlineWidth;

      if (this.isShaking) {
        const padding = Math.max(0, this.shakeIntensity / 20);
        // offsets should be in range [-padding, +padding]
        this._rotationCenter[0] += 2 * Math.random() * padding - padding;
        this._rotationCenter[1] += 2 * Math.random() * padding - padding;
      }
    }

    _renderAtScale(requestedScale) {
      this._renderedAtScale = requestedScale;
      this._textureDirty = false;
      this._renderTime = globalFrameTime;

      const scratchWidth = this._size[0];
      const scratchHeight = this._size[1];

      // Renderer's requested scale is accounted for at this point. Do not touch `requestedScale`
      // ever after this point.
      this.canvas.width = Math.ceil(scratchWidth * requestedScale);
      this.canvas.height = Math.ceil(scratchHeight * requestedScale);
      this.ctx.scale(requestedScale, requestedScale);

      this.ctx.translate(this.outlineWidth, this.outlineWidth);

      const rainbowOffset = this.isRainbow
        ? (globalFrameTime - this.rainbowStartTime) / RAINBOW_TIME_PER
        : 0;
      this.ctx.fillStyle = this.color;
      this.ctx.font = this._getFontStyle();
      for (let i = 0; i < this.lines.length; i++) {
        const line = this.lines[i];
        const text = line.text;
        const lineWidth = line.width;

        let xOffset;
        const yOffset =
          this.verticalPadding + i * this.lineHeight + this.baseFontSize;
        if (this.align === ALIGN_LEFT) {
          xOffset = 0;
        } else if (this.align === ALIGN_CENTER) {
          xOffset = (this.wrapWidth - lineWidth) / 2;
        } else {
          xOffset = this.wrapWidth - lineWidth;
        }

        if (this.isRainbow) {
          const gradient = this.ctx.createLinearGradient(
            xOffset,
            0,
            xOffset + lineWidth,
            0
          );
          addRainbowStops(gradient, rainbowOffset);
          this.ctx.fillStyle = gradient;
        }

        if (this.outlineWidth > 0) {
          this.ctx.lineWidth = this.outlineWidth;
          this.ctx.strokeStyle = this.outlineColor;
          this.ctx.lineCap = "round";
          this.ctx.lineJoin = "round";
          this.ctx.strokeText(text, xOffset, yOffset);
        }

        // TODO: we're still a few pixels off of Scratch Lab
        this.ctx.fillText(text, xOffset, yOffset);
      }

      if (!this._texture) {
        // @ts-expect-error - twgl not typed yet
        this._texture = twgl.createTexture(gl, {
          auto: false,
          wrap: gl.CLAMP_TO_EDGE,
        });
      }
      this._setTexture(this.canvas);
    }

    _invalidateTexture() {
      this._textureDirty = true;
      this._renderTime = 0;
      this.emitWasAltered();
    }

    _invalidateText() {
      this._textDirty = true;
      this._textureDirty = true;
      this._reflowTime = 0;
      this.emitWasAltered();
    }

    setText(text) {
      if (text !== this.text) {
        this.text = text;
        this._invalidateText();
      }
    }

    setColor(color) {
      if (color !== this.color) {
        this.color = color;
        this._invalidateTexture();
      }
    }

    setOutlineColor(color) {
      if (color !== this.color) {
        this.outlineColor = color;
        this._invalidateTexture();
      }
    }

    setOutlineWidth(width) {
      this.outlineWidth = width;
      this._invalidateText();
    }

    setAlign(align) {
      if (align !== this.align) {
        this.align = align;
        this._invalidateTexture();
      }
    }

    setWidth(width) {
      if (width !== this.textWidth) {
        this.textWidth = width;
        this._invalidateText();
      }
    }

    setFontFamily(font) {
      if (font !== this.fontFamily) {
        this.fontFamily = font;
        this._invalidateText();
      }
    }

    getFontFamily() {
      return this.fontFamily;
    }

    getColor() {
      return this.color;
    }

    getWidth() {
      return this.textWidth;
    }

    getOutlineColor() {
      return this.outlineColor;
    }

    getOutlineWidth() {
      return this.outlineWidth;
    }

    getAlign() {
      return this.align;
    }

    _oneAnimationAtATime(newCallback) {
      this.cancelAnimation();
      return new Promise((resolve) => {
        this.resolveOngoingAnimation = () => {
          this.resolveOngoingAnimation = null;
          resolve();
        };
        newCallback(this.resolveOngoingAnimation);
      });
    }

    startTypeAnimation() {
      return this._oneAnimationAtATime((resolve) => {
        this.isTyping = true;
        const originalText = this.text;
        let i = 1;
        const update = () => {
          this.setText(originalText.substring(0, i));
        };
        update();

        this.typeAnimationInterval = setInterval(() => {
          i++;
          update();
          if (i >= originalText.length) {
            clearInterval(this.typeAnimationInterval);
            this.isTyping = false;
            resolve();
          }
        }, this.typeDelay);
      });
    }

    setTypeDelay(delay) {
      this.typeDelay = delay;
    }

    startRainbowAnimation() {
      return this._oneAnimationAtATime((resolve) => {
        this.isRainbow = true;
        this.rainbowStartTime = Date.now();
        this._invalidateTexture();
        this.rainbowTimeout = setTimeout(() => {
          this.isRainbow = false;
          resolve();
          this._invalidateTexture();
        }, this.rainbowDuration);
      });
    }

    setRainbowDuration(duration) {
      this.rainbowDuration = duration;
    }

    startZoomAnimation() {
      return this._oneAnimationAtATime((resolve) => {
        this.isZooming = true;
        this.zoomStartTime = Date.now();
        this._invalidateText();
        this.zoomTimeout = setTimeout(() => {
          this.isZooming = false;
          resolve();
          this._invalidateText();
        }, this.zoomDuration);
      });
    }

    setZoomDuration(duration) {
      this.zoomDuration = duration;
    }

    startShakeAnimation() {
      return this._oneAnimationAtATime((resolve) => {
        this.isShaking = true;
        this.shakeStartTime = Date.now();
        // TODO: _invalidateText() is not smart enough to realize that we don't need to actually
        // do a full reflow, just update rotation center...
        this._invalidateText();
        this.shakeTimeout = setTimeout(() => {
          this.isShaking = false;
          resolve();
          this._invalidateText();
        }, this.shakeDuration);
      });
    }

    setShakeDuration(duration) {
      this.shakeDuration = duration;
    }

    setShakeIntensity(intensity) {
      this.shakeIntensity = intensity;
    }

    cancelAnimation() {
      if (this.resolveOngoingAnimation) {
        this.resolveOngoingAnimation();
        this.resolveOngoingAnimation = null;

        this.isTyping = false;
        clearInterval(this.typeAnimationInterval);

        this.isRainbow = false;
        clearTimeout(this.rainbowTimeout);

        this.isZooming = false;
        clearTimeout(this.zoomTimeout);

        this.isShaking = false;
        clearTimeout(this.shakeTimeout);

        // TODO: sometimes we only need to invalidate the texture at this point
        this._invalidateText();
      }
    }

    // Part of Skin API
    updateSilhouette(scale) {
      this.getTexture(scale);
      this._silhouette.unlazy();
    }

    // Part of Skin API
    getTexture(scale) {
      const MAX_SCALE = 10;
      const upperScale = scale
        ? Math.max(Math.abs(scale[0]), Math.abs(scale[1]))
        : 100;
      const calculatedScale = Math.min(MAX_SCALE, upperScale / 100);

      if (this._needsReflow()) {
        this._reflowText();
      }
      if (
        this._textureDirty ||
        (this.isRainbow && this._renderTime !== globalFrameTime) ||
        calculatedScale !== this._renderedAtScale
      ) {
        this._renderAtScale(calculatedScale);
      }

      return this._texture;
    }
  }

  /**
   * Note that the returned skin is only usable by the given target. Things will break if another
   * target tries to use it.
   * @param {VM.Target} target
   * @returns {TextCostumeSkin}
   */
  const createTextCostumeSkin = (target) => {
    const drawable = renderer._allDrawables[target.drawableID];
    const id = renderer._nextSkinId++;
    const skin = new TextCostumeSkin(id, drawable);
    renderer._allSkins[id] = skin;
    return skin;
  };

  vm.runtime.on("BEFORE_EXECUTE", () => {
    globalFrameTime = Date.now();

    for (let i = 0; i < renderer._allSkins.length; i++) {
      const skin = renderer._allSkins[i];
      if (
        skin instanceof TextCostumeSkin &&
        (skin.isRainbow || skin.isZooming || skin.isShaking)
      ) {
        skin.emitWasAltered();
      }
    }
  });

  class AnimatedText {
    constructor() {
      vm.runtime.on("PROJECT_START", () => {
        this._hideAllText();
      });

      vm.runtime.on("PROJECT_STOP_ALL", () => {
        this._hideAllText();
      });

      // targetWasCreated does not work because it runs before the Drawable is set up
      const extension = this;
      const originalMakeClone = RenderedTarget.prototype.makeClone;
      RenderedTarget.prototype.makeClone = function () {
        const newClone = originalMakeClone.call(this);
        if (extension._hasState(this)) {
          // TODO: creates much unneeded state
          const originalSkin = extension._getState(this).skin;
          const newSkin = extension._getState(newClone).skin;
          newSkin.setAlign(originalSkin.align);
          newSkin.setColor(originalSkin.color);
          newSkin.setFontFamily(originalSkin.fontFamily);
          newSkin.setWidth(originalSkin.textWidth);
          newSkin.setText(originalSkin.text);
          newSkin.setRainbowDuration(originalSkin.rainbowDuration);
          newSkin.setZoomDuration(originalSkin.zoomDuration);
          newSkin.setTypeDelay(originalSkin.typeDelay);
          if (
            renderer._allDrawables[this.drawableID].skin instanceof
            TextCostumeSkin
          ) {
            renderer.updateDrawableSkinId(newClone.drawableID, newSkin.id);
          }
        }
        return newClone;
      };

      vm.runtime.on("targetWasRemoved", (target) => {
        if (this._hasState(target)) {
          const state = this._getState(target);
          renderer.destroySkin(state.skin.id);
        }
      });
    }

    getInfo() {
      return {
        id: "text",
        name: Scratch.translate("Animated Text"),
        color1: "#9966FF",
        blockIconURI: blockIconURI,
        blocks: [
          {
            opcode: "setText",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("show text [TEXT]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Welcome to my project!"),
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "animateText",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("[ANIMATE] text [TEXT]"),
            arguments: {
              ANIMATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "animate",
                defaultValue: "rainbow",
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Here we go!"),
              },
            },
            extensions: ["colours_looks"],
            hideFromPalette: !compatibilityMode,
          },
          {
            opcode: "animateTextInput",
            func: "animateText",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("[ANIMATE] text [TEXT]"),
            arguments: {
              ANIMATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "twAnimate",
                defaultValue: "rainbow",
              },
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Here we go!"),
              },
            },
            extensions: ["colours_looks"],
            hideFromPalette: compatibilityMode,
          },
          {
            opcode: "clearText",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("show sprite"),
            extensions: ["colours_looks"],
          },
          "---",
          {
            opcode: "setFont",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set font to [FONT]"),
            arguments: {
              FONT: {
                type: Scratch.ArgumentType.STRING,
                menu: "font",
              },
            },
            extensions: ["colours_looks"],
            hideFromPalette: !compatibilityMode,
          },
          {
            opcode: "setFontInput",
            func: "setFont",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set font to [FONT]"),
            arguments: {
              FONT: {
                type: Scratch.ArgumentType.STRING,
                menu: "twFont",
              },
            },
            extensions: ["colours_looks"],
            hideFromPalette: compatibilityMode,
          },
          {
            opcode: "setColor",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set text color to [COLOR]"),
            arguments: {
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "setWidth",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set width to [WIDTH] aligned [ALIGN]"),
            arguments: {
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "200",
              },
              ALIGN: {
                type: Scratch.ArgumentType.STRING,
                menu: "align",
              },
            },
            extensions: ["colours_looks"],
            hideFromPalette: !compatibilityMode,
          },
          {
            opcode: "setWidthInput",
            func: "setWidth",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set width to [WIDTH] aligned [ALIGN]"),
            arguments: {
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "200",
              },
              ALIGN: {
                type: Scratch.ArgumentType.STRING,
                menu: "twAlign",
              },
            },
            extensions: ["colours_looks"],
            hideFromPalette: compatibilityMode,
          },
          "---",

          /**
           * Contributors:
           * - LilyMakesThings
           */

          {
            func: "disableCompatibilityMode",
            blockType: Scratch.BlockType.BUTTON,
            text: Scratch.translate("Enable Non-Scratch Lab Features"),
            hideFromPalette: !compatibilityMode,
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: Scratch.translate("Incompatible with Scratch Lab:"),
            hideFromPalette: compatibilityMode,
          },
          {
            opcode: "setOutlineWidth",
            blockType: Scratch.BlockType.COMMAND,
            text: "set outline width to [WIDTH]",
            hideFromPalette: compatibilityMode,
            arguments: {
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "3",
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "setOutlineColor",
            blockType: Scratch.BlockType.COMMAND,
            text: "set outline color to [COLOR]",
            hideFromPalette: compatibilityMode,
            arguments: {
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
              },
            },
            extensions: ["colours_looks"],
          },
          "---",
          {
            opcode: "addLine",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("add line [TEXT]"),
            hideFromPalette: compatibilityMode,
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Hello!"),
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "getLines",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("# of lines"),
            hideFromPalette: true,
            disableMonitor: true,
            extensions: ["colours_looks"],
          },
          {
            opcode: "getLinesV2",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({
              default: "# of lines [WITH_WORD_WRAP]",
              description:
                "[WITH_WORD_WRAP] is a menu with choices 'with word wrap' and 'without word wrap'",
            }),
            hideFromPalette: compatibilityMode,
            arguments: {
              WITH_WORD_WRAP: {
                type: Scratch.ArgumentType.STRING,
                menu: "twWordWrap",
              },
            },
            disableMonitor: true,
            extensions: ["colours_looks"],
          },
          "---",
          {
            opcode: "setAlignment",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("align text to [ALIGN]"),
            hideFromPalette: compatibilityMode,
            arguments: {
              ALIGN: {
                type: Scratch.ArgumentType.STRING,
                menu: "twAlign",
              },
            },
            extensions: ["colours_looks"],
          },
          {
            // why is the other block called "setWidth" :(
            opcode: "setWidthValue",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set width to [WIDTH]"),
            hideFromPalette: compatibilityMode,
            arguments: {
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 200,
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "resetWidth",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("reset text width"),
            hideFromPalette: compatibilityMode,
            extensions: ["colours_looks"],
          },
          "---",
          {
            opcode: "startAnimate",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("start [ANIMATE] animation"),
            hideFromPalette: compatibilityMode,
            arguments: {
              ANIMATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "twAnimate",
                defaultValue: "rainbow",
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "animateUntilDone",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("animate [ANIMATE] until done"),
            hideFromPalette: compatibilityMode,
            arguments: {
              ANIMATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "twAnimate",
                defaultValue: "rainbow",
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "isAnimating",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is animating?"),
            hideFromPalette: compatibilityMode,
            disableMonitor: true,
            extensions: ["colours_looks"],
          },
          "---",
          {
            opcode: "setAnimateDuration",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set [ANIMATE] duration to [NUM] seconds"),
            hideFromPalette: compatibilityMode,
            arguments: {
              ANIMATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "twAnimateDuration",
                defaultValue: "rainbow",
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3,
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "resetAnimateDuration",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("reset [ANIMATE] duration"),
            hideFromPalette: compatibilityMode,
            arguments: {
              ANIMATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "twAnimateDuration",
                defaultValue: "rainbow",
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "getAnimateDuration",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[ANIMATE] duration"),
            hideFromPalette: compatibilityMode,
            arguments: {
              ANIMATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "twAnimateDuration",
                defaultValue: "rainbow",
              },
            },
            extensions: ["colours_looks"],
          },
          "---",
          {
            opcode: "setShakeIntensity",
            blockType: Scratch.BlockType.COMMAND,
            text: "set shake intensity to [NUM]%",
            hideFromPalette: compatibilityMode,
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
            extensions: ["colours_looks"],
          },
          "---",
          {
            opcode: "setTypeDelay",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set typing delay to [NUM] seconds"),
            hideFromPalette: compatibilityMode,
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0.1,
              },
            },
            extensions: ["colours_looks"],
          },
          {
            opcode: "resetTypeDelay",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("reset typing delay"),
            hideFromPalette: compatibilityMode,
            extensions: ["colours_looks"],
          },
          {
            opcode: "getTypeDelay",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("typing delay"),
            hideFromPalette: compatibilityMode,
            disableMonitor: true,
            extensions: ["colours_looks"],
          },
          "---",
          {
            opcode: "textActive",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is showing text?"),
            hideFromPalette: compatibilityMode,
            disableMonitor: true,
            extensions: ["colours_looks"],
          },
          {
            opcode: "getDisplayedText",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("displayed text"),
            hideFromPalette: compatibilityMode,
            disableMonitor: true,
            extensions: ["colours_looks"],
          },
          {
            opcode: "getTextAttribute",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("text [ATTRIBUTE]"),
            arguments: {
              ATTRIBUTE: {
                type: Scratch.ArgumentType.STRING,
                menu: "attribute",
              },
            },
            disableMonitor: true,
            hideFromPalette: compatibilityMode,
            extensions: ["colours_looks"],
          },
        ],
        menus: {
          // These all need acceptReporters: false for parity with the Scratch Labs version.
          animate: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("type"),
                value: "type",
              },
              {
                text: Scratch.translate("rainbow"),
                value: "rainbow",
              },
              {
                text: Scratch.translate("zoom"),
                value: "zoom",
              },
            ],
          },
          font: {
            acceptReporters: false,
            items: "getFonts",
          },
          align: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("left"),
                value: "left",
              },
              {
                text: Scratch.translate("center"),
                value: "center",
              },
              {
                text: Scratch.translate("right"),
                value: "right",
              },
            ],
          },
          attribute: {
            acceptReporters: false,
            items: [
              "font",
              "color",
              "width",
              "outline color",
              "outline width",
              "alignment",
            ],
          },
          // TurboWarp menus (acceptReporters: true)
          twAnimate: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("type"),
                value: "type",
              },
              {
                text: Scratch.translate("rainbow"),
                value: "rainbow",
              },
              {
                text: Scratch.translate("zoom"),
                value: "zoom",
              },
              "shake",
            ],
          },
          twAnimateDuration: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("rainbow"),
                value: "rainbow",
              },
              {
                text: Scratch.translate("zoom"),
                value: "zoom",
              },
              "shake",
            ],
          },
          twAlign: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("left"),
                value: "left",
              },
              {
                text: Scratch.translate("center"),
                value: "center",
              },
              {
                text: Scratch.translate("right"),
                value: "right",
              },
            ],
          },
          twFont: {
            acceptReporters: true,
            items: "getFonts",
          },
          twWordWrap: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("with word wrap"),
                value: "with word wrap",
              },
              {
                text: Scratch.translate("without word wrap"),
                value: "without word wrap",
              },
            ],
          },
        },
      };
    }

    getFonts() {
      const customFonts = this._getFontsMap();
      return [
        ...FONTS,
        ...customFonts,
        {
          text: Scratch.translate("random font"),
          value: "Random",
        },
      ];
    }

    _getFontsMap() {
      return Scratch.vm.runtime.fontManager
        ? Scratch.vm.runtime.fontManager.getFonts().map((i) => ({
            text: i.name,
            value: i.family,
          }))
        : [];
    }

    /**
     * @param {VM.Target} target
     * @returns {TextState}
     */
    _getState(target) {
      const state = target[CUSTOM_STATE_KEY];
      if (!state) {
        /** @type {TextState} */
        const newState = {
          skin: createTextCostumeSkin(target),
        };
        target[CUSTOM_STATE_KEY] = newState;
        return newState;
      }
      return state;
    }

    /**
     * @param {VM.Target} target
     * @returns {boolean}
     */
    _hasState(target) {
      return !!target[CUSTOM_STATE_KEY];
    }

    _hideAllText() {
      for (const target of vm.runtime.targets) {
        if (this._hasState(target)) {
          this._hideText(target, this._getState(target));
        }
      }
    }

    /**
     * @param {VM.Target} target
     * @param {TextState} state
     */
    _renderText(target, state) {
      state.skin.cancelAnimation();
      renderer.updateDrawableSkinId(target.drawableID, state.skin.id);
    }

    /**
     * @param {VM.Target} target
     * @param {TextState} state
     */
    _hideText(target, state) {
      state.skin.cancelAnimation();
      target.setCostume(target.currentCostume);
    }

    setText({ TEXT }, util) {
      const state = this._getState(util.target);
      this._renderText(util.target, state);
      state.skin.setText(Scratch.Cast.toString(TEXT));
      // Scratch forces 1 frame delay by returning promise. I think that's silly.
      util.runtime.requestRedraw();
    }

    animateText({ ANIMATE, TEXT }, util) {
      const state = this._getState(util.target);
      this._renderText(util.target, state);

      state.skin.setText(Scratch.Cast.toString(TEXT));
      state.skin.cancelAnimation();

      if (ANIMATE === "type") {
        return state.skin.startTypeAnimation();
      } else if (ANIMATE === "rainbow") {
        return state.skin.startRainbowAnimation();
      } else if (ANIMATE === "zoom") {
        return state.skin.startZoomAnimation();
      } else if (ANIMATE === "shake") {
        return state.skin.startShakeAnimation();
      } else {
        // Scratch does nothing here
      }
    }

    clearText(args, util) {
      if (this._hasState(util.target)) {
        const state = this._getState(util.target);
        this._hideText(util.target, state);
      }
      // Scratch forces 1 frame delay by returning promise. I think that's silly.
      util.runtime.requestRedraw();
    }

    setFont({ FONT }, util) {
      const font = Scratch.Cast.toString(FONT);
      const state = this._getState(util.target);

      if (font === "Random") {
        // Random font always switches to a new font, never the same one
        const possibleFonts = [
          ...FONTS,
          ...this._getFontsMap().map((i) => i.value),
        ].filter((i) => i !== state.skin.fontFamily);
        state.skin.setFontFamily(
          possibleFonts[Math.floor(Math.random() * possibleFonts.length)]
        );
      } else {
        state.skin.setFontFamily(font);
      }
    }

    setColor({ COLOR }, util) {
      const state = this._getState(util.target);
      state.skin.setColor(Scratch.Cast.toString(COLOR));
    }

    setWidth({ WIDTH, ALIGN }, util) {
      const state = this._getState(util.target);

      if (ALIGN === "center") {
        state.skin.setAlign(ALIGN_CENTER);
      } else if (ALIGN === "right") {
        state.skin.setAlign(ALIGN_RIGHT);
      } else {
        // Scratch treats unknown values as left alignment.
        state.skin.setAlign(ALIGN_LEFT);
      }

      state.skin.setWidth(Scratch.Cast.toNumber(WIDTH));
    }

    /*
     * Extra blocks, not compatible with Scratch:
     */

    disableCompatibilityMode() {
      const popup = Scratch.translate({
        id: "disableCompatibilityMode",
        default:
          "This will enable new blocks and features that WILL NOT WORK in the official Scratch Lab.\n\nDo you wish to continue?",
      });
      if (confirm(popup)) {
        compatibilityMode = false;
        Scratch.vm.extensionManager.refreshBlocks();
      }
    }

    setOutlineWidth(args, util) {
      const state = this._getState(util.target);
      const width = Scratch.Cast.toNumber(args.WIDTH);

      state.skin.setOutlineWidth(width);
    }

    setOutlineColor(args, util) {
      const state = this._getState(util.target);
      const color = Scratch.Cast.toString(args.COLOR);

      state.skin.setOutlineColor(color);
    }

    addLine(args, util) {
      const state = this._getState(util.target);
      this._renderText(util.target, state);

      const originalText = state.skin.text;
      const addingText = Scratch.Cast.toString(args.TEXT);
      state.skin.setText(
        originalText ? `${originalText}\n${addingText}` : addingText
      );
      util.runtime.requestRedraw();
    }

    getLines(args, util) {
      const drawableID = util.target.drawableID;
      const skin = renderer._allDrawables[drawableID].skin;
      if (!(skin instanceof TextCostumeSkin)) return 0;

      const state = this._getState(util.target);
      const text = state.skin.text;
      return text.split("\n").length;
    }

    getLinesV2(args, util) {
      const drawableID = util.target.drawableID;
      const skin = renderer._allDrawables[drawableID].skin;
      if (!(skin instanceof TextCostumeSkin)) return 0;

      const state = this._getState(util.target);
      if (Scratch.Cast.toString(args.WITH_WORD_WRAP) === "with word wrap") {
        if (state.skin._needsReflow()) {
          state.skin._reflowText();
        }
        return state.skin.lines.length;
      }
      return state.skin.text.split("\n").length;
    }

    setAlignment(args, util) {
      // see setWidth
      const state = this._getState(util.target);
      if (args.ALIGN === "center") {
        state.skin.setAlign(ALIGN_CENTER);
      } else if (args.ALIGN === "right") {
        state.skin.setAlign(ALIGN_RIGHT);
      } else {
        state.skin.setAlign(ALIGN_LEFT);
      }
    }

    setWidthValue(args, util) {
      const state = this._getState(util.target);
      state.skin.setWidth(Scratch.Cast.toNumber(args.WIDTH));
    }

    resetWidth(args, util) {
      const state = this._getState(util.target);
      state.skin.setWidth(vm.runtime.stageWidth);
    }

    startAnimate(args, util) {
      const drawableID = util.target.drawableID;
      const skin = renderer._allDrawables[drawableID].skin;
      if (!(skin instanceof TextCostumeSkin)) return;

      const state = this._getState(util.target);
      state.skin.cancelAnimation();

      // Don't return the promise
      if (args.ANIMATE == "type") {
        state.skin.startTypeAnimation();
      } else if (args.ANIMATE == "rainbow") {
        state.skin.startRainbowAnimation();
      } else if (args.ANIMATE == "zoom") {
        state.skin.startZoomAnimation();
      } else if (args.ANIMATE == "shake") {
        state.skin.startShakeAnimation();
      } else {
        // Scratch does nothing here
      }
    }

    animateUntilDone(args, util) {
      const drawableID = util.target.drawableID;
      const skin = renderer._allDrawables[drawableID].skin;
      if (!(skin instanceof TextCostumeSkin)) return;

      const state = this._getState(util.target);
      state.skin.cancelAnimation();

      if (args.ANIMATE == "type") {
        return state.skin.startTypeAnimation();
      } else if (args.ANIMATE == "rainbow") {
        return state.skin.startRainbowAnimation();
      } else if (args.ANIMATE == "zoom") {
        return state.skin.startZoomAnimation();
      } else if (args.ANIMATE == "shake") {
        return state.skin.startShakeAnimation();
      } else {
        // Scratch does nothing here
      }
    }

    isAnimating(args, util) {
      const skin = this._getState(util.target).skin;
      return (
        skin.isTyping || skin.isRainbow || skin.isZooming || skin.isShaking
      );
    }

    setAnimateDuration(args, util) {
      const state = this._getState(util.target);
      const animation = args.ANIMATE;
      const milliseconds = Scratch.Cast.toNumber(args.NUM) * 1000;
      if (animation === "rainbow") {
        state.skin.setRainbowDuration(milliseconds);
      } else if (animation === "zoom") {
        state.skin.setZoomDuration(milliseconds);
      } else if (animation === "shake") {
        state.skin.setShakeDuration(milliseconds);
      }
    }

    resetAnimateDuration(args, util) {
      const state = this._getState(util.target);
      const animation = args.ANIMATE;
      if (animation === "rainbow") {
        state.skin.setRainbowDuration(DEFAULT_RAINBOW_DURATION);
      } else if (animation === "zoom") {
        state.skin.setZoomDuration(DEFAULT_ZOOM_DURATION);
      } else if (animation === "shake") {
        state.skin.setShakeDuration(DEFAULT_SHAKE_DURATION);
      }
    }

    getAnimateDuration(args, util) {
      const state = this._getState(util.target);
      const animation = args.ANIMATE;
      if (animation === "rainbow") {
        return state.skin.rainbowDuration / 1000;
      } else if (animation === "zoom") {
        return state.skin.zoomDuration / 1000;
      } else if (animation === "shake") {
        return state.skin.shakeDuration / 1000;
      } else {
        // should never happen
        return "";
      }
    }

    setShakeIntensity(args, util) {
      const state = this._getState(util.target);
      state.skin.setShakeIntensity(Scratch.Cast.toNumber(args.NUM));
    }

    setTypeDelay(args, util) {
      const state = this._getState(util.target);
      state.skin.setTypeDelay(Scratch.Cast.toNumber(args.NUM) * 1000);
    }

    resetTypeDelay(args, util) {
      const state = this._getState(util.target);
      state.skin.setTypeDelay(DEFAULT_TYPE_DELAY);
    }

    getTypeDelay(args, util) {
      const state = this._getState(util.target);
      // TODO: Should we round this?
      return state.skin.typeDelay / 1000;
    }

    textActive(args, util) {
      const drawableID = util.target.drawableID;
      const skin = renderer._allDrawables[drawableID].skin;
      return skin instanceof TextCostumeSkin;
    }

    getDisplayedText(args, util) {
      const state = this._getState(util.target);
      return state.skin.text;
    }

    getTextAttribute(args, util) {
      const state = this._getState(util.target);
      const attrib = args.ATTRIBUTE;
      if (attrib === "font") {
        return state.skin.getFontFamily();
      } else if (attrib === "color") {
        return state.skin.getColor();
      } else if (attrib === "width") {
        return state.skin.getWidth();
      } else if (attrib === "outline color") {
        return state.skin.getOutlineColor();
      } else if (attrib === "outline width") {
        return state.skin.getOutlineWidth();
      } else if (attrib === "alignment") {
        switch (state.skin.getAlign()) {
          case ALIGN_LEFT:
            return "left";
          case ALIGN_RIGHT:
            return "right";
          case ALIGN_CENTER:
            return "center";
        }
      } else {
        // should never happen
        return "";
      }
    }
  }

  Scratch.extensions.register(new AnimatedText());
})(Scratch);
 })(Scratch);","data:text/javascript;,(function(Scratch) { // Name: Lily's Toolbox
// ID: lmsutilsblocks
// Description: Previously called LMS Utilities.
// By: LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/>
// License: MIT AND LGPL-3.0

/* generated l10n code */Scratch.translate.setup({"de":{"_Lily's Toolbox":"Lily's Werkzeuge"},"fi":{"_Are you sure you want to show legacy blocks? \n \n These blocks were removed because they were buggy or implemented better in other extensions.":"Haluatko varmasti näyttää vanhat lohkot?\n\nLohkot poistettiin, koska niissä oli bugeja tai ne on toteutettu paremmin muissa laajennuksissa.","_Hide Legacy Blocks":"Piilota vanhat lohkot","_Lily's Toolbox":"Lilyn työkalupakki","_Show Legacy Blocks":"Näytä vanhat lohkot","_[DROPDOWN] of user":"käyttäjän [DROPDOWN]","_[INPUTA] nand [INPUTB]":"ei [INPUTA] ja [INPUTB]","_[INPUTA] nor [INPUTB]":"[INPUTA] eikä [INPUTB]","_[INPUTA] xnor [INPUTB]":"molemmat [INPUTA] [INPUTB] tai ei kumpikaan","_[INPUTA] xor [INPUTB]":"joko [INPUTA] tai [INPUTB]","_[INPUT] is [DROPDOWN]":"[INPUT] = [DROPDOWN]","_[STRING] to lowercase":"[STRING] pieninä kirjaimina","_[STRING] to uppercase":"[STRING] isoina kirjaimina","_alert [STRING]":"ilmoita [STRING]","_angle [ANGLE]":"kulma [ANGLE]","_base64":"base64:","_binary":"binääri","_brightness":"kirkkaus","_browser":"selain","_change variable [INPUTA] by [INPUTB]":"lisää muuttujaan [INPUTA] arvo [INPUTB]","_clamp [INPUTA] between [INPUTB] and [INPUTC]":"rajoita [INPUTA] välille [INPUTB] – [INPUTC]","_clear console":"tyhjennä konsoli","_clipboard":"leikepöytä","_clone count":"kloonien määrä","_color":"väri","_color [COLOUR]":"väri [COLOUR]","_confirm [STRING]":"vahvista [STRING]","_console [DROPDOWN] [INPUT]":"kirjaa [DROPDOWN] [INPUT]","_decode [STRING] from [DROPDOWN]":"pura [STRING] [DROPDOWN]stä","_delete all variables":"poista kaikki muuttujat","_delete variable [INPUT]":"poista muuttuja [INPUT]","_effect [INPUT]":"tehoste [INPUT]","_encode [STRING] to [DROPDOWN]":"salaa [STRING] [DROPDOWN]ksi","_false":"epätosi","_fisheye":"kalansilmä","_ghost":"haamu","_green flag":"vihreä lippu","_height":"korkeus","_if [BOOLEAN] then [INPUTA]":"jos [BOOLEAN], niin [INPUTA]","_if [BOOLEAN] then [INPUTA] else [INPUTB]":"Jos [BOOLEAN], niin [INPUTA] tai muuten [INPUTB]","_index of [INPUTA] in [INPUTB]":"merkkijonon [INPUTA] järjestysnumero merkkijonossa [INPUTB]","_is clone?":"olenko klooni?","_is mobile?":"onko mobiililaite?","_item [INPUTA] of [INPUTB] split by [INPUTC]":"[INPUTA]. kohde merkkijonosta [INPUTB] jaettuna merkillä [INPUTC]","_key [KEY_OPTION] pressed?":"painetaanko näppäintä [KEY_OPTION]?","_letters [INPUTA] to [INPUTB] of [STRING]":"merkkijonon [STRING] merkit [INPUTA] – [INPUTB]","_list active variables":"käytössä olevat muuttujat","_lowercase":"pienet kirjaimet","_matrix [MATRIX]":"taulukko [MATRIX]","_mosaic":"mosaiikki","_newline character":"uusi rivi","_normalise [INPUT]":"normalisoi [INPUT]","_note [NOTE]":"muistiinpano [NOTE]","_number":"numero","_open link [INPUT] in new tab":"avaa linkki [INPUT] uudessa välilehdessä","_operating system":"käyttöjärjestelmä","_pixelate":"pikselöi","_project URL":"projektin URL-osoite","_prompt [STRING]":"kysy [STRING]","_random":"satunnainen","_redirect to link [INPUT]":"avaa linkki [INPUT]","_replace SVG data for costume [INPUTA] with [INPUTB]":"korvaa asusteen [INPUTA] SVG-data datalla [INPUTB]","_replace first [INPUTA] with [INPUTB] in [STRING]":"korvaa ensimmäinen [INPUTA] merkkijonolla [INPUTB] merkkijonossa [STRING]","_reverse [STRING]":"käännä [STRING]","_screen [DROPDOWN]":"näytön [DROPDOWN]","_set [STRING] to clipboard":"kopioi [STRING] leikepöydälle","_set username to [INPUT]":"aseta käyttäjänimeksi [INPUT]","_set variable [INPUTA] to [INPUTB]":"aseta muuttuja [INPUTA] arvoon [INPUTB]","_sprite clicked?":"napautetaanko hahmoa?","_text":"teksti","_true":"tosi","_uppercase":"isot kirjaimet","_variable [INPUT]":"muuttuja [INPUT]","_when [INPUT] is true":"kun [INPUT] on tosi","_when key [KEY_OPTION] pressed":"kun näppäintä [KEY_OPTION] painetaan","_whirl":"pyörre","_width":"leveys","_window [DROPDOWN]":"ikkunan [DROPDOWN]"},"it":{"_Lily's Toolbox":"Strumenti di Lily","_binary":"binario","_clear console":"cancella console","_clipboard":"appunti","_green flag":"bandiera verde","_height":"altezza","_operating system":"sistema operativo","_text":"testo","_width":"larghezza"},"ja":{"_Lily's Toolbox":"Lilyの道具箱","_binary":"バイナリ","_brightness":"明るさ","_browser":"ブラウザ","_clear console":"コンソールをクリア","_color":"色","_fisheye":"魚眼レンズ","_ghost":"幽霊","_green flag":"緑の旗","_height":"高さ","_mosaic":"モザイク","_pixelate":"ピクセル化","_text":"テキスト","_whirl":"渦巻き","_width":"横幅"},"ko":{"_Are you sure you want to show legacy blocks? \n \n These blocks were removed because they were buggy or implemented better in other extensions.":"레거시 블록 보이기에 확실하십니까?\n\n이 블록들은 오류가 있거나 다른 확장 기능에서 더 잘 구현되어 제거되었습니다.","_Hide Legacy Blocks":"레거시 블록 숨기기","_Lily's Toolbox":"Lily의 도구상자","_Show Legacy Blocks":"레거시 블록 보이기","_[DROPDOWN] of user":"사용자의 [DROPDOWN]","_[STRING] to lowercase":"[STRING]을 대문자로","_[STRING] to uppercase":"[STRING]을 대문자로","_alert [STRING]":"알림 [STRING]","_angle [ANGLE]":"방향 [ANGLE]","_binary":"바이너리","_brightness":"밝기","_browser":"브라우저","_change variable [INPUTA] by [INPUTB]":"변수 [INPUTA]을 [INPUTB]만큼 바꾸기","_clear console":"콘솔 비우기","_clipboard":"클립보드","_color":"색깔","_color [COLOUR]":"색 [COLOUR]","_confirm [STRING]":"확인 [STRING]","_decode [STRING] from [DROPDOWN]":"[STRING]을 [DROPDOWN]에서 디코딩하기","_delete all variables":"모든 변수 삭제하기","_delete variable [INPUT]":"변수 [INPUT]을 삭제하기","_encode [STRING] to [DROPDOWN]":"[STRING]을 [DROPDOWN]로 인코딩하기","_false":"거짓","_fisheye":"어안 렌즈","_ghost":"투명도","_height":"높이","_if [BOOLEAN] then [INPUTA]":"만약 [BOOLEAN] 이라면 [INPUTA]","_if [BOOLEAN] then [INPUTA] else [INPUTB]":"만약 [BOOLEAN] 이라면 [INPUTA] 아니면 [INPUTB]","_is clone?":"복제본인가?","_is mobile?":"모바일 기기인가?","_key [KEY_OPTION] pressed?":"[KEY_OPTION] 키를 눌렀는가?","_list active variables":"활성화된 변수 목록","_lowercase":"소문자","_mosaic":"모자이크","_newline character":"개행 문자","_number":"숫자","_open link [INPUT] in new tab":"새 탭에서 링크 [INPUT] 열기","_operating system":"운영 체제","_pixelate":"픽셀화","_project URL":"프로젝트 URL","_random":"무작위","_redirect to link [INPUT]":"링크 [INPUT]로 리다이렉트하기","_reverse [STRING]":"[STRING]을 거꾸로","_set [STRING] to clipboard":"[STRING]을 클립보드에 복사하기","_set username to [INPUT]":"사용자 이름을 [INPUT]로 정하기","_set variable [INPUTA] to [INPUTB]":"변수 [INPUTA]을 [INPUTB]로 정하기","_true":"참","_uppercase":"대문자","_variable [INPUT]":"변수 [INPUT]","_when [INPUT] is true":"[INPUT]일 때","_when key [KEY_OPTION] pressed":"[KEY_OPTION] 키를 눌렀을 때","_whirl":"소용돌이","_width":"넓이"},"nb":{"_Lily's Toolbox":"Lilys Verktøykasse","_angle [ANGLE]":"vinkel [ANGLE]","_binary":"binær","_brightness":"lysstyrke","_browser":"nettleser","_clipboard":"Utklippstavle","_color":"farge","_color [COLOUR]":"farge [COLOUR]","_fisheye":"fiskeøye","_ghost":"spøkelse","_green flag":"grønt flagg","_height":"høyde","_matrix [MATRIX]":"matrise [MATRIX]","_mosaic":"mosaikk","_note [NOTE]":"notat [NOTE]","_operating system":"operativsystem","_pixelate":"pixelere","_text":"tekst","_true":"sann","_whirl":"virvel","_width":"bredde"},"nl":{"_Are you sure you want to show legacy blocks? \n \n These blocks were removed because they were buggy or implemented better in other extensions.":"Weet je zeker dat je de verouderde blokken wilt tonen? \n\nDeze blokken zijn verwijderd omdat ze slecht werkten of beter werkten in andere extensies.","_Hide Legacy Blocks":"Verouderde blokken verbergen","_Lily's Toolbox":"Lily's hulpmiddelen","_Show Legacy Blocks":"Verouderde blokken tonen","_[DROPDOWN] of user":"[DROPDOWN] van gebruiker","_[INPUTA] nand [INPUTB]":"[INPUTA] nen [INPUTB]","_[INPUTA] nor [INPUTB]":"[INPUTA] nof [INPUTB]","_[INPUTA] xnor [INPUTB]":"[INPUTA] exnof [INPUTB]","_[INPUTA] xor [INPUTB]":"[INPUTA] exof [INPUTB]","_[STRING] to lowercase":"[STRING] naar kleine letters","_[STRING] to uppercase":"[STRING] naar hoofdletters","_alert [STRING]":"waarschuwing [STRING]","_angle [ANGLE]":"richting [ANGLE]","_binary":"binair","_brightness":"helderheid","_change variable [INPUTA] by [INPUTB]":"verander variabele [INPUTA] met [INPUTB]","_clamp [INPUTA] between [INPUTB] and [INPUTC]":"klem [INPUTA] tussen [INPUTB] en [INPUTC]","_clear console":"wis console","_clipboard":"klembord","_clone count":"aantal klonen","_color":"kleur","_color [COLOUR]":"kleur [COLOUR]","_confirm [STRING]":"bevestiging [STRING]","_decode [STRING] from [DROPDOWN]":"decodeer [STRING] van [DROPDOWN]","_delete all variables":"verwijder alle variabelen","_delete variable [INPUT]":"verwijder variabele [INPUT]","_encode [STRING] to [DROPDOWN]":"codeer [STRING] naar [DROPDOWN]","_false":"onwaar","_fisheye":"vissenoog","_ghost":"transparant","_green flag":"groene vlag","_height":"hoogte","_if [BOOLEAN] then [INPUTA]":"als [BOOLEAN] dan [INPUTA]","_if [BOOLEAN] then [INPUTA] else [INPUTB]":"als [BOOLEAN] dan [INPUTA] anders [INPUTB]","_index of [INPUTA] in [INPUTB]":"index van [INPUTA] in [INPUTB]","_is clone?":"is kloon?","_is mobile?":"is mobiel?","_item [INPUTA] of [INPUTB] split by [INPUTC]":"item [INPUTA] van [INPUTB] gesplitst door [INPUTC]","_key [KEY_OPTION] pressed?":"toets [KEY_OPTION] ingedrukt?","_letters [INPUTA] to [INPUTB] of [STRING]":"letters [INPUTA] t/m [INPUTB] van [STRING]","_list active variables":"actieve variabelen","_lowercase":"kleine letters","_mosaic":"mozaïek","_newline character":"nieuwregelteken","_normalise [INPUT]":"normaliseer [INPUT]","_note [NOTE]":"toon [NOTE]","_number":"getal","_open link [INPUT] in new tab":"open link [INPUT] in nieuw tabblad","_operating system":"besturingssysteem","_pixelate":"pixeleren","_project URL":"project-URL","_prompt [STRING]":"invoervraag [STRING]","_random":"willekeurig","_redirect to link [INPUT]":"leid om naar link [INPUT]","_replace SVG data for costume [INPUTA] with [INPUTB]":"vervang SVG-gegevens voor uiterlijk [INPUTA] door [INPUTB]","_replace first [INPUTA] with [INPUTB] in [STRING]":"vervang eerste [INPUTA] door [INPUTB] in [STRING]","_reverse [STRING]":"keer [STRING] om","_screen [DROPDOWN]":"scherm [DROPDOWN]","_set [STRING] to clipboard":"kopieer [STRING] naar klembord","_set username to [INPUT]":"stel gebruikersnaam in op [INPUT]","_set variable [INPUTA] to [INPUTB]":"maak variabele [INPUTA] [INPUTB]","_sprite clicked?":"sprite geklikt?","_text":"tekst","_true":"waar","_uppercase":"hoofdletters","_variable [INPUT]":"variabele [INPUT]","_when [INPUT] is true":"wanneer [INPUT] waar is","_when key [KEY_OPTION] pressed":"wanneer toets [KEY_OPTION] is ingedrukt","_whirl":"draaikolk","_width":"breedte","_window [DROPDOWN]":"venster [DROPDOWN]"},"ru":{"_Lily's Toolbox":"Набор инструментов Lily","_angle [ANGLE]":"угол [ANGLE]","_binary":"двоичный","_brightness":"яркость","_browser":"браузер","_clear console":"очистить консоль","_clipboard":"буфер обмена","_clone count":"количество клонов","_color":"цвет","_color [COLOUR]":"цвет [COLOUR]","_false":"нет","_fisheye":"рыбий глаз","_ghost":"прозрачность","_green flag":"зелёный флаг","_height":"высота","_is clone?":"клон?","_lowercase":"нижний регистр","_matrix [MATRIX]":"матрица [MATRIX]","_mosaic":"мозайка","_note [NOTE]":"нота [NOTE]","_number":"цифра","_operating system":"операционная система","_pixelate":"укрупнение пикселей","_text":"текст","_true":"да","_whirl":"завихрение","_width":"ширина"},"tr":{"_Lily's Toolbox":"Lily'nin Araç Kutusu"},"uk":{"_clipboard":"буфер обміну","_height":"висота","_text":"текст","_width":"ширина"},"zh-cn":{"_Are you sure you want to show legacy blocks? \n \n These blocks were removed because they were buggy or implemented better in other extensions.":"你确定要显示遗留积木吗？\n\n这些积木由于存在bug或者被其他更好的扩展替代而隐藏了。","_Hide Legacy Blocks":"隐藏遗留积木","_Lily's Toolbox":"Lily 的工具箱","_Show Legacy Blocks":"显示遗留积木","_[DROPDOWN] of user":"用户的[DROPDOWN]","_[INPUTA] nand [INPUTB]":"[INPUTA]与非[INPUTB]","_[INPUTA] nor [INPUTB]":"[INPUTA]或非[INPUTB]","_[INPUTA] xnor [INPUTB]":"[INPUTA]同或[INPUTB]","_[INPUTA] xor [INPUTB]":"[INPUTA]异或[INPUTB]","_[INPUT] is [DROPDOWN]":"[INPUT]是[DROPDOWN]","_[STRING] to lowercase":"[STRING]转小写","_[STRING] to uppercase":"[STRING]转大写","_alert [STRING]":"弹出提示[STRING]","_angle [ANGLE]":"角度[ANGLE]","_binary":"二进制","_brightness":"亮度","_browser":"浏览器名称","_change variable [INPUTA] by [INPUTB]":"将变量[INPUTA]增加[INPUTB]","_clamp [INPUTA] between [INPUTB] and [INPUTC]":"将[INPUTA]限制在[INPUTB]到[INPUTC]之间","_clear console":"清除控制台","_clipboard":"最新复制的文本","_clone count":"克隆体数量","_color":"颜色","_color [COLOUR]":"颜色[COLOUR]","_confirm [STRING]":"弹出确认框[STRING]","_console [DROPDOWN] [INPUT]":"控制台[DROPDOWN][INPUT]","_decode [STRING] from [DROPDOWN]":"解码[STRING]以[DROPDOWN]","_delete all variables":"删除所有变量","_delete variable [INPUT]":"删除变量[INPUT]","_effect [INPUT]":"[INPUT]特效","_encode [STRING] to [DROPDOWN]":"编码[STRING]为[DROPDOWN]","_false":"假","_fisheye":"鱼眼","_ghost":"虚影","_green flag":"绿旗","_height":"高度","_if [BOOLEAN] then [INPUTA]":"如果[BOOLEAN]那么[INPUTA]","_if [BOOLEAN] then [INPUTA] else [INPUTB]":"如果[BOOLEAN]那么[INPUTA]否则[INPUTB]","_index of [INPUTA] in [INPUTB]":"[INPUTA]在[INPUTB]中的位置","_is clone?":"是克隆体？","_is mobile?":"是移动设备？","_item [INPUTA] of [INPUTB] split by [INPUTC]":"用[INPUTC]分割[INPUTB]取第[INPUTA]项","_key [KEY_OPTION] pressed?":"按下[KEY_OPTION]键？","_letters [INPUTA] to [INPUTB] of [STRING]":"[STRING]的第[INPUTA]到第[INPUTB]个字符","_list active variables":"列出正在使用的变量","_lowercase":"小写","_matrix [MATRIX]":"矩阵[MATRIX]","_mosaic":"马赛克","_newline character":"换行符","_normalise [INPUT]":"取符号[INPUT]","_note [NOTE]":"音符[NOTE]","_number":"数字","_open link [INPUT] in new tab":"在新标签页打开链接[INPUT]","_operating system":"操作系统名称","_pixelate":"像素化","_project URL":"作品链接","_prompt [STRING]":"弹出输入框[STRING]","_random":"随机","_redirect to link [INPUT]":"跳转到链接[INPUT]","_replace SVG data for costume [INPUTA] with [INPUTB]":"将造型[INPUTA]替换为SVG数据[INPUTB]","_replace first [INPUTA] with [INPUTB] in [STRING]":"替换[STRING]中的第一个[INPUTA]为[INPUTB]","_reverse [STRING]":"反转[STRING]","_screen [DROPDOWN]":"屏幕[DROPDOWN]","_set [STRING] to clipboard":"将[STRING]设置到剪切板","_set username to [INPUT]":"将用户名设置为[INPUT]","_set variable [INPUTA] to [INPUTB]":"将变量[INPUTA]设为[INPUTB]","_sprite clicked?":"角色被点击？","_text":"额外数据","_true":"真","_uppercase":"大写","_variable [INPUT]":"变量[INPUT]","_when [INPUT] is true":"当[INPUT]成立","_when key [KEY_OPTION] pressed":"当按下[KEY_OPTION]键","_whirl":"漩涡","_width":"宽度","_window [DROPDOWN]":"窗口[DROPDOWN]"}});/* end generated l10n code */(function (Scratch) {
  "use strict";
  const menuIconURI =
    "data:image/png;base64,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";

  let hideLegacyBlocks = true;

  var vars = {};
  vars["variables"] = Object.create(null);

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This extension must run unsandboxed");
  }

  class LMSUtils {
    constructor(runtime) {
      this.runtime = runtime;
    }
    getInfo() {
      return {
        id: "lmsutilsblocks",
        name: Scratch.translate("Lily's Toolbox"),
        color1: "#3bb2ed",
        color2: "#37a1de",
        color3: "#3693d9",
        menuIconURI: menuIconURI,
        blocks: [
          {
            opcode: "whenBooleanHat",
            blockType: Scratch.BlockType.HAT,
            text: Scratch.translate("when [INPUT] is true"),
            isEdgeActivated: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "whenKeyString",
            blockType: Scratch.BlockType.HAT,
            text: Scratch.translate("when key [KEY_OPTION] pressed"),
            isEdgeActivated: true,
            arguments: {
              KEY_OPTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "enter",
              },
            },
          },

          "---",

          {
            opcode: "keyStringPressed",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("key [KEY_OPTION] pressed?"),
            arguments: {
              KEY_OPTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "enter",
              },
            },
          },
          {
            opcode: "trueFalseBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[TRUEFALSE]",
            arguments: {
              TRUEFALSE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true",
                menu: "trueFalseMenu",
              },
            },
          },
          {
            opcode: "stringIf",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("if [BOOLEAN] then [INPUTA]"),
            disableMonitor: true,
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },
          {
            opcode: "stringIfElse",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("if [BOOLEAN] then [INPUTA] else [INPUTB]"),
            disableMonitor: true,
            arguments: {
              BOOLEAN: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana",
              },
            },
          },

          "---",

          {
            opcode: "getEffectValue",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("effect [INPUT]"),
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "color",
                menu: "colorMenu",
              },
            },
          },
          {
            opcode: "clonesBeingUsed",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("clone count"),
            disableMonitor: true,
          },
          {
            opcode: "isClone",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is clone?"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
          },
          {
            opcode: "spriteClicked",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("sprite clicked?"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
          },

          "---",

          {
            opcode: "lettersToOf",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("letters [INPUTA] to [INPUTB] of [STRING]"),
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "3",
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "suspicious",
              },
            },
          },
          {
            opcode: "replaceWords",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "replace first [INPUTA] with [INPUTB] in [STRING]"
            ),
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Scratch",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Turbowarp",
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Scratch is brilliant!",
              },
            },
          },
          {
            opcode: "findIndexOfString",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("index of [INPUTA] in [INPUTB]"),
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "brilliant",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Turbowarp is brilliant!",
              },
            },
          },
          {
            opcode: "itemOfFromString",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "item [INPUTA] of [INPUTB] split by [INPUTC]"
            ),
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "2",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple|banana",
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "|",
              },
            },
          },
          {
            opcode: "stringToUpperCase",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[STRING] to uppercase"),
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },
          {
            opcode: "stringToLowerCase",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[STRING] to lowercase"),
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "APPLE",
              },
            },
          },
          {
            opcode: "reverseString",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("reverse [STRING]"),
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "prawobrut",
              },
            },
          },

          "---",

          {
            opcode: "norBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[INPUTA] nor [INPUTB]"),
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "xorBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[INPUTA] xor [INPUTB]"),
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "xnorBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[INPUTA] xnor [INPUTB]"),
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "nandBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[INPUTA] nand [INPUTB]"),
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "",
              },
            },
          },

          "---",

          {
            opcode: "stringReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "[STRING]",
            disableMonitor: true,
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },
          {
            opcode: "colourHex",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("color [COLOUR]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              COLOUR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#0088ff",
              },
            },
          },
          {
            opcode: "angleReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("angle [ANGLE]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              ANGLE: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: "90",
              },
            },
          },
          {
            opcode: "matrixReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("matrix [MATRIX]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              MATRIX: {
                type: Scratch.ArgumentType.MATRIX,
                defaultValue: "0101001010000001000101110",
              },
            },
          },
          {
            opcode: "noteReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("note [NOTE]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              NOTE: {
                type: Scratch.ArgumentType.NOTE,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "newlineCharacter",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("newline character"),
            hideFromPalette: hideLegacyBlocks,
            disableMonitor: true,
          },

          "---",

          {
            opcode: "equalsExactly",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[ONE] === [TWO]",
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana",
              },
            },
          },
          {
            opcode: "notEqualTo",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[INPUTA] ≠ [INPUTB]",
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana",
              },
            },
          },
          {
            opcode: "moreThanEqual",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[INPUTA] ≥ [INPUTB]",
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "16",
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "25",
              },
            },
          },
          {
            opcode: "lessThanEqual",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[INPUTA] ≤ [INPUTB]",
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "16",
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "25",
              },
            },
          },
          {
            opcode: "stringCheckBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[INPUT] is [DROPDOWN]"),
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                menu: "stringCheckMenu",
              },
            },
          },

          "---",

          {
            opcode: "encodeToBlock",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("encode [STRING] to [DROPDOWN]"),
            disableMonitor: true,
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                menu: "conversionMenu",
              },
            },
          },
          {
            opcode: "decodeFromBlock",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("decode [STRING] from [DROPDOWN]"),
            disableMonitor: true,
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                menu: "conversionMenu",
              },
            },
          },

          "---",

          {
            opcode: "negativeReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "- [INPUT]",
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "exponentBlock",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INPUTA] ^ [INPUTB]",
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "",
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "rootBlock",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INPUTA] √ [INPUTB]",
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "",
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "normaliseValue",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("normalise [INPUT]"),
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "100",
              },
            },
          },
          {
            opcode: "clampNumber",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "clamp [INPUTA] between [INPUTB] and [INPUTC]"
            ),
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "100",
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "25",
              },
              INPUTC: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },

          "---",

          {
            opcode: "setVariableTo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set variable [INPUTA] to [INPUTB]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my variable",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
            },
          },
          {
            opcode: "changeVariableBy",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change variable [INPUTA] by [INPUTB]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my variable",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
          },
          {
            opcode: "getVariable",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("variable [INPUT]"),
            disableMonitor: true,
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my variable",
              },
            },
          },
          {
            opcode: "deleteVariable",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete variable [INPUT]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my variable",
              },
            },
          },
          {
            opcode: "deleteAllVariables",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete all variables"),
            hideFromPalette: hideLegacyBlocks,
          },
          {
            opcode: "listVariables",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("list active variables"),
            disableMonitor: true,
            hideFromPalette: hideLegacyBlocks,
          },

          "---",

          {
            opcode: "greenFlag",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("green flag"),
            hideFromPalette: hideLegacyBlocks,
          },
          {
            opcode: "setUsername",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set username to [INPUT]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "LilyMakesThings",
              },
            },
          },

          "---",

          {
            opcode: "setSpriteSVG",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "replace SVG data for costume [INPUTA] with [INPUTB]"
            ),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },

          "---",

          {
            opcode: "alertBlock",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("alert [STRING]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A red spy is in the base!",
              },
            },
          },
          {
            opcode: "inputPromptBlock",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("prompt [STRING]"),
            hideFromPalette: hideLegacyBlocks,
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "The code is 1, 1, 1.. err... 1!",
              },
            },
          },
          {
            opcode: "confirmationBlock",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("confirm [STRING]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Are you the red spy?",
              },
            },
          },

          "---",

          {
            opcode: "goToLink",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("open link [INPUT] in new tab"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "redirectToLink",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("redirect to link [INPUT]"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },

          "---",

          {
            opcode: "setClipboard",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set [STRING] to clipboard"),
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },
          {
            opcode: "readClipboard",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("clipboard"),
            hideFromPalette: hideLegacyBlocks,
          },

          "---",

          {
            opcode: "isUserMobile",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is mobile?"),
          },
          {
            opcode: "screenReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("screen [DROPDOWN]"),
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "width",
                menu: "screenReporterMenu",
              },
            },
          },
          {
            opcode: "windowReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("window [DROPDOWN]"),
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "width",
                menu: "screenReporterMenu",
              },
            },
          },
          {
            opcode: "osBrowserDetails",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[DROPDOWN] of user"),
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "operating system",
                menu: "osBrowserMenu",
              },
            },
          },
          {
            opcode: "projectURL",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("project URL"),
            disableMonitor: true,
          },

          "---",

          {
            opcode: "consoleLog",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("console [DROPDOWN] [INPUT]"),
            disableMonitor: true,
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              DROPDOWN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "log",
                menu: "consoleLogMenu",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Apple",
              },
            },
          },
          {
            opcode: "clearConsole",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("clear console"),
            hideFromPalette: hideLegacyBlocks,
          },

          "---",

          {
            opcode: "commentHat",
            blockType: Scratch.BlockType.HAT,
            text: "// [STRING]",
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: "// [STRING]",
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentString",
            blockType: Scratch.BlockType.REPORTER,
            text: "// [INPUTA] [INPUTB]",
            disableMonitor: true,
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "input",
              },
            },
          },
          {
            opcode: "commentBool",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "// [INPUTA] [INPUTB]",
            hideFromPalette: hideLegacyBlocks,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUTB: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },

          "---",

          {
            func: "showLegacyBlocks",
            blockType: Scratch.BlockType.BUTTON,
            text: Scratch.translate("Show Legacy Blocks"),
            hideFromPalette: !hideLegacyBlocks,
          },
          {
            func: "hideLegacyBlocks",
            blockType: Scratch.BlockType.BUTTON,
            text: Scratch.translate("Hide Legacy Blocks"),
            hideFromPalette: hideLegacyBlocks,
          },
        ],
        menus: {
          conversionMenu: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("base64"),
                value: "base64",
              },
              {
                text: Scratch.translate("binary"),
                value: "binary",
              },
            ],
          },
          trueFalseMenu: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("true"),
                value: "true",
              },
              {
                text: Scratch.translate("false"),
                value: "false",
              },
              {
                text: Scratch.translate("random"),
                value: "random",
              },
            ],
          },
          screenReporterMenu: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("width"),
                value: "width",
              },
              {
                text: Scratch.translate("height"),
                value: "height",
              },
            ],
          },
          windowReporterMenu: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("width"),
                value: "width",
              },
              {
                text: Scratch.translate("height"),
                value: "height",
              },
            ],
          },
          stringCheckMenu: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("text"),
                value: "text",
              },
              {
                text: Scratch.translate("number"),
                value: "number",
              },
              {
                text: Scratch.translate("uppercase"),
                value: "uppercase",
              },
              {
                text: Scratch.translate("lowercase"),
                value: "lowercase",
              },
            ],
          },
          osBrowserMenu: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("operating system"),
                value: "operating system",
              },
              {
                text: Scratch.translate("browser"),
                value: "browser",
              },
            ],
          },
          consoleLogMenu: {
            acceptReporters: false,
            items: ["log", "error", "warn"],
          },
          colorMenu: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("color"),
                value: "color",
              },
              {
                text: Scratch.translate("fisheye"),
                value: "fisheye",
              },
              {
                text: Scratch.translate("whirl"),
                value: "whirl",
              },
              {
                text: Scratch.translate("pixelate"),
                value: "pixelate",
              },
              {
                text: Scratch.translate("mosaic"),
                value: "mosaic",
              },
              {
                text: Scratch.translate("brightness"),
                value: "brightness",
              },
              {
                text: Scratch.translate("ghost"),
                value: "ghost",
              },
            ],
          },
        },
      };
    }

    showLegacyBlocks() {
      if (
        confirm(
          Scratch.translate(
            "Are you sure you want to show legacy blocks? \n \n These blocks were removed because they were buggy or implemented better in other extensions."
          )
        )
      ) {
        hideLegacyBlocks = false;
        Scratch.vm.extensionManager.refreshBlocks();
      } else {
        //
      }
    }

    hideLegacyBlocks() {
      hideLegacyBlocks = true;
      Scratch.vm.extensionManager.refreshBlocks();
    }

    whenBooleanHat(args) {
      return args.INPUT;
    }

    whenKeyString(args, util) {
      return util.ioQuery("keyboard", "getKeyIsDown", [args.KEY_OPTION]);
    }

    keyStringPressed(args, util) {
      return util.ioQuery("keyboard", "getKeyIsDown", [args.KEY_OPTION]);
    }

    trueFalseBoolean(args) {
      if (args.TRUEFALSE === "random") return Math.random() > 0.5;
      if (args.TRUEFALSE === "true") return true;
      return false;
    }

    stringIf(args) {
      if (args.BOOLEAN) return args.INPUTA;
      return "";
    }

    stringIfElse(args) {
      if (args.BOOLEAN) return args.INPUTA;
      return args.INPUTB;
    }

    getEffectValue(args, util) {
      return util.target.effects[args.INPUT];
    }

    clonesBeingUsed(args, util) {
      return Scratch.vm.runtime._cloneCounter;
    }

    isClone(args, util) {
      return util.target.isOriginal ? false : true;
    }

    spriteClicked(args, util) {
      return (
        util.ioQuery("mouse", "getIsDown") &&
        util.target.isTouchingObject("_mouse_")
      );
    }

    lettersToOf(args) {
      var string = args.STRING.toString();
      var input1 = args.INPUTA - 1;
      var input2 = args.INPUTB;
      return string.slice(input1, input2);
    }

    replaceWords(args) {
      var input1 = args.INPUTA;
      var input2 = args.INPUTB;
      var string = args.STRING;
      return string.replace(input1, input2);
    }

    findIndexOfString(args) {
      var input1 = args.INPUTA;
      var input2 = args.INPUTB;
      if (input2.includes(input1)) return input2.indexOf(input1) + 1;
      return "";
    }

    itemOfFromString(args, util) {
      var input1 = args.INPUTA - 1;
      var input2 = String(args.INPUTB);
      var input3 = args.INPUTC;
      var output = input2.split(input3)[input1] || "";
      return output;
    }

    stringToUpperCase(args) {
      return args.STRING.toUpperCase();
    }

    stringToLowerCase(args) {
      return args.STRING.toLowerCase();
    }

    reverseString(args) {
      var input = args.STRING;
      var splitInput = input.split("");
      var reversedInput = splitInput.reverse();
      var joinedArray = reversedInput.join("");
      return joinedArray;
    }

    norBoolean(args) {
      return !(args.INPUTA || args.INPUTB);
    }

    xorBoolean(args) {
      return args.INPUTA !== args.INPUTB;
    }

    xnorBoolean(args) {
      return args.INPUTA === args.INPUTB;
    }

    nandBoolean(args) {
      return !(args.INPUTA && args.INPUTB);
    }

    stringReporter(args) {
      return args.STRING;
    }

    colourHex(args) {
      return args.COLOUR;
    }

    angleReporter(args) {
      return args.ANGLE;
    }

    matrixReporter(args) {
      return args.MATRIX;
    }

    noteReporter(args) {
      return args.NOTE;
    }

    newlineCharacter() {
      return "\n";
    }

    equalsExactly(args) {
      return args.ONE === args.TWO;
    }

    notEqualTo(args) {
      return args.INPUTA != args.INPUTB;
    }

    moreThanEqual(args) {
      return args.INPUTA >= args.INPUTB;
    }

    lessThanEqual(args) {
      return args.INPUTA <= args.INPUTB;
    }

    stringCheckBoolean(args) {
      const input = args.INPUT;
      const dropdown = args.DROPDOWN;
      if (dropdown === "text") return isNaN(input);
      if (dropdown === "number") return !isNaN(input);
      if (dropdown === "uppercase") return input == input.toUpperCase();
      if (dropdown === "lowercase") return input == input.toLowerCase();
      return false;
    }

    encodeToBlock(args) {
      if (args.STRING === "") return "";
      if (args.DROPDOWN === "base64") return btoa(args.STRING);
      if (args.DROPDOWN === "binary") {
        return args.STRING.split("")
          .map(function (char) {
            return char.charCodeAt(0).toString(2);
          })
          .join(" ");
      }
      return "";
    }

    decodeFromBlock(args) {
      if (args.STRING === "") return "";
      if (args.DROPDOWN === "base64") return atob(args.STRING);
      if (args.DROPDOWN === "binary") {
        var output = args.STRING.toString();
        return output
          .split(" ")
          .map((x) => (x = String.fromCharCode(parseInt(x, 2))))
          .join("");
      }
      return "";
    }

    negativeReporter(args) {
      return args.INPUT * -1;
    }

    exponentBlock(args) {
      return Math.pow(args.INPUTA, args.INPUTB);
    }

    rootBlock(args) {
      return Math.pow(args.INPUTB, 1 / args.INPUTA);
    }

    normaliseValue(args) {
      var input1 = args.INPUT;
      var input2 = Math.abs(input1);
      var output = input1 / input2;
      if (isNaN(output)) return "0";
      return output;
    }

    clampNumber(args) {
      var input1 = args.INPUTA;
      var input2 = args.INPUTB;
      var input3 = args.INPUTC;
      return Math.min(Math.max(input1, input2), input3);
    }

    setVariableTo(args) {
      vars["variables"][args.INPUTA] = args.INPUTB;
    }

    changeVariableBy(args) {
      if (args.INPUTA in vars["variables"]) {
        var prev = vars["variables"][args.INPUTA];
        var next = args.INPUTB;
        vars["variables"][args.INPUTA] = prev + next;
      } else {
        vars["variables"][args.INPUTA] = args.INPUTB;
      }
    }

    getVariable(args) {
      if (args.INPUT in vars["variables"]) return vars["variables"][args.INPUT];
      return "";
    }

    deleteVariable(args) {
      Reflect.deleteProperty(vars["variables"], args.INPUT);
    }

    deleteAllVariables() {
      Reflect.deleteProperty(vars, "variables");
      vars["variables"] = {};
    }

    greenFlag(args, util) {
      util.runtime.greenFlag();
    }

    setUsername(args, util) {
      util.runtime.ioDevices.userData._username = args.INPUT;
    }

    setSpriteSVG(args, util) {
      try {
        Scratch.vm.runtime.renderer.updateSVGSkin(
          util.target.sprite.costumes[args.INPUTA - 1].skinId,
          args.INPUTB
        );
      } catch (error) {
        return;
      }
      Scratch.vm.emitTargetsUpdate();
    }

    alertBlock(args) {
      alert(args.STRING);
    }

    inputPromptBlock(args) {
      return prompt(args.STRING);
    }

    confirmationBlock(args) {
      return confirm(args.STRING);
    }

    goToLink(args) {
      Scratch.openWindow(args.INPUT);
    }

    redirectToLink(args) {
      Scratch.redirect(args.INPUT);
    }

    setClipboard(args) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(args.STRING);
      }
    }

    readClipboard(args) {
      if (navigator.clipboard && navigator.clipboard.readText) {
        return Scratch.canReadClipboard().then((allowed) => {
          if (allowed) {
            return navigator.clipboard.readText();
          }
          return "";
        });
      }
      return "";
    }

    isUserMobile(args, util) {
      return (
        navigator.userAgent.includes("Mobile") ||
        navigator.userAgent.includes("Android")
      );
    }

    screenReporter(args) {
      if (args.DROPDOWN === "width") return screen.width;
      if (args.DROPDOWN === "height") return screen.height;
      return "";
    }

    windowReporter(args) {
      if (args.DROPDOWN === "width") return window.innerWidth;
      if (args.DROPDOWN === "height") return window.innerHeight;
      return "";
    }

    osBrowserDetails(args) {
      var user = navigator.userAgent;
      if (args.DROPDOWN === "operating system") {
        if (user.includes("Mac OS")) return "macOS";
        if (user.includes("CrOS")) return "ChromeOS";
        if (user.includes("Android")) return "Android";
        if (user.includes("Linux")) return "Linux";
        if (user.includes("Windows")) return "Windows";
        if (user.includes("iPad")) return "iOS";
        if (user.includes("iPod")) return "iOS";
        if (user.includes("iPhone")) return "iOS";
        return "Other";
      }
      if (args.DROPDOWN === "browser") {
        if (user.includes("Edg")) return "Edge";
        if (user.includes("Chrome")) return "Chrome";
        if (user.includes("MSIE")) return "Internet Explorer";
        if (user.includes("Firefox")) return "Firefox";
        if (user.includes("Safari")) return "Safari";
        return "Other";
      }
    }

    projectURL() {
      return window.location.href;
    }

    consoleLog(args) {
      if (args.DROPDOWN === "log") {
        console.log(args.INPUT);
      } else if (args.DROPDOWN === "error") {
        console.error(args.INPUT);
      } else if (args.DROPDOWN === "warn") {
        console.warn(args.INPUT);
      }
    }

    clearConsole() {
      console.clear();
    }

    commentHat() {
      // no-op
    }

    commentCommand() {
      // no-op
    }

    commentString(args) {
      return args.INPUT;
    }

    commentBool(args) {
      return args.INPUT || false;
    }
  }
  Scratch.extensions.register(new LMSUtils());
})(Scratch);
 })(Scratch);","data:text/javascript;,(function(Scratch) { // Name: Clones Plus
// ID: lmsclonesplus
// Description: Expansion of Scratch's clone features.
// By: LilyMakesThings <https://scratch.mit.edu/users/LilyMakesThings/>
// License: MIT AND LGPL-3.0

/* generated l10n code */Scratch.translate.setup({"fi":{"_Clones+":"Kloonit +","_[INPUTA] of clone with [INPUTB] set to [INPUTC]":"kloonin, jonka [INPUTB] on [INPUTC], [INPUTA]","_[INPUT] of main sprite":"päähahmon [INPUT]","_clone count":"kloonien määrä","_clone count of [INPUT]":"hahmon [INPUT] kloonien määrä","_clone with [INPUTA] set to [INPUTB] exists?":"onko olemassa klooni, jonka [INPUTA] on [INPUTB]?","_costume #":"asusteen numero","_costume name":"asusteen nimi","_create clone with [INPUTA] set to [INPUTB]":"luo klooni, jonka [INPUTA] on [INPUTB]","_delete clones in [INPUT]":"poista hahmon [INPUT] kloonit","_delete clones with [INPUTA] set to [INPUTB]":"poista kloonit, joiden [INPUTA] on [INPUTB]","_direction":"suunta","_is clone?":"olenko klooni?","_myself":"minä itse","_set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]":"aseta muuttaja [INPUTA] arvoon [INPUTB] klooneilla, joiden [INPUTC] on [INPUTD]","_set variable [INPUTA] to [INPUTB] for main sprite":"aseta päähahmon muuttuja [INPUTA] arvoon [INPUTB]","_size":"koko","_stop scripts in [INPUT]":"pysäytä koodit hahmossa [INPUT]","_stop scripts in clones with [INPUTA] set to [INPUTB]":"pysäytä koodit klooneissa, joiden [INPUTA] on [INPUTB]","_stop scripts in main sprite":"pysäytä päähahmon koodit","_touching clone with [INPUTA] set to [INPUTB]?":"koskettaako kloonia, jonka [INPUTA] on [INPUTB]?","_touching main sprite?":"koskettaako päähahmoa?","_variable [INPUTA] of clone with [INPUTB] set to [INPUTC]":"kloonin, jonka [INPUTB] on [INPUTC], muuttuja [INPUTA]","_variable [INPUT] of main sprite":"päähahmon muuttuja [INPUT]","_volume":"äänenvoimakkuus","_when I start as a clone with [INPUTA] set to [INPUTB]":"kun aloitan kloonina, jonka [INPUTA] on [INPUTB]","_x position":"x-sijainti","_y position":"y-sijainti"},"ko":{"_direction":"방향","_is clone?":"복제본인가?","_size":"크기","_stop scripts in main sprite":"주 스프라이트의 스크립트 멈추기","_touching main sprite?":"주 스프라이트에 닿았는가?","_x position":"x좌표","_y position":"y좌표"},"nl":{"_Clones+":"Klonen+","_[INPUTA] of clone with [INPUTB] set to [INPUTC]":"[INPUTA] van kloon met [INPUTB] = [INPUTC]","_[INPUT] of main sprite":"[INPUT] van originele sprite","_clone count":"aantal klonen","_clone count of [INPUT]":"aantal klonen van [INPUT]","_clone with [INPUTA] set to [INPUTB] exists?":"kloon met [INPUTA] = [INPUTB] bestaat?","_costume #":"uiterlijknummer","_costume name":"uiterlijknaam","_create clone with [INPUTA] set to [INPUTB]":"maak een kloon met [INPUTA] = [INPUTB]","_delete clones in [INPUT]":"verwijder klonen van [INPUT]","_delete clones with [INPUTA] set to [INPUTB]":"verwijder klonen met [INPUTA] = [INPUTB]","_direction":"richting","_is clone?":"is kloon?","_myself":"mijzelf","_set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]":"maak variabele [INPUTA] [INPUTB] voor klonen met [INPUTC] = [INPUTD]","_set variable [INPUTA] to [INPUTB] for main sprite":"maak variabele [INPUTA] [INPUTB] voor originele sprite","_size":"grootte","_stop scripts in clones with [INPUTA] set to [INPUTB]":"stop scripts in klonen met [INPUTA] = [INPUTB]","_stop scripts in main sprite":"stop scripts in originele sprite","_touching clone with [INPUTA] set to [INPUTB]?":"raak ik kloon met [INPUTA] = [INPUTB]?","_touching main sprite?":"raak ik originele sprite?","_variable [INPUTA] of clone with [INPUTB] set to [INPUTC]":"variabele [INPUTA] van kloon met [INPUTB] = [INPUTC]","_variable [INPUT] of main sprite":"variabele [INPUT] van originele sprite","_when I start as a clone with [INPUTA] set to [INPUTB]":"wanneer ik als kloon start met [INPUTA] = [INPUTB]","_x position":"x-positie","_y position":"y-positie"},"ru":{"_Clones+":"Клоны+","_[INPUTA] of clone with [INPUTB] set to [INPUTC]":"[INPUTA] клона с переменной [INPUTB] установленной в [INPUTC]","_[INPUT] of main sprite":"[INPUT] основного спрайта","_clone count":"количество клонов","_clone count of [INPUT]":"количество клонов [INPUT]","_clone with [INPUTA] set to [INPUTB] exists?":"клон с переменной [INPUTA] установленной в [INPUTB] существует?","_costume #":"костюм #","_costume name":"имя костюма","_create clone with [INPUTA] set to [INPUTB]":"создать клон с [INPUTA] установленной в [INPUTB]","_delete clones in [INPUT]":"удалить клоны [INPUT]","_delete clones with [INPUTA] set to [INPUTB]":"удалить клоны с переменной [INPUTA] установленной в [INPUTB]","_direction":"направление","_is clone?":"клон?","_myself":"самого себя","_set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]":"установить переменную [INPUTA] в [INPUTB] для клонов переменной [INPUTC] установленной в [INPUTD]","_set variable [INPUTA] to [INPUTB] for main sprite":"установить переменную [INPUTA] с [INPUTB] для основного спрайта","_size":"размер","_stop scripts in [INPUT]":"остановить скрипты [INPUT]","_stop scripts in clones with [INPUTA] set to [INPUTB]":"остановить скрипты в клонах с переменной [INPUTA] установленной в [INPUTB]","_stop scripts in main sprite":"остановить скрипты в основном спрайте","_touching clone with [INPUTA] set to [INPUTB]?":"касается клона с [INPUTA] установленной в [INPUTB]?","_touching main sprite?":"касается основного спрайта?","_variable [INPUTA] of clone with [INPUTB] set to [INPUTC]":"переменная [INPUTA] клона с переменной [INPUTB] установленной в [INPUTC]","_variable [INPUT] of main sprite":"переменная [INPUT] основного спрайта","_volume":"объём","_when I start as a clone with [INPUTA] set to [INPUTB]":"когда я начинаю как клон с [INPUTA] установленной в [INPUTB]","_x position":"позиция x","_y position":"позиция y"},"zh-cn":{"_Clones+":"克隆 +","_[INPUTA] of clone with [INPUTB] set to [INPUTC]":"获取[INPUTB]为[INPUTC]的克隆体的[INPUTA]","_[INPUT] of main sprite":"角色本体的[INPUT]","_clone count":"克隆体数量","_clone count of [INPUT]":"[INPUT]的克隆体数量","_clone with [INPUTA] set to [INPUTB] exists?":"存在[INPUTA]为[INPUTB]的克隆体？","_costume #":"造型编号","_costume name":"造型名称","_create clone with [INPUTA] set to [INPUTB]":"创建克隆体并将它的 [INPUTA] 设为 [INPUTB]","_delete clones in [INPUT]":"删除[INPUT]的所有克隆体","_delete clones with [INPUTA] set to [INPUTB]":"删除[INPUTA]为[INPUTB]的克隆体","_direction":"方向","_is clone?":"是克隆体？","_myself":"自己","_set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]":"将满足[INPUTC]为[INPUTD]的克隆体的变量[INPUTA]设为[INPUTB]","_set variable [INPUTA] to [INPUTB] for main sprite":"设置角色本体的变量[INPUTA]为[INPUTB]","_size":"大小","_stop scripts in [INPUT]":"停止[INPUT]中的脚本","_stop scripts in clones with [INPUTA] set to [INPUTB]":"停止[INPUTA]为[INPUTB]的克隆体的脚本","_stop scripts in main sprite":"停止角色本体中的脚本","_touching clone with [INPUTA] set to [INPUTB]?":"碰到 [INPUTA]为 [INPUTB]的克隆体？","_touching main sprite?":"碰到角色本体？","_variable [INPUTA] of clone with [INPUTB] set to [INPUTC]":"获取[INPUTB]为[INPUTC]的克隆体的变量[INPUTA]","_variable [INPUT] of main sprite":"角色本体的变量[INPUT]","_volume":"音量","_when I start as a clone with [INPUTA] set to [INPUTB]":"当我作为克隆体启动，且满足[INPUTA]为[INPUTB]","_x position":"x坐标","_y position":"y坐标"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  const menuIconURI =
    "data:image/png;base64,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";

  /**
   * @param {VM.Target|null} target
   * @param {string|unknown} thing
   * @returns {string|number|boolean}
   */
  const getThingOfTarget = (target, thing) => {
    if (!target) {
      return "";
    }
    if (thing === "x position") {
      return target.x;
    }
    if (thing === "y position") {
      return target.y;
    }
    if (thing === "direction") {
      return target.direction;
    }
    if (thing === "costume num") {
      return target.currentCostume + 1;
    }
    if (thing === "costume name") {
      return target.getCostumes()[target.currentCostume].name;
    }
    if (thing === "size") {
      return target.size;
    }
    if (thing === "volume") {
      return target.volume;
    }
    // this should never happen
    return "";
  };

  class ClonesPlus {
    getInfo() {
      return {
        id: "lmsclonesplus",
        name: Scratch.translate("Clones+"),
        color1: "#FFAB19",
        color2: "#EC9C13",
        color3: "#CF8B17",
        menuIconURI: menuIconURI,
        blocks: [
          {
            opcode: "whenCloneStartsWithVar",
            blockType: Scratch.BlockType.HAT,
            text: Scratch.translate(
              "when I start as a clone with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "createCloneWithVar",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "create clone with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "touchingCloneWithVar",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate(
              "touching clone with [INPUTA] set to [INPUTB]?"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "touchingMainSprite",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("touching main sprite?"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "setVariableOfClone",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "getVariableOfClone",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "variable [INPUTA] of clone with [INPUTB] set to [INPUTC]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "setVariableOfMainSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "set variable [INPUTA] to [INPUTB] for main sprite"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "getVariableOfMainSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("variable [INPUT] of main sprite"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
            },
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "cloneExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate(
              "clone with [INPUTA] set to [INPUTB] exists?"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "getThingOfClone",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "[INPUTA] of clone with [INPUTB] set to [INPUTC]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "thingOfMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTC: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "getThingOfMainSprite",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[INPUT] of main sprite"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "thingOfMenu",
              },
            },
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "stopScriptsInSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("stop scripts in [INPUT]"),
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "stopScriptsInClone",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "stop scripts in clones with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "stopScriptsInMainSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("stop scripts in main sprite"),
            filter: [Scratch.TargetType.SPRITE],
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "deleteClonesInSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete clones in [INPUT]"),
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
            extensions: ["colours_control"],
          },
          {
            opcode: "deleteCloneWithVar",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "delete clones with [INPUTA] set to [INPUTB]"
            ),
            filter: [Scratch.TargetType.SPRITE],
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                menu: "variablesMenu",
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "isClone",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is clone?"),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            extensions: ["colours_control"],
          },

          "---",

          {
            opcode: "cloneCount",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("clone count"),
            extensions: ["colours_control"],
          },
          {
            opcode: "spriteCloneCount",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("clone count of [INPUT]"),
            disableMonitor: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                menu: "spriteMenu",
              },
            },
            extensions: ["colours_control"],
          },
        ],
        menus: {
          spriteMenu: {
            acceptReporters: true,
            items: "getSprites",
          },
          // menus use acceptReporters: false for Scratch parity
          variablesMenu: {
            acceptReporters: false,
            items: "getVariables",
          },
          thingOfMenu: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("x position"),
                value: "x position",
              },
              {
                text: Scratch.translate("y position"),
                value: "y position",
              },
              {
                text: Scratch.translate("direction"),
                value: "direction",
              },
              {
                text: Scratch.translate("costume #"),
                value: "costume num",
              },
              {
                text: Scratch.translate("costume name"),
                value: "costume name",
              },
              {
                text: Scratch.translate("size"),
                value: "size",
              },
              {
                text: Scratch.translate("volume"),
                value: "volume",
              },
            ],
          },
        },
      };
    }

    whenCloneStartsWithVar(args, util) {
      // TODO: this is really not ideal. this should be an event-based hat ideally, but we don't have a good
      // way to do that right now...
      if (util.target.isOriginal) {
        return false;
      }
      const variable = util.target.lookupVariableById(args.INPUTA);
      const expectedValue = args.INPUTB;
      if (variable) {
        return Scratch.Cast.compare(variable.value, expectedValue) === 0;
      }
      return false;
    }

    createCloneWithVar(args, util) {
      // @ts-expect-error - not typed yet
      Scratch.vm.runtime.ext_scratch3_control._createClone(
        util.target.sprite.name,
        util.target
      );
      const clones = util.target.sprite.clones;
      const cloneNum = clones.length - 1;
      const cloneVariable = clones[cloneNum].lookupVariableById(args.INPUTA);
      if (cloneVariable) {
        cloneVariable.value = args.INPUTB;
      }
    }

    touchingCloneWithVar(args, util) {
      const drawableCandidates = util.target.sprite.clones
        .filter((clone) => {
          const variable = clone.lookupVariableById(args.INPUTA);
          return (
            variable && Scratch.Cast.compare(variable.value, args.INPUTB) === 0
          );
        })
        .map((clone) => clone.drawableID);
      if (drawableCandidates.length === 0) {
        return false;
      }
      return Scratch.vm.renderer.isTouchingDrawables(
        util.target.drawableID,
        drawableCandidates
      );
    }

    touchingMainSprite(args, util) {
      if (util.target.isOriginal) {
        return false;
      }
      const main = util.target.sprite.clones[0];
      const drawableCandidates = [main.drawableID];
      return Scratch.vm.renderer.isTouchingDrawables(
        util.target.drawableID,
        drawableCandidates
      );
    }

    setVariableOfClone(args, util) {
      const newVariableValue = args.INPUTB;
      const expectedVarValue = args.INPUTD;
      const clones = util.target.sprite.clones;
      for (let index = 1; index < clones.length; index++) {
        const checkVar = clones[index].lookupVariableById(args.INPUTC);
        if (
          checkVar &&
          Scratch.Cast.compare(checkVar.value, expectedVarValue) === 0
        ) {
          const editVar = clones[index].lookupVariableById(args.INPUTA);
          if (editVar) {
            editVar.value = newVariableValue;
          }
        }
      }
    }

    getVariableOfClone(args, util) {
      const clone = this.getCloneFromVariable(
        args.INPUTB,
        args.INPUTC,
        util.target.sprite.clones
      );
      if (!clone) {
        return "";
      }
      // guaranteed to exist by getCloneFromVariable
      const cloneVar = clone.lookupVariableById(args.INPUTA);
      return cloneVar.value;
    }

    setVariableOfMainSprite(args, util) {
      const main = util.target.sprite.clones[0];
      const variableObj = main.lookupVariableById(args.INPUTA);
      if (variableObj) {
        variableObj.value = args.INPUTB;
      }
    }

    getVariableOfMainSprite(args, util) {
      const main = util.target.sprite.clones[0];
      const variableObj = main.lookupVariableById(args.INPUT);
      if (variableObj) {
        return variableObj.value;
      }
      return "";
    }

    cloneExists(args, util) {
      const clone = this.getCloneFromVariable(
        args.INPUTA,
        args.INPUTB,
        util.target.sprite.clones
      );
      return !!clone;
    }

    getThingOfClone(args, util) {
      const clone = this.getCloneFromVariable(
        args.INPUTB,
        args.INPUTC,
        util.target.sprite.clones
      );
      return getThingOfTarget(clone, args.INPUTA);
    }

    getThingOfMainSprite(args, util) {
      const main = util.target.sprite.clones[0];
      return getThingOfTarget(main, args.INPUT);
    }

    stopScriptsInSprite(args) {
      const targetObj = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
      if (targetObj) {
        Scratch.vm.runtime.stopForTarget(targetObj);
      }
    }

    stopScriptsInMainSprite(args, util) {
      Scratch.vm.runtime.stopForTarget(util.target.sprite.clones[0]);
    }

    stopScriptsInClone(args, util) {
      const clones = util.target.sprite.clones;
      let expectedValue = args.INPUTB;
      for (let index = 1; index < clones.length; index++) {
        const cloneVariable = clones[index].lookupVariableById(args.INPUTA);
        if (
          cloneVariable &&
          Scratch.Cast.compare(cloneVariable.value, expectedValue) === 0
        ) {
          Scratch.vm.runtime.stopForTarget(clones[index]);
        }
      }
    }

    deleteClonesInSprite(args, util) {
      const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
      if (!target) {
        return;
      }
      const clones = target.sprite.clones;
      for (let index = clones.length - 1; index > 0; index--) {
        Scratch.vm.runtime.disposeTarget(clones[index]);
      }
    }

    deleteCloneWithVar(args, util) {
      const clones = util.target.sprite.clones;
      const expectedValue = args.INPUTB;
      for (let index = clones.length - 1; index > 0; index--) {
        const cloneVar = clones[index].lookupVariableById(args.INPUTA);
        if (
          cloneVar &&
          Scratch.Cast.compare(cloneVar.value, expectedValue) === 0
        ) {
          Scratch.vm.runtime.disposeTarget(clones[index]);
        }
      }
    }

    isClone(args, util) {
      return !util.target.isOriginal;
    }

    cloneCount(args, util) {
      return Scratch.vm.runtime._cloneCounter;
    }

    spriteCloneCount(args, util) {
      const target = Scratch.vm.runtime.getSpriteTargetByName(args.INPUT);
      if (target) {
        return target.sprite.clones.length - 1;
      }
      return 0;
    }

    /**
     * @param {string} variableId
     * @param {unknown} expectedValue
     * @param {VM.Target[]} clones
     * @returns {VM.Target|null}
     */
    getCloneFromVariable(variableId, expectedValue, clones) {
      for (let index = 1; index < clones.length; index++) {
        const cloneVar = clones[index].lookupVariableById(variableId);
        if (
          cloneVar &&
          Scratch.Cast.compare(cloneVar.value, expectedValue) === 0
        ) {
          return clones[index];
        }
      }
      return null;
    }

    getSprites() {
      let spriteNames = [];
      const targets = Scratch.vm.runtime.targets;
      const myself = Scratch.vm.runtime.getEditingTarget().sprite.name;
      for (let index = 1; index < targets.length; index++) {
        const curTarget = targets[index].sprite;
        let display = curTarget.name;
        if (myself === curTarget.name) {
          display = Scratch.translate({
            default: "myself",
            description: "Item in a dropdown that refers to the current sprite",
          });
        }
        if (targets[index].isOriginal) {
          const jsonOBJ = {
            text: display,
            value: curTarget.name,
          };
          spriteNames.push(jsonOBJ);
        }
      }
      if (spriteNames.length > 0) {
        return spriteNames;
      } else {
        return [{ text: "", value: 0 }]; //this should never happen but it's a failsafe
      }
    }

    getSpriteObj(name) {
      //This is unused but I'm leaving it in for potential future blocks
      const spriteObj = Scratch.vm.runtime.getSpriteTargetByName(name);
      return JSON.stringify(spriteObj);
    }

    getVariables() {
      // @ts-expect-error - Blockly not typed yet
      const variables =
        typeof Blockly === "undefined"
          ? []
          : Blockly.getMainWorkspace()
              .getVariableMap()
              .getVariablesOfType("")
              .filter((model) => model.isLocal)
              .map((model) => ({
                text: model.name,
                value: model.getId(),
              }));
      if (variables.length > 0) {
        return variables;
      } else {
        return [{ text: "", value: "" }];
      }
    }
  }
  Scratch.extensions.register(new ClonesPlus());
})(Scratch);
 })(Scratch);","data:text/javascript;,(function(Scratch) { // Name: Fetch
// ID: fetch
// Description: Make requests to the broader internet.
// License: MIT AND MPL-2.0

/* generated l10n code */Scratch.translate.setup({"de":{"_Fetch":"Internetquests"},"fi":{"_Fetch":"Datan haku"},"nb":{"_Fetch":"Hent"},"ru":{"_Fetch":"Поимка"},"zh-cn":{"_Fetch":"请求API"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  class Fetch {
    getInfo() {
      return {
        id: "fetch",
        name: Scratch.translate("Fetch"),
        blocks: [
          {
            opcode: "get",
            blockType: Scratch.BlockType.REPORTER,
            text: "GET [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/hello.txt",
              },
            },
          },
        ],
      };
    }

    get(args) {
      return Scratch.fetch(args.URL)
        .then((r) => r.text())
        .catch(() => "");
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);
 })(Scratch);","data:text/javascript;,(function(Scratch) { // Name: JSON
// ID: skyhigh173JSON
// Description: Handle JSON strings and arrays.
// By: Skyhigh173
// License: MIT

/* generated l10n code */Scratch.translate.setup({"ca":{"_Advanced":"Avançat"},"cs":{"_Advanced":"Pokročilé"},"de":{"_Advanced":"Erweitert"},"es":{"_Advanced":"Avanzado"},"fi":{"_Advanced":"Edistykselliset","_Array":"Taulukko","_General Utils":"Yleiset työkalut","_Lists":"Listat","_Object":"Olio","_[json] contains key [key]?":"sisältääkö [json] avaimen [key]?","_[json] contains value [value]?":"sisältääkö [json] arvon [value]?","_add [item] to array [json]":"lisää [item] taulukkoon [json]","_all [Stype] of [json]":"kaikki JSO-koodin [json] [Stype] ","_array concat [json] [json2]":"yhdistä taulukot [json] ja [json2]","_array from text [json]":"taulukko tekstistä [json]","_ascending":"nousevaan","_create array by [text] with delimiter [d]":"luo taulukko tekstistä [text] erottimella [d] ","_datas":"datat","_delete [item] in [json]":"poista [item] JSON-koodissa [json]","_delete all [item] in array [json]":"poista jokainen [item] taulukosta [json]","_delete item [item] of array [json]":"poista taulukon [json] [item]. kohde","_descending":"laskevaan","_flat array [json] by depth [depth]":"alenna taulukkoa [json] [depth] tasolla","_get all values with key [key] in array [json]":"kaikki taulukon [json] arvot avaimella [key]","_get list [list] as array":"lista [list] taulukkona","_insert [item] at [pos] of array [json]":"lisää [item] taulukon [json] [pos]. kohtaan","_is JSON [json] valid?":"onko JSON-koodi [json] kelvollinen?","_is [json] [types]?":"onko [json] [types]?","_item # of [item] in array [json]":"taulukon [json] [item]. kohde","_item [item] of array [json]":"taulukon [json] [item]. kohde","_items [item] to [item2] of array [json]":"taulukon [json] kohteet [item] – [item2]","_join string by array [json] with delimiter [d]":"tee taulukosta [json] merkkijono erottimella [d]","_keys":"avaimet","_length of array [json]":"taulukon [json] pituus","_length of json [json]":"JSON-koodin [json] pituus","_new [json]":"uusi [json]","_replace item [pos] of [json] with [item]":"korvaa taulukon [json] [pos]. kohde arvolla [item]","_reverse array [json]":"taulukko [json] käänteisenä","_select a list":"valitse lista","_set [item] in [json] to [value]":"aseta [item] JSON-koodissa [json] arvoon [value]","_set length of array [json] to [len]":"aseta taulukon [json] pituus arvoon [len]","_set list [list] to [json]":"aseta lista [list] arvoon [json]","_sort array [list] in [order] order":"järjestä taulukko [list] [order] järjestykseen","_value of [item] in [json]":"avaimen [item] arvo JSON-koodissa [json]","_values":"arvot"},"fr":{"_Advanced":"Avancé"},"hu":{"_Advanced":"Haladó"},"it":{"_Advanced":"Impostazioni Avanzate"},"ja":{"_Advanced":"詳細設定"},"ja-hira":{"_Advanced":"こうどなせってい"},"ko":{"_Advanced":"고급 설정","_[json] contains key [key]?":"[json]이 키 [key]을 포함하는가?","_[json] contains value [value]?":"[json]이 값 [value]을 포함하는가?","_add [item] to array [json]":"배열 [json]에서 [item]을 추가하기","_delete [item] in [json]":"[json]에서 [item]을 삭제하기","_delete all [item] in array [json]":"배열 [json]의 요소 [item]을 모두 삭제하기","_delete item [item] of array [json]":"배열 [json]의 요소 [item]을 삭제하기","_is JSON [json] valid?":"JSON [json]이 유효한가?","_is [json] [types]?":"[json]이 [types]인가?","_length of array [json]":"배열 [json]의 길이","_set [item] in [json] to [value]":"[json]에서 [item]을 [value]로 정하기","_value of [item] in [json]":"[json]에서 [item]의 값"},"lt":{"_Advanced":"Išplėstiniai"},"nb":{"_Advanced":"Avansert","_keys":"nøkler","_values":"verdier"},"nl":{"_Advanced":"Geavanceerd","_General Utils":"Algemeen","_Lists":"Lijsten","_[json] contains key [key]?":"[json] bevat sleutel [key]?","_[json] contains value [value]?":"[json] bevat waarde [value]?","_add [item] to array [json]":"voeg [item] toe aan array [json]","_all [Stype] of [json]":"alle [Stype] van [json]","_array concat [json] [json2]":"voeg arrays [json] en [json2] samen","_array from text [json]":"array van tekst [json]","_ascending":"oplopende","_create array by [text] with delimiter [d]":"creëer array uit [text] met scheidingsteken [d]","_datas":"gegevens","_delete [item] in [json]":"verwijder [item] van [json]","_delete all [item] in array [json]":"verwijder alle [item] van array [json]","_delete item [item] of array [json]":"verwijder item [item] van array [json]","_descending":"aflopende","_flat array [json] by depth [depth]":"vlak array [json] af op diepte [depth]","_get all values with key [key] in array [json]":"alle waarden met sleutel [key] in array [json]","_get list [list] as array":"lijst [list] als array","_insert [item] at [pos] of array [json]":"voeg [item] in op [pos] van array [json]","_is JSON [json] valid?":"is JSON [json] geldig?","_is [json] [types]?":"is [json] [types] ?","_item # of [item] in array [json]":"item # van [item] in array [json]","_item [item] of array [json]":"item [item] van array [json]","_items [item] to [item2] of array [json]":"items [item] t/m [item2] van array [json]","_join string by array [json] with delimiter [d]":"voeg array [json] samen tot string met scheidingsteken [d]","_keys":"sleutels","_length of array [json]":"lengte van array [json]","_length of json [json]":"lengte van JSON [json]","_new [json]":"nieuw(e) [json]","_replace item [pos] of [json] with [item]":"vervang item [pos] van [json] door [item]","_reverse array [json]":"keer array [json] om","_select a list":"selecteer een lijst","_set [item] in [json] to [value]":"maak [item] in [json] [value]","_set length of array [json] to [len]":"maak lengte van array [json] [len]","_set list [list] to [json]":"maak lijst [list] [json]","_sort array [list] in [order] order":"sorteer array [list] in [order] volgorde","_value of [item] in [json]":"waarde van [item] in [json]","_values":"waarden"},"pl":{"_Advanced":"Zaawansowane"},"pt":{"_Advanced":"Avançado"},"pt-br":{"_Advanced":"Avançado"},"ro":{"_Advanced":"Avansat"},"ru":{"_Advanced":"Дополнительно","_Array":"Матрица","_General Utils":"Главные Утилиты","_Lists":"Списки","_Object":"Объект","_[json] contains key [key]?":"[json] содержит ключ [key]?","_[json] contains value [value]?":"[json] содержит значение [value]?","_add [item] to array [json]":"добавить [item] в матрицу [json]","_all [Stype] of [json]":"все [Stype] [json]","_array concat [json] [json2]":"соединить матрицы [json] и [json2]","_array from text [json]":"матрица из текста [json]","_ascending":"нарастающей","_create array by [text] with delimiter [d]":"создать матрицу из [text] с разделителем [d]","_datas":"данные","_delete [item] in [json]":"удалить [item] из [json]","_delete all [item] in array [json]":"удалить все [item] в массиве [json]","_delete item [item] of array [json]":"удалить число [item] матрицы [json]","_descending":"опускающей","_flat array [json] by depth [depth]":"плоская матрица [json] по глубине [depth]","_get all values with key [key] in array [json]":"получить все значения с ключом [key] в матрице [json]","_get list [list] as array":"получить список [list] как матрица ","_insert [item] at [pos] of array [json]":"вставить [item] на число [pos] матрицы [json]","_is JSON [json] valid?":"JSON [json] правилен?","_is [json] [types]?":"[json] [types]?","_item # of [item] in array [json]":"значение # [item] матрицы [json]","_item [item] of array [json]":"число [item] матрицы [json]","_items [item] to [item2] of array [json]":"значения [item] в [item2] матрицы [json]","_join string by array [json] with delimiter [d]":"присоединить строку матрицей [json] с разделителем [d]","_keys":"ключи","_length of array [json]":"длина матрицы [json]","_length of json [json]":"длина json [json]","_new [json]":"новый [json]","_replace item [pos] of [json] with [item]":"заменить число [pos] матрицы [json] на [item]","_reverse array [json]":"обернуть матрицу [json]","_select a list":"выберите список","_set [item] in [json] to [value]":"установить [item] в [json] на [value]","_set length of array [json] to [len]":"установить длину матрицы [json] на [len]","_set list [list] to [json]":"установить список [list] в [json]","_sort array [list] in [order] order":"сортировать матрицу [list] в порядке [order]","_value of [item] in [json]":"значение [item] в [json]","_values":"значения"},"sl":{"_Advanced":"Napredno"},"sr":{"_Advanced":"Напредно"},"sv":{"_Advanced":"Avancerat"},"tr":{"_Advanced":"Gelişmiş"},"uk":{"_Advanced":"Додатково"},"vi":{"_Advanced":"Nâng cao"},"zh-cn":{"_Advanced":"高级","_General Utils":"通用","_Lists":"原版列表","_[json1] [equal] [json2]":"[json1][equal][json2]","_[json] contains key [key]?":"[json]包括键[key]？","_[json] contains value [value]?":"[json]包括值[value]？","_add [item] to array [json]":"向Array[json]添加[item]","_all [Stype] of [json]":"[json]的所有[Stype]","_array concat [json] [json2]":"合并Array[json]和[json2]","_array from text [json]":"来自字符串[json]的Array","_ascending":"正序","_create array by [text] with delimiter [d]":"以[d]分割字符串[text]作为Array","_datas":"数据","_delete [item] in [json]":"删除[json]中的[item]","_delete all [item] in array [json]":"删除Array[json]的所有[item]","_delete item [item] of array [json]":"删除Array[json]的第[item]项","_descending":"倒序","_flat array [json] by depth [depth]":"按照深度[depth]平面化Array[json]","_get all values with key [key] in array [json]":"获取Array[json]中所有[key]的值","_get list [list] as array":"获取原版列表[list]","_insert [item] at [pos] of array [json]":"在Array[json]的第[pos]项前插入[item]","_is JSON [json] valid?":"[json]是合法JSON？","_is [json] [types]?":"[json]是[types]？","_item # of [item] in array [json]":"Array[json]中第一个[item]的位置","_item [item] of array [json]":"Array[json]的第[item]项","_items [item] to [item2] of array [json]":"Array[json]的第[item]到第[item2]项","_join string by array [json] with delimiter [d]":"以[d]合并Array[json]","_keys":"键","_length of array [json]":"Array[json]的长度","_length of json [json]":"JSON[json]的长度","_new [json]":"新[json]","_replace item [pos] of [json] with [item]":"替换Array[json]的第[pos]项为[item]","_reverse array [json]":"反转Array[json]","_select a list":"请选择一个列表","_set [item] in [json] to [value]":"设置[json]中的[item]为[value]","_set length of array [json] to [len]":"设置Array[json]的长度为[len]","_set list [list] to [json]":"设置原版列表[list]为[json]","_sort array [list] in [order] order":"以[order]排序Array[list]","_value of [item] in [json]":"[json]中的[item]","_values":"值"},"zh-tw":{"_Advanced":"個別更改"}});/* end generated l10n code */(function (Scratch) {
  "use strict";
  /*
   * JSON extension v2.5 by skyhigh173 (English Version)
   * Do not remove this comment
   */

  const vm = Scratch.vm;
  const hasOwn = (obj, property) =>
    Object.prototype.hasOwnProperty.call(obj, property);

  const makeLabel = (text) => ({
    blockType: "label",
    text: text,
  });

  class JSONS {
    getInfo() {
      return {
        id: "skyhigh173JSON",
        name: "JSON",
        color1: "#3271D0",
        blocks: [
          makeLabel(Scratch.translate("General Utils")),
          {
            opcode: "json_is_valid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is JSON [json] valid?"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
            },
          },
          {
            opcode: "json_is",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is [json] [types]?"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
              types: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Object",
                menu: "types",
              },
            },
          },
          "---",
          {
            opcode: "json_get_all",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("all [Stype] of [json]"),
            arguments: {
              Stype: {
                type: Scratch.ArgumentType.STRING,
                menu: "get_all",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value","key2":"value2"}',
              },
            },
          },
          {
            opcode: "json_new",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("new [json]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Object",
                menu: "types",
              },
            },
          },
          "---",
          {
            opcode: "json_has_key",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[json] contains key [key]?"),
            arguments: {
              key: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "key2",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
            },
          },
          {
            opcode: "json_has_value",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[json] contains value [value]?"),
            arguments: {
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "scratch",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["TurboWarp","scratch"]',
              },
            },
          },
          {
            opcode: "json_equal",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("[json1] [equal] [json2]"),
            arguments: {
              json1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"a":0,"b":1}',
              },
              json2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"b":1,"a":0}',
              },
              equal: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "=",
                menu: "equal",
              },
            },
          },
          makeLabel("JSON Strings"),
          {
            opcode: "json_jlength",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("length of json [json]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value","key2":"value2"}',
              },
            },
          },
          {
            opcode: "json_get",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("value of [item] in [json]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "key",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
            },
          },
          {
            opcode: "json_set",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set [item] in [json] to [value]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "key",
              },
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "new value",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}',
              },
            },
          },
          {
            opcode: "json_delete",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("delete [item] in [json]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "key2",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value","key2":"value2"}',
              },
            },
          },
          makeLabel(Scratch.translate("Array")),
          {
            opcode: "json_length",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("length of array [json]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[1,2,3]",
              },
            },
          },
          {
            opcode: "json_array_get",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("item [item] of array [json]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["scratch","TurboWarp"]',
              },
            },
          },
          {
            opcode: "json_array_push",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("add [item] to array [json]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "TurboWarp",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["scratch"]',
              },
            },
          },
          {
            opcode: "json_array_set",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("replace item [pos] of [json] with [item]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "fav",
              },
              pos: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["love","heart","follow"]',
              },
            },
          },
          {
            opcode: "json_array_insert",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("insert [item] at [pos] of array [json]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "fav",
              },
              pos: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["love","follow"]',
              },
            },
          },
          "---",
          {
            opcode: "json_array_delete",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("delete item [item] of array [json]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["scratch","a","TurboWarp"]',
              },
            },
          },
          {
            opcode: "json_array_remove_all",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("delete all [item] in array [json]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "a",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["scratch","a","TurboWarp","a","a"]',
              },
            },
          },
          "---",
          {
            opcode: "json_array_itemH",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("item # of [item] in array [json]"),
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "scratch",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["scratch","TurboWarp"]',
              },
            },
          },
          makeLabel(Scratch.translate("Advanced")),
          {
            opcode: "json_array_from",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("array from text [json]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "abcd",
              },
            },
          },
          {
            opcode: "json_array_fromto",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("items [item] to [item2] of array [json]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[1,2,3,4]",
              },
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              item2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3,
              },
            },
          },
          {
            opcode: "json_array_reverse",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("reverse array [json]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c","d","e","f"]',
              },
            },
          },
          {
            opcode: "json_array_flat",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("flat array [json] by depth [depth]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[[1],2,[3,4],[5,[6]]]",
              },
              depth: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
            },
          },
          {
            opcode: "json_array_concat",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("array concat [json] [json2]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b"]',
              },
              json2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["c","d"]',
              },
            },
          },
          {
            opcode: "json_array_filter",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "get all values with key [key] in array [json]"
            ),
            arguments: {
              key: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "id",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[{"id":12},{"id":24}]',
              },
            },
          },
          {
            opcode: "json_array_setlen",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set length of array [json] to [len]"),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]',
              },
              len: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
            },
          },
          "---",
          {
            opcode: "json_array_create",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "create array by [text] with delimiter [d]"
            ),
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "a,b,c",
              },
              d: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ",",
              },
            },
          },
          {
            opcode: "json_array_join",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "join string by array [json] with delimiter [d]"
            ),
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]',
              },
              d: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ",",
              },
            },
          },
          "---",
          {
            opcode: "json_array_sort",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("sort array [list] in [order] order"),
            disableMonitor: true,
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                defaultValue:
                  "[5.23, 214, 522, 61, 5.24, 62.2, 1, 51212, 0, 0]",
              },
              order: {
                type: Scratch.ArgumentType.STRING,
                menu: "sort_order",
              },
            },
          },
          makeLabel(Scratch.translate("Lists")),
          {
            opcode: "json_vm_getlist",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("get list [list] as array"),
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                menu: "get_list",
              },
            },
          },
          {
            opcode: "json_vm_setlist",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set list [list] to [json]"),
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                menu: "get_list",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["apple","banana"]',
              },
            },
          },
        ],
        menus: {
          get_all: {
            items: [
              {
                text: Scratch.translate("keys"),
                value: "keys",
              },
              {
                text: Scratch.translate("values"),
                value: "values",
              },
              {
                text: Scratch.translate("datas"),
                value: "datas",
              },
            ],
          },
          get_list: {
            acceptReporters: true,
            items: "getLists",
          },
          types: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("Object"),
                value: "Object",
              },
              {
                text: Scratch.translate("Array"),
                value: "Array",
              },
            ],
          },
          equal: {
            acceptReporters: true,
            items: ["=", "≠"],
          },
          sort_order: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("ascending"),
                value: "ascending",
              },
              {
                text: Scratch.translate("descending"),
                value: "descending",
              },
            ],
          },
        },
      };
    }

    getLists() {
      const globalLists = Object.values(
        vm.runtime.getTargetForStage().variables
      ).filter((x) => x.type == "list");
      const localLists = Object.values(vm.editingTarget.variables).filter(
        (x) => x.type == "list"
      );
      const uniqueLists = [...new Set([...globalLists, ...localLists])];
      if (uniqueLists.length === 0) {
        return [
          {
            text: Scratch.translate("select a list"),
            value: "select a list",
          },
        ];
      }
      return uniqueLists.map((i) => ({
        text: i.name,
        value: i.id,
      }));
    }

    lookupList(list, util) {
      const byId = util.target.lookupVariableById(list);
      if (byId && byId.type === "list") {
        return byId;
      }
      const byName = util.target.lookupVariableByNameAndType(list, "list");
      if (byName) {
        return byName;
      }
      return null;
    }

    json_is_valid({ json }) {
      if (typeof json != "string") {
        return false;
      } else if (
        (json.slice(0, 1) != "[" || json.slice(-1) != "]") &&
        (json.slice(0, 1) != "{" || json.slice(-1) != "}")
      ) {
        return false;
      } else {
        try {
          JSON.parse(json);
          return true;
        } catch {
          return false;
        }
      }
    }

    // return object if its json else string
    json_valid_return(json) {
      if (typeof json != "string") {
        return json;
      } else if (
        (json.slice(0, 1) != "[" || json.slice(-1) != "]") &&
        (json.slice(0, 1) != "{" || json.slice(-1) != "}")
      ) {
        return json;
      } else {
        try {
          return JSON.parse(json);
        } catch {
          return json;
        }
      }
    }

    json_is({ json, types }) {
      if (!this.json_is_valid({ json: json })) return false;
      try {
        json = JSON.parse(json);
        switch (types) {
          case "Object":
            return !Array.isArray(json);
          case "Array":
            return Array.isArray(json);
          default:
            return false;
        }
      } catch {
        return false;
      }
    }

    json_length({ json }) {
      try {
        json = JSON.parse(json);
        return Object.keys(json).length;
      } catch {
        return " ";
      }
    }

    json_new({ json }) {
      switch (json) {
        case "Object":
          return "{}";
        case "Array":
          return "[]";
        default:
          return "";
      }
    }

    json_has_key({ json, key }) {
      try {
        return (
          this._fixInvalidJSONValues(this.json_valid_return(key)) in
          JSON.parse(json)
        );
      } catch {
        return false;
      }
    }

    json_has_value({ json, value }) {
      try {
        json = JSON.parse(json);
        value = this.json_valid_return(value);
        return json.includes(value);
      } catch {
        return false;
      }
    }

    json_equal({ json1, equal, json2 }) {
      try {
        json1 = JSON.parse(json1);
        json2 = JSON.parse(json2);

        const keys1 = Object.keys(json1);
        const keys2 = Object.keys(json2);
        const result =
          keys1.length === keys2.length &&
          Object.keys(json1).every((key) => json1[key] === json2[key]);
        if (equal === "=") return result;
        if (equal === "≠") return !result;
      } catch {
        // ignore
      }
      return false;
    }

    json_get_all({ Stype, json }) {
      try {
        json = JSON.parse(json);
        switch (Stype) {
          case "keys":
            return JSON.stringify(Object.keys(json).map((key) => key));
          case "values":
            return JSON.stringify(Object.keys(json).map((key) => json[key]));
          case "datas":
            return JSON.stringify(
              Object.keys(json).map((key) => [key, json[key]])
            );
          default:
            return "";
        }
      } catch {
        return "";
      }
    }

    json_get({ item, json }) {
      try {
        json = JSON.parse(json);
        if (hasOwn(json, item)) {
          const result = json[item];
          if (typeof result === "object") {
            return JSON.stringify(result);
          } else {
            return result;
          }
        }
      } catch {
        // ignore
      }
      return "";
    }

    _fixInvalidJSONValues(value) {
      // JSON does not support these values, so convert to string.
      if (Number.isNaN(value)) return "NaN";
      if (value === Infinity) return "Infinity";
      if (value === -Infinity) return "-Infinity";
      return value;
    }

    json_set({ item, value, json }) {
      try {
        json = JSON.parse(json);
        value = this.json_valid_return(value);
        value = this._fixInvalidJSONValues(value);
        json[item] = value;
        return JSON.stringify(json);
      } catch {
        return "";
      }
    }

    json_delete({ item, json }) {
      try {
        json = JSON.parse(json);
        delete json[item];
        return JSON.stringify(json);
      } catch {
        return "";
      }
    }

    json_jlength({ json }) {
      // same function
      return this.json_length({ json: json });
    }

    json_array_get({ item, json }) {
      // 1...length : array content, -1...-length : reverse array content, 0 : ERROR
      try {
        item = Scratch.Cast.toNumber(item);
        if (item == 0) return "";
        if (item > 0) {
          item--;
        }
        json = JSON.parse(json);
        let result;
        if (item >= 0) {
          result = json[item];
        } else {
          result = json[json.length + item];
        }
        if (typeof result == "object") {
          return JSON.stringify(result);
        } else {
          return result;
        }
      } catch {
        return "";
      }
    }

    json_array_itemH({ item, json }) {
      try {
        json = JSON.parse(json);
        item = this._fixInvalidJSONValues(this.json_valid_return(item));
        let result = JSON.stringify(json.indexOf(item) + 1);
        return result;
      } catch {
        return "";
      }
    }

    json_array_from({ json }) {
      try {
        return JSON.stringify(Array.from(String(json)));
      } catch {
        return "";
      }
    }

    json_array_concat({ json, json2 }) {
      try {
        json = JSON.parse(json);
        json2 = JSON.parse(json2);
        return JSON.stringify(json.concat(json2));
      } catch {
        return "";
      }
    }

    json_array_push({ item, json }) {
      try {
        json = JSON.parse(json);
        item = this._fixInvalidJSONValues(this.json_valid_return(item));
        json.push(item);
        return JSON.stringify(json);
      } catch {
        return "";
      }
    }

    json_array_insert({ item, pos, json }) {
      try {
        json = JSON.parse(json);
        item = this._fixInvalidJSONValues(this.json_valid_return(item));
        json.splice(pos - 1, 0, item);
        return JSON.stringify(json);
      } catch {
        return "";
      }
    }

    json_array_set({ item, pos, json }) {
      try {
        json = JSON.parse(json);
        json[pos - 1] = this._fixInvalidJSONValues(
          this.json_valid_return(item)
        );
        return JSON.stringify(json);
      } catch {
        return "";
      }
    }

    json_array_delete({ item, json }) {
      try {
        json = JSON.parse(json);
        json.splice(item - 1, 1);
        return JSON.stringify(json);
      } catch {
        return "";
      }
    }

    json_array_remove_all({ item, json }) {
      try {
        json = JSON.parse(json);
        item = this._fixInvalidJSONValues(this.json_valid_return(item));
        let i = 0;
        while (i < json.length) {
          if (json[i] === item) {
            json.splice(i, 1);
          } else {
            ++i;
          }
        }
        return JSON.stringify(json);
      } catch {
        return "";
      }
    }

    json_array_fromto({ json, item, item2 }) {
      try {
        return JSON.stringify(JSON.parse(json).slice(item - 1, item2));
      } catch {
        return "";
      }
    }

    json_array_reverse({ json }) {
      try {
        return JSON.stringify(JSON.parse(json).reverse());
      } catch {
        return "";
      }
    }

    json_array_flat({ json, depth }) {
      try {
        return JSON.stringify(JSON.parse(json).flat(depth));
      } catch {
        return "";
      }
    }

    json_array_create({ text, d }) {
      return JSON.stringify(String(text).split(d));
    }

    json_array_join({ json, d }) {
      try {
        return JSON.parse(json).join(d);
      } catch {
        return "";
      }
    }

    json_array_filter({ key, json }) {
      try {
        json = JSON.parse(json);
        return JSON.stringify(
          json.map((x) => {
            if (hasOwn(x, key)) {
              return x[key];
            }
            return null;
          })
        );
      } catch (e) {
        return "";
      }
    }

    json_array_setlen({ json, len }) {
      try {
        json = JSON.parse(json);
        json.length = len;
        return JSON.stringify(json);
      } catch {
        return "";
      }
    }

    json_vm_getlist({ list }, util) {
      try {
        let listVariable = this.lookupList(list, util);
        if (listVariable) {
          return JSON.stringify(listVariable.value);
        }
      } catch (e) {
        // ignore
      }
      return "";
    }
    json_vm_setlist({ list, json }, util) {
      try {
        let listVariable = this.lookupList(list, util);
        if (listVariable) {
          const array = JSON.parse(json);
          if (Array.isArray(array)) {
            const safeArray = array.map((i) => {
              if (typeof i === "object") return JSON.stringify(i);
              return i;
            });
            listVariable.value = safeArray;
          }
        }
      } catch (e) {
        // ignore
      }
      return "";
    }

    json_array_sort(args) {
      let list;
      try {
        list = JSON.parse(args.list);
      } catch {
        return "";
      }
      if (!Array.isArray(list)) {
        return "";
      }
      list.sort(Scratch.Cast.compare);
      if (args.order === "descending") list.reverse();
      return JSON.stringify(list);
    }
  }
  Scratch.extensions.register(new JSONS());
})(Scratch);
 })(Scratch);","data:text/javascript;,(function(Scratch) { // Name: Runtime Options
// ID: runtimeoptions
// Description: Get and modify turbo mode, framerate, interpolation, clone limit, stage size, and more.
// License: MIT AND MPL-2.0

/* generated l10n code */Scratch.translate.setup({"ca":{"_Runtime Options":"Opcions d'execució"},"cs":{"_Runtime Options":"Nastavení běhu"},"de":{"_Runtime Options":"Laufzeit-Optionen"},"es":{"_Runtime Options":"Opciones de Runtime"},"fi":{"_Infinity":"ääretön","_Runtime Options":"Ajonaikaiset asetukset","_[thing] enabled?":"onko [thing] käytössä?","_clone limit":"klooniraja","_default ({n})":"oletus ({n})","_disabled":"pois päältä","_enabled":"päällä","_framerate":"kuvataajuus","_framerate limit":"kuvataajuus","_height":"korkeus","_high quality pen":"korkealaatuinen kynä","_interpolation":"interpolaatio","_remove fencing":"aitauksen poistaminen","_remove misc limits":"erilaisten rajoitusten poistaminen","_run green flag [flag]":"klikkaa vihreää lippua [flag]","_set [thing] to [enabled]":"kytke [thing] [enabled]","_set clone limit to [limit]":"aseta kloonirajaksi [limit]","_set framerate limit to [fps]":"aseta kuvataajuudeksi [fps]","_set stage size width: [width] height: [height]":"aseta esiintymislavan leveydeksi [width] ja korkeudeksi [height]","_set username to [username]":"aseta käyttäjänimeksi [username]","_stage [dimension]":"esiintymislavan [dimension]","_stage size":"esiintymislavan koko","_turbo mode":"turbotila","_username":"käyttäjänimi","_when [WHAT] changed":"kun [WHAT] muuttuu","_width":"leveys"},"fr":{"_Runtime Options":"Options d'exécution"},"hu":{"_Runtime Options":"Lefutási Opciók"},"it":{"_Infinity":"infinito","_Runtime Options":"Opzioni Esecuzione","_[thing] enabled?":"[thing] abilitato","_clone limit":"limite cloni","_default ({n})":"predefinito({n})","_disabled":"sblocca","_enabled":"blocca","_framerate":"frequenza","_framerate limit":"limite framerate","_height":"altezza","_high quality pen":"penna alta qualità","_interpolation":"interpolazione","_remove fencing":"rimuovi i limiti dallo Stage","_remove misc limits":"rimuovi limiti","_run green flag [flag]":"esegui tutti i cappelli bandiera verde [flag]","_set [thing] to [enabled]":"imposta [thing] a [enabled]","_set clone limit to [limit]":"imposta limite cloni a [limit]","_set framerate limit to [fps]":"imposta limite framerate a [fps]","_set stage size width: [width] height: [height]":"imposta dimensioni Stage larghezza: [width]altezza: [height]","_set username to [username]":"imposta username a [username]","_stage [dimension]":"[dimension] dello Stage","_stage size":"dimensioni Stage","_turbo mode":"modalità turbo","_width":"larghezza"},"ja":{"_Infinity":"無限","_Runtime Options":"ランタイムのオプション","_[thing] enabled?":"[thing]が有効","_clone limit":"クローンの制限","_default ({n})":"デフォルト({n})","_disabled":"無効","_enabled":"有効","_framerate":"フレームレート","_framerate limit":"フレームレートの制限","_height":"高さ","_high quality pen":"ペンできれいに描画する","_interpolation":"補完機能","_run green flag [flag]":"緑の旗[flag]を実行する","_set [thing] to [enabled]":"[thing]を[enabled]にする","_set clone limit to [limit]":"クローンの制限を[limit]にする","_set framerate limit to [fps]":"フレームレートの制限を[fps]にする","_set stage size width: [width] height: [height]":"ステージの横幅を[width]高さを[height]にする","_set username to [username]":"ユーザー名を[username]にする","_stage [dimension]":"ステージの[dimension]","_turbo mode":"ターボモード","_username":"ユーザー名","_width":"横幅"},"ja-hira":{"_Runtime Options":"ランタイムのオプション"},"ko":{"_Runtime Options":"실행 설정","_height":"높이","_username":"사용자 이름","_width":"넓이"},"lt":{"_Runtime Options":"Paleidimo laiko parinktys"},"nb":{"_Infinity":"Uendelighet","_Runtime Options":"Kjøretidsalternativer","_[thing] enabled?":"[thing] aktivert?","_clone limit":"klon grense","_default ({n})":"standard ({n})","_disabled":"deaktivert","_enabled":"aktivert","_framerate":"Bildetakt","_framerate limit":"grense for bildefrekvens","_height":"høyde","_high quality pen":"Høy kvalitet penn","_interpolation":"interpolasjon","_remove fencing":"Fjern gjerde","_remove misc limits":"fjern diverse begrensninger","_run green flag [flag]":"kjør grønt flagg [flag]","_set [thing] to [enabled]":"sett [thing] til [enabled]","_set clone limit to [limit]":"sett klon-grensen til [limit]","_set framerate limit to [fps]":"begrens bildefrekvensen til [fps]","_set stage size width: [width] height: [height]":"sett scenestørrelse bredde: [width] høyde: [height]","_set username to [username]":"sett brukernavn til [username]","_stage [dimension]":"scene [dimension]","_stage size":"scenestørrelse","_turbo mode":"turbo modus","_username":"brukernavn","_when [WHAT] changed":"når [WHAT] endret seg","_width":"bredde"},"nl":{"_Infinity":"oneindig","_Runtime Options":"Looptijdopties","_[thing] enabled?":"[thing] ingeschakeld?","_clone limit":"kloonlimiet","_default ({n})":"standaard ({n})","_disabled":"uit","_enabled":"in","_framerate limit":"framerate-limiet","_height":"hoogte","_high quality pen":"pen met hoge kwaliteit","_interpolation":"interpolatie","_remove fencing":"waarde-limieten weghalen","_remove misc limits":"diverse limieten weghalen","_run green flag [flag]":"voer groene vlag [flag] uit","_set [thing] to [enabled]":"schakel [thing] [enabled]","_set clone limit to [limit]":"maak kloonlimiet [limit]","_set framerate limit to [fps]":"maak framerate-limiet [fps]","_set stage size width: [width] height: [height]":"maak speelveldbreedte: [width] en -hoogte: [height]","_set username to [username]":"maak gebruikersnaam [username]","_stage [dimension]":"[dimension] van speelveld","_stage size":"speelveldgrootte","_turbo mode":"turbomodus","_username":"gebruikersnaam","_when [WHAT] changed":"wanneer [WHAT] verandert","_width":"breedte"},"pl":{"_Runtime Options":"Opcje Uruchamiania"},"pt":{"_Runtime Options":"Opções de Execução"},"pt-br":{"_Runtime Options":"Opções de Execução"},"ru":{"_Infinity":"Бесконечно","_Runtime Options":"Опции Выполнения","_[thing] enabled?":"[thing] включен?","_clone limit":"лимит клонов","_default ({n})":"по умолчанию ({n})","_disabled":"выключен","_enabled":"включен","_framerate":"частота кадров","_framerate limit":"лимит частоты кадров","_height":"высота","_high quality pen":"перо в высоком качестве","_interpolation":"интерполяция","_remove fencing":"убрать рамку","_remove misc limits":"убрать разные ограничения","_run green flag [flag]":"запустить зеленый флажок [flag]","_set [thing] to [enabled]":"установить [thing] в [enabled]","_set clone limit to [limit]":"задать лимит клонов в [limit]","_set framerate limit to [fps]":"задать лимит частоты кадров в [fps]","_set stage size width: [width] height: [height]":"задать ширину: [width] высоту: [height] сцены","_set username to [username]":"задать имя пользователя как [username]","_stage [dimension]":"[dimension] сцены","_stage size":"размер сцены","_turbo mode":"турбо режим","_username":"имя пользователя","_when [WHAT] changed":"когда [WHAT] изменён","_width":"ширина"},"sl":{"_Runtime Options":"Možnosti izvajanja"},"sv":{"_Runtime Options":"Körtidsalternativ"},"tr":{"_Runtime Options":"Çalışma Zamanı Seçenekleri"},"uk":{"_Runtime Options":"Параметри виконання","_disabled":"розблокувати","_enabled":"заблокувати","_height":"висота","_width":"ширина"},"zh-cn":{"_Infinity":"无限","_Runtime Options":"运行选项","_[thing] enabled?":"启用了[thing]？","_clone limit":"克隆限制","_default ({n})":"默认值({n})","_disabled":"禁用","_enabled":"启用","_framerate":"帧率","_framerate limit":"FPS上限","_height":"高度","_high quality pen":"高清画笔","_interpolation":"补帧","_remove fencing":"允许角色移出舞台","_remove misc limits":"取消音效范围与画笔大小限制","_run green flag [flag]":"运行绿旗[flag]","_set [thing] to [enabled]":"设置[thing]为[enabled]","_set clone limit to [limit]":"设置克隆体限制为[limit]","_set framerate limit to [fps]":"设置FPS上限为[fps]","_set stage size width: [width] height: [height]":"把舞台大小设置为宽[width] 高[height]","_set username to [username]":"设置用户名称为[username]","_stage [dimension]":"舞台的[dimension]","_stage size":"舞台尺寸","_turbo mode":"加速模式","_username":"用户名称","_when [WHAT] changed":"当[WHAT]被修改时","_width":"宽度"},"zh-tw":{"_Runtime Options":"運行選項"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Runtime Options extension needs to be run unsandboxed");
  }

  const greenFlagURI =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABFFBMVEUAAACAgABVqlVJkklAn0BNmTNLljxGlzpDmzdFmjpGmzxHmz9Fmj1FmT5Emj1GmT1GmD1EmDxGmTxEmT1GmjxGmT1FmDxEmT5EmTxGmT5FmD1GmT5FmT1Gmj1EmT5FmT1FmT1FmDxGmT1FmjxLs09LtE9Jr0xJsk1Js05JtVBKtU5KtVBKtlBJrkpJsE1KtlFIrEpIsExLt1FLuFJKuVNIqkhLulNIp0VJqkhKtlJLvVRMvFNFmT5GpUVFmT1HpEVHokNMvlVFmT1Ho0NFmTxLvlVGoUFMvlVLvlVGn0BFmT1Nv1ZEmz5FmTxFmTxFmT1NvlZFmz9FmT5FnT9FnD5GnT9Mv1ZMv1ZMv1ZFmT1Mv1b////70P2GAAAAWXRSTlMAAgMHCAoRFhcwMz0/RkdQVGFmaWpxcnh7gIGEhZKZo6eprLq/v8DAwMDAwMDBwcHCwsPDxcbIysrLzM3Pz9DQ1NTV1dfZ29vg4uXm5+jp6ens7fDx9Pv8/nPb5aAAAAABYktHRFt0vJU0AAAAsUlEQVQoz2NgwA3YhNiwS4hHykoou9goCrKiSUhGhqhZe7gbm3rxQwQ4BJihEupRYODooMDFyMAu6uMsgyoRFW5kHxjkqeuhL4cmAQM4JXRwSWjjktDEJaGFS0IVIeFtZuIaAZdQgUmY2/oqyTu5WcEkNGAS/kJMQJrbySAAJBxmGSoIlYAoYGCR8rPVM7QItuNlQJVgYGDlE5MU5kSErhz2+KCihEikNHYJJh5mBhIAADBcR/r5OJzCAAAAAElFTkSuQmCC";
  const TURBO_MODE = "turbo mode";
  const INTERPOLATION = "interpolation";
  const REMOVE_FENCING = "remove fencing";
  const REMOVE_MISC_LIMITS = "remove misc limits";
  const HIGH_QUALITY_PEN = "high quality pen";
  const FRAMERATE = "framerate";
  const CLONE_LIMIT = "clone limit";
  const STAGE_SIZE = "stage size";
  const USERNAME = "username";

  /** @param {string} what */
  const emitChanged = (what) =>
    Scratch.vm.runtime.startHats("runtimeoptions_whenChange", {
      WHAT: what,
    });

  /**
   * @template T
   * @param {T} obj
   * @returns {T}
   */
  const shallowCopy = (obj) => Object.assign({}, obj);

  let previousRuntimeOptions = shallowCopy(Scratch.vm.runtime.runtimeOptions);

  Scratch.vm.on("TURBO_MODE_OFF", () => emitChanged(TURBO_MODE));
  Scratch.vm.on("TURBO_MODE_ON", () => emitChanged(TURBO_MODE));
  Scratch.vm.on("INTERPOLATION_CHANGED", () => emitChanged(INTERPOLATION));
  Scratch.vm.on("RUNTIME_OPTIONS_CHANGED", (newOptions) => {
    if (newOptions.fencing !== previousRuntimeOptions.fencing) {
      emitChanged(REMOVE_FENCING);
    }
    if (newOptions.miscLimits !== previousRuntimeOptions.miscLimits) {
      emitChanged(REMOVE_MISC_LIMITS);
    }
    if (newOptions.maxClones !== previousRuntimeOptions.maxClones) {
      emitChanged(CLONE_LIMIT);
    }
    previousRuntimeOptions = shallowCopy(newOptions);
  });
  Scratch.vm.renderer.on("UseHighQualityRenderChanged", () =>
    emitChanged(HIGH_QUALITY_PEN)
  );
  Scratch.vm.on("FRAMERATE_CHANGED", () => emitChanged(FRAMERATE));
  Scratch.vm.on("STAGE_SIZE_CHANGED", () => emitChanged(STAGE_SIZE));

  const originalPostData = Scratch.vm.runtime.ioDevices.userData.postData;
  Scratch.vm.runtime.ioDevices.userData.postData = function (data) {
    const newUsername = data.username !== this._username;
    originalPostData.call(this, data);
    if (newUsername) {
      emitChanged(USERNAME);
    }
  };

  class RuntimeOptions {
    getInfo() {
      return {
        id: "runtimeoptions",
        name: Scratch.translate("Runtime Options"),
        color1: "#8c9abf",
        color2: "#7d8aab",
        color3: "#6f7b99",
        blocks: [
          {
            opcode: "getEnabled",
            text: Scratch.translate("[thing] enabled?"),
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {
              thing: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: TURBO_MODE,
                menu: "thing",
              },
            },
          },
          {
            opcode: "setEnabled",
            text: Scratch.translate("set [thing] to [enabled]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              thing: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: TURBO_MODE,
                menu: "thing",
              },
              enabled: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true",
                menu: "enabled",
              },
            },
          },

          "---",

          {
            opcode: "getFramerate",
            text: Scratch.translate("framerate limit"),
            blockType: Scratch.BlockType.REPORTER,
          },
          {
            opcode: "setFramerate",
            text: Scratch.translate("set framerate limit to [fps]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              fps: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "30",
              },
            },
          },

          "---",

          {
            opcode: "getCloneLimit",
            text: Scratch.translate("clone limit"),
            blockType: Scratch.BlockType.REPORTER,
          },
          {
            opcode: "setCloneLimit",
            text: Scratch.translate("set clone limit to [limit]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              limit: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "300",
                menu: "clones",
              },
            },
          },

          "---",

          {
            opcode: "getDimension",
            text: Scratch.translate({
              default: "stage [dimension]",
              description: "[dimension] is a dropdown of width and height",
            }),
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              dimension: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "width",
                menu: "dimension",
              },
            },
          },
          {
            opcode: "setDimensions",
            text: Scratch.translate(
              "set stage size width: [width] height: [height]"
            ),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              width: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "480",
              },
              height: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "360",
              },
            },
          },

          "---",

          {
            opcode: "setUsername",
            text: Scratch.translate("set username to [username]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              username: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "greenFlag",
            text: Scratch.translate("run green flag [flag]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              flag: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: greenFlagURI,
              },
            },
          },

          "---",

          {
            opcode: "whenChange",
            blockType: Scratch.BlockType.EVENT,
            text: Scratch.translate("when [WHAT] changed"),
            isEdgeActivated: false,
            arguments: {
              WHAT: { type: Scratch.ArgumentType.STRING, menu: "changeable" },
            },
          },
        ],
        menus: {
          thing: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("turbo mode"),
                value: TURBO_MODE,
              },
              {
                text: Scratch.translate("interpolation"),
                value: INTERPOLATION,
              },
              {
                text: Scratch.translate("remove fencing"),
                value: REMOVE_FENCING,
              },
              {
                text: Scratch.translate("remove misc limits"),
                value: REMOVE_MISC_LIMITS,
              },
              {
                text: Scratch.translate("high quality pen"),
                value: HIGH_QUALITY_PEN,
              },
            ],
          },

          changeable: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("turbo mode"),
                value: TURBO_MODE,
              },
              {
                text: Scratch.translate("interpolation"),
                value: INTERPOLATION,
              },
              {
                text: Scratch.translate("remove fencing"),
                value: REMOVE_FENCING,
              },
              {
                text: Scratch.translate("remove misc limits"),
                value: REMOVE_MISC_LIMITS,
              },
              {
                text: Scratch.translate("high quality pen"),
                value: HIGH_QUALITY_PEN,
              },
              {
                text: Scratch.translate("framerate"),
                value: FRAMERATE,
              },
              {
                text: Scratch.translate("clone limit"),
                value: CLONE_LIMIT,
              },
              {
                text: Scratch.translate("stage size"),
                value: STAGE_SIZE,
              },
              {
                text: Scratch.translate("username"),
                value: USERNAME,
              },
            ],
          },

          enabled: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("enabled"),
                value: "true",
              },
              {
                text: Scratch.translate("disabled"),
                value: "false",
              },
            ],
          },

          clones: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("default ({n})", {
                  n: "300",
                }),
                value: "300",
              },
              {
                text: Scratch.translate("Infinity"),
                value: "Infinity",
              },
            ],
          },

          dimension: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("width"),
                value: "width",
              },
              {
                text: Scratch.translate("height"),
                value: "height",
              },
            ],
          },
        },
      };
    }

    getEnabled({ thing }) {
      if (thing === TURBO_MODE) {
        return Scratch.vm.runtime.turboMode;
      } else if (thing === INTERPOLATION) {
        return Scratch.vm.runtime.interpolationEnabled;
      } else if (thing === REMOVE_FENCING) {
        return !Scratch.vm.runtime.runtimeOptions.fencing;
      } else if (thing === REMOVE_MISC_LIMITS) {
        return !Scratch.vm.runtime.runtimeOptions.miscLimits;
      } else if (thing === HIGH_QUALITY_PEN) {
        return Scratch.renderer.useHighQualityRender;
      }
      return false;
    }

    setEnabled({ thing, enabled }) {
      enabled = Scratch.Cast.toBoolean(enabled);

      if (thing === TURBO_MODE) {
        Scratch.vm.setTurboMode(enabled);
      } else if (thing === INTERPOLATION) {
        Scratch.vm.setInterpolation(enabled);
      } else if (thing === REMOVE_FENCING) {
        Scratch.vm.setRuntimeOptions({
          fencing: !enabled,
        });
      } else if (thing === REMOVE_MISC_LIMITS) {
        Scratch.vm.setRuntimeOptions({
          miscLimits: !enabled,
        });
      } else if (thing === HIGH_QUALITY_PEN) {
        Scratch.renderer.setUseHighQualityRender(enabled);
      }
    }

    getFramerate() {
      return Scratch.vm.runtime.frameLoop.framerate;
    }

    setFramerate({ fps }) {
      fps = Scratch.Cast.toNumber(fps);
      Scratch.vm.setFramerate(fps);
    }

    getCloneLimit() {
      return Scratch.vm.runtime.runtimeOptions.maxClones;
    }
    setCloneLimit({ limit }) {
      limit = Scratch.Cast.toNumber(limit);
      Scratch.vm.setRuntimeOptions({
        maxClones: limit,
      });
    }

    getDimension({ dimension }) {
      if (dimension === "width") {
        return Scratch.vm.runtime.stageWidth;
      } else if (dimension === "height") {
        return Scratch.vm.runtime.stageHeight;
      }
      return 0;
    }

    setDimensions({ width, height }) {
      width = Scratch.Cast.toNumber(width);
      height = Scratch.Cast.toNumber(height);
      Scratch.vm.setStageSize(width, height);
    }

    setUsername({ username }) {
      Scratch.vm.postIOData("userData", {
        username: Scratch.Cast.toString(username),
      });
    }

    greenFlag() {
      Scratch.vm.runtime.greenFlag();
    }
  }

  Scratch.extensions.register(new RuntimeOptions());
})(Scratch);
 })(Scratch);","data:text/javascript;,(function(Scratch) { // Name: Key Simulation
// ID: cubesterKeySimulation
// Description: Simulate key presses and mouse clicks.
// By: CubesterYT <https://scratch.mit.edu/users/CubesterYT/>
// License: MIT AND MPL-2.0

/* generated l10n code */Scratch.translate.setup({"de":{"_Key Simulation":"Tastensimulation"},"fi":{"_Key Simulation":"Näppäinjäljittely","_and wait":"ja odota","_backspace":"askelpalautinta","_caps lock":"aakkoslukkoa","_click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]":"napauta [BUTTON] hiiren painiketta sijainnissa x: [X] y: [Y] [SECONDS] sekunnin ajan [AND_WAIT]","_control":"control-näppäintä","_delete":"poistonäppäintä","_down arrow":"nuolta alas","_end":"loppunäppäintä","_enter":"enteriä","_escape":"poispääsyä","_home":"kotinäppäintä","_insert":"lisäysnäppäintä","_left":"vasenta","_left arrow":"nuolta vasemmalle","_middle":"keskimmäistä","_move mouse to x: [X] y: [Y]":"siirrä hiiri sijaintiin x: [X] y: [Y]","_page down":"alas-näppäintä","_page up":"ylös-näppäintä","_press [KEY] for [SECONDS] seconds [AND_WAIT]":"paina [KEY] [SECONDS] sekunnin ajan [AND_WAIT]","_right":"oikeaa","_right arrow":"nuolta oikealle","_scroll lock":"vierityslukkoa","_shift":"vaihtonäppäintä","_space":"välilyöntiä","_up arrow":"nuolta ylös","_without waiting":"äläkä odota"},"it":{"_Key Simulation":"Simulazione Tasti","_and wait":"e attendi","_caps lock":"blocco maiuscole","_click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]":"Clicca pulsante [BUTTON] del mouse a x: [X] y: [Y] per [SECONDS] secondi [AND_WAIT]","_delete":"cancella","_down arrow":"freccia giù","_end":"fine","_enter":"invio","_home":"inizio","_insert":"inserisci","_left":"a sinistra","_left arrow":"freccia sinistra","_middle":"centrale","_page down":"pagina giù","_page up":"pagina su","_press [KEY] for [SECONDS] seconds [AND_WAIT]":"premi [KEY] per [SECONDS] secondi [AND_WAIT]","_right":"a destra","_right arrow":"freccia destra","_scroll lock":"blocco scorrimento","_space":"spazio","_up arrow":"freccia su","_without waiting":"senza attendere"},"ja":{"_Key Simulation":"キーシミュレーション","_and wait":"押しながら待つ","_backspace":"Backspace","_caps lock":"Caps Lock","_click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]":"マウスの[BUTTON]をx座標を[X]、y座標を[Y]にして[SECONDS]秒[AND_WAIT]","_control":"Ctrl","_delete":"Delete","_down arrow":"下向き矢印","_end":"End","_enter":"Enter","_escape":"Escape","_home":"Home","_insert":"Insert","_left":"左ボタン","_left arrow":"左向き矢印","_middle":"ホイール","_page down":"Page Down","_page up":"Page Up","_press [KEY] for [SECONDS] seconds [AND_WAIT]":"[KEY]キーを[SECONDS]秒[AND_WAIT]","_right":"右ボタン","_right arrow":"右向き矢印","_scroll lock":"Scroll Lock","_shift":"Shift","_space":"スペース","_up arrow":"上向き矢印","_without waiting":"押す"},"ko":{"_Key Simulation":"키 시뮬레이션","_down arrow":"아래쪽 화살표","_enter":"엔터","_left arrow":"왼쪽 화살표","_right arrow":"오른쪽 화살표","_shift":"시프트","_space":"스페이스","_up arrow":"위쪽 화살표"},"nb":{"_Key Simulation":"Nøkkel simulering","_and wait":"og vent","_backspace":"tilbakestill","_click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]":"klikk [BUTTON] musknapp ved x: [X] y: [Y] i [SECONDS] sekunder [AND_WAIT]","_control":"kontroll","_delete":"slett","_down arrow":"nedoverpil","_end":"slutt","_enter":"skriv inn","_home":"hjem","_insert":"sett inn","_left":"venstre","_left arrow":"venstre pil","_middle":"middels","_page down":"side ned","_page up":"side opp","_press [KEY] for [SECONDS] seconds [AND_WAIT]":"trykk [KEY] i [SECONDS] sekunder [AND_WAIT]","_right":"høyre","_right arrow":"høyre pil","_scroll lock":"rullelås","_space":"mellomrom","_up arrow":"oppoverpil","_without waiting":"uten å vente"},"nl":{"_Key Simulation":"Toetsen simuleren","_and wait":"en wacht","_click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]":"klik [BUTTON] muisknop op x: [X] y: [Y] voor [SECONDS] seconden [AND_WAIT]","_down arrow":"pijltje omlaag","_left":"linker","_left arrow":"pijltje links","_middle":"middelste","_move mouse to x: [X] y: [Y]":"verplaats muis naar x: [X] y: [Y]","_press [KEY] for [SECONDS] seconds [AND_WAIT]":"druk toets [KEY] [SECONDS] seconden in [AND_WAIT]","_right":"rechter","_right arrow":"pijltje rechts","_space":"spatiebalk","_up arrow":"pijltje omhoog","_without waiting":"zonder te wachten"},"ru":{"_Key Simulation":"Симуляция Клавиш","_and wait":"и ждать","_backspace":"задний пробел","_caps lock":"лок КАПСА","_click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]":"нажать [BUTTON] кнопку мыши на x: [X] y: [Y] на [SECONDS] секунд [AND_WAIT]","_control":"контрол","_delete":"удалить","_down arrow":"стрелка вниз","_end":"конец","_enter":"ввод","_escape":"эскейп","_home":"домой","_insert":"вставить","_left":"левому краю","_left arrow":"стрелка налево","_middle":"середина","_move mouse to x: [X] y: [Y]":"переместить мышь в x: [X] y: [Y]","_page down":"страница вниз","_page up":"страница вверх","_press [KEY] for [SECONDS] seconds [AND_WAIT]":"нажать [KEY] в длительностью [SECONDS] секунд [AND_WAIT]","_right":"правому краю","_right arrow":"стрелка направо","_scroll lock":"лок кручения","_shift":"шифт","_space":"пробле","_up arrow":"стрелка вверх","_without waiting":"без ожидания"},"tr":{"_Key Simulation":"Anahtar Simülasyon"},"uk":{"_Key Simulation":"Симуляція Клавіш","_and wait":"і чекати","_click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]":"натиснути [BUTTON] кнопку миші в x: [X] y: [Y] на [SECONDS] секунд [AND_WAIT]","_down arrow":"стрілку вниз","_left":"ліву","_left arrow":"стрілку ліворуч","_middle":"середню","_move mouse to x: [X] y: [Y]":"перемістити вказівник в x: [X] y: [Y]","_press [KEY] for [SECONDS] seconds [AND_WAIT]":"натиснути клавішу [KEY] на [SECONDS] секунд [AND_WAIT]","_right":"праву","_right arrow":"стрілку праворуч","_space":"пробіл","_up arrow":"стрілку вгору","_without waiting":"без очікування"},"zh-cn":{"_Key Simulation":"模拟按键","_and wait":"等待","_caps lock":"CapsLock","_click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]":"在X[X] Y[Y]点击鼠标[BUTTON][SECONDS]秒并[AND_WAIT]","_control":"Ctrl","_down arrow":"↓","_end":"End","_escape":"Esc","_home":"Home","_insert":"Insert","_left":"居左","_left arrow":"←","_middle":"中键","_move mouse to x: [X] y: [Y]":"将鼠标移到 x: [X] y: [Y]","_page down":"PageDown","_page up":"PageUp","_press [KEY] for [SECONDS] seconds [AND_WAIT]":"按下[KEY]键[SECONDS]秒并[AND_WAIT]","_right":"居右","_right arrow":"→","_scroll lock":"ScrollLock","_space":"空格","_up arrow":"↑","_without waiting":"不等待"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  const icon = `data:image/svg+xml;,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="64.412" height="64.412"><g stroke-miterlimit="10" data-paper-data="{&quot;isPaintingLayer&quot;:true}" style="mix-blend-mode:normal"><path fill="#bf0000" stroke="maroon" stroke-width="3.5" d="M1.75 32.206c0-16.82 13.636-30.456 30.456-30.456s30.456 13.636 30.456 30.456-13.636 30.456-30.456 30.456S1.75 49.026 1.75 32.206z"/><path fill="none" d="M.066 64.346V.066h64.28v64.28z"/><path fill="#fff" d="M17.988 33.804c-2.648 0-4.768-2.03-4.795-4.795-.136-13.804 5.217-13.443 11.823-13.618 2.547-.067 9.038 0 13.68 0 6.427 0 12.15.676 12.523 13.618.05 1.697-2.146 4.795-4.795 4.795zM20.254 49.022c-2.743 0-4.966-2.147-4.966-4.795l-2.096-9.435c0-.368 2.223 2.526 4.965 2.526h28.097c2.743 0 4.966-3.374 4.966-3.126l-2.096 10.035c0 2.648-2.223 4.795-4.966 4.795z"/><path fill="#bf0000" fill-rule="evenodd" d="M25.604 25.55h3.199l1.374-6.151c.148-.705 1.208-1.202 2.36-1.098.93.08 1.655.543 1.768 1.098l1.374 6.15h3.125c.89 0 1.32.66.705 1.04l-6.598 4.116c-.39.231-1.024.231-1.394 0l-6.62-4.115c-.613-.382-.167-1.04.707-1.04"/></g></svg>`)}`;

  // This is from the Scratch Addons gamepad addon, which normally could be a problem because it is GPLv3,
  // but I (GarboMuffin) wrote that code so there is no problem.
  let getCanvasSize;
  if (window.ResizeObserver) {
    let canvasWidth = Scratch.vm.runtime.stageWidth;
    let canvasHeight = Scratch.vm.runtime.stageHeight;
    const resize = new ResizeObserver((entries) => {
      for (const entry of entries) {
        canvasWidth = entry.contentRect.width;
        canvasHeight = entry.contentRect.height;
      }
    });
    resize.observe(Scratch.vm.runtime.renderer.canvas);
    getCanvasSize = () => [canvasWidth, canvasHeight];
  } else {
    getCanvasSize = () => {
      const rectangle =
        Scratch.vm.runtime.renderer.canvas.getBoundingClientRect();
      return [rectangle.width, rectangle.height];
    };
  }

  let simulatedX = 0;
  let simulatedY = 0;
  const postMouseData = (data) => {
    const [rectangleWidth, rectangleHeight] = getCanvasSize();
    Scratch.vm.postIOData("mouse", {
      ...data,
      canvasWidth: rectangleWidth,
      canvasHeight: rectangleHeight,
      x:
        (simulatedX + Scratch.vm.runtime.stageWidth / 2) *
        (rectangleWidth / Scratch.vm.runtime.stageWidth),
      y:
        (Scratch.vm.runtime.stageHeight / 2 - simulatedY) *
        (rectangleHeight / Scratch.vm.runtime.stageHeight),
    });
  };

  /**
   * @param {unknown} seconds
   * @param {unknown} andWait
   * @param {() => void} callback
   * @returns {Promise<void>|void}
   */
  const doLater = (seconds, andWait, callback) => {
    const ms = Scratch.Cast.toNumber(seconds) * 1000;

    if (Scratch.Cast.toString(andWait) === "and wait") {
      return new Promise((resolve) => {
        setTimeout(() => {
          callback();
          resolve();
        }, ms);
      });
    }

    setTimeout(callback, ms);
    // don't return a Promise at all, otherwise the block waits for 1 frame
  };

  class KeySimulation {
    getInfo() {
      return {
        id: "cubesterKeySimulation",
        name: Scratch.translate("Key Simulation"),
        color1: "#BF0000",
        color2: "#800000",
        menuIconURI: icon,
        docsURI: "https://extensions.turbowarp.org/CubesterYT/KeySimulation",

        blocks: [
          {
            opcode: "pressKey",
            text: Scratch.translate(
              "press [KEY] for [SECONDS] seconds [AND_WAIT]"
            ),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: "KEYS",
              },
              SECONDS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0.1",
              },
              AND_WAIT: {
                type: Scratch.ArgumentType.STRING,
                menu: "AND_WAIT",
              },
            },
          },
          {
            opcode: "clickMouse",
            text: Scratch.translate(
              "click [BUTTON] mouse button at x: [X] y: [Y] for [SECONDS] seconds [AND_WAIT]"
            ),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              BUTTON: {
                type: Scratch.ArgumentType.STRING,
                menu: "BUTTONS",
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              SECONDS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0.1",
              },
              AND_WAIT: {
                type: Scratch.ArgumentType.STRING,
                menu: "AND_WAIT",
              },
            },
          },
          {
            opcode: "moveMouse",
            text: Scratch.translate("move mouse to x: [X] y: [Y]"),
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
            },
          },
        ],
        menus: {
          KEYS: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate({
                  default: "space",
                  description: "Refers to the space key",
                }),
                value: " ",
              },
              { text: Scratch.translate("up arrow"), value: "ArrowUp" },
              { text: Scratch.translate("down arrow"), value: "ArrowDown" },
              { text: Scratch.translate("right arrow"), value: "ArrowRight" },
              { text: Scratch.translate("left arrow"), value: "ArrowLeft" },
              { text: Scratch.translate("enter"), value: "Enter" },
              { text: Scratch.translate("backspace"), value: "Backspace" },
              { text: Scratch.translate("delete"), value: "Delete" },
              { text: Scratch.translate("shift"), value: "Shift" },
              { text: Scratch.translate("caps lock"), value: "CapsLock" },
              { text: Scratch.translate("scroll lock"), value: "ScrollLock" },
              { text: Scratch.translate("control"), value: "Control" },
              { text: Scratch.translate("escape"), value: "Escape" },
              { text: Scratch.translate("insert"), value: "Insert" },
              { text: Scratch.translate("home"), value: "Home" },
              { text: Scratch.translate("end"), value: "End" },
              { text: Scratch.translate("page up"), value: "PageUp" },
              { text: Scratch.translate("page down"), value: "PageDown" },
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "-",
              ",",
              ".",
              "`",
              "=",
              "[",
              "]",
              "\\",
              ";",
              "'",
              "/",
              "~",
              "+",
              "!",
              ":",
              "*",
              "#",
              "(",
              ")",
              "?",
              "<",
              ">",
              "@",
              '"',
            ],
          },
          BUTTONS: {
            acceptReporters: true,
            items: [
              { text: Scratch.translate("left"), value: "0" },
              { text: Scratch.translate("middle"), value: "1" },
              { text: Scratch.translate("right"), value: "2" },
            ],
          },
          AND_WAIT: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("without waiting"),
                value: "without waiting",
              },
              {
                text: Scratch.translate("and wait"),
                value: "and wait",
              },
            ],
          },
        },
      };
    }

    pressKey(args) {
      Scratch.vm.postIOData("keyboard", {
        key: Scratch.Cast.toString(args.KEY),
        isDown: true,
      });

      return doLater(args.SECONDS, args.AND_WAIT, () => {
        Scratch.vm.postIOData("keyboard", {
          key: Scratch.Cast.toString(args.KEY),
          isDown: false,
        });
      });
    }

    clickMouse(args) {
      simulatedX = Scratch.Cast.toNumber(args.X);
      simulatedY = Scratch.Cast.toNumber(args.Y);
      postMouseData({
        isDown: true,
        button: Scratch.Cast.toNumber(args.BUTTON),
      });

      return doLater(args.SECONDS, args.AND_WAIT, () => {
        postMouseData({
          isDown: false,
          button: Scratch.Cast.toNumber(args.BUTTON),
        });
      });
    }

    moveMouse(args) {
      simulatedX = Scratch.Cast.toNumber(args.X);
      simulatedY = Scratch.Cast.toNumber(args.Y);
      postMouseData({});
    }
  }

  Scratch.extensions.register(new KeySimulation());
})(Scratch);
 })(Scratch);","data:text/javascript;,(function(Scratch) { // Name: Utilities
// ID: utilities
// Description: A bunch of interesting blocks.
// Original: Sheep_maker <https://scratch.mit.edu/users/Sheep_maker/>
// License: MIT AND MPL-2.0

/*!
 * This is based on:
 * https://github.com/SheepTester/sheeptester.github.io/blob/master/javascripts/utilities.js
 *
 * Original license:
 * MIT License
 *
 * Copyright (c) 2021 Sean
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* generated l10n code */Scratch.translate.setup({"de":{"_Utilities":"Verschiedene Blöcke"},"fi":{"_Utilities":"Työkalut","_[PATH] of [JSON_STRING]":"[PATH] JSON-koodissa [JSON_STRING]","_clamp [INPUT] between [MIN] and [MAX]":"yhdistä [INPUT] välillä [MIN] ja [MAX]","_current millisecond":"nykyinen millisekunti","_false":"epätosi","_if [A] then [B] else [C]":"jos [A], niin [B] tai muuten [C]","_is [A] exactly [B]?":"onko [A] tarkalleen [B]?","_letters [START] to [END] of [STRING]":"merkkijonon [STRING] merkit [START] – [END]","_pi":"pii","_replace [STRING] using the rule [REGEX] with [NEWSTRING]":"korvaa [REGEX] merkkijonolla [NEWSTRING] merkkijonossa [STRING]","_true":"tosi"},"it":{"_Utilities":"Utilità","_pi":"pi greco"},"ja":{"_Utilities":"ユーティリティ"},"ko":{"_Utilities":"유틸리티","_current millisecond":"현재 밀리초","_false":"거짓","_true":"참"},"nb":{"_Utilities":"Verktøy","_true":"sann"},"nl":{"_Utilities":"Utiliteiten","_[PATH] of [JSON_STRING]":"[PATH] van [JSON_STRING]","_clamp [INPUT] between [MIN] and [MAX]":"klem [INPUT] tussen [MIN] en [MAX]","_current millisecond":"huidige milliseconde","_false":"onwaar","_if [A] then [B] else [C]":"als [A] dan [B] anders [C]","_is [A] exactly [B]?":"is [A] precies [B]?","_letters [START] to [END] of [STRING]":"letters [START] t/m [END] van [STRING]","_replace [STRING] using the rule [REGEX] with [NEWSTRING]":"vervang [STRING] met regel [REGEX] door [NEWSTRING]","_true":"waar"},"ru":{"_Utilities":"Утилиты","_[PATH] of [JSON_STRING]":"[PATH] из [JSON_STRING]","_clamp [INPUT] between [MIN] and [MAX]":"зажим [INPUT] между [MIN] и [MAX]","_current millisecond":"текущие миллисекунды","_false":"нет","_if [A] then [B] else [C]":"если [A] тогда [B] иначе [C]","_is [A] exactly [B]?":"[A] точно ли [B]?","_letters [START] to [END] of [STRING]":"буквы с [START] до [END] в строке [STRING]","_pi":"пи","_replace [STRING] using the rule [REGEX] with [NEWSTRING]":"заменить [STRING] используя правило [REGEX] с [NEWSTRING]","_true":"да"},"zh-cn":{"_Utilities":"工具","_[PATH] of [JSON_STRING]":"[JSON_STRING]中的[PATH]","_clamp [INPUT] between [MIN] and [MAX]":"[MIN]到[MAX]之间的[INPUT]","_content from [URL]":"来自[URL]的内容","_current millisecond":"当前毫秒","_false":"假","_if [A] then [B] else [C]":"[A]？[B]：[C]","_is [A] exactly [B]?":"[A]===[B]","_letters [START] to [END] of [STRING]":"[STRING]的第[START]到第[END]位","_pi":"π","_replace [STRING] using the rule [REGEX] with [NEWSTRING]":"以规则[REGEX]替换[STRING]为[NEWSTRING]","_true":"真"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  const icon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";

  class Utilities {
    getInfo() {
      return {
        id: "utilities",
        name: Scratch.translate("Utilities"),

        color1: "#8BC34A",
        color2: "#7CB342",
        color3: "#689F38",

        menuIconURI: icon,

        blocks: [
          {
            opcode: "isExactly",

            blockType: Scratch.BlockType.BOOLEAN,

            text: Scratch.translate("is [A] exactly [B]?"),
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "APPLE",
              },
            },
          },
          {
            opcode: "isLessOrEqual",

            blockType: Scratch.BlockType.BOOLEAN,

            text: "[A] <= [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50,
              },
            },
          },
          {
            opcode: "isMoreOrEqual",

            blockType: Scratch.BlockType.BOOLEAN,

            text: "[A] >= [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50,
              },
            },
          },
          {
            opcode: "trueBlock",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate({
              default: "true",
              description: "Block that returns true",
            }),
            disableMonitor: true,
          },
          {
            opcode: "falseBlock",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate({
              default: "false",
              description: "Block that returns false",
            }),
            disableMonitor: true,
          },
          {
            opcode: "exponent",

            blockType: Scratch.BlockType.REPORTER,

            text: "[A] ^ [B]",
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
              },
            },
          },
          {
            opcode: "pi",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({
              default: "pi",
              description: "Block that returns 3.1415...",
            }),
          },
          {
            opcode: "ternaryOperator",

            blockType: Scratch.BlockType.REPORTER,

            text: Scratch.translate("if [A] then [B] else [C]"),
            arguments: {
              A: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana",
              },
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
            allowDropAnywhere: true,
          },
          {
            opcode: "letters",

            blockType: Scratch.BlockType.REPORTER,

            text: Scratch.translate("letters [START] to [END] of [STRING]"),
            arguments: {
              START: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5,
              },
              END: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 7,
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "red apple",
              },
            },
          },
          {
            opcode: "clamp",

            blockType: Scratch.BlockType.REPORTER,

            text: Scratch.translate("clamp [INPUT] between [MIN] and [MAX]"),
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 30,
              },
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 25,
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 40,
              },
            },
          },
          {
            opcode: "currentMillisecond",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("current millisecond"),
          },
          {
            opcode: "fetchFrom",

            blockType: Scratch.BlockType.REPORTER,

            text: Scratch.translate("content from [URL]"),
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://extensions.turbowarp.org/hello.txt",
              },
            },
          },
          {
            opcode: "parseJSON",

            blockType: Scratch.BlockType.REPORTER,

            text: Scratch.translate({
              default: "[PATH] of [JSON_STRING]",
              description:
                'PATH is a string like "fruit/apples" and JSON_STRING is an object like {"fruit":{"apples":3}}. 3 would be reported in this example.',
            }),
            arguments: {
              PATH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "fruit/apples",
              },
              JSON_STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue:
                  '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}',
              },
            },
          },
          {
            opcode: "newline",
            blockType: Scratch.BlockType.REPORTER,
            text: "newline character",
            disableMonitor: true,
            arguments: {},
          },
          {
            opcode: "stringToBoolean",

            blockType: Scratch.BlockType.BOOLEAN,

            text: "[STRING]",
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "true",
              },
            },
          },
          {
            opcode: "regexReplace",

            blockType: Scratch.BlockType.REPORTER,

            text: Scratch.translate(
              "replace [STRING] using the rule [REGEX] with [NEWSTRING]"
            ),
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "bananas are awesome. i like bananas.",
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana",
              },
              NEWSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },
        ],
      };
    }

    isExactly({ A, B }) {
      return A === B;
    }

    isLessOrEqual({ A, B }) {
      return Scratch.Cast.compare(A, B) <= 0;
    }

    isMoreOrEqual({ A, B }) {
      return Scratch.Cast.compare(A, B) >= 0;
    }

    trueBlock() {
      return true;
    }

    falseBlock() {
      return false;
    }

    exponent({ A, B }) {
      A = Scratch.Cast.toNumber(A);
      B = Scratch.Cast.toNumber(B);
      return Math.pow(A, B);
    }

    pi() {
      return Math.PI;
    }

    ternaryOperator({ A, B, C }) {
      return A ? B : C;
    }

    letters({ STRING, START, END }) {
      return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
    }

    clamp({ INPUT, MIN, MAX }) {
      INPUT = Scratch.Cast.toNumber(INPUT);
      MIN = Scratch.Cast.toNumber(MIN);
      MAX = Scratch.Cast.toNumber(MAX);
      if (MIN > MAX) {
        return Math.min(Math.max(INPUT, MAX), MIN);
      } else {
        return Math.min(Math.max(INPUT, MIN), MAX);
      }
    }

    currentMillisecond() {
      return Date.now() % 1000;
    }

    fetchFrom({ URL }) {
      return Scratch.fetch(URL)
        .then((res) => res.text())
        .catch((err) => "");
    }

    parseJSON({ PATH, JSON_STRING }) {
      try {
        const path = PATH.toString()
          .split("/")
          .map((prop) => decodeURI