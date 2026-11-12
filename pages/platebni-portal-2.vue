<template>
  <div class="pp2">
    <header
      class="masthead"
      :class="{ scrolled }"
    >
      <div class="wrap">
        <a
          class="brand"
          href="https://otevrenamesta.cz/"
          aria-label="Otevřená města"
        >
          <LogoOm
            aria-hidden="true"
            focusable="false"
          />
        </a>
        <nav aria-label="Obsah">
          <a
            v-for="item in nav"
            :key="item.id"
            :href="`#${item.id}`"
            @click.prevent="scrollToId(item.id)"
          >{{ item.label }}</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="wrap">
          <div class="hero-stage">
            <PlatebniPortal2Shot
              class="hero-photo"
              :src="img('hero')"
              alt="Úvodní stránka Platebního portálu ve verzi 2"
              :width="1512"
              :height="680"
              zoom-label="Zvětšit náhled úvodní stránky"
              eager
            />
            <div class="hero-card">
              <p class="eyebrow">
                Pro kraje, které provozují verzi 1
              </p>
              <h1>Platební portál <span>2</span></h1>
              <p>Umělá inteligence z&nbsp;obecně závazné vyhlášky připraví poplatek za pár minut. Občané platí opakované poplatky jedním kliknutím a portál má nový, přístupný vzhled podle gov.cz.</p>
              <a
                class="more"
                href="#ai"
                @click.prevent="scrollToId('ai')"
              >Podívejte se na ukázku</a>
            </div>
            <span
              class="hero-dot"
              aria-hidden="true"
            />
          </div>

          <div class="stats">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="stat"
            >
              <b>{{ stat.value }}</b><span class="label">{{ stat.label }}</span><span>{{ stat.text }}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="srovnani"
        class="section"
      >
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">
              Na první pohled
            </p>
            <h2>Co se změnilo proti verzi 1</h2>
          </div>
          <div class="compare-wrap">
            <table class="compare">
              <thead>
                <tr>
                  <th scope="col">
                    Oblast
                  </th>
                  <th scope="col">
                    Verze 1
                  </th>
                  <th
                    scope="col"
                    class="v2"
                  >
                    Verze 2
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in compare"
                  :key="row[0]"
                >
                  <td>{{ row[0] }}</td>
                  <td class="v1">
                    {{ row[1] }}
                  </td>
                  <td class="v2">
                    {{ row[2] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="ai"
        class="section"
      >
        <div class="wrap">
          <div class="flagship">
            <div class="section-head">
              <span class="ai-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"
                    fill="#fed513"
                  />
                  <path
                    d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z"
                    fill="#1fbf8f"
                  />
                </svg>
                Umělá inteligence v portálu
              </span>
              <h2>Poplatek z vyhlášky připraví umělá inteligence</h2>
              <p class="lead">
                Obec vybere svou obecně závaznou vyhlášku. Umělá inteligence ji přečte a připraví celý poplatek: sazby, údaje, které občan vyplní, popis pro občany i slevy. Správce obce návrh zkontroluje a jedním tlačítkem založí.
              </p>
            </div>

            <PlatebniPortal2Player
              :frames="aiFrames"
              tag="Ukázka · administrace obce"
              label="Ukázka: založení poplatku z vyhlášky"
            />

            <div class="how">
              <div
                v-for="(step, n) in howSteps"
                :key="step.title"
                class="how-step"
              >
                <span class="n">{{ n + 1 }}</span>
                <h3>{{ step.title }}</h3>
                <p>{{ step.text }}</p>
              </div>
            </div>

            <div class="trust">
              <div
                v-for="item in trust"
                :key="item.title"
              >
                <b>{{ item.title }}</b><span>{{ item.text }}</span>
              </div>
            </div>

            <div class="stills">
              <PlatebniPortal2Shot
                v-for="shot in aiStills"
                :key="shot.src"
                v-bind="shot"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="obcane"
        class="section"
      >
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">
              Pro občany
            </p>
            <h2>Roční poplatek zaplatí znovu jedním kliknutím</h2>
            <p class="lead">
              Většina poplatků se platí každý rok. Verze 2 si pamatuje minulou platbu a umí občanovi připomenout, že je čas platit.
            </p>
          </div>

          <PlatebniPortal2Player
            :frames="citizenFrames"
            tag="Ukázka · občan"
            label="Ukázka: občan platí poplatek"
            style="margin-bottom: 48px"
          />

          <div class="feature">
            <div class="copy">
              <h3>Celá platba za minutu</h3>
              <ul class="points">
                <li><b>Obec najde podle názvu</b> a vidí všechny její poplatky na jednom místě.</li>
                <li><b>Jméno doplní portál</b> z účtu, cenu spočítá sám.</li>
                <li><b>Zaplatí kartou, nebo QR kódem</b> v bankovní aplikaci.</li>
                <li><b>Příště jedním kliknutím:</b> Zaplatit znovu vyplní formulář podle minula a upozorní, pokud se mezitím změnila cena.</li>
                <li><b>Neprošla karta?</b> Platbu dokončí z přehledu plateb bez nového vyplňování.</li>
              </ul>
            </div>
            <PlatebniPortal2Shot
              :src="img('obcan-10')"
              alt="Přehled plateb s tlačítky Dokončit platbu a Zaplatit znovu"
              :width="1270"
              :height="793"
              url="/uzivatel/prehled"
              caption="Přehled plateb: nedokončenou platbu občan dokončí, starší zaplatí znovu."
              zoom-label="Zvětšit náhled přehledu plateb"
            />
          </div>

          <div class="feature flip">
            <div class="copy">
              <h3>Připomenutí e-mailem</h3>
              <ul class="points">
                <li><b>Za měsíc, za rok nebo k vlastnímu datu.</b> E-mail zavede občana rovnou na vyplněný formulář.</li>
                <li><b>Na roční poplatky už nezapomene.</b> Připomínku si může kdykoli zrušit.</li>
                <li><b>Všechny platby na jednom místě,</b> i ty převodem a QR kódem.</li>
              </ul>
            </div>
            <PlatebniPortal2Shot
              :src="img('qr-pripominka')"
              alt="QR platba poplatku za odpad a nabídka Připomenout úhradu za rok"
              :width="1210"
              :height="635"
              url="/platba/…/platba-bankovni-prevodem"
              zoom-label="Zvětšit náhled QR platby a připomínky"
            />
          </div>

          <div
            class="feature"
            style="margin-top: 56px"
          >
            <div class="copy">
              <h3>Vzhled státních webů a tmavý režim</h3>
              <ul class="points">
                <li><b>Jednotný vzhled gov.cz.</b> Portál se ovládá stejně jako ostatní státní weby.</li>
                <li><b>Přístupný</b> lidem se zrakovým i jiným postižením, opraveno podle auditu přístupnosti.</li>
                <li><b>Tmavý režim</b> jedním přepínačem.</li>
                <li><b>Proč mít účet.</b> Portál občanovi srozumitelně ukáže, co mu účet ušetří.</li>
              </ul>
            </div>
            <PlatebniPortal2Shot
              :src="img('tmavy-rezim')"
              alt="Přehled plateb občana v tmavém režimu s tlačítky Zaplatit znovu"
              :width="1010"
              :height="610"
              url="/uzivatel/prehled"
              caption="Přehled plateb občana v tmavém režimu."
              zoom-label="Zvětšit náhled přehledu plateb v tmavém režimu"
            />
          </div>
        </div>
      </section>

      <section
        id="sprava"
        class="section"
      >
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">
              Pro správce portálu na kraji
            </p>
            <h2>Portál si nastavíte sami</h2>
            <p class="lead">
              Co ve verzi 1 vyžadovalo programátora, upravíte ve verzi 2 v administraci.
            </p>
          </div>

          <div
            v-for="(pair, n) in adminPairs"
            :key="n"
            class="pair"
          >
            <PlatebniPortal2Shot
              v-for="shot in pair"
              :key="shot.src"
              v-bind="shot"
            />
          </div>

          <div class="grid-small">
            <div
              v-for="item in adminGrid"
              :key="item.title"
            >
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="prechod"
        class="section"
      >
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">
              Přechod na verzi 2
            </p>
            <h2>Co přechod obnáší</h2>
            <p class="lead">
              Portál dál běží na vašem serveru a data obcí a plateb zůstávají u vás. Zdrojový kód je otevřený a zdarma pod licencí AGPL.
            </p>
          </div>
          <div class="upgrade">
            <div class="box">
              <h3>Jak postupovat</h3>
              <ul class="points">
                <li><b>Ukázka.</b> Rádi vám novou verzi předvedeme na testovacím portálu.</li>
                <li><b>Plán přechodu</b> připravíme s vaším IT nebo dodavatelem.</li>
                <li><b>Odstávku</b> ohlásíte občanům přímo na portálu, s vlastním textem a časem ukončení.</li>
                <li><b>Umělou inteligenci</b> můžete zapnout hned, nebo později.</li>
              </ul>
            </div>
            <details class="box">
              <summary>Technické požadavky pro IT</summary>
              <dl>
                <dt>PHP</dt><dd>8.2 až 8.4</dd>
                <dt>Framework</dt><dd>Symfony 6.4</dd>
                <dt>Databáze</dt><dd>MySQL 5.7 / MariaDB 10.1 a novější</dd>
                <dt>Plánovač</dt><dd>Jednou denně rozeslání připomínek</dd>
                <dt>Volitelně</dt><dd>Klíč k jazykovému modelu Claude pro poplatky z vyhlášky</dd>
                <dt>Postup</dt>
                <dd>
                  <a
                    href="https://code.gov.cz/otevrenamesta/platebni-portal/-/blob/main/UPGRADE.md"
                    target="_blank"
                    rel="noopener"
                  >UPGRADE.md</a>
                  a
                  <a
                    href="https://code.gov.cz/otevrenamesta/platebni-portal/-/blob/main/CHANGELOG.md"
                    target="_blank"
                    rel="noopener"
                  >CHANGELOG.md</a>
                  na code.gov.cz
                </dd>
              </dl>
            </details>
          </div>

          <div class="cta">
            <h2>Chcete verzi 2 vidět naživo?</h2>
            <p>Napište nám a domluvíme ukázku i přechod pro váš kraj.</p>
            <span class="mail">platby@otevrenamesta.cz</span>
          </div>
        </div>
      </section>
    </main>

    <footer class="pp2-footer">
      <div class="wrap">
        <a
          class="brand"
          href="https://otevrenamesta.cz/"
          aria-label="Otevřená města"
        >
          <LogoOm
            aria-hidden="true"
            focusable="false"
          />
        </a>
        <div><b>Otevřená města, z.&nbsp;s.</b>Hudcova 239/7, Medlánky<br>621 00 Brno</div>
        <div><b>platby@otevrenamesta.cz</b>Platební portál 2.3.0, vydaný 6. 10. 2026<br>Licence AGPL v3</div>
        <div class="links">
          <a href="https://code.gov.cz/otevrenamesta/platebni-portal">Zdrojový kód</a>
          <a href="https://code.gov.cz/otevrenamesta/platebni-portal/-/blob/main/CHANGELOG.md">Changelog</a>
          <a href="https://otevrenamesta.cz/">otevrenamesta.cz</a>
        </div>
      </div>
    </footer>

    <dialog
      ref="zoomDialog"
      class="zoom"
      aria-label="Zvětšený náhled"
      @click="onDialogClick"
    >
      <form method="dialog">
        <button
          class="close"
          type="submit"
        >
          Zavřít
        </button>
      </form>
      <img
        :src="zoomed.src"
        :alt="zoomed.alt"
      >
    </dialog>
  </div>
</template>

<script setup>
import LogoOm from '~/assets/img/logo-om.svg';

definePageMeta({
  layout: false,
});

useCustomHead({
  title: 'Platební portál 2',
  description: 'Co přináší verze 2 Platebního portálu Otevřených měst krajům, které provozují verzi 1.',
});

const img = (name) => `/img/platebni-portal-2/${name}.jpg`;

// Sticky header shrinks and gets a bottom line once the page scrolls
const { y: scrollY } = useWindowScroll();
const scrolled = computed(() => scrollY.value > 24);

function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  try {
    history.replaceState(history.state, '', `#${id}`);
  } catch {
    // ignore
  }
}

// Image zoom dialog
const zoomDialog = ref(null);
const zoomed = ref({ src: '', alt: '' });
provide('pp2Zoom', ({ src, alt }) => {
  zoomed.value = { src, alt };
  zoomDialog.value?.showModal?.();
});
function onDialogClick(e) {
  if (e.target === zoomDialog.value) zoomDialog.value.close();
}

const nav = [
  { id: 'srovnani', label: 'Co se změnilo' },
  { id: 'ai', label: 'Umělá inteligence' },
  { id: 'obcane', label: 'Pro občany' },
  { id: 'sprava', label: 'Pro kraj' },
  { id: 'prechod', label: 'Přechod' },
];

const stats = [
  { value: '2 min', label: 'vyhláška → poplatek', text: 'Návrh poplatku z vyhlášky připraví umělá inteligence.' },
  { value: '1 klik', label: 'opakovaná platba', text: 'Roční poplatek občan zaplatí znovu jedním kliknutím.' },
  { value: '45', label: 'nových funkcí', text: 'Za poslední rok vývoje verze 2.' },
  { value: '10', label: 'vydání', text: 'Od verze 2.0.0 po aktuální 2.3.0.' },
];

const compare = [
  ['Založení poplatku', 'Ručně, sazbu po sazbě', 'Umělá inteligence připraví návrh z vyhlášky, obec ho jen zkontroluje'],
  ['Opakovaná platba', 'Občan vyplňuje vše znovu', 'Zaplatit znovu jedním kliknutím a připomínka e-mailem'],
  ['Vzhled', 'Vlastní vzhled', 'Jednotný vzhled státních webů (gov.cz), tmavý režim'],
  ['Přístupnost', 'Bez prohlášení o přístupnosti', 'Opraveno podle auditu, prohlášení podle zákona 99/2019 Sb.'],
  ['Bezpečnost', 'Přihlášení heslem, rodné číslo nešifrované', 'Přihlášení s ověřením v telefonu, šifrované rodné číslo'],
  ['Nastavení portálu', 'Změny přes programátora', 'Logo, barvy, texty, stránky a šablony smluv v administraci'],
  ['Napojení na systémy obcí', 'Bez rozhraní pro systémy obcí', 'Systém obce může občanovi poslat předvyplněnou platbu'],
];

const aiFrames = [
  { src: img('ai-01'), x: 1135, y: 148, cap: 'Správce obce zvolí Založit z vyhlášky.', alt: 'Seznam služeb obce s tlačítkem Založit z vyhlášky' },
  { src: img('ai-02'), x: 1146, y: 355, cap: 'Portál sám najde vyhlášky obce ve Sbírce právních předpisů.', alt: 'Výběr vyhlášky ze Sbírky právních předpisů' },
  { src: img('ai-03'), cap: 'Umělá inteligence vyhlášku přečte, obvykle do dvou minut.', alt: 'Průběh čtení vyhlášky o poplatku ze psů' },
  { src: img('ai-04'), x: 90, y: 407, cap: 'Upozorní na rozpory a na to, co je potřeba vysvětlit občanům.', alt: 'Nálezy ve vyhlášce' },
  { src: img('ai-05'), cap: 'Napíše popis poplatku pro občany srozumitelnou češtinou.', alt: 'Název a popis poplatku pro občany' },
  { src: img('ai-06'), x: 190, y: 330, cap: 'U každé sazby ukáže citaci z vyhlášky.', alt: 'Sazby poplatku ze psů s citacemi článku 4' },
  { src: img('ai-07'), x: 1145, y: 634, cap: 'Občan vyplní jen jméno a číslo popisné. Správce poplatek založí.', alt: 'Údaje od občana a tlačítko Založit poplatek' },
  { src: img('ai-08'), cap: 'Zaplacené poplatky obec vidí v přehledu objednávek.', alt: 'Přehled objednávek obce' },
];

const citizenFrames = [
  { src: img('obcan-01'), x: 600, y: 45, cap: 'Občan otevře platební portál.', alt: 'Úvodní stránka portálu' },
  { src: img('obcan-02'), x: 492, y: 137, cap: 'Napíše svou obec a vybere ji z nabídky.', alt: 'Vyhledání obce Jinočany s nabídkou' },
  { src: img('obcan-03'), x: 480, y: 700, cap: 'Na stránce obce vidí všechny služby.', alt: 'Stránka obce Jinočany se službami' },
  { src: img('obcan-04'), x: 336, y: 469, cap: 'Jméno doplní portál z účtu.', alt: 'Formulář poplatku za odpad s předvyplněným jménem' },
  { src: img('obcan-05'), x: 919, y: 713, cap: 'Cenu spočítá portál: 3 osoby × 750 Kč.', alt: 'Vyplněný formulář s částkou 2 250 Kč' },
  { src: img('obcan-06'), x: 919, y: 412, cap: 'Zaplatí kartou, nebo převodem.', alt: 'Rekapitulace a výběr platební metody' },
  { src: img('obcan-07'), x: 1110, y: 200, cap: 'QR kód stačí naskenovat v bankovní aplikaci.', alt: 'QR platba poplatku za odpad' },
  { src: img('obcan-08'), x: 712, y: 626, cap: 'Portál nabídne připomínku na příští rok.', alt: 'Nabídka Připomenout úhradu' },
  { src: img('obcan-09'), x: 390, y: 298, cap: 'Připomínka je nastavená, e-mail přijde za rok.', alt: 'Potvrzení nastavené připomínky na 11. 11. 2027' },
  { src: img('obcan-10'), x: 1044, y: 453, cap: 'Nedokončenou platbu dokončí jedním kliknutím, starší zaplatí znovu.', alt: 'Přehled plateb s tlačítky Dokončit platbu a Zaplatit znovu' },
  { src: img('obcan-11'), cap: 'Zaplatit znovu vyplní formulář podle minulé platby.', alt: 'Formulář předvyplněný podle dřívější platby' },
];

const howSteps = [
  { title: 'Vyhlášku najde portál sám', text: 'Podle IČO obce nabídne platné vyhlášky ze Sbírky právních předpisů. Nahrát jde i vlastní soubor.' },
  { title: 'Umělá inteligence ji přečte', text: 'Najde, kdo a za co platí, sazby, splatnost, osvobození a slevy.' },
  { title: 'Upozorní na problémy', text: 'Rozpory se zákonem o místních poplatcích, nejasnosti a podmínky, které je potřeba vysvětlit občanům.' },
  { title: 'Rozhoduje člověk', text: 'Správce návrh upraví a potvrdí. Poplatek se uloží jako neaktivní, dokud ho obec nezapne.' },
];

const trust = [
  { title: 'Každá hodnota má zdroj', text: 'U sazby je citace z vyhlášky a portál ověří, že tam opravdu stojí.' },
  { title: 'Počítá portál, ne AI', text: 'Měsíční, pololetní a další částky dopočítá portál ze sazby ve vyhlášce.' },
  { title: 'Žádná osobní data', text: 'Umělá inteligence dostane jen veřejný text vyhlášky, nic o občanech ani platbách.' },
  { title: 'Vyzkoušeno', text: 'Ověřeno na sadě 30 skutečných vyhlášek obcí. Funkci lze zapnout, nebo nechat vypnutou.' },
];

const aiStills = [
  { src: img('still-vyhlasky'), alt: 'Seznam vyhlášek obce Jinočany ze Sbírky právních předpisů', width: 1210, height: 635, url: '/z-vyhlasky', caption: 'Vyhlášky obce ze Sbírky právních předpisů.', zoomLabel: 'Zvětšit náhled výběru vyhlášky' },
  { src: img('still-nalezy'), alt: 'Nálezy ve vyhlášce: splatnost, poměrná výše poplatku, osvobození', width: 1512, height: 655, url: '/z-vyhlasky/navrh', caption: 'Nálezy ve vyhlášce s doporučením, co s nimi.', zoomLabel: 'Zvětšit náhled nálezů ve vyhlášce' },
  { src: img('still-sazby'), alt: 'Odstupňované sazby poplatku ze psů s citacemi článku 4', width: 950, height: 744, url: '/z-vyhlasky/navrh#sazby', caption: 'Sazby s citací článku vyhlášky.', zoomLabel: 'Zvětšit náhled sazeb s citacemi' },
];

const adminPairs = [
  [
    { src: img('admin-nastaveni'), alt: 'Nastavení portálu: logo pro světlý a tmavý režim a barvy', width: 1512, height: 620, url: '/admin/settings', caption: 'Logo a barvy kraje. Z dvou barev portál dopočítá celou paletu.', zoomLabel: 'Zvětšit náhled nastavení portálu' },
    { src: img('admin-obce'), alt: 'Správa obcí s filtrem krajů, úpravou a skrytím obce', width: 1512, height: 560, url: '/admin/municipality', caption: 'Správa obcí: hledání, filtr kraje, úprava názvu a skrytí obce.', zoomLabel: 'Zvětšit náhled správy obcí' },
  ],
  [
    { src: img('admin-smlouva'), alt: 'Náhled šablony smlouvy o poskytování služeb Platebního portálu', width: 1500, height: 720, url: '/admin/settings/contract-templates', caption: 'Šablona smlouvy s obcí. Náhled odpovídá výslednému PDF.', zoomLabel: 'Zvětšit náhled šablony smlouvy' },
    { src: img('admin-pruvodce'), alt: 'Seznam služeb obce s průvodcem stránkou', width: 1512, height: 510, url: '/partner/produkt/index', caption: 'Průvodce stránkou pomůže novým správcům obcí.', zoomLabel: 'Zvětšit náhled seznamu služeb s průvodcem' },
  ],
];

const adminGrid = [
  { title: 'Správa obcí', text: 'Upravíte název obce a obec, kterou nechcete nabízet, skryjete. Starší platby zůstanou zachované.' },
  { title: 'Registrace obcí a organizací', text: 'Veřejná, nebo jen na pozvání. Údaje se načtou z ARES podle IČO.' },
  { title: 'Stránky a texty', text: 'Vlastní stránky, menu, texty úvodní stránky i oznámení o odstávce.' },
  { title: 'E-maily', text: 'Texty všech e-mailů včetně nové připomínky platby upravíte v administraci.' },
  { title: 'Role účetní', text: 'Účetní vidí jen platby své organizace. Kdo pracuje pro více obcí, přepne se mezi nimi v menu.' },
  { title: 'Bezpečnost', text: 'Přihlášení s ověřením v telefonu, šifrovaná rodná čísla a zpevnění po bezpečnostním auditu.' },
];
</script>

<style>
/*
  Standalone landing page for Platební portál 2.
  Styles are not scoped (the Player/Shot child components share them) but every rule is
  prefixed with .pp2 so nothing leaks into the rest of the site.

  Everything sits in Tailwind's "components" layer: it still overrides Tailwind's base reset,
  but Tailwind utility classes win over it. That keeps these rules from restyling the
  site's standard <Footer />, which is built with utility classes.
*/
@layer components {
.pp2 {
  --om-blue: #1e1796;
  --om-ink: #0f0787;
  --om-green: #00d48f;
  --om-green-dark: #00563c;
  --om-yellow: #ffcc00;
  --text: #161616;
  --muted: #525252;
  --panel: #eff5ff;
  --line: #e2e6ef;
  --white: #ffffff;
  --font: var(--font-sans); /* the site's font (acumin-pro-wide), loaded globally via Typekit */
  --step--1: .875rem;
  --step-0: 1rem;
  --step-1: 1.125rem;
  --step-2: 1.5rem;
  --step-3: clamp(1.875rem, 1.4rem + 2vw, 2.75rem);
  --step-4: clamp(2.5rem, 1.6rem + 4vw, 4.25rem);

  color-scheme: light;
  background: var(--white); color: var(--text); font-family: var(--font);
  font-size: var(--step-0); line-height: 1.55; -webkit-font-smoothing: antialiased;
}
.pp2 *, .pp2 *::before, .pp2 *::after { box-sizing: border-box; }
.pp2 [id] { scroll-margin-top: 92px; }
.pp2 .wrap {
  max-width: 1200px; margin: 0 auto;
  padding-left: max(16px, env(safe-area-inset-left, 0px));
  padding-right: max(16px, env(safe-area-inset-right, 0px));
}
.pp2 h1, .pp2 h2, .pp2 h3 { font-family: var(--font); color: var(--om-ink); line-height: 1.08; text-wrap: balance; margin: 0; }
.pp2 h1, .pp2 h2 { font-weight: 700; letter-spacing: -.025em; }
.pp2 h2 { font-size: var(--step-3); }
.pp2 h3 { font-size: var(--step-1); font-weight: 600; letter-spacing: -.005em; }
.pp2 p { margin: 0; }
.pp2 a { color: var(--om-blue); text-underline-offset: 3px; }
.pp2 a:focus-visible, .pp2 button:focus-visible, .pp2 summary:focus-visible { outline: 3px solid var(--om-yellow); outline-offset: 2px; }
.pp2 .eyebrow { font-size: .8125rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--om-green); }
.pp2 .lead { font-size: var(--step-1); color: var(--muted); max-width: 62ch; line-height: 1.6; }
.pp2 .more { display: inline-flex; align-items: center; gap: 8px; font-size: .8125rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: var(--om-green); text-decoration: none; }
.pp2 .more::after { content: "→"; font-size: 1rem; }

/* ---------- Header (sticky, shrinks on scroll) ---------- */
.pp2 .masthead {
  position: sticky; top: env(safe-area-inset-top, 0px); z-index: 20; background: var(--white);
  border-bottom: 1px solid transparent; transition: border-color .2s ease, box-shadow .2s ease;
}
.pp2::before { content: ""; position: fixed; inset: 0 0 auto; height: env(safe-area-inset-top, 0px); z-index: 21; background: var(--white); }
.pp2 .masthead .wrap { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-block: 28px; flex-wrap: wrap; transition: padding .2s ease; }
.pp2 .brand { display: block; width: 150px; flex: none; transition: width .2s ease; }
.pp2 .masthead.scrolled { border-bottom-color: var(--line); box-shadow: 0 10px 24px -18px rgba(15, 7, 135, .35); }
.pp2 .masthead.scrolled .wrap { padding-block: 12px; }
.pp2 .masthead.scrolled .brand { width: 104px; }
.pp2 .pp2-footer .brand { transition: none; }
.pp2 .brand svg { display: block; width: 100%; height: auto; }
.pp2 .masthead nav { display: flex; gap: 28px; flex-wrap: wrap; }
.pp2 .masthead nav a { color: var(--om-blue); text-decoration: none; font-size: .875rem; font-weight: 600; text-transform: uppercase; letter-spacing: .02em; }
.pp2 .masthead nav a:hover { color: var(--om-green); }

/* ---------- Hero: blue card over the portal preview ---------- */
.pp2 .hero { padding-block: 24px 72px; overflow: hidden; }
.pp2 .hero-stage { position: relative; display: grid; grid-template-columns: minmax(0, 1fr); padding-left: 13%; padding-right: 7%; }
.pp2 .hero-stage::before { content: ""; position: absolute; left: 10%; top: 22%; width: 3.2%; aspect-ratio: 1 / 2; background: var(--om-yellow); }
.pp2 .hero-stage::after { content: ""; position: absolute; right: 0; top: 6%; width: 14%; aspect-ratio: 1; background: var(--om-green); border-top-left-radius: 100%; z-index: 0; }
.pp2 .hero-photo { position: relative; z-index: 1; border: 1px solid var(--line); background: var(--white); }
.pp2 .hero-photo img { display: block; width: 100%; height: auto; }
.pp2 .hero-card {
  position: relative; z-index: 2; background: var(--om-blue); color: var(--white); width: min(560px, 62%);
  margin-top: -26%; margin-left: -13%; padding: 44px 44px 40px; display: grid; gap: 18px;
}
.pp2 .hero-card .eyebrow { color: var(--om-green); }
.pp2 .hero-card h1 { color: var(--white); font-size: var(--step-4); }
.pp2 .hero-card h1 span { color: var(--om-yellow); }
.pp2 .hero-card p { color: rgba(255, 255, 255, .9); font-size: var(--step-1); line-height: 1.55; }
.pp2 .hero-dot { position: absolute; right: -4%; bottom: 6%; width: 10%; aspect-ratio: 1; background: var(--om-yellow); border-radius: 50%; z-index: 0; }

.pp2 .stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; margin-top: 56px; }
.pp2 .stat b { display: block; font-size: var(--step-3); font-weight: 700; color: var(--om-ink); letter-spacing: -.02em; font-variant-numeric: tabular-nums; }
.pp2 .stat .label { display: block; color: var(--om-green); font-weight: 600; font-size: .875rem; margin-top: 10px; }
.pp2 .stat span:last-child { display: block; color: var(--om-ink); font-size: .875rem; line-height: 1.45; margin-top: 4px; }

/* ---------- Framed screenshot ---------- */
.pp2 .shot { margin: 0; min-width: 0; }
.pp2 .shot > button {
  display: block; width: 100%; padding: 0; border: 1px solid var(--line); overflow: hidden;
  background: var(--white); cursor: zoom-in; text-align: left; font: inherit; color: inherit;
}
.pp2 .bar { display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: var(--panel); border-bottom: 1px solid var(--line); }
.pp2 .dots { display: flex; gap: 4px; flex: none; }
.pp2 .dots i { width: 8px; height: 8px; display: block; background: var(--om-yellow); }
.pp2 .dots i:nth-child(2) { background: var(--om-green); }
.pp2 .dots i:nth-child(3) { background: var(--om-blue); }
.pp2 .url { font-size: 12px; color: var(--muted); font-family: ui-monospace, "Cascadia Mono", Consolas, monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }
.pp2 .shot img { display: block; width: 100%; height: auto; }
.pp2 .shot figcaption { font-size: var(--step--1); color: var(--muted); margin-top: 10px; line-height: 1.45; }

/* ---------- Step-by-step player ---------- */
.pp2 .player { border: 1px solid var(--line); overflow: hidden; background: var(--white); min-width: 0; box-shadow: 0 18px 40px -24px rgba(15, 7, 135, .35); }
.pp2 .player .bar { justify-content: space-between; }
.pp2 .player .tag { font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--om-blue); white-space: nowrap; }
.pp2 .screen { position: relative; aspect-ratio: 1270 / 793; max-width: 100%; background: var(--white); overflow: hidden; }
.pp2 .screen img { position: absolute; inset: 0; width: 100%; height: 100%; max-width: none; object-fit: cover; opacity: 0; transition: opacity .45s ease; }
.pp2 .screen img.on { opacity: 1; }
.pp2 .ring {
  position: absolute; width: 6%; aspect-ratio: 1; border-radius: 50%; border: 4px solid var(--om-yellow);
  box-shadow: 0 0 0 2px var(--om-blue); transform: translate(-50%, -50%) scale(.6); opacity: 0; pointer-events: none;
}
.pp2 .ring.show { animation: pp2-tap 1.4s ease-out .9s both; }
@keyframes pp2-tap {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(1.4); }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(.85); }
  70% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.1); }
}
.pp2 .cap { background: var(--om-blue); color: var(--white); padding: 16px 20px; font-weight: 600; font-size: 1.0625rem; min-height: 3.6em; display: flex; align-items: center; gap: 14px; }
.pp2 .cap .num { color: var(--om-yellow); font-variant-numeric: tabular-nums; flex: none; font-weight: 700; }
.pp2 .controls { display: flex; align-items: center; gap: 14px; padding: 12px 16px; background: var(--white); }
.pp2 .controls .play {
  flex: none; border: 0; background: var(--om-yellow); color: var(--om-ink); font: 700 .8125rem var(--font);
  text-transform: uppercase; letter-spacing: .05em; padding: 9px 16px; cursor: pointer; min-width: 116px;
}
.pp2 .segs { display: flex; gap: 4px; flex: 1; min-width: 0; }
.pp2 .segs button { flex: 1; height: 6px; border: 0; background: var(--line); padding: 0; cursor: pointer; position: relative; overflow: hidden; }
.pp2 .segs button.done { background: var(--om-green); }
.pp2 .segs .fill { position: absolute; inset: 0; background: var(--om-green); transform-origin: left; animation: pp2-fill var(--dur, 3.4s) linear forwards; }
.pp2 .player.paused .segs .fill { animation-play-state: paused; }
@keyframes pp2-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }

/* ---------- Sections ---------- */
.pp2 .section { padding-block: 72px; }
.pp2 .section-head { display: grid; gap: 14px; margin-bottom: 36px; max-width: 780px; }

/* Version comparison */
.pp2 .compare-wrap { overflow-x: auto; border: 1px solid var(--line); }
.pp2 table.compare { width: 100%; border-collapse: collapse; min-width: 620px; font-size: .9375rem; }
.pp2 .compare th, .pp2 .compare td { text-align: left; padding: 15px 20px; vertical-align: top; border-bottom: 1px solid var(--line); }
.pp2 .compare tr:last-child td { border-bottom: 0; }
.pp2 .compare thead th { font-size: .8125rem; letter-spacing: .06em; text-transform: uppercase; color: var(--om-blue); font-weight: 700; background: var(--panel); }
.pp2 .compare thead th.v2 { color: var(--om-green-dark); }
.pp2 .compare td:first-child { font-weight: 600; color: var(--om-ink); width: 24%; vertical-align: middle; }
.pp2 .compare td.v1 { color: var(--muted); width: 30%; }
.pp2 .compare td.v2 { width: 46%; }
.pp2 .compare td.v2::before { content: ""; display: inline-block; width: 9px; height: 9px; background: var(--om-green); margin-right: 10px; vertical-align: 1px; }

/* AI panel */
.pp2 .flagship { background: var(--panel); padding: 56px 48px; display: grid; gap: 40px; position: relative; }
.pp2 .flagship::before { content: ""; position: absolute; left: -24px; top: -24px; width: 48px; height: 48px; background: var(--om-yellow); }
.pp2 .flagship .section-head { margin-bottom: 0; }
.pp2 .ai-badge {
  justify-self: start; display: inline-flex; align-items: center; gap: 8px; font-size: .8125rem; font-weight: 700;
  letter-spacing: .06em; text-transform: uppercase; background: var(--om-blue); color: var(--white); padding: 7px 14px 7px 10px;
}
.pp2 .ai-badge svg { width: 18px; height: 18px; }
.pp2 .how { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0; border: 1px solid var(--line); background: var(--white); }
.pp2 .how-step { display: grid; gap: 10px; align-content: start; padding: 24px; border-right: 1px solid var(--line); }
.pp2 .how-step:last-child { border-right: 0; }
.pp2 .how-step .n {
  width: 36px; height: 36px; display: grid; place-items: center; background: var(--om-blue); color: var(--white); font-weight: 700; font-size: .9375rem;
}
.pp2 .how-step:nth-child(2) .n { background: var(--om-green); color: var(--om-ink); }
.pp2 .how-step:nth-child(3) .n { background: var(--om-yellow); color: var(--om-ink); }
.pp2 .how-step:nth-child(4) .n { background: var(--om-ink); }
.pp2 .how-step p { color: var(--muted); font-size: .9375rem; }
.pp2 .trust { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 32px; }
.pp2 .trust > div { display: grid; gap: 6px; align-content: start; border-top: 3px solid var(--om-green); padding-top: 14px; }
.pp2 .trust b { color: var(--om-ink); font-weight: 700; }
.pp2 .trust span { color: var(--muted); font-size: .9375rem; line-height: 1.5; }
.pp2 .stills { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }

/* Features */
.pp2 .feature { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 48px; align-items: start; }
.pp2 .feature + .feature { margin-top: 64px; }
.pp2 .feature.flip { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); }
.pp2 .feature.flip .copy { order: 2; }
.pp2 .copy { display: grid; gap: 16px; min-width: 0; }
.pp2 .copy h3 { font-size: var(--step-2); font-weight: 700; letter-spacing: -.015em; }
.pp2 ul.points { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
.pp2 ul.points li { padding-left: 24px; position: relative; }
.pp2 ul.points li::before { content: ""; position: absolute; left: 0; top: .5em; width: 10px; height: 10px; background: var(--om-green); }
.pp2 ul.points b { font-weight: 600; color: var(--om-ink); }

/* Small feature grid */
.pp2 .grid-small { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 48px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
.pp2 .grid-small > div { display: grid; gap: 8px; align-content: start; padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.pp2 .grid-small h3 { font-size: var(--step-1); font-weight: 700; }
.pp2 .grid-small p { font-size: .9375rem; color: var(--muted); }
.pp2 .pair { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 28px; }
.pp2 .pair + .pair { margin-top: 28px; }

/* Upgrade */
.pp2 .upgrade { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 28px; align-items: start; }
.pp2 .box { border: 1px solid var(--line); background: var(--white); padding: 28px; display: grid; gap: 16px; align-content: start; }
.pp2 .box h3 { font-size: var(--step-2); font-weight: 700; }
.pp2 details.box summary { cursor: pointer; font-weight: 700; font-size: var(--step-2); color: var(--om-ink); }
.pp2 details.box dl { margin: 0; display: grid; grid-template-columns: max-content minmax(0, 1fr); gap: 10px 20px; font-size: .9375rem; }
.pp2 details.box dt { color: var(--om-green-dark); font-weight: 600; }
.pp2 details.box dd { margin: 0; }
.pp2 .cta { background: var(--om-green); color: var(--om-ink); padding: 56px 48px; display: grid; gap: 16px; margin-top: 56px; position: relative; overflow: hidden; }
.pp2 .cta::after { content: ""; position: absolute; right: -60px; bottom: -120px; width: 300px; aspect-ratio: 1; border-radius: 50%; background: var(--om-yellow); }
.pp2 .cta > * { position: relative; z-index: 1; max-width: 640px; }
.pp2 .cta h2 { color: var(--om-ink); }
.pp2 .cta p { color: var(--om-green-dark); font-size: var(--step-1); font-weight: 500; }
.pp2 .cta .mail { justify-self: start; font-weight: 700; font-size: var(--step-1); background: var(--om-blue); color: var(--white); padding: 12px 20px; user-select: all; }

/* Original template footer (markup commented out above) */
.pp2 .pp2-footer { padding-block: 48px 56px; border-top: 1px solid var(--line); margin-top: 24px; }
.pp2 .pp2-footer .wrap { display: grid; grid-template-columns: 150px minmax(0, 1fr) minmax(0, 1fr) auto; gap: 32px; align-items: start; font-size: .875rem; color: var(--om-ink); }
.pp2 .pp2-footer .brand { width: 130px; }
.pp2 .pp2-footer b { font-weight: 700; display: block; }
.pp2 .pp2-footer .links { display: flex; gap: 18px; flex-wrap: wrap; justify-content: flex-end; }
.pp2 .pp2-footer .links a { text-decoration: none; font-weight: 600; text-transform: uppercase; font-size: .8125rem; color: var(--om-blue); }

/* Zoom dialog */
.pp2 dialog.zoom { margin: auto; border: 0; padding: 0; background: transparent; max-width: min(1500px, 96vw); max-height: 94vh; overflow: auto; }
.pp2 dialog.zoom::backdrop { background: rgba(15, 7, 135, .85); }
.pp2 dialog.zoom img { display: block; max-width: 100%; height: auto; }
.pp2 dialog.zoom form { position: sticky; top: 0; display: flex; justify-content: flex-end; }
.pp2 dialog.zoom .close { margin: 8px; border: 0; padding: 8px 16px; background: var(--om-yellow); color: var(--om-ink); font: 700 .8125rem var(--font); text-transform: uppercase; letter-spacing: .05em; cursor: pointer; }

@media (max-width: 960px) {
  .pp2 .hero-stage { padding-left: 0; padding-right: 0; }
  .pp2 .hero-stage::before, .pp2 .hero-stage::after, .pp2 .hero-dot { display: none; }
  .pp2 .hero-card { width: auto; margin: -40px 16px 0; padding: 32px 26px; }
  .pp2 .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .pp2 .feature, .pp2 .feature.flip, .pp2 .upgrade, .pp2 .pair { grid-template-columns: minmax(0, 1fr); gap: 32px; }
  .pp2 .feature.flip .copy { order: 0; }
  .pp2 .grid-small, .pp2 .stills { grid-template-columns: minmax(0, 1fr); }
  .pp2 .how, .pp2 .trust { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .pp2 .how-step:nth-child(2) { border-right: 0; }
  .pp2 .how-step:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
  .pp2 .flagship { padding: 40px 20px; }
  .pp2 .flagship::before { left: -8px; top: -8px; width: 24px; height: 24px; }
  .pp2 .pp2-footer .wrap { grid-template-columns: minmax(0, 1fr); }
  .pp2 .pp2-footer .links { justify-content: flex-start; }
}
@media (max-width: 560px) {
  .pp2 .masthead nav { display: none; }
  .pp2 .how, .pp2 .trust, .pp2 .stats { grid-template-columns: minmax(0, 1fr); }
  .pp2 .how-step { border-right: 0; border-bottom: 1px solid var(--line); }
  .pp2 .cta { padding: 40px 22px; }
  .pp2 .cap { font-size: .9375rem; }
  .pp2 .section { padding-block: 52px; }
}
@media (prefers-reduced-motion: reduce) {
  .pp2 .masthead, .pp2 .masthead .wrap, .pp2 .brand { transition: none; }
  .pp2 .screen img { transition: none; }
  .pp2 .ring.show { animation: none; opacity: 1; transform: translate(-50%, -50%); }
  .pp2 .segs .fill { animation: none; transform: scaleX(1); }
}
}
</style>
