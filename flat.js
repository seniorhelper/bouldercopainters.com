/* Painter Hotline - Flat, us operator */
(function () {
  "use strict";
  var TEL = "+17202085645", DISP = "720-208-5645";

  /* ---------- Flat artwork: a retro hotline phone with a painter's cap ---------- */
  function brush(extra) {
    return '<svg class="' + (extra || '') + '" viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flat, the Boulder CO Painters brush">' +
      '<defs>' +
      '<linearGradient id="flFerr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9fb0c2"/><stop offset=".5" stop-color="#e6edf4"/><stop offset="1" stop-color="#8ea0b4"/></linearGradient>' +
      '<linearGradient id="flHandle" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a4a70"/><stop offset=".5" stop-color="#20483a"/><stop offset="1" stop-color="#132740"/></linearGradient>' +
      '<linearGradient id="flBristle" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8c49a"/><stop offset="1" stop-color="#b99a66"/></linearGradient>' +
      '</defs>' +
      /* spiky hair above the head block */
      '<g fill="#4a7a32">' +
      '<path d="M66 54 l10 -34 l12 28z"/><path d="M90 46 l8 -38 l14 34z"/>' +
      '<path d="M116 42 l12 -36 l10 38z"/><path d="M142 48 l16 -30 l6 34z"/>' +
      '</g>' +
      /* head: the flat brush block (bristles pointing down) */
      '<rect x="60" y="48" width="112" height="60" rx="10" fill="url(#flHandle)"/>' +
      '<rect x="56" y="104" width="120" height="30" rx="7" fill="url(#flFerr)" stroke="#8697ab" stroke-width="2"/>' +
      '<rect x="72" y="112" width="8" height="14" rx="3" fill="#7f8fa3" opacity=".5"/>' +
      /* glasses */
      '<g class="fl-specs">' +
      '<circle cx="92" cy="76" r="18" fill="#fdfdfd" stroke="#101f36" stroke-width="4"/>' +
      '<circle cx="140" cy="76" r="18" fill="#fdfdfd" stroke="#101f36" stroke-width="4"/>' +
      '<path d="M110 76 h12" stroke="#101f36" stroke-width="4"/>' +
      '<path d="M60 70 l14 4" stroke="#101f36" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M172 70 l-14 4" stroke="#101f36" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="92" cy="76" r="5.5" fill="#101f36"/><circle cx="140" cy="76" r="5.5" fill="#101f36"/>' +
      '<circle cx="94" cy="74" r="2" fill="#fff"/><circle cx="142" cy="74" r="2" fill="#fff"/>' +
      '</g>' +
      '<path d="M104 96 q12 10 24 0" stroke="#e6edf4" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      /* bristles with loaded color */
      '<path d="M58 132 h124 v34 q-62 16 -124 0z" fill="url(#flBristle)"/>' +
      '<path d="M58 150 h124 v16 q-62 16 -124 0z" fill="#4a7a32"/>' +
      '<g class="fl-drip">' +
      '<path d="M78 166 q4 18 0 26 q-10 2 -8 -12z" fill="#c48a4a"/>' +
      '<path d="M120 170 q5 22 0 30 q-11 2 -9 -14z" fill="#20483a"/>' +
      '<path d="M158 164 q4 16 0 24 q-10 2 -8 -11z" fill="#c9972f"/>' +
      '</g>' +
      /* two arms */
      '<path class="fl-armL" d="M58 120 q-34 6 -40 34" fill="none" stroke="#20483a" stroke-width="11" stroke-linecap="round"/>' +
      '<circle cx="18" cy="156" r="10" fill="#e6edf4" stroke="#20483a" stroke-width="3"/>' +
      '<path class="fl-armR" d="M182 120 q36 2 44 30" fill="none" stroke="#20483a" stroke-width="11" stroke-linecap="round"/>' +
      '<circle cx="226" cy="152" r="10" fill="#e6edf4" stroke="#20483a" stroke-width="3"/>' +
      /* handle as the single leg, with paint splatter on it */
      '<rect x="104" y="196" width="26" height="86" rx="12" fill="url(#flHandle)"/>' +
      '<circle cx="112" cy="218" r="5" fill="#4a7a32"/>' +
      '<circle cx="124" cy="238" r="4" fill="#c48a4a"/>' +
      '<circle cx="110" cy="256" r="3.5" fill="#c9972f"/>' +
      '<ellipse cx="117" cy="286" rx="22" ry="10" fill="#101f36"/>' +
      /* swoosh, echoing the logo */
      '<path class="fl-bark" d="M150 270 q40 -8 62 -36" fill="none" stroke="#4a7a32" stroke-width="7" stroke-linecap="round" opacity=".85"/>' +
      '</svg>';
  }

  var css = document.createElement('style');
  css.textContent = [
    '.fl-launch{position:fixed;right:16px;bottom:16px;z-index:980;display:flex;flex-direction:column;align-items:flex-end;gap:4px}',
    '.fl-btn{width:148px;height:170px;background:none;border:0;padding:0;cursor:pointer;filter:drop-shadow(0 10px 20px rgba(7,51,111,.32));transition:transform .2s}',
    '.fl-btn:hover{transform:translateY(-4px) rotate(-2deg)}',
    '.fl-btn svg{width:100%;height:100%;display:block}',
    '.fl-specs{transform-origin:116px 76px;animation:flbounce 5s ease-in-out infinite}',
    '.fl-armL{transform-origin:58px 120px;animation:flwave 2.6s ease-in-out infinite}',
    '.fl-armR{transform-origin:182px 120px;animation:flwave 3.1s ease-in-out infinite reverse}',
    '@keyframes flbounce{0%,70%,100%{transform:translateY(0) rotate(0)}78%{transform:translateY(-3px) rotate(-5deg)}86%{transform:translateY(0) rotate(4deg)}}',
    '@keyframes flwave{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(9deg)}}',
    '.fl-drip{transform-origin:120px 166px;animation:fldroop 3.4s ease-in-out infinite}',
    '@keyframes fldroop{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.22)}}',
    '.fl-bark{opacity:0;animation:fldrip 4.6s ease-in-out infinite}',
    '@keyframes fldrip{0%,70%,100%{opacity:0}76%{opacity:1}86%{opacity:.4}}',
    '.fl-led{animation:flblink 2.2s ease-in-out infinite}',
    '@keyframes flblink{0%,100%{opacity:1}50%{opacity:.35}}',
    '.fl-cord{stroke-dasharray:6 10;animation:flwave 2.4s linear infinite}',
    '@keyframes flwave{to{stroke-dashoffset:-32}}',
    '.fl-tip{background:#fff;color:#122033;border:2px solid #0a4fae;border-radius:14px 14px 4px 14px;padding:10px 30px 10px 13px;font:700 .92rem/1.3 Inter,system-ui,sans-serif;max-width:238px;box-shadow:0 10px 26px rgba(7,51,111,.2);position:relative;margin-right:22px;cursor:pointer}',
    '.fl-tip button{position:absolute;top:3px;right:5px;border:0;background:none;font-size:1.05rem;color:#5d6b7e;cursor:pointer;line-height:1}',
    '.fl-dock{position:fixed;right:0;top:44%;transform:translateY(-50%);z-index:975;display:flex;flex-direction:column;gap:8px;align-items:flex-end}',
    '.fl-dock button{display:flex;align-items:center;gap:9px;background:#07336f;color:#fff;border:0;border-radius:12px 0 0 12px;padding:12px 14px 12px 12px;font:700 .86rem Inter,system-ui,sans-serif;cursor:pointer;box-shadow:-4px 6px 18px rgba(7,51,111,.26)}',
    '.fl-dock button.alt{background:#ef6c12}',
    '.fl-dock button:hover{filter:brightness(1.1);padding-right:18px}',
    '.fl-dock .mini{width:30px;height:34px;flex-shrink:0}',
    '.fl-dock .mini svg{width:100%;height:100%}',
    '.fl-panel{position:fixed;right:16px;bottom:16px;width:400px;max-width:calc(100vw - 24px);height:646px;max-height:calc(100vh - 110px);background:#fff;border:1px solid #dce3ec;border-radius:16px;box-shadow:0 28px 72px rgba(7,51,111,.32);z-index:1000;display:flex;flex-direction:column;overflow:hidden}',
    '.fl-head{background:linear-gradient(135deg,#07336f,#0b5ed7);color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}',
    '.fl-head .av{width:46px;height:46px;border-radius:14px;background:#fff;display:grid;place-items:center;overflow:hidden;flex-shrink:0}',
    '.fl-head .av svg{width:42px;height:auto}',
    '.fl-head b{font:700 1.02rem Inter,system-ui,sans-serif;display:block}',
    '.fl-head i{font-style:normal;font-size:.76rem;color:rgba(255,255,255,.82);display:flex;align-items:center;gap:6px}',
    '.fl-head i::before{content:"";width:8px;height:8px;border-radius:50%;background:#2ee07a;box-shadow:0 0 0 0 rgba(46,224,122,.7);animation:flblink 2.2s ease-in-out infinite}',
    '.fl-head .call{margin-left:auto;background:#ffc233;color:#3a2b00;border:0;border-radius:8px;padding:8px 10px;font:700 .82rem Inter,system-ui,sans-serif;text-decoration:none}',
    '.fl-head .x{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.4);color:#fff;border-radius:8px;padding:6px 9px;cursor:pointer;font-weight:700}',
    '.fl-tape{height:5px;background:linear-gradient(90deg,#ef6c12,#ffc233,#0f7e74,#0b5ed7);}',
    '.fl-prog{height:4px;background:#e7edf5}.fl-prog i{display:block;height:100%;width:0;background:#ef6c12;transition:width .35s}',
    '.fl-body{flex:1;overflow-y:auto;padding:14px;background:#f4f7fb;font:1rem/1.55 Inter,system-ui,sans-serif;color:#122033}',
    '.fl-msg{max-width:88%;padding:10px 13px;border-radius:14px;margin-bottom:10px;font-size:.95rem}',
    '.fl-msg.bot{background:#fff;border:1px solid #dce3ec;border-bottom-left-radius:4px}',
    '.fl-msg.me{background:#07336f;color:#fff;margin-left:auto;border-bottom-right-radius:4px}',
    '.fl-msg a{color:inherit}',
    '.fl-opts{display:flex;flex-wrap:wrap;gap:7px;padding:10px 14px;background:#fff;border-top:1px solid #dce3ec}',
    '.fl-opt{background:#fff;border:1px solid #0a4fae;color:#0a4fae;border-radius:9px;padding:8px 11px;font:600 .88rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.fl-opt:hover{background:#0a4fae;color:#fff}',
    '.fl-opt.hot{background:#ef6c12;border-color:#ef6c12;color:#fff}',
    '.fl-foot{display:flex;gap:7px;padding:10px 14px;border-top:1px solid #dce3ec;background:#fff}',
    '.fl-foot input{flex:1;border:1px solid #dce3ec;border-radius:9px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#f4f7fb}',
    '.fl-foot button{background:#ffc233;border:0;border-radius:9px;padding:10px 14px;font-weight:700;color:#3a2b00;cursor:pointer}',
    '.fl-f{background:#fff;border:1px solid #dce3ec;border-radius:12px;padding:14px;margin-bottom:10px}',
    '.fl-f label{display:block;font:600 .84rem Inter,system-ui,sans-serif;color:#122033;margin:9px 0 4px}',
    '.fl-f input,.fl-f select,.fl-f textarea{width:100%;border:1px solid #dce3ec;border-radius:9px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#f4f7fb;color:#122033}',
    '.fl-f .duo{display:grid;grid-template-columns:1fr 1fr;gap:0 10px}',
    '.fl-f button.go{width:100%;margin-top:12px;background:#ef6c12;color:#fff;border:0;border-radius:9px;padding:13px;font:700 1rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.fl-note{font-size:.8rem;color:#5d6b7e;margin-top:8px}',
    '.fl-ticket{background:#07336f;color:#fff;border-radius:12px;padding:16px;margin-bottom:12px;font-family:Inter,system-ui,sans-serif}',
    '.fl-ticket b{display:block;font-size:1.35rem;color:#ffc233;letter-spacing:.04em}',
    '.fl-ticket .ln{display:flex;justify-content:space-between;gap:10px;font-size:.86rem;padding:5px 0;border-bottom:1px dashed rgba(255,255,255,.26)}',
    '.fl-ticket .ln:last-of-type{border-bottom:0}',
    '.fl-ticket small{display:block;margin-top:8px;color:rgba(255,255,255,.82);font-size:.82rem}',
    '@media (max-width:640px){.fl-panel{right:6px;left:6px;width:auto;bottom:74px;top:60px;height:auto;max-height:none}',
    '.fl-launch{right:4px;bottom:74px}.fl-btn{width:104px;height:120px}.fl-tip{font-size:.84rem;max-width:176px;margin-right:12px}',
    '.fl-dock{top:150px;bottom:auto;transform:none}.fl-dock button{padding:10px 10px 10px 8px;font-size:.74rem}.fl-dock .mini{width:24px;height:28px}}',
    '@media (prefers-reduced-motion:reduce){.fl-specs,.fl-armL,.fl-armR,.fl-drip,.fl-bark,.fl-led{animation:none}}'
  ].join('');
  document.head.appendChild(css);

  function el(h) { var d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; }

  var launch = el('<div class="fl-launch"><button class="fl-btn" id="flBtn" aria-label="Chat with Flat, our brush" aria-expanded="false">' + brush('') + '</button></div>');
  document.body.appendChild(launch);
  var dock = el('<div class="fl-dock">' +
    '<button data-mode="quote"><span class="mini">' + brush('') + '</span>Quick quote</button>' +
    '<button class="alt" data-mode="callback"><span class="mini">' + brush('') + '</span>Call me back</button></div>');
  document.body.appendChild(dock);

  var panel = null, answers = {}, log = [], capture = null, started = false;

  function openPanel(mode) {
    if (!panel) {
      panel = el('<div class="fl-panel" role="dialog" aria-modal="false" aria-label="Painter Hotline chat">' +
        '<div class="fl-head"><span class="av">' + brush('') + '</span><span><b>Flat</b><i>Boulder County</i></span>' +
        '<a class="call" href="tel:' + TEL + '">' + DISP + '</a><button class="x" aria-label="Close us chat">X</button></div>' +
        '<div class="fl-tape"></div><div class="fl-prog"><i id="flProg"></i></div>' +
        '<div class="fl-body" id="flBody"></div><div class="fl-opts" id="flOpts"></div>' +
        '<div class="fl-foot"><label class="sr" for="flIn">Type a message to us</label>' +
        '<input id="flIn" placeholder="Ask us anything..." autocomplete="off"><button id="flSend">Send</button></div></div>');
      document.body.appendChild(panel);
      panel.querySelector('.x').addEventListener('click', closePanel);
      panel.querySelector('#flSend').addEventListener('click', typed);
      panel.querySelector('#flIn').addEventListener('keydown', function (e) { if (e.key === 'Enter') typed(); });
    }
    panel.hidden = false;
    launch.style.display = 'none';
    document.getElementById('flBtn').setAttribute('aria-expanded', 'true');
    if (mode === 'quote') startQuote();
    else if (mode === 'callback') startCallback();
    else if (!started) greet();
  }
  function closePanel() {
    if (panel) panel.hidden = true;
    launch.style.display = '';
    document.getElementById('flBtn').setAttribute('aria-expanded', 'false');
  }
  document.getElementById('flBtn').addEventListener('click', function () { openPanel(); });
  dock.querySelectorAll('button').forEach(function (b) { b.addEventListener('click', function () { openPanel(b.dataset.mode); }); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-quote]');
    if (a) { e.preventDefault(); openPanel('quote'); }
  });

  function say(html, who) {
    var b = document.getElementById('flBody');
    b.appendChild(el('<div class="fl-msg ' + (who || 'bot') + '">' + html + '</div>'));
    b.scrollTop = b.scrollHeight;
  }
  function opts(list) {
    var o = document.getElementById('flOpts'); o.innerHTML = '';
    list.forEach(function (x) {
      var b = el('<button class="fl-opt' + (x.hot ? ' hot' : '') + '" type="button">' + x.label + '</button>');
      b.addEventListener('click', function () { say(x.label, 'me'); log.push('Visitor: ' + x.label); o.innerHTML = ''; x.fn(); });
      o.appendChild(b);
    });
  }
  function prog(p) { var b = document.getElementById('flProg'); if (b) b.style.width = (p * 100) + '%'; }
  function form(html) {
    document.getElementById('flOpts').innerHTML = '';
    var b = document.getElementById('flBody'), f = el('<div class="fl-f">' + html + '</div>');
    b.appendChild(f); b.scrollTop = b.scrollHeight; return f;
  }

  /* ---------- knowledge base ---------- */
  var KB = [
    [/(cheaper|do better on price|better price|lower (the )?price|beat .*(price|quote|bid)|more of a discount|negotiat|price match)/i, 'Straight answer: the October discount is already built into the number you get, so there is not a second price hiding behind it. What we can move is scope or schedule. If budget is the constraint, we can phase the work, start with the sun-facing elevations that are actually failing, and come back for the rest.'],
    [/\b(why (you|should)|what makes|different|better than|choose)\b/i, 'Four things, honestly. Crews that specialize by type of work instead of doing a bit of everything. Over 20 years of Colorado-specific experience, which mostly means knowing what fails here and why. A dedicated project manager so you have one person to call. And a 5-year workmanship warranty in writing, which only works because the preparation is real.'],
    [/\b(twice|again|redo|do it over|short cut|shortcut|cheap (job|bid|quote))\b/i, 'The expensive version of this is doing it twice. A cheap job skips washing, scraping and priming, looks fine for a season, then fails. The second painter has to remove the failed coating before starting, so you pay for the first job, the removal and the correct job. That is the whole reason our prep is itemized in writing.'],
    [/\b(prep|preparation|what.*included|scope|process)\b/i, 'On an exterior: protect the property, power wash, scrape and sand back to a sound edge, fill and caulk, prime what needs it, then the agreed coats on siding, trim, window and door casings, soffit and fascia. Then full cleanup and a walkthrough with you. Interiors follow the same logic indoors. All of it is itemized on your proposal.'],
    [/\b(deposit|payment|financ|pay|invoice|down)\b/i, 'A deposit reserves your dates, commonly half, and the balance is due at completion after you walk the work with us. Terms are printed on the proposal, and the <a href="/terms-of-service/">terms page</a> spells out the rest.'],
    [/\b(crew|who does|subcontract|employee|project manager)\b/i, 'Crews that specialize: exterior, interior, cabinets and commercial are not the same skill set. You also get a dedicated project manager, so there is one person accountable for your project rather than a rotating phone tree.'],
    [/\b(proposal|contract|paperwork|sign|agreement|estimate in writing)\b/i, 'Everything goes in writing: surfaces, preparation steps, product line and sheen, coat counts, schedule, payment terms and the warranty. You can sign it electronically right on your phone, and a PDF copy lands in your inbox.'],
    [/\b(schedule|book|dates|when can you start|availability)\b/i, 'Depends on the season and the crew. Interiors are usually easier to place; exterior calendars tighten from late spring through early fall. Tell me the project and your preferred week and I will get a real answer back to you rather than a guess.'],
    [/\b(think about it|not ready|later|hold off)\b/i, 'Completely fair. Usually one specific thing is unresolved: price, timing, the crew, or whether the scope is right. Which one is it? I would rather answer it now than leave you guessing.'],
    [/\b(cost|price|pricing|how much|rate|charge|expensive)\b/i, 'Published 2026 Front Range data puts exterior painting around <strong>$1.55 to $4.10 per square foot</strong>, interior around <strong>$1.50 to $3.50</strong>, and cabinets between <strong>$2,000 and $8,000</strong>. The <a href="/pricing/">pricing page</a> has a calculator, or I can run a quick quote with you right now.'],
    [/\b(area|serve|cover|location|city|town|near me|where)\b/i, 'We covers the whole Front Range: Denver metro, the south metro through Castle Rock, Boulder County and Longmont, the I-25 towns, the eastern plains out to Fort Morgan, and the mountains from Evergreen to Breckenridge. Find yours on the <a href="/painters-near-me/">locations page</a>.'],
    [/\b(mountain|breckenridge|frisco|dillon|silverthorne|evergreen|georgetown|idaho springs|altitude)\b/i, 'Yes, we paint the mountain towns. Higher elevation means harsher UV, a shorter season and more stain work, so those projects book earlier in the year. Tell me the town and I will tell you what the window looks like.'],
    [/\b(warranty|guarantee)\b/i, 'Every project carries a <strong>5-year workmanship warranty</strong> in writing, plus the manufacturer warranty on the Sherwin-Williams, PPG or Behr coating. Details on the <a href="/our-warranty/">warranty page</a>.'],
    [/\b(insur|licen|bonded)\b/i, 'Fully insured, with a certificate provided at the quote. Colorado issues no statewide painting license, so insurance and a written scope are what you should ask any painter to produce.'],
    [/\b(discount|deal|offer|coupon|special|sale|25)\b/i, 'Right now: <strong>25% off projects booked by October 31, 2026</strong>. Labor only, paint and materials not included. See the <a href="/offers/">offer page</a>.'],
    [/\b(peel|flak|bubbl|chalk|fail|crack|bad job|redo)\b/i, 'That is one of our most common calls. Peeling usually traces to moisture, contamination, incompatible layers or missing primer, and the fix depends on which. Send photos through the quick quote and we will tell you what we see.'],
    [/\b(cabinet|kitchen)\b/i, 'Cabinets get degreased, scuff sanded, bonding primed and sprayed with a cabinet-grade finish. Typically $2,000 to $8,000 depending on door count. More on <a href="/cabinet-painting/">cabinet painting</a>.'],
    [/\b(deck|fence|stain)\b/i, 'Decks and fences get cleaned, brightened, sanded where needed and sealed with products chosen for Colorado sun. More on <a href="/deck-staining/">deck and fence staining</a>.'],
    [/\b(interior|inside|room|wall|ceiling|basement)\b/i, 'Interior work runs year-round: walls, ceilings, trim, doors and basements, everything protected with daily cleanup. See <a href="/interior-painting/">interior painting</a>.'],
    [/\b(exterior|outside|siding|stucco|brick|trim)\b/i, 'Exteriors get washed, scraped, sanded, caulked and spot-primed before any finish coat. See <a href="/exterior-painting/">exterior painting</a>.'],
    [/\b(commercial|office|retail|warehouse|tenant|property manager)\b/i, 'We handle offices, retail, warehouses, HOAs and multi-unit property, phased or after hours. See <a href="/commercial-painting/">commercial painting</a>.'],
    [/\b(hoa|approval|covenant|architectural)\b/i, 'Most Front Range communities require exterior color approval. We pull the approved palette, prepare samples and handle the submission so the schedule holds.'],
    [/\b(when|season|winter|cold|weather|spring|time of year)\b/i, 'Exteriors run best mid-May through early October down here. Denver averages its last spring freeze near May 5 and first fall freeze near October 7. Interiors run all year, and mountain seasons are shorter at both ends.'],
    [/\b(how long|days|timeline|schedule|fast)\b/i, 'Most home exteriors take 3 to 5 working days, a few interior rooms 1 to 2 days, and cabinets 3 to 5 days because of cure time between coats.'],
    [/\b(brand|sherwin|ppg|behr|product|paint type)\b/i, 'Sherwin-Williams, PPG and Behr, chosen by surface and exposure. The exact line and sheen are named in your written quote and never swapped afterward.'],
    [/\b(lead|1978|old house|historic)\b/i, 'Homes built before 1978 may contain lead paint, and federal EPA rules require certified firms and lead-safe work practices when disturbing those surfaces. Tell us the year built and we plan for it.'],
    [/\b(voc|smell|odor|pet|kid|safe|fume)\b/i, 'Most interior paints today are water-based and low in VOC, and Colorado tightened VOC limits in 2020. Zero-VOC options are available if anyone in the home is sensitive.'],
    [/\b(human|person|talk|call|phone|speak)\b/i, 'Easiest way is to call <a href="tel:' + TEL + '">' + DISP + '</a>, or pick "call me back" and I will put you in the queue with a time window.'],
    [/\b(who are you|about (you|the company|painter hotline)|company|us)\b/i, 'Painter Hotline is a Colorado painting company covering the Front Range from one number, 20+ years of experience, fully insured, 5-year workmanship warranty. More on the <a href="/who-we-are/">about page</a>.']
  ];

  function lookup(t) { for (var i = 0; i < KB.length; i++) if (KB[i][0].test(t)) return KB[i][1]; return null; }

  function typed() {
    var inp = document.getElementById('flIn'), t = inp.value.trim();
    if (!t) return;
    inp.value = ''; say(t, 'me'); log.push('Visitor: ' + t);
    if (capture) { var fn = capture; capture = null; fn(t); return; }
    var a = lookup(t);
    say(a || 'I would rather get you a real answer than guess at that one. The fastest path is a quick quote, or call <a href="tel:' + TEL + '">' + DISP + '</a> and ask a painter directly.');
    menu();
  }
  function menu() {
    opts([{ label: 'Run a quick quote', hot: true, fn: startQuote },
          { label: 'Have someone call me', fn: startCallback },
          { label: 'Another question', fn: function () { say('Go ahead, type it below.'); } }]);
  }

  function greet() {
    started = true;
    say('Hey! I am <strong>Flat</strong>, the four-inch brush around here. I can do three things well: run a <strong>quick quote</strong> in about ninety seconds, get a painter to <strong>call you back</strong> in a window you pick, or just answer what you actually want to know before anybody talks price. Where do you want to start?');
    opts([{ label: 'Quick quote', hot: true, fn: startQuote },
          { label: 'Call me back', fn: startCallback },
          { label: 'What makes you different?', fn: whyUs },
          { label: 'I have a question first', fn: function () { say('Ask away. Cost, timing, prep, warranty, towns we cover, anything.'); } }]);
  }

  /* ---------- value building ---------- */
  function whyUs() {
    log.push('Visitor asked why Painter Hotline');
    say('Short version, and none of it is hard to verify.');
    setTimeout(function () {
      say('<strong>Specialized crews.</strong> Exterior, interior, cabinets and commercial are different skills. You get the crew that does your kind of work every day, not whoever was free.');
    }, 350);
    setTimeout(function () {
      say('<strong>20+ years in Colorado.</strong> Which mostly means we know what fails here: south walls chalking, sprinklers soaking the bottom courses, caulk joints opening over the freeze-thaw season.');
    }, 900);
    setTimeout(function () {
      say('<strong>A dedicated project manager</strong> so one person owns your project, <strong>full insurance</strong> with the certificate in your file, and a <strong>5-year workmanship warranty</strong> in writing.');
      opts([
        { label: 'What does doing it twice cost?', fn: twiceCost },
        { label: 'Run a quick quote', hot: true, fn: startQuote },
        { label: 'Have someone call me', fn: startCallback }
      ]);
    }, 1500);
  }
  function twiceCost() {
    say('Here is the math nobody enjoys. A cheap repaint that skips washing, scraping and priming usually looks fine through the first season. By the second or third Colorado winter the trim is peeling and the south wall is chalking.');
    setTimeout(function () {
      say('Now the next painter has to <strong>remove</strong> the failed coating before they can start, which is work nobody paid for the first time. So you pay for the cheap job, the removal, and then the job done correctly. That is why our preparation is itemized in writing instead of hidden in a lump sum.');
      opts([
        { label: 'Makes sense, price my project', hot: true, fn: startQuote },
        { label: 'What is in your prep?', fn: function () { say(lookup('prep') || ''); menu(); } },
        { label: 'Have someone call me', fn: startCallback }
      ]);
    }, 900);
  }

  /* ---------- quick quote ---------- */
  var Q = {};
  function startQuote() {
    Q = {}; answers = {}; prog(.1);
    say('Quick quote it is. <strong>What are we painting?</strong>');
    opts([
      { label: 'Home exterior', fn: function () { Q.t = 'ext'; answers.project = 'Exterior house painting'; qExtSize(); } },
      { label: 'Interior rooms', fn: function () { Q.t = 'int'; answers.project = 'Interior painting'; qIntSize(); } },
      { label: 'Kitchen cabinets', fn: function () { Q.t = 'cab'; answers.project = 'Cabinet painting'; qCab(); } },
      { label: 'Deck or fence', fn: function () { Q.t = 'deck'; answers.project = 'Deck or fence staining'; qDeck(); } },
      { label: 'Commercial property', fn: function () { Q.t = 'com'; answers.project = 'Commercial property'; qCommercial(); } }
    ]);
  }
  function qExtSize() {
    prog(.25); say('<strong>What size is the building?</strong>');
    opts([
      { label: 'Single story', fn: function () { Q.sq = 1600; Q.h = 1; answers.size = 'Single story'; qExtCond(); } },
      { label: 'Two story', fn: function () { Q.sq = 2600; Q.h = 1.12; answers.size = 'Two story'; qExtCond(); } },
      { label: 'Large or walkout', fn: function () { Q.sq = 3400; Q.h = 1.2; answers.size = 'Large or walkout'; qExtCond(); } },
      { label: 'Townhome or condo', fn: function () { Q.sq = 1100; Q.h = 1.05; answers.size = 'Townhome or condo'; qExtCond(); } }
    ]);
  }
  function qExtCond() {
    prog(.45); say('<strong>How is the existing paint holding up?</strong> Rub a sunny wall and look at the trim.');
    opts([
      { label: 'Faded but sound', fn: function () { Q.c = 1; answers.condition = 'Faded but sound'; qZone(); } },
      { label: 'Chalky, caulk cracking', fn: function () { Q.c = 1.14; answers.condition = 'Chalky with cracked caulk'; qZone(); } },
      { label: 'Peeling in spots', fn: function () { Q.c = 1.3; Q.visit = true; answers.condition = 'Peeling in spots'; qZone(); } },
      { label: 'Peeling badly, bare wood', fn: function () { Q.c = 1.45; Q.visit = true; answers.condition = 'Peeling badly with bare wood'; qZone(); } }
    ]);
  }
  function qIntSize() {
    prog(.25); say('<strong>How much space?</strong>');
    opts([
      { label: '1 room', fn: function () { Q.sq = 350; answers.size = '1 room'; qIntScope(); } },
      { label: '2-3 rooms', fn: function () { Q.sq = 850; answers.size = '2-3 rooms'; qIntScope(); } },
      { label: '4-6 rooms', fn: function () { Q.sq = 1600; answers.size = '4-6 rooms'; qIntScope(); } },
      { label: 'Whole house', fn: function () { Q.sq = 2400; answers.size = 'Whole house'; qIntScope(); } }
    ]);
  }
  function qIntScope() {
    prog(.45); say('<strong>Walls only, or trim and ceilings too?</strong>');
    opts([
      { label: 'Walls only', fn: function () { Q.c = 1; answers.scope = 'Walls only'; qZone(); } },
      { label: 'Walls and trim', fn: function () { Q.c = 1.14; answers.scope = 'Walls and trim'; qZone(); } },
      { label: 'Walls, trim and ceilings', fn: function () { Q.c = 1.3; answers.scope = 'Walls, trim and ceilings'; qZone(); } },
      { label: 'Repairs needed first', fn: function () { Q.c = 1.35; Q.visit = true; answers.scope = 'Repairs needed before painting'; qZone(); } }
    ]);
  }
  function qCab() {
    prog(.3); say('<strong>Roughly how many cabinet doors and drawer fronts?</strong>');
    opts([
      { label: '10-18', fn: function () { Q.d = 15; answers.size = '10-18 pieces'; qCabFinish(); } },
      { label: '20-35', fn: function () { Q.d = 28; answers.size = '20-35 pieces'; qCabFinish(); } },
      { label: '36-50', fn: function () { Q.d = 43; answers.size = '36-50 pieces'; qCabFinish(); } },
      { label: 'More than 50', fn: function () { Q.d = 60; answers.size = 'More than 50 pieces'; qCabFinish(); } }
    ]);
  }
  function qCabFinish() {
    prog(.5); say('<strong>What is on them now?</strong>');
    opts([
      { label: 'Stained wood', fn: function () { Q.c = 1.05; answers.condition = 'Stained wood'; qZone(); } },
      { label: 'Factory painted, good', fn: function () { Q.c = 1; answers.condition = 'Factory painted, good shape'; qZone(); } },
      { label: 'Painted and chipping', fn: function () { Q.c = 1.25; Q.visit = true; answers.condition = 'Previously painted, chipping'; qZone(); } },
      { label: 'Laminate or thermofoil', fn: function () { Q.c = 1.18; Q.visit = true; answers.condition = 'Laminate or thermofoil'; qZone(); } }
    ]);
  }
  function qDeck() {
    prog(.3); say('<strong>What are we sealing?</strong>');
    opts([
      { label: 'Small deck', fn: function () { Q.sq = 260; answers.size = 'Small deck'; qDeckCond(); } },
      { label: 'Medium deck', fn: function () { Q.sq = 450; answers.size = 'Medium deck'; qDeckCond(); } },
      { label: 'Large deck with rails', fn: function () { Q.sq = 700; answers.size = 'Large deck with railings'; qDeckCond(); } },
      { label: 'Fence, or deck and fence', fn: function () { Q.sq = 850; answers.size = 'Fence, or deck and fence'; qDeckCond(); } }
    ]);
  }
  function qDeckCond() {
    prog(.5); say('<strong>What shape is the wood in?</strong>');
    opts([
      { label: 'Maintained', fn: function () { Q.c = 1; answers.condition = 'Maintained'; qZone(); } },
      { label: 'Gray and weathered', fn: function () { Q.c = 1.18; answers.condition = 'Gray and weathered'; qZone(); } },
      { label: 'Old stain peeling', fn: function () { Q.c = 1.4; Q.visit = true; answers.condition = 'Old stain peeling, stripping needed'; qZone(); } },
      { label: 'Boards may need replacing', fn: function () { Q.c = 1.32; Q.visit = true; answers.condition = 'Possible board replacement'; qZone(); } }
    ]);
  }
  function qCommercial() {
    answers.project = 'Commercial property'; Q.visit = true;
    prog(.5); say('Commercial work always starts with a walkthrough so the scope, access and phasing are right before anyone quotes a number. <strong>What kind of property?</strong>');
    opts([
      { label: 'Office or suite', fn: function () { answers.size = 'Office or suite'; qZone(); } },
      { label: 'Retail or restaurant', fn: function () { answers.size = 'Retail or restaurant'; qZone(); } },
      { label: 'Warehouse or industrial', fn: function () { answers.size = 'Warehouse or industrial'; qZone(); } },
      { label: 'HOA or multi-unit', fn: function () { answers.size = 'HOA or multi-unit'; qZone(); } }
    ]);
  }
  function qZone() {
    prog(.68); say('<strong>Where is the property?</strong> Region affects scheduling and sometimes product choice.');
    opts([
      { label: 'Denver metro', fn: function () { Q.z = 1; answers.region = 'Denver metro'; qWhen(); } },
      { label: 'North or Boulder County', fn: function () { Q.z = 1.02; answers.region = 'North / Boulder County'; qWhen(); } },
      { label: 'Eastern plains', fn: function () { Q.z = 1.04; answers.region = 'Eastern plains'; qWhen(); } },
      { label: 'Foothills or mountains', fn: function () { Q.z = 1.12; answers.region = 'Foothills or mountain town'; qWhen(); } }
    ]);
  }
  function qWhen() {
    prog(.82); say('<strong>How soon do you want it done?</strong>');
    opts([
      { label: 'This week if possible', fn: function () { answers.timeline = 'This week if possible'; result(); } },
      { label: 'Within a month', fn: function () { answers.timeline = 'Within a month'; result(); } },
      { label: '1 to 3 months', fn: function () { answers.timeline = '1 to 3 months'; result(); } },
      { label: 'Pricing and planning', fn: function () { answers.timeline = 'Pricing and planning'; result(); } }
    ]);
  }
  function ticket() {
    var n = Math.floor(Math.random() * 9000) + 1000;
    return 'PH-' + (new Date().getMonth() + 1) + (new Date().getDate()) + '-' + n;
  }
  function result() {
    prog(.9);
    var c = Q.c || 1, z = Q.z || 1, lo, hi;
    if (Q.t === 'ext') { lo = Q.sq * 1.55 * (Q.h || 1); hi = Q.sq * 4.10 * (Q.h || 1); }
    else if (Q.t === 'int') { lo = Q.sq * 1.50; hi = Q.sq * 3.50; }
    else if (Q.t === 'cab') { lo = 1800 + (Q.d - 20) * 62; hi = 3600 + (Q.d - 20) * 126; }
    else if (Q.t === 'deck') { lo = Q.sq * 2.10; hi = Q.sq * 4.60; }
    else { lo = 0; hi = 0; }
    Q.ticket = ticket();
    answers.ticket = Q.ticket;
    if (lo) {
      lo = Math.round(lo * c * z / 50) * 50; hi = Math.round(hi * c * z / 50) * 50;
      var lod = Math.round(lo * .75 / 50) * 50, hid = Math.round(hi * .75 / 50) * 50;
      answers.ballpark = '$' + lo.toLocaleString() + ' - $' + hi.toLocaleString();
      answers.ballpark_after_discount = '$' + lod.toLocaleString() + ' - $' + hid.toLocaleString();
      say('<div class="fl-ticket"><b>$' + lo.toLocaleString() + ' - $' + hi.toLocaleString() + '</b>' +
        '<span class="ln"><span>Project</span><span>' + (answers.project || '') + '</span></span>' +
        '<span class="ln"><span>Scope</span><span>' + (answers.size || answers.scope || '') + '</span></span>' +
        '<span class="ln"><span>Region</span><span>' + (answers.region || '') + '</span></span>' +
        '<span class="ln"><span>Ticket</span><span>' + Q.ticket + '</span></span>' +
        '<small>Published 2026 Front Range range for this scope. With 25% off labor on projects booked by October 31, 2026, most of this scope lands around <strong>$' + lod.toLocaleString() + ' - $' + hid.toLocaleString() + '</strong>. Paint and materials are not included in the discount.</small></div>');
    } else {
      say('<div class="fl-ticket"><b>Walkthrough first</b><span class="ln"><span>Project</span><span>' + (answers.project || '') + '</span></span><span class="ln"><span>Ticket</span><span>' + Q.ticket + '</span></span><small>Commercial scopes get measured on site so the bid is line-item accurate rather than a guess.</small></div>');
    }
    if (Q.visit) {
      say('Heads up: what you described is worth <strong>seeing in person</strong>. Peeling, water damage, failing finishes and commercial access all change the prep plan, and the visit is free either way.');
      answers.recommendation = 'Site visit recommended';
    } else {
      answers.recommendation = 'Photo quote suitable';
    }
    setTimeout(function () {
      say('One honest question before I take your details: if a written proposal comes back at that number, with the preparation spelled out and your dates confirmed, is that something you would be ready to move forward on?');
      opts([
        { label: 'Yes, if the details are right', hot: true, fn: function () { answers.intent = 'Ready to move forward if details fit'; collect('quote'); } },
        { label: 'Maybe, I want to compare', fn: function () { answers.intent = 'Comparing options'; say('Smart. When you compare, look at four lines: the preparation, the exact product and sheen, the number of coats, and the warranty. A lower number is almost always one of those four being smaller. Let me get you the written version so you have something real to compare.'); collect('quote'); } },
        { label: 'Just gathering information', fn: function () { answers.intent = 'Information gathering'; say('No pressure at all. I will still get you the written scope so you have a real benchmark whenever you are ready.'); collect('quote'); } }
      ]);
    }, 700);
  }

  function startCallback() {
    answers = {}; log.push('Visitor chose callback'); prog(.5);
    say('Easy. Pick a window and a painter will call you back at that time.');
    opts([
      { label: 'Next hour or two', fn: function () { answers.callback_window = 'Next hour or two'; collect('callback'); } },
      { label: 'This afternoon', fn: function () { answers.callback_window = 'This afternoon'; collect('callback'); } },
      { label: 'Tomorrow morning', fn: function () { answers.callback_window = 'Tomorrow morning'; collect('callback'); } },
      { label: 'Any time, just call', fn: function () { answers.callback_window = 'Any time'; collect('callback'); } }
    ]);
  }

  function collect(kind) {
    prog(.95);
    say(kind === 'callback' ? 'Who am I putting on the board?' : 'Last step. Where should the written quote go, and can you add photos?');
    var f = form(
      '<label for="flNm">Your name</label><input id="flNm" autocomplete="name">' +
      '<div class="duo"><div><label for="flPh">Phone</label><input id="flPh" type="tel" inputmode="tel" autocomplete="tel"></div>' +
      '<div><label for="flZp">ZIP code</label><input id="flZp" inputmode="numeric" autocomplete="postal-code" maxlength="10"></div></div>' +
      '<label for="flEm">Email</label><input id="flEm" type="email" autocomplete="email">' +
      (kind === 'callback' ? '<label for="flWhat">What is the project?</label><input id="flWhat" placeholder="Exterior repaint, cabinets, deck...">' :
        '<label for="flPhotos">Photos (up to 4)</label><input id="flPhotos" type="file" accept="image/*" multiple>') +
      '<label for="flMs">Anything else?</label><textarea id="flMs" rows="2"></textarea>' +
      '<button class="go" type="button" id="flGo">' + (kind === 'callback' ? 'Put me on the callback list' : 'Send it to us') + '</button>' +
      '<p class="fl-note">Used only to prepare your quote. Prefer to talk now? Call <a href="tel:' + TEL + '">' + DISP + '</a>.</p>');
    f.querySelector('#flGo').addEventListener('click', function () { send(kind, f, this); });
  }

  function send(kind, f, btn) {
    var nm = f.querySelector('#flNm').value.trim(), ph = f.querySelector('#flPh').value.trim();
    if (!nm || ph.replace(/\D/g, '').length < 10) { say('I need a name and a 10-digit number so someone can actually reach you.'); return; }
    btn.disabled = true; btn.textContent = 'Sending...';
    var fd = new FormData();
    fd.append('source_site', 'bouldercopainters.com Flat ' + (kind === 'callback' ? 'callback request' : 'quick quote'));
    fd.append('user_name', nm); fd.append('user_phone', ph);
    fd.append('user_email', f.querySelector('#flEm').value.trim());
    fd.append('user_zip', f.querySelector('#flZp').value.trim());
    if (f.querySelector('#flWhat')) fd.append('project_type', f.querySelector('#flWhat').value.trim());
    fd.append('user_message', f.querySelector('#flMs').value.trim());
    fd.append('request_type', kind === 'callback' ? 'Callback requested' : 'Quick quote');
    Object.keys(answers).forEach(function (k) { fd.append(k, answers[k]); });
    fd.append('chat_transcript', log.join('\n') || 'Hotline intake only');
    var fin = f.querySelector('#flPhotos');
    var pics = (window.BCP && BCP.photos) ? BCP.photos(fin) : Promise.resolve([]);
    pics.then(function (list) {
      list.forEach(function (p, i) { fd.append('photo_' + (i + 1), p); });
      return (window.BCP && BCP.send) ? BCP.send(fd, 'HOTLINE ' + (kind === 'callback' ? 'CALLBACK' : 'RAPID QUOTE') + ': Painter Hotline') : Promise.resolve('fail');
    }).then(function (state) {
      prog(1);
      if (state === 'ok') {
        f.remove();
        say('You are on the board, ' + nm.split(' ')[0] + '.' + (answers.ticket ? ' Ticket <strong>' + answers.ticket + '</strong>.' : '') + ' A painter will call to confirm the details. Need us sooner, call <a href="tel:' + TEL + '">' + DISP + '</a>.');
        opts([{ label: 'Thanks, Flat', fn: closePanel }]);
      } else if (state === 'blocked' || state === 'fast') {
        btn.disabled = false; btn.textContent = 'Send it to us';
        say('Give that one more second, then send it again.');
      } else {
        btn.disabled = false; btn.textContent = 'Try again';
        say('I could not confirm that went through. Please call <a href="tel:' + TEL + '">' + DISP + '</a> so it does not get lost.');
      }
    });
  }

  var hid = false;
  try { hid = sessionStorage.getItem('flTipX') === '1'; } catch (e) { }
  if (!hid) {
    setTimeout(function () {
      if (panel && !panel.hidden) return;
      var tip = el('<div class="fl-tip" role="status">I can price your Boulder project in about ninety seconds. Want to try?<button type="button" aria-label="Dismiss">&times;</button></div>');
      launch.insertBefore(tip, launch.firstChild);
      tip.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') { tip.remove(); try { sessionStorage.setItem('flTipX', '1'); } catch (x) { } }
        else openPanel();
      });
    }, 1400);
  }

  var s2 = document.createElement('style');
  s2.textContent = '.ringer b{white-space:nowrap}@media (max-width:760px){.ringer b{font-size:1.08rem!important;letter-spacing:-.02em}}@media (max-width:400px){.ringer b{font-size:1rem!important}}';
  document.head.appendChild(s2);
})();
