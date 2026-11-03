function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  var browser1 = {
    type: jsPsychBrowserCheck,
    data: { trial_type1: 'browser' }
  };

  var enter_fullscreen = {
    type: jsPsychFullscreen,
    data: { trial_type1: 'fullscreen' },
    fullscreen_mode: true,
    message: function(){

    var browser1 = jsPsych.data.get().filter({trial_type1: 'browser'}).values()[0].browser;
    var mobile1 = jsPsych.data.get().filter({trial_type1: 'browser'}).values()[0].mobile;

    function mobile(){
        if(mobile1 === true){
          return "mobil"
        } else {
          return "stolní počítač/notebook"
        }
      };

      function browser2(){
          if(browser1 === "chrome"){
            return "&#9989;"
          } else {
            return "&#10060;"
          }
        };

      function mobile2(){
        if(mobile1 === false){
          return "&#9989;"
        } else {
          return "&#10060;"
        }
      };

      function device1(){
        if(mobile1 === false && browser1 === "chrome"){
          return "#C8FFC2"
        } else {
          return "#ffc2c2"
        }
      };

      function device2(){
        if(mobile1 === false && browser1 === "chrome"){
          return "#007E33"
        } else {
          return "#ff0f0f"
        }
      };

      return '<img src="https://sites.ff.cuni.cz/ucjtk/wp-content/uploads/sites/57/2020/11/Ustav_ceske%E2%95%A0%C3%BCho_jazyka_a_teorie_komunikace.svg" width="400" height="150" style="vertical-align:middle"><hr><p style="text-align: center; margin-right: 150px; margin-left: 150px;">Pro účast v tomto experimentu <b>nepoužívejte</b> mobilní telefon.<br/><br/>Experiment funguje spolehlivě na počítači (stolním či na notebooku) výhradně v prohlížeči Google Chrome. Prosíme, použijte právě tento prohlížeč. Pokud ho nemáte nainstalovaný, můžete si ho stáhnout zde: <a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a><br/><br/>Experiment <b>je nutné absolvovat v režimu celé obrazovky</b>. Tento režim se Vám sám spustí, jakmile kliknete na \'Načíst experiment\'.<br/><br/><b>V průběhu experimentu nepoužívejte funkci Obnovit (Reload). Způsobilo by to nenávratnou ztrátu dat.</b></p><div style="text-align: center; margin-right: 150px; margin-left: 150px; border-left: 6px solid #ccc!important; border-right: 6px solid #ccc!important; border-color: '+device2()+'!important; background-color: '+device1()+'!important;">Váš prohlížeč je: '+browser1+' '+browser2()+'<br/>Vaše zařízení je: '+mobile()+' '+mobile2()+'</div>'
    },
    // '<img src="https://sites.ff.cuni.cz/ucjtk/wp-content/uploads/sites/57/2020/11/Ustav_ceske%E2%95%A0%C3%BCho_jazyka_a_teorie_komunikace.svg" width="400" height="150" style="vertical-align:middle"><hr><p style="text-align: center; margin-right: 150px; margin-left: 150px;">Pro účast v tomto experimentu <b>nepoužívejte</b> mobilní telefon.<br/><br/>Experiment funguje spolehlivě na počítači (stolním či na notebooku) výhradně v prohlížeči Google Chrome. Prosíme, použijte právě tento prohlížeč. Pokud ho nemáte nainstalovaný, můžete si ho stáhnout zde: <a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a><br/><br/>Experiment <b>je nutné absolvovat v režimu celé obrazovky</b>. Tento režim se Vám sám spustí, jakmile kliknete na \'Načíst experiment\'.<br/><br/>Pokud budete mít přetížený počítač, může dojít k různým problémům a experiment Vám může spadnout, anebo se třeba neuloží výsledky. Proto ideálně <b>zavřete všechna ostatní okna a karty prohlížeče, vypněte komputačně náročné programy a v průběhu účasti nestahujte žádné soubory</b>.</p>',
    button_label: 'Načíst experiment'
  };

var instructions1 = {
    type: jsPsychInstructions,
    data: { trial_type1: 'instructions1' },
    button_label_next:'Pokračovat',
    pages: ['<img src="https://sites.ff.cuni.cz/ucjtk/wp-content/uploads/sites/57/2020/11/Ustav_ceske%E2%95%A0%C3%BCho_jazyka_a_teorie_komunikace.svg" width="400" height="150" style="vertical-align:middle"></br><hr><h2 style="text-align: left; margin-right: 150px; margin-left: 150px;">Detailní instrukce k hodnocení slov</h2><p style="text-align: justify; margin-right: 150px; margin-left: 150px;">Seznam sto dvaceti vybraných slov se Vám zobrazí vícekrát. Vždy na jedné stránce a pokaždé ho budete hodnotit podle jedné kategorie. Každá stránka se skládá z názvu příslušné kategorie, její základní definice a instrukcí k hodnocení.</br></br>Pod tím se nacházejí slova seřazená pod sebou. Ta budete hodnotit. Hodnocení se provádí na škále u slova, až na jednu kategorii, u níž budete u každého slova doplňovat číslice. Seřazení slov pod sebou je pro každou kategorii provedeno náhodně.</br></br>Každá škála se skládá ze sedmi bodů. Hodnocení provedete kliknutím myší na příslušný bod. Může se stát, že nastanou případy, kdy se Vám nebudou zdát některé škály u vybraného slova relevantní či smysluplné. Přesto se snažte vždy kliknout na jeden z nabízených bodů.</br></br>Pokud dané slovo nebudete znát, tj. nikdy jste se s ním nesetkali, zaklikněte možnost „Toto slovo neznám“.</br></br>Některá slova mohou mít více významů. Narazíte-li na takový případ, hodnoťte slovo podle toho, který význam Vás napadne jako první.</br></br>Při hodnocení slov se neohlížejte na to, kolikrát jste už který bod škály zaklikli. Nemějte přitom ani obavu, že byste něco označili špatně. V této úloze neexistují žádné správné nebo špatné odpovědi. Řiďte se čistě jen svým vlastním úsudkem a vycházejte zkrátka pouze z toho, jak dané slovo vnímáte. Pracujte rychle, ale s rozvahou. Čas na odpovědi není nijak limitován.</br></br>Jste-li připraveni, zmáčkněte tlačítko níže a půjdeme na hodnocení slov podle první kategorie.</p>'],
      show_clickable_nav: true,
      allow_backward: false,
    post_trial_gap: 10
};

var consent = {
     type: jsPsychSurveyHtmlForm,
     data: { trial_type1: 'consent' },
     button_label:'Souhlasím s účastí',
     html: function() {
       var subjectID = jatos.studyResultId;

       var preamble2_html = '<img src="https://sites.ff.cuni.cz/ucjtk/wp-content/uploads/sites/57/2020/11/Ustav_ceske%E2%95%A0%C3%BCho_jazyka_a_teorie_komunikace.svg" width="400" height="150" style="vertical-align:middle">'+
       '</br><hr>'+
       '<div style="text-align: center; margin-right: 150px; margin-left: 150px; border-left: 6px solid #ccc!important; border-right: 6px solid #ccc!important; border-color: #198754!important; background-color: #CAF9E3!important; padding: 0.01em 16px;">'+
       'Vaše identifikační číslo pro tento experiment:</br>'+
       subjectID+
       '</div>'+
       '</br><hr><h2 style="text-align: left; margin-right: 150px; margin-left: 150px;">Informovaný souhlas</h2><p style="text-align: justify; margin-right: 150px; margin-left: 150px;">Tímto potvrzuji, že</br></br>a) jsem se seznámil/a s informacemi o cílech a průběhu výše popsaného výzkumu;</br></br>b) dobrovolně souhlasím s účastí své osoby v tomto výzkumu;</br></br>c) rozumím tomu, že se mohu kdykoli rozhodnout ve své účasti na výzkumu nepokračovat;</br></br>d) jsem srozuměn/a s tím, že jakékoliv užití a zveřejnění dat a výstupů vzešlých z výzkumu nezakládá můj nárok na jakoukoliv odměnu či náhradu, tzn. že veškerá oprávnění k užití a zveřejnění dat a výstupů vzešlých z výzkumu poskytuji bezúplatně.</br></br>Zároveň prohlašuji, že</br></br>a) souhlasím se zveřejněním anonymizovaných dat a výstupů vzešlých z výzkumu a s jejich dalším využitím;</br></br>b) souhlasím se zpracováním a uchováním osobních a citlivých údajů v rozsahu v tomto informovaném souhlasu uvedených ze strany Univerzity Karlovy, Filozofické fakulty, IČ: 00216208, se sídlem: nám. Jana Palacha 2, 116 38 Praha 1, a to pro účely zpracování dat vzešlých z výzkumu, pro účely případného kontaktování z důvodu zpracování dat vzešlých z výzkumu či z důvodu nabídky účasti na obdobných akcích a pro účely evidence a archivace; a s tím, že tyto osobní údaje mohou být poskytnuty subjektům oprávněným k výkonu kontroly projektu, v jehož rámci výzkum realizován;</br></br>c) jsem seznámen/a se svými právy týkajícími se přístupu k informacím a jejich ochraně podle § 46 a § 49 zákona č. 110/2019 Sb., o ochraně osobních údajů a o změně některých zákonů, ve znění pozdějších předpisů, tedy že mohu požádat Univerzitu Karlovu v Praze o informaci o zpracování mých osobních a citlivých údajů a jsem oprávněn/a ji dostat a že mohu požádat Univerzitu Karlovu v Praze o opravu nepřesných osobních údajů, doplnění osobních údajů, jejich blokaci a likvidaci.</br></br>Výše uvedená svolení a souhlasy poskytuji dobrovolně na dobu neurčitou až do odvolání a zavazuji se je neodvolat bez závažného důvodu spočívajícího v podstatné změně okolností.</p>'

       return preamble2_html;
     }
 };

 var demographics1 = {
   type: jsPsychSurveyHtmlForm,
   preamble: '',
   button_label: 'Další',
   data: { trial_type1: 'demographics1'},
   html:'<img src="https://sites.ff.cuni.cz/ucjtk/wp-content/uploads/sites/57/2020/11/Ustav_ceske%E2%95%A0%C3%BCho_jazyka_a_teorie_komunikace.svg" width="400" height="150" style="vertical-align:middle"></br><hr>'+

        '<div>'+

        '<p style="text-align: left; margin-right: 150px; margin-left: 150px;">'+

        'Nejprve Vás poprosíme o vyplnění údajů, které se týkají Vaší osoby.<br/><br/>' +

        '<b>Pohlaví: </b><br/>'+
                        '<label><input type="radio" name="gender" value="Muž" required >Muž </label></br>'+
                        '<label><input type="radio" name="gender" value="Žena">Žena </label></br>'+
                        '<label><input type="radio" name="gender" value="Nebinární">Nebinární </label></br>'+
                        '<label><input type="radio" name="gender" value="Nechci">Nechci sdělovat </label><br></br>'+

        '<b>Do jaké míry se považujete za typického muže / typickou ženu? Prosím, vyjádřete zakliknutím jednoho bodu na níže uvedené škále. </b><br/><br/>'+
                        '<label>typický muž <input type="radio" name="gender_scale" value="1" required ></label>'+
                        '<label><input type="radio" name="gender_scale" value="2"></label>'+
                        '<label><input type="radio" name="gender_scale" value="3"></label>'+
                        '<label><input type="radio" name="gender_scale" value="4"></label>'+
                        '<label><input type="radio" name="gender_scale" value="5"></label>'+
                        '<label><input type="radio" name="gender_scale" value="6"></label>'+
                        '<label><input type="radio" name="gender_scale" value="7"> typická žena</label><br></br>'+


        '<b>Věk: </b></br>'+
                        '<label><input type="number" name="Věk" required size="10"> </label></br></br>'+

        '<b>Mateřský jazyk: </b><br/>'+
                        '<label><input type="radio" name="language" value="Čeština" required>Čeština </label><br/>'+
                        '<label><input type="radio" name="language" value="další">další - specifikovat </label>'+
                        '<label><input type="text" name="language1" size="20"> </label><br/><br/>'+

        '<b>Kolik jazyků <b>kromě češtiny</b> ovládáte tak, že v nich dokážete alespoň velmi jednoduše komunikovat (tj. máte alespoň úroveň A2)? </b></br>'+
                        '<label><input type="number" name="L2_language" required size="10"> </label></br></br>'+

        // '<b>Jaký cizí/druhý jazyk ovládáte nejlépe? </b><br/>'+
        //                 '<label><input type="radio" name="L2_language" value="none">mluvím jen česky</label></br>'+
        //                 '<label><input type="radio" name="L2_language" value="angličtina" required >angličtina </label></br>'+
        //                 '<label><input type="radio" name="L2_language" value="němčina">němčina </label></br>'+
        //                 '<label><input type="radio" name="L2_language" value="francouzština">francouzština </label></br>'+
        //                 '<label><input type="radio" name="L2_language" value="španělština">španělština </label></br>'+
        //                 '<label><input type="radio" name="L2_language" value="ruština">ruština </label></br>'+
        //                 '<label><input type="radio" name="L2_language" value="jiný">jiný - specifikujte </label>'+
        //                 '<label><input type="text" name="L2_language1" size="20"> </label></br></br>'+

        '<b>Projevují se u Vás nějaké závažnější problémy se čtením (například dyslexie)?</b></br/>'+
                        '<label><input type="radio" name="dyslexie" value="Ano" required>Ano </label><br/>'+
                        '<label><input type="radio" name="dyslexie" value="Ne">Ne </label><br/><br/>'+

        '<b>Vaše nejvyšší dosažené vzdělání (v případě, že jste student/ka, uveďte stupeň, který právě studujete):</b></br/>'+
                        '<label><input type="radio" name="education" value="základoškolské" required>základoškolské </label><br/>'+
                        '<label><input type="radio" name="education" value="středoškolské">středoškolské </label><br/>'+
                        '<label><input type="radio" name="education" value="Bc">vysokoškolské (Bc.) </label><br/>'+
                        '<label><input type="radio" name="education" value="Mgr">vysokoškolské (Mgr.) </label><br/><br/>'+

        '<b>Jak hlučné je aktuální prostředí, v němž se nacházíte?<br/>(1 = velmi tiché - 7 = velmi hlučné) </b><br/>'+
                        '<label>1<br/><input type="radio" name="noiselevel" value="1" required ></label>'+
                        '<label>2<br/><input type="radio" name="noiselevel" value="2"></label>'+
                        '<label>3<br/><input type="radio" name="noiselevel" value="3"></label>'+
                        '<label>4<br/><input type="radio" name="noiselevel" value="4"></label>'+
                        '<label>5<br/><input type="radio" name="noiselevel" value="5"></label>'+
                        '<label>6<br/><input type="radio" name="noiselevel" value="6"></label>'+
                        '<label>7<br/><input type="radio" name="noiselevel" value="7"></label><br/><br/><br/>'+

        '<b>Pokud potřebujete splnit účast v experimentu v rámci LABELS, uveďte svůj e-mail (stejný jako v registračním systému).</b><br/>'+
                        '<label><input type="text" name="email" size="40"></label><br/><br/><br/>'+

        '</p>'+

        '</div>'


      };
