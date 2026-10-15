import"./modulepreload-polyfill-P2Xu9kJm.js";import{initializeApp as e}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";import{addDoc as t,collection as n,deleteDoc as r,doc as i,getDocs as a,getFirestore as o,onSnapshot as s,setDoc as c,updateDoc as l}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";var u={apiKey:`AIzaSyBqhHxR2alXm667KkJSJ8eiLxzsOLZui9U`,authDomain:`smaksync.firebaseapp.com`,projectId:`smaksync`,storageBucket:`smaksync.firebasestorage.app`,messagingSenderId:`247220233955`,appId:`1:247220233955:web:4dd3a6269394575f2347d6`,measurementId:`G-9XXCYSG5C2`};try{let e=localStorage.getItem(`smaksync_firebase_config`);e&&(u=JSON.parse(e))}catch(e){console.warn(`Kunne ikke hente lagret config`,e)}var d=null,f=!1;if(u.apiKey&&u.apiKey!==`DIN_API_KEY`)try{let t=e(u);d=o(t),f=!0,console.log(`✓ Firebase Firestore tilkoblet live:`,u.projectId),p(!0,u.projectId)}catch(e){console.error(`Feil ved initialisering av Firebase:`,e),p(!1,`Tilkoblingsfeil`)}else console.info(`Firebase kjører i interaktiv demomodus inntil reelle API-nøkler er satt inn.`),p(!1,`Demo / Sett inn config`);function p(e,t){let n=document.getElementById(`backend-status-badge`),r=document.getElementById(`backend-status-text`),i=document.getElementById(`stat-db-mode`);n&&r&&(e?(n.className=`inline-flex items-center gap-1.5 rounded-full bg-accent-50 border border-accent-200 px-2 py-0.5 text-[11px] font-semibold text-accent-700`,r.innerText=`Firestore Live: ${t}`,i&&(i.innerText=`Firestore (${t})`)):(n.className=`inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[11px] font-semibold text-amber-700`,r.innerText=t,i&&(i.innerText=`Firestore v9 (Demo / Klar)`)))}var m=[{name:`Truffle & Dry-Aged Burger`,description:`200g kvernet norsk storfe, trøffelmajones, lagret cheddar og smørstekt brioche.`,price:225,category:`Hovedrett`,sold_out:!1},{name:`Pannestekt Kveite`,description:`Bresert purreløk, ramsløkolje og champagne beurre blanc.`,price:365,category:`Hovedrett`,sold_out:!1},{name:`Villkveite Ceviche`,description:`Tindved, sjalottløk, koriander og sprø jordskokkchips.`,price:175,category:`Forrett`,sold_out:!1},{name:`Multer & Røros-is`,description:`Villmulter, karamellisert hvit sjokolade og tindvedsirup.`,price:165,category:`Desserter`,sold_out:!1},{name:`Nøgne Ø IPA (0.33l)`,description:`Klassisk håndverks-IPA med rik humleprofil og frisk sitrus.`,price:115,category:`Drikke`,sold_out:!1}],h=`smaksync_firestore_restaurants`;function g(){let e=localStorage.getItem(h);if(!e){let e=[{id:`restaurant_eik_og_gran`,name:`Restaurant Eik & Gran`,logo_url:``,pin:`1234`,itemCount:8,created_at:new Date().toISOString()},{id:`vesper_cocktailbar`,name:`Vesper Cocktail Bar`,logo_url:``,pin:`5678`,itemCount:6,created_at:new Date().toISOString()}];return localStorage.setItem(h,JSON.stringify(e)),e}try{return JSON.parse(e)}catch{return[]}}function _(e){localStorage.setItem(h,JSON.stringify(e))}var v=[],y=``,b=`smaksync_superadmin_auth`,x=`smaksync_superadmin_master_hash`,S=`5524fe000ffd5c1743a619d7e17581511ed083d674b9998c6c7b42024315e88a`;async function C(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function w(){return localStorage.getItem(x)||S}var T=null,E=null,D=!1;function O(){if(T){try{T()}catch{}T=null}if(E){try{E()}catch{}E=null}v=[],R=[],D=!1;let e=document.getElementById(`restaurants-table-body`);e&&(e.innerHTML=``);let t=document.getElementById(`inquiries-table-body`);t&&(t.innerHTML=``)}function k(){D||(D=!0,j(),W(),generateRandomPin())}function A(){let e=sessionStorage.getItem(b),t=document.getElementById(`superadmin-lock-view`),n=document.getElementById(`superadmin-app-container`);if(e===`true`)t&&t.classList.add(`hidden`),n&&n.classList.remove(`hidden`),k();else{O(),n&&n.classList.add(`hidden`),t&&t.classList.remove(`hidden`);let e=document.getElementById(`superadmin-pin-input`);e&&(e.value=``,setTimeout(()=>e.focus(),150))}}window.handleSuperadminPinSubmit=async function(e){e.preventDefault();let t=document.getElementById(`superadmin-pin-input`),n=document.getElementById(`superadmin-pin-error`);await C((t?t.value:``).trim())===w()?(sessionStorage.setItem(b,`true`),n&&n.classList.add(`hidden`),A(),F(`✓ Velkommen til SmakSync Superadmin!`)):(n&&n.classList.remove(`hidden`),t&&(t.classList.add(`border-rose-500`),setTimeout(()=>t.classList.remove(`border-rose-500`),1500),t.focus()))},window.handleSuperadminLogout=function(){sessionStorage.removeItem(b),A()},window.openMasterPinModal=function(){document.getElementById(`current-master-pin-input`).value=``,document.getElementById(`new-master-pin-input`).value=``;let e=document.getElementById(`master-pin-modal-error`);e&&e.classList.add(`hidden`),document.getElementById(`master-pin-modal`).classList.remove(`hidden`)},window.closeMasterPinModal=function(){document.getElementById(`master-pin-modal`).classList.add(`hidden`)},window.handleSaveMasterPin=async function(e){e.preventDefault();let t=document.getElementById(`current-master-pin-input`),n=document.getElementById(`new-master-pin-input`),r=document.getElementById(`master-pin-modal-error`),i=t?t.value.trim():``,a=n?n.value.trim():``;if(await C(i)!==w()){r&&(r.innerText=`Feil gjeldende masterkode.`,r.classList.remove(`hidden`));return}if(!a||a.length<3){r&&(r.innerText=`Ny masterkode må bestå av minst 3 tegn.`,r.classList.remove(`hidden`));return}let o=await C(a);localStorage.setItem(x,o),localStorage.removeItem(`smaksync_superadmin_master_pin`),closeMasterPinModal(),F(`✓ Superadmin Masterkode er oppdatert!`)};function j(){if(f&&d)try{let e=n(d,`restaurants`);T=s(e,async e=>{let t=[];for(let r of e.docs){let e=r.data(),i=0;try{i=(await a(n(d,`restaurants`,r.id,`menu_items`))).size}catch{i=0}t.push({id:r.id,name:e.name||r.id,logo_url:e.logo_url||``,pin:e.pin?String(e.pin):`1234`,pin_hash:e.pin_hash||``,itemCount:i,created_at:e.created_at||new Date().toISOString()})}v=t,N()},e=>{console.error(`onSnapshot feil i Firestore:`,e),p(!1,`Avvist: `+(e.code||`permission-denied`));let t=document.getElementById(`stat-db-mode`);t&&(t.innerText=`Feil: ${e.code||`permission-denied`}`),M()})}catch(e){console.warn(`Kunne ikke starte onSnapshot mot Firestore:`,e),M()}else M()}function M(){v=g(),N(),window.addEventListener(`storage`,e=>{e.key===h&&(v=g(),N())})}function N(){let e=document.getElementById(`restaurants-table-body`);if(!e)return;let t=document.getElementById(`stat-total-restaurants`),n=document.getElementById(`stat-total-nfc`);t&&(t.innerText=v.length),n&&(n.innerText=v.length*15);let r=v.filter(e=>{if(!y)return!0;let t=y.toLowerCase();return e.name.toLowerCase().includes(t)||e.id.toLowerCase().includes(t)});if(r.length===0){e.innerHTML=`
            <tr>
              <td colspan="5" class="py-8 text-center text-xs text-zinc-500">
                ${y?`Ingen restauranter matchet "${y}".`:`Ingen restauranter opprettet ennå. Bruk skjemaet til venstre for å opprette din første!`}
              </td>
            </tr>
          `;return}let i=window.location.origin+window.location.pathname.replace(`superadmin.html`,``);e.innerHTML=r.map(e=>{let t=`${i}admin.html?id=${encodeURIComponent(e.id)}`,n=`${i}meny.html?id=${encodeURIComponent(e.id)}`,r=e.pin||`1234`;return`
            <tr class="hover:bg-zinc-50/80 transition-colors group">
              <!-- Restaurant & Slug -->
              <td class="py-3 px-3.5">
                <div class="font-bold text-zinc-950 text-sm flex items-center gap-2">
                  <span>${I(e.name)}</span>
                </div>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <span class="text-[10px] uppercase font-mono text-zinc-400">ID:</span>
                  <code class="text-xs font-mono font-semibold text-accent-700 bg-accent-50 px-1.5 py-0.2 rounded border border-accent-200">${I(e.id)}</code>
                </div>
              </td>

              <!-- Adgangskode (PIN) -->
              <td class="py-3 px-3">
                <div class="flex items-center gap-1.5">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono font-bold text-xs bg-amber-50 text-amber-900 border border-amber-200 shadow-2xs">
                    <svg class="h-3 w-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    <span>${I(r)}</span>
                  </span>
                  <button
                    onclick="openChangeRestaurantPinModal('${e.id}', '${I(r)}', '${I(e.name)}')"
                    class="text-[11px] font-medium text-zinc-500 hover:text-zinc-950 underline px-1 py-0.5 rounded hover:bg-zinc-100 transition-colors"
                    title="Endre PIN-kode for denne restauranten"
                  >
                    Endre
                  </button>
                </div>
              </td>

              <!-- Retter -->
              <td class="py-3 px-3">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200">
                  ${e.itemCount||0} retter
                </span>
              </td>

              <!-- Kopier-knapper -->
              <td class="py-3 px-3.5 space-y-1">
                <div class="flex flex-wrap items-center gap-1.5">
                  <button
                    onclick="copyManagerPack('${I(e.name)}', '${e.id}', '${I(r)}')"
                    class="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold transition-colors shadow-2xs"
                    title="Kopier komplett pakke med lenke og PIN klar til å sendes til restaurantsjefen"
                  >
                    <svg class="h-3.5 w-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                    </svg>
                    <span>Kopier Sjefs-pakke (Lenke + PIN)</span>
                  </button>

                  <button
                    onclick="copyToClipboard('${t}', 'Admin-lenke kopiert for ${I(e.name)}!')"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-700 text-xs font-medium transition-colors shadow-2xs"
                    title="Kopier lenke for restaurantens kontrollpanel"
                  >
                    <svg class="h-3 w-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                    </svg>
                    <span>Admin</span>
                  </button>

                  <button
                    onclick="copyToClipboard('${n}', 'NFC-menylenke kopiert for ${I(e.name)}!')"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded border border-accent-300 bg-accent-50 hover:bg-accent-100 text-accent-800 text-xs font-medium transition-colors shadow-2xs"
                    title="Kopier lenke for NFC-brikker og QR-koder på bordene"
                  >
                    <svg class="h-3 w-3 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                    <span>NFC</span>
                  </button>

                  <button
                    onclick="copyToClipboard('${n}&lang=en', 'Engelsk menylenke kopiert for ${I(e.name)}!')"
                    class="inline-flex items-center gap-1 px-1.5 py-1 rounded border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700 text-xs font-medium transition-colors shadow-2xs"
                    title="Kopier engelsk menylenke for internasjonale gjester / NFC"
                  >
                    <span>🇬🇧 EN</span>
                  </button>
                </div>
              </td>

              <!-- Handlinger -->
              <td class="py-3 px-3.5 text-right space-x-1.5 whitespace-nowrap">
                <a
                  href="${t}"
                  target="_blank"
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors"
                >
                  <span>Admin</span>
                  <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
                <a
                  href="${n}"
                  target="_blank"
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 text-xs font-semibold transition-colors"
                  title="Åpne meny på norsk"
                >
                  <span>🇳🇴 Meny</span>
                  <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
                <a
                  href="${n}&lang=en"
                  target="_blank"
                  class="inline-flex items-center gap-1 px-2 py-1 rounded border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700 text-xs font-medium transition-colors"
                  title="Åpne meny på engelsk (for turister)"
                >
                  <span>🇬🇧 EN</span>
                </a>
                <button
                  onclick="deleteRestaurant('${e.id}')"
                  class="px-2 py-1 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded border border-rose-200 transition-colors"
                  title="Slett denne restauranten"
                >
                  Slett
                </button>
              </td>
            </tr>
          `}).join(``)}window.handleCreateRestaurant=async function(e){e.preventDefault();let r=document.getElementById(`rest-name`),a=document.getElementById(`rest-slug`),o=document.getElementById(`rest-logo`),s=document.getElementById(`rest-pin`),l=document.getElementById(`rest-seed-dishes`),u=document.getElementById(`submit-restaurant-btn`),p=r.value.trim(),h=a.value.trim().toLowerCase().replace(/[^a-z0-9_\-]/g,`_`),y=o.value.trim(),b=(s?s.value.trim():``)||`1234`,x=l.checked;if(p&&h){u.disabled=!0,u.innerHTML=`
          <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Oppretter...</span>
        `;try{if(f&&d){let e=i(d,`restaurants`,h);if(await c(e,{name:p,logo_url:y,pin:b,tagline_above:`Fine Dining & Vinbar`,tagline_below:`Sesongens råvarer og klassiske favoritter. Velkommen til bords.`,categories:[`Hovedrett`,`Forrett`,`Desserter`,`Drikke`],created_at:new Date().toISOString()}),x){let e=n(d,`restaurants`,h,`menu_items`);for(let n of m)await t(e,n)}}else{let e=g();if(e.find(e=>e.id===h)){alert(`Restaurant med ID "${h}" finnes allerede.`),u.disabled=!1,u.innerText=`Opprett i Firestore`;return}e.unshift({id:h,name:p,logo_url:y,pin:b,itemCount:x?m.length:0,created_at:new Date().toISOString()}),_(e),x&&localStorage.setItem(`smaksync_items_${h}`,JSON.stringify(m.map((e,t)=>({id:`seed-`+(t+1),...e})))),v=e,N()}F(`✓ Restaurant "${p}" opprettet med PIN ${b}! URL: ?id=${h}`),document.getElementById(`create-restaurant-form`).reset(),generateRandomPin()}catch(e){console.error(`Feil ved opprettelse av restaurant:`,e),alert(`Kunne ikke opprette restaurant: `+e.message)}finally{u.disabled=!1,u.innerHTML=`
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
            </svg>
            <span>Opprett i Firestore</span>
          `}}},window.autoGenerateSlug=function(e){let t=document.getElementById(`rest-slug`);t&&(t.value=e.toLowerCase().replace(/[æ]/g,`ae`).replace(/[ø]/g,`oe`).replace(/[å]/g,`aa`).replace(/[^a-z0-9]+/g,`_`).replace(/^_+|_+$/g,``))},window.copyToClipboard=function(e,t){navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{F(t||`✓ Lenke kopiert til utklippstavlen!`)}).catch(()=>{P(e,t)}):P(e,t)};function P(e,t){let n=document.createElement(`input`);n.value=e,document.body.appendChild(n),n.select(),document.execCommand(`copy`),document.body.removeChild(n),F(t||`✓ Lenke kopiert til utklippstavlen!`)}window.deleteRestaurant=async function(e){let t=v.find(t=>t.id===e),n=t?t.name:e;if(confirm(`Er du sikker på at du vil fjerne "${n}" (?id=${e})?`))try{if(f&&d)await r(i(d,`restaurants`,e));else{let t=g().filter(t=>t.id!==e);_(t),v=t,N()}F(`✓ Restaurant "${n}" ble slettet.`)}catch(e){console.error(`Feil ved sletting:`,e),alert(`Kunne ikke slette restauranten: `+e.message)}},window.handleSearchRestaurants=function(e){y=e.target.value.trim(),N()};function F(e){let t=document.getElementById(`toast-message`),n=document.getElementById(`toast-text`);t&&n&&(n.innerText=e,t.classList.remove(`hidden`),clearTimeout(window.toastTimer),window.toastTimer=setTimeout(()=>{t.classList.add(`hidden`)},3500))}window.toggleFirebaseConfigModal=function(){document.getElementById(`firebase-modal`).classList.toggle(`hidden`)},window.saveCustomFirebaseConfig=function(){let e=document.getElementById(`custom-firebase-json`).value.trim();if(e)try{let t=JSON.parse(e);if(!t.apiKey||!t.projectId){alert(`Konfigurasjonen må inneholde minst apiKey og projectId.`);return}localStorage.setItem(`smaksync_firebase_config`,JSON.stringify(t)),alert(`Firebase konfigurasjon lagret! Siden laster på nytt for å koble til.`),window.location.reload()}catch(e){alert(`Ugyldig JSON-format: `+e.message)}},window.clearSavedFirebaseConfig=function(){localStorage.removeItem(`smaksync_firebase_config`),alert(`Egendefinert konfigurasjon fjernet. Tilbakestiller til standard.`),window.location.reload()},window.generateRandomPin=function(){let e=Math.floor(1e3+Math.random()*9e3).toString(),t=document.getElementById(`rest-pin`);t&&(t.value=e)},window.generateNewRandomPinForModal=function(){let e=Math.floor(1e3+Math.random()*9e3).toString(),t=document.getElementById(`new-pin-input`);t&&(t.value=e)},window.openChangeRestaurantPinModal=function(e,t,n){document.getElementById(`edit-pin-restaurant-id`).value=e,document.getElementById(`new-pin-input`).value=t,document.getElementById(`pin-modal-subtitle`).innerText=`Oppdater PIN for ${n} (?id=${e})`,document.getElementById(`change-pin-modal`).classList.remove(`hidden`)},window.closeChangePinModal=function(){document.getElementById(`change-pin-modal`).classList.add(`hidden`)},window.handleSaveNewPin=async function(e){e.preventDefault();let t=document.getElementById(`edit-pin-restaurant-id`).value,n=document.getElementById(`new-pin-input`).value.trim(),r=document.getElementById(`save-pin-btn`);if(t&&n){r.disabled=!0,r.innerText=`Lagrer...`;try{let e=await C(n);if(f&&d)await l(i(d,`restaurants`,t),{pin:n,pin_hash:e});else{let r=g(),i=r.find(e=>e.id===t);i&&(i.pin=n,i.pin_hash=e,_(r),v=r,N())}closeChangePinModal(),F(`✓ Ny PIN (${n}) ble lagret for ${t}!`)}catch(e){console.error(`Kunne ikke oppdatere PIN:`,e),alert(`Kunne ikke lagre ny PIN: `+e.message)}finally{r.disabled=!1,r.innerText=`Lagre i Firestore`}}},window.copyManagerPack=function(e,t,n){let r=window.location.origin+window.location.pathname.replace(`superadmin.html`,``),i=`Hei! Her er innloggingen til kontrollpanelet for ${e}:

🔐 Kontrollpanel (Admin):
${`${r}admin.html?id=${encodeURIComponent(t)}`}

🔑 Din personlige adgangskode (PIN):
${n}

📲 Gjestemeny (NFC & QR-bordkort):
${`${r}meny.html?id=${encodeURIComponent(t)}`}

Vennligst ta vare på koden for å administrere menyen.`;copyToClipboard(i,`✓ Komplett innloggingspakke med PIN for ${e} kopiert!`)};function I(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`):``}var L=`smaksync_pricing_inquiries`,R=[],z=`alle`,B=``,V=null;function H(){let e=localStorage.getItem(L);if(!e){let e=[{id:`inq_demo_1`,restaurant_name:`Brasserie Posthallen`,contact_person:`Alexander Lindstrøm`,phone:`924 81 200`,email:`post@posthallen.no`,topic:`priser`,topic_label:`Priser og abonnementsmodeller`,message:`Vi har 45 bord og ønsker prisoversikt for NFC-menybrikker til uteserveringen og spisesalen.`,created_at:new Date(Date.now()-252e4).toISOString(),status:`ny`,source:`Kontakt for priser og info`},{id:`inq_demo_2`,restaurant_name:`Nordic Sjømat & Vinbar`,contact_person:`Maren Solheim`,phone:`415 62 890`,email:`maren@sjoematogvin.no`,topic:`komplett`,topic_label:`Komplett oppsett (NFC-bordkort + digital meny)`,message:`Åpner ny filial i november. Kan vi få tilsendt uforpliktende pristilbud på 25 bordkort og bistand til menyoppsett?`,created_at:new Date(Date.now()-108e5).toISOString(),status:`ny`,source:`Kontakt for priser og informasjon`}];return localStorage.setItem(L,JSON.stringify(e)),e}try{return JSON.parse(e)}catch{return[]}}function U(e){localStorage.setItem(L,JSON.stringify(e))}function W(){if(f&&d)try{let e=n(d,`inquiries`);E=s(e,e=>{let t=[];e.forEach(e=>{let n=e.data();t.push({id:e.id,restaurant_name:n.restaurant_name||``,contact_person:n.contact_person||``,phone:n.phone||``,email:n.email||``,topic:n.topic||`priser`,topic_label:n.topic_label||n.topic||`Priser`,include_review_cards:!!n.include_review_cards,message:n.message||``,created_at:n.created_at||new Date().toISOString(),status:n.status||`ny`,source:n.source||`web`})}),t.sort((e,t)=>new Date(t.created_at)-new Date(e.created_at)),H().forEach(e=>{t.find(t=>t.id===e.id||t.email===e.email&&Math.abs(new Date(t.created_at)-new Date(e.created_at))<5e3)||t.push(e)}),t.sort((e,t)=>new Date(t.created_at)-new Date(e.created_at)),R=t,q()},e=>{console.warn(`Firestore inquiries onSnapshot feil, bruker lokal lagring:`,e),G()})}catch(e){console.warn(`Kunne ikke koble til Firestore inquiries:`,e),G()}else G()}function G(){R=H(),q(),window.addEventListener(`storage`,e=>{e.key===L&&(R=H(),q())})}function K(e){if(!e)return``;try{let t=new Date(e),n=new Date-t,r=Math.floor(n/6e4);return r<1?`Akkurat nå`:r<60?`${r} min siden`:Math.floor(r/60)<24?`I dag kl. ${t.toLocaleTimeString(`no-NO`,{hour:`2-digit`,minute:`2-digit`})}`:t.toLocaleDateString(`no-NO`,{day:`2-digit`,month:`short`})+` `+t.toLocaleTimeString(`no-NO`,{hour:`2-digit`,minute:`2-digit`})}catch{return e}}function q(){let e=document.getElementById(`inquiries-table-body`);if(!e)return;let t=R.length,n=R.filter(e=>e.status===`ny`).length,r=R.filter(e=>e.status===`besvart`).length,i=document.getElementById(`stat-total-inquiries`),a=document.getElementById(`stat-new-inquiries-label`),o=document.getElementById(`stat-inquiries-badge`),s=document.getElementById(`inquiries-counter-pill`);i&&(i.innerText=t),a&&(a.innerText=`${n} ubehandlet${n===1?``:`e`}`),o&&(o.className=n>0?`h-2 w-2 rounded-full bg-emerald-500 animate-pulse`:`h-2 w-2 rounded-full bg-zinc-300`),s&&(s.innerText=`${n} ny${n===1?``:`e`}`,s.className=n>0?`px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800`:`px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600`);let c=document.getElementById(`inq-count-alle`),l=document.getElementById(`inq-count-ny`),u=document.getElementById(`inq-count-besvart`);c&&(c.innerText=t),l&&(l.innerText=n),u&&(u.innerText=r);let d=R.filter(e=>{if(z===`ny`&&e.status!==`ny`||z===`besvart`&&e.status!==`besvart`)return!1;if(B){let t=B.toLowerCase(),n=(e.restaurant_name||``).toLowerCase().includes(t),r=(e.contact_person||``).toLowerCase().includes(t),i=(e.email||``).toLowerCase().includes(t),a=(e.phone||``).toLowerCase().includes(t),o=(e.message||``).toLowerCase().includes(t),s=(e.topic_label||``).toLowerCase().includes(t);if(!n&&!r&&!i&&!a&&!o&&!s)return!1}return!0});e.innerHTML=d.length===0?`
            <tr>
              <td colspan="7" class="py-10 text-center text-xs text-zinc-500">
                ${B?`Ingen henvendelser matchet «${B}».`:z===`ny`?`Ingen nye ubehandlede henvendelser! Godt jobbet.`:`Ingen henvendelser registrert ennå.`}
              </td>
            </tr>
          `:d.map(e=>{let t=e.status===`ny`,n=e.include_review_cards||e.topic===`pakke`,r=encodeURIComponent(`SmakSync & Aabak Studio: Priser og informasjon for ${e.restaurant_name||`din restaurant`}`),i=encodeURIComponent(`Hei ${e.contact_person||``}!

Takk for din henvendelse vedrørende «${e.topic_label||`Priser og informasjon`}» for ${e.restaurant_name||`din restaurant`}.

Vi oversender med dette informasjon og prisoversikt for SmakSync sine digitale menyer og kontaktløse NFC-bordkort.${n?`

Vi har også inkludert tilbud på Aabak Studio Google NFC Review Cards for disken/kassen slik at dere kan samle inn flere 5-stjerners anmeldelser fra fornøyde gjester parallelt med bordmenyene.`:``}

${e.message?`Angående din kommentar:\n> "${e.message}"\n\n`:``}Våre pakker inkluderer:
• Fullt oppsatt digital meny med live sanntidssynk
• Personlig kontrollpanel for umiddelbar redigering av retter og priser
• Valgfrie høykvalitets NFC- og QR-menykort for bordene (akryl eller eik)
${n?`• Aabak Studio Google NFC Review Cards for disken (1-tæpp rett til Google-anmeldelse)
`:``}• Ingen app-nedlasting påkrevd for gjestene

Har du anledning til en kort prat på telefon (${e.phone||`ditt oppgitte nummer`}) denne uken, eller ønsker du at vi oversender et skreddersydd pristilbud direkte på e-post?

Med vennlig hilsen,
Leon / SmakSync Studio (Aabak Studio)
hei@smaksync.no · +47 22 10 90 00
https://smaksync.no · https://aabakstudio.com/NfcReview/`),a=`mailto:${encodeURIComponent(e.email)}?subject=${r}&body=${i}`,o=e.phone?`tel:${e.phone.replace(/[^0-9+]/g,``)}`:`#`;return`
            <tr class="hover:bg-zinc-50/80 transition-colors ${t?`bg-emerald-50/20 font-medium`:``}">
              <!-- Tidspunkt -->
              <td class="py-3 px-3.5 whitespace-nowrap text-zinc-500 text-xs font-mono">
                ${K(e.created_at)}
              </td>

              <!-- Restaurant -->
              <td class="py-3 px-3.5">
                <div class="font-bold text-zinc-950 text-sm flex items-center gap-1.5">
                  ${t?`<span class="h-2 w-2 rounded-full bg-emerald-500 shrink-0" title="Ny henvendelse"></span>`:``}
                  <span>${I(e.restaurant_name||`Uten navn`)}</span>
                </div>
                <span class="text-[10px] text-zinc-400 font-normal">Kilde: ${I(e.source||`Web`)}</span>
              </td>

              <!-- Kontaktperson & E-post (TYDELIG MERKET HVEM MAN SKAL SENDE MAIL TILBAKE TIL) -->
              <td class="py-3 px-3.5">
                <div class="font-semibold text-zinc-900">${I(e.contact_person||`Ikke oppgitt`)}</div>
                <div class="mt-0.5">
                  <a
                    href="${a}"
                    onclick="markInquiryAsReplied('${e.id}')"
                    class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 transition-colors"
                    title="Send e-postsvar til denne adressen"
                  >
                    <svg class="h-3 w-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>${I(e.email)}</span>
                  </a>
                </div>
              </td>

              <!-- Telefon -->
              <td class="py-3 px-3 whitespace-nowrap">
                ${e.phone?`
                  <a href="${o}" class="font-mono text-zinc-800 hover:text-zinc-950 font-medium inline-flex items-center gap-1 hover:underline">
                    <svg class="h-3 w-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>${I(e.phone)}</span>
                  </a>
                `:`<span class="text-zinc-400 text-xs">-</span>`}
              </td>

              <!-- Kategori & Melding -->
              <td class="py-3 px-3.5 max-w-xs">
                <div class="flex flex-wrap items-center gap-1 mb-1">
                  <span class="inline-block text-[11px] font-semibold text-zinc-700 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                    ${I(e.topic_label||`Priser`)}
                  </span>
                  ${n?`
                    <span class="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-300 px-1.5 py-0.5 rounded" title="Kunden ønsker også tilbud på Google NFC Review Cards">
                      <span>⭐ + Review-kort</span>
                    </span>
                  `:``}
                </div>
                ${e.message?`
                  <p class="text-xs text-zinc-600 line-clamp-2 italic" title="${I(e.message)}">
                    "${I(e.message)}"
                  </p>
                `:`<p class="text-[11px] text-zinc-400 italic">Ingen melding lagt ved</p>`}
              </td>

              <!-- Status -->
              <td class="py-3 px-3 text-center whitespace-nowrap">
                <button
                  type="button"
                  onclick="toggleInquiryStatus('${e.id}')"
                  class="cursor-pointer transition-all"
                  title="Klikk for å endre status"
                >
                  ${t?`
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100">
                      <span class="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      <span>Ubehandlet</span>
                    </span>
                  `:`
                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200 hover:bg-zinc-200">
                      <svg class="h-3 w-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>Besvart</span>
                    </span>
                  `}
                </button>
              </td>

              <!-- Handlinger / Send svar -->
              <td class="py-3 px-3.5 text-right whitespace-nowrap space-x-1.5">
                <a
                  href="${a}"
                  onclick="markInquiryAsReplied('${e.id}')"
                  class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-xs"
                  title="Åpne ferdig utfylt e-post i e-postprogrammet"
                >
                  <svg class="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>Send mail</span>
                </a>

                <button
                  type="button"
                  onclick="openInquiryModal('${e.id}')"
                  class="inline-flex items-center px-2 py-1.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-700 text-xs font-medium transition-colors"
                  title="Vis alle detaljer"
                >
                  Detaljer
                </button>

                <button
                  type="button"
                  onclick="deleteInquiry('${e.id}')"
                  class="p-1.5 text-zinc-400 hover:text-rose-600 rounded hover:bg-rose-50 transition-colors"
                  title="Slett henvendelse"
                >
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </td>
            </tr>
          `}).join(``)}window.setInquiriesFilter=function(e){z=e,[`alle`,`ny`,`besvart`].forEach(t=>{let n=document.getElementById(`filter-inq-${t}`);n&&(n.className=t===e?`px-2.5 py-1 rounded-md bg-zinc-950 text-white font-semibold transition-all`:`px-2.5 py-1 rounded-md text-zinc-600 hover:text-zinc-950 transition-all`)}),q()},window.handleSearchInquiries=function(e){B=(e.target.value||``).trim(),q()},window.markInquiryAsReplied=async function(e){let t=R.find(t=>t.id===e);if(t&&t.status!==`besvart`){if(t.status=`besvart`,U(R),f&&d)try{await l(i(d,`inquiries`,e),{status:`besvart`})}catch{}q(),F(`✓ Henvendelse for "${t.restaurant_name}" merket som besvart.`)}},window.toggleInquiryStatus=async function(e){let t=R.find(t=>t.id===e);if(!t)return;let n=t.status===`ny`?`besvart`:`ny`;if(t.status=n,U(R),f&&d)try{await l(i(d,`inquiries`,e),{status:n})}catch{}q(),F(`✓ Status endret til ${n===`ny`?`Ubehandlet`:`Besvart`}`)},window.deleteInquiry=async function(e){let t=R.find(t=>t.id===e),n=t?t.restaurant_name:e;if(confirm(`Slette henvendelsen fra "${n}"?`)){if(R=R.filter(t=>t.id!==e),U(R),f&&d)try{await r(i(d,`inquiries`,e))}catch{}q(),F(`✓ Henvendelse slettet.`)}},window.openInquiryModal=function(e){let t=R.find(t=>t.id===e);if(!t)return;V=e,document.getElementById(`inq-modal-title`).innerText=t.restaurant_name||`Henvendelse`,document.getElementById(`inq-modal-subtitle`).innerText=`Mottatt: ${K(t.created_at)} · Status: ${t.status===`ny`?`Ubehandlet`:`Besvart`}`,document.getElementById(`inq-modal-rest-name`).innerText=t.restaurant_name||`-`,document.getElementById(`inq-modal-topic`).innerText=t.topic_label||t.topic||`Priser`,document.getElementById(`inq-modal-person`).innerText=t.contact_person||`-`;let n=document.getElementById(`inq-modal-email-link`);n.innerText=t.email||`-`,n.href=t.email?`mailto:${t.email}`:`#`;let r=document.getElementById(`inq-modal-phone-link`);r.innerText=t.phone||`Ikke oppgitt`,r.href=t.phone?`tel:${t.phone.replace(/[^0-9+]/g,``)}`:`#`;let i=document.getElementById(`inq-modal-message`);i.innerText=t.message?`«${t.message}»`:`Ingen utfyllende melding lagt inn av kunden.`;let a=encodeURIComponent(`SmakSync: Priser og informasjon for ${t.restaurant_name||`din restaurant`}`),o=encodeURIComponent(`Hei ${t.contact_person||``}!

Takk for din henvendelse til SmakSync vedrørende «${t.topic_label||`Priser og informasjon`}».

Vi oversender med dette informasjon og prisoversikt tilpasset ${t.restaurant_name||`din restaurant`}.

${t.message?`Angående din kommentar:\n> "${t.message}"\n\n`:``}Med vennlig hilsen,
Leon / SmakSync Studio
hei@smaksync.no · +47 22 10 90 00`),s=document.getElementById(`inq-modal-mailto-btn`);s.href=`mailto:${encodeURIComponent(t.email)}?subject=${a}&body=${o}`,s.onclick=()=>{markInquiryAsReplied(e)};let c=document.getElementById(`inq-modal-toggle-status-btn`);c.innerText=t.status===`ny`?`Merk som besvart`:`Merk som ubehandlet`,document.getElementById(`inquiry-modal`).classList.remove(`hidden`)},window.closeInquiryModal=function(){document.getElementById(`inquiry-modal`).classList.add(`hidden`),V=null},window.toggleInquiryModalStatus=function(){V&&(toggleInquiryStatus(V),openInquiryModal(V))},window.deleteCurrentModalInquiry=function(){if(!V)return;let e=V;closeInquiryModal(),deleteInquiry(e)},document.addEventListener(`DOMContentLoaded`,()=>{A()}),A();