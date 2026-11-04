const categories = [
  { id: 'products', name: 'Products & Ads', mark: '01', subtitle: 'Make the object impossible to ignore.', commands: [['productphoto', 'Professional, studio-quality product photography.'], ['heroobject', 'A hero composition that makes the object feel iconic.'], ['macrodetail', 'An intimate macro view of its defining details.'], ['floating', 'The object suspended weightlessly in space.']] },
  { id: 'camera', name: 'Camera & Angles', mark: '02', subtitle: 'Find a fresh point of view.', commands: [['highangle', 'A composed view from an elevated camera position.'], ['lowangle', 'A low camera angle that gives the subject presence.'], ['dutchangle', 'A subtle camera tilt for a dynamic frame.'], ['overhead', 'A graphic bird’s-eye view with deliberate spacing.']] },
  { id: 'lenses', name: 'Lenses & Cinema', mark: '03', subtitle: 'Every frame has a focal length.', commands: [['anamorphic', 'Wide cinematic framing with gentle lens character.'], ['35mm', 'Natural perspective with an intimate, documentary feel.'], ['85mmportrait', 'Flattering compression and soft background separation.'], ['shallowdof', 'A narrow focus plane with a beautifully soft falloff.']] },
  { id: 'lighting', name: 'Lighting', mark: '04', subtitle: 'Set the light. Set the feeling.', commands: [['softbox', 'Smooth, controlled light from a studio softbox.'], ['goldenhour', 'Low golden sunlight with long, warm shadows.'], ['rimlight', 'A fine edge of light separating subject from background.'], ['chiaroscuro', 'Sculptural contrast between deep shadow and light.']] },
  { id: 'backgrounds', name: 'Places & Backdrops', mark: '05', subtitle: 'Build a world around your idea.', commands: [['darkstudio', 'An atmospheric dark studio with a luxurious feel.'], ['seamless', 'A continuous, unobtrusive studio backdrop.'], ['concrete', 'Quiet architectural concrete with tactile character.'], ['desert', 'Cinematic sand, dust, and powerful desert sunlight.']] },
  { id: 'styles', name: 'Visual Styles', mark: '06', subtitle: 'Give the vision a signature.', commands: [['editorial', 'Polished contemporary magazine editorial.'], ['filmstill', 'A considered frame from an independent film.'], ['analogfilm', 'Organic analog film grain and gentle color drift.'], ['minimalism', 'Stripped-back visual language with room to breathe.']] },
  { id: 'colors', name: 'Color & Palette', mark: '07', subtitle: 'A palette changes the whole story.', commands: [['monochrome', 'A tonal black-and-white palette with rich midtones.'], ['pastels', 'A restrained palette of softened, chalky pastels.'], ['tealorange', 'Cinematic teal shadows and warm amber highlights.'], ['earthtones', 'Grounded clay, moss, stone, and natural pigments.']] },
  { id: 'composition', name: 'Composition', mark: '08', subtitle: 'Bring intention to every edge.', commands: [['ruleofthirds', 'A balanced composition following the rule of thirds.'], ['negative', 'Generous negative space around a clear focal point.'], ['symmetry', 'Deliberate symmetry with a strong central axis.'], ['leadinglines', 'Architectural lines lead the eye toward the subject.']] },
  { id: 'portrait', name: 'Portrait', mark: '09', subtitle: 'Capture character, not just a face.', commands: [['candid', 'A relaxed, unguarded moment with natural expression.'], ['beauty', 'Refined beauty lighting with luminous skin detail.'], ['environmental', 'A character portrait in a meaningful place.'], ['silhouette', 'A graphic silhouette with a luminous edge.']] },
  { id: 'textures', name: 'Materials & Texture', mark: '10', subtitle: 'Let the surface tell its own story.', commands: [['brushedmetal', 'Fine brushed metal with nuanced reflections.'], ['velvet', 'Deep velvet pile that absorbs and catches the light.'], ['glass', 'Clear glass with crisp refraction and tiny highlights.'], ['papergrain', 'Subtle paper grain and tactile printed character.']] },
  { id: 'motion', name: 'Motion & Atmosphere', mark: '11', subtitle: 'Let the image move beyond the frame.', commands: [['motionblur', 'Directional motion blur around a sharply held subject.'], ['mist', 'A thin atmospheric haze softening the distance.'], ['wind', 'A passing gust gives fabric and hair natural movement.'], ['raindrops', 'Fine rain catches the light across the foreground.']] },
  { id: 'special', name: 'Unexpected Details', mark: '12', subtitle: 'One surprising thing changes everything.', commands: [['doubleexposure', 'A poetic double exposure blending two scenes.'], ['surreal', 'One impossible detail rendered with quiet realism.'], ['prismatic', 'A small prismatic flare refracts across the frame.'], ['fracturelight', 'A sharp ray of refracted light breaks across the image.']] },
];

const categoryList = document.querySelector('#category-list');
const commandGroups = document.querySelector('#command-groups');
const searchInput = document.querySelector('#search');
const selectedCommands = new Set();
const flowOnlyCommands = new Set(['motionblur', 'mist', 'wind', 'raindrops']);
const commandImages = {
  productphoto: '1523275335684-37898b6baf30',
  heroobject: '1542291026-7eec264c27ff',
  macrodetail: '1513364776144-60967b0f800f',
  floating: '1503602642458-232111445657',
  highangle: '1517248135467-4c7edcad34c4',
  lowangle: '1487958449943-2429e8be8625',
  dutchangle: '1511818966892-d7d671e672a2',
  overhead: '1495474472287-4d71bcdd2085',
  anamorphic: '1485846234645-a62644f84728',
  '35mm': '1516035069371-29a1b244cc32',
  '85mmportrait': '1524504388940-b1c1722653e1',
  shallowdof: '1490750967868-88aa4486c946',
  softbox: '1507473885765-e6ed057f782c',
  goldenhour: '1470252649378-9c29740c9fa8',
  rimlight: '1509114397022-ed747cca3f65',
  chiaroscuro: '1500648767791-00dcc994a43e',
  darkstudio: '1497366811353-6870744d04b2',
  seamless: '1600210492486-724fe5c67fb0',
  concrete: '1511818966892-d7d671e672a2',
  desert: '1509316785289-025f5b846b35',
  editorial: '1483985988355-763728e1935b',
  filmstill: '1517604931442-7e0c8ed2963c',
  analogfilm: '1519608487953-e999c86e7455',
  minimalism: '1497366754035-f200968a6e72',
  monochrome: '1490481651871-ab68de25d43d',
  pastels: '1490750967868-88aa4486c946',
  tealorange: '1510812431401-41d2bd2722f3',
  earthtones: '1500534314209-a25ddb2bd429',
  ruleofthirds: '1487958449943-2429e8be8625',
  negative: '1497366216548-37526070297c',
  symmetry: '1517248135467-4c7edcad34c4',
  leadinglines: '1511818966892-d7d671e672a2',
  candid: '1500648767791-00dcc994a43e',
  beauty: '1534528741775-53994a69daeb',
  environmental: '1517841905240-472988babdf9',
  silhouette: '1519681393784-d120267933ba',
  brushedmetal: '1523275335684-37898b6baf30',
  velvet: '1503342217505-b0a15ec3261c',
  glass: '1513519245088-0e12902e5a38',
  papergrain: '1455390582262-044cdead277a',
  motionblur: '1503376780353-7e6692767b70',
  mist: '1448375240586-882707db888b',
  wind: '1515886657613-9f3515b0c78f',
  raindrops: '1500375592092-40eb2168fd21',
  doubleexposure: '1524504388940-b1c1722653e1',
  surreal: '1500530855697-b586d89ba3ee',
  prismatic: '1518837695005-2083093ee35b',
  fracturelight: '1494438639946-1ebd1d20bf85',
};
const uiIcons = {
  search: '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg>',
  add: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>',
  check: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"></path></svg>',
  arrow: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"></path></svg>',
  sparkle: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z"></path></svg>',
};
let activeCategory = 'all';
let activePlatform = 'all';
let chatHistory = [];
let busy = false;

function setBookingType(type) {
  const appointment = type === 'appointment';
  document.querySelectorAll('[data-booking-option]').forEach((option) => {
    const active = option.dataset.bookingOption === type;
    option.classList.toggle('active', active);
    option.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#appointment-fields').hidden = !appointment;
  document.querySelector('#project-fields').hidden = appointment;
  document.querySelector('#appointment-date').required = appointment;
  document.querySelector('#appointment-time').required = appointment;
  document.querySelector('#project-type').required = !appointment;
  document.querySelector('#project-brief').required = !appointment;
  const notice = document.querySelector('#booking-notice');
  notice.textContent = appointment
    ? 'Appointment requests are a preview and are not connected to a studio inbox yet.'
    : 'Project requests are a preview and are not connected to a studio inbox yet.';
}

function renderPage() {
  const hash = window.location.hash;
  const page = hash === '#ai' ? 'ai' : hash.startsWith('#booking') ? 'booking' : 'work';
  document.querySelectorAll('.page-view').forEach((view) => {
    view.hidden = view.id !== `${page}-page`;
  });
  document.querySelectorAll('[data-page-link]').forEach((link) => {
    const active = link.dataset.pageLink === (page === 'ai' ? 'ai' : 'work');
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('.prompt-dock').hidden = page !== 'ai';
  document.querySelector('#assistant-fab').hidden = page !== 'ai' || document.querySelector('#assistant-panel').classList.contains('open');
  document.title = page === 'ai'
    ? 'Gran Loco AI | Prompt Studio'
    : page === 'booking'
      ? 'Book a Production | Gran Loco Studio'
      : 'Gran Loco Studio | Visual Production';

  if (page === 'booking') {
    setBookingType(hash === '#booking-appointment' ? 'appointment' : 'project');
  } else if (page !== 'ai') {
    toggleAssistant(false);
  }

  if (['#portfolio', '#services', '#about'].includes(hash)) {
    requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
  } else {
    window.scrollTo(0, 0);
  }
}

document.querySelectorAll('[data-booking-option]').forEach((option) => {
  option.addEventListener('click', () => {
    window.location.hash = `booking-${option.dataset.bookingOption}`;
  });
});

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const type = window.location.hash === '#booking-appointment' ? 'appointment' : 'project';
  document.querySelector('#booking-notice').textContent = `Preview only — your ${type} request has not been sent. Connect a studio inbox to receive booking requests.`;
});

const appointmentDate = document.querySelector('#appointment-date');
const today = new Date();
appointmentDate.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

window.addEventListener('hashchange', renderPage);

function platformsFor(commandName) {
  return flowOnlyCommands.has(commandName) ? ['flow'] : ['chatgpt', 'flow'];
}

function promptCatalog() {
  return categories.map((category) => ({
    name: category.name,
    commands: category.commands.map(([name, description]) => ({
      name,
      description,
      platforms: platformsFor(name),
    })),
  }));
}

function renderCategories() {
  const allCount = categories.reduce((sum, category) => sum + category.commands.length, 0);
  document.querySelector('#command-total').textContent = allCount;
  document.querySelector('#result-count').textContent = `${allCount} COMMANDS`;
  document.querySelector('#category-count').textContent = categories.length;
  categoryList.innerHTML = `<button class="category-button active" data-category="all"><span>All fields</span><span class="category-total">${allCount}</span></button>` + categories.map((category) => `<button class="category-button" data-category="${category.id}"><span>${category.name}</span><span class="category-total">${category.commands.length}</span></button>`).join('');
}

function renderCommands() {
  const query = searchInput.value.trim().toLowerCase();
  const filteredCategories = categories
    .filter((category) => activeCategory === 'all' || category.id === activeCategory)
    .map((category) => ({ ...category, commands: category.commands.filter(([name, description]) => {
      const platformMatches = activePlatform === 'all' || platformsFor(name).includes(activePlatform);
      return platformMatches && `${name} ${description}`.toLowerCase().includes(query);
    }) }))
    .filter((category) => category.commands.length);
  const total = filteredCategories.reduce((sum, category) => sum + category.commands.length, 0);
  document.querySelector('#result-count').textContent = `${total} COMMAND${total === 1 ? '' : 'S'}`;
  document.querySelector('#library-title').innerHTML = query ? 'Search results <span>&amp; details.</span>' : activeCategory === 'all' ? 'Featured prompts <span>&amp; commands.</span>' : `${categories.find((category) => category.id === activeCategory)?.name} <span>&amp; commands.</span>`;
  const platformDescription = activePlatform === 'chatgpt' ? 'ChatGPT image prompts' : activePlatform === 'flow' ? 'Flow video prompts' : '';
  document.querySelector('#library-subtitle').textContent = query
    ? `${total} detail${total === 1 ? '' : 's'} for “${searchInput.value.trim()}”${platformDescription ? ` · ${platformDescription}` : ''}`
    : [categories.find((category) => category.id === activeCategory)?.subtitle, platformDescription].filter(Boolean).join(' · ') || 'Small creative decisions. A more intentional image.';
  document.querySelector('#empty-state').hidden = total !== 0;
  commandGroups.innerHTML = filteredCategories.map((category) => `<section class="command-group"><div class="group-heading"><h3><span>${category.mark}</span>${category.name}</h3><span>${String(category.commands.length).padStart(2, '0')} COMMANDS</span></div><div class="command-grid">${category.commands.map(([name, description]) => {
    const platforms = platformsFor(name);
    const labels = platforms.map((platform) => `<span class="command-platform-tag">${uiIcons.sparkle}${platform === 'chatgpt' ? 'ChatGPT' : 'Google Flow'}</span>`).join('');
    const imageUrl = `https://images.unsplash.com/photo-${commandImages[name]}?auto=format&fit=crop&w=720&h=430&q=70`;
    const selected = selectedCommands.has(name);
    const categoryIndex = `${category.mark} / ${String(category.commands.findIndex(([commandName]) => commandName === name) + 1).padStart(2, '0')}`;
    return `<button class="command-card${selected ? ' selected' : ''}" type="button" data-command="${name}" aria-pressed="${selected}" aria-label="${selected ? 'Remove' : 'Add'} ${name}: ${description}"><span class="command-card-media"><img class="command-image" src="${imageUrl}" alt="" aria-hidden="true" loading="lazy" decoding="async"><span class="command-platform-labels">${labels}</span><span class="command-card-select-icon">${selected ? uiIcons.check : uiIcons.add}</span><span class="command-card-index">${categoryIndex}</span></span><span class="command-card-body"><span class="command-name">${name}</span><span class="command-description">${description}</span></span><span class="command-card-footer"><span>${selected ? uiIcons.check + ' ADDED TO PROMPT' : uiIcons.add + ' ADD TO PROMPT'}</span>${uiIcons.arrow}</span></button>`;
  }).join('')}</div></section>`).join('');
}

function refreshPrompt() {
  const commands = [...selectedCommands];
  document.querySelector('#selected-count').textContent = `${commands.length} detail${commands.length === 1 ? '' : 's'} selected`;
  document.querySelector('#clear-prompt').disabled = !commands.length;
  document.querySelector('#copy-prompt').disabled = !commands.length && !document.querySelector('#prompt-output').value.trim();
  document.querySelector('#selected-commands').innerHTML = commands.length ? commands.map((command) => `<button class="selected-chip" type="button" data-remove="${command}" aria-label="Remove ${command}">${command}<span aria-hidden="true">×</span></button>`).join('') : '<span class="placeholder">Pick commands from the library to begin composing.</span>';
  const details = commands.map((command) => categories.flatMap((category) => category.commands).find(([name]) => name === command)?.[1]).filter(Boolean);
  const output = document.querySelector('#prompt-output');
  if (details.length && !output.dataset.edited) output.value = details.join(' ');
  if (!details.length && !output.dataset.edited) output.value = '';
}

categoryList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  categoryList.querySelectorAll('.category-button').forEach((item) => item.classList.toggle('active', item === button));
  renderCommands();
});

commandGroups.addEventListener('click', (event) => {
  const button = event.target.closest('[data-command]');
  if (!button) return;
  const command = button.dataset.command;
  if (selectedCommands.has(command)) selectedCommands.delete(command);
  else selectedCommands.add(command);
  renderCommands();
  refreshPrompt();
});

document.querySelector('#selected-commands').addEventListener('click', (event) => {
  const button = event.target.closest('[data-remove]');
  if (!button) return;
  selectedCommands.delete(button.dataset.remove);
  renderCommands();
  refreshPrompt();
});

searchInput.addEventListener('input', renderCommands);
document.querySelector('.platform-switch').addEventListener('click', (event) => {
  const button = event.target.closest('[data-platform]');
  if (!button) return;
  activePlatform = button.dataset.platform;
  document.querySelectorAll('.platform-option').forEach((option) => {
    const active = option === button;
    option.classList.toggle('active', active);
    option.setAttribute('aria-pressed', String(active));
  });
  renderCommands();
});
document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape') toggleAssistant(false);
});

const promptOutput = document.querySelector('#prompt-output');
promptOutput.addEventListener('input', () => {
  promptOutput.dataset.edited = 'true';
  document.querySelector('#copy-prompt').disabled = !promptOutput.value.trim();
});

document.querySelector('#clear-prompt').addEventListener('click', () => {
  selectedCommands.clear();
  promptOutput.value = '';
  delete promptOutput.dataset.edited;
  renderCommands();
  refreshPrompt();
});

let toastTimeout;
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 2200);
}

document.querySelector('#copy-prompt').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(promptOutput.value.trim());
    showToast('Prompt copied to clipboard');
  } catch {
    promptOutput.select();
    showToast('Select and copy your prompt');
  }
});

function toggleAssistant(open) {
  const panel = document.querySelector('#assistant-panel');
  const isOpen = typeof open === 'boolean' ? open : !panel.classList.contains('open');
  panel.classList.toggle('open', isOpen);
  panel.setAttribute('aria-hidden', String(!isOpen));
  document.querySelector('#assistant-toggle').setAttribute('aria-expanded', String(isOpen));
  document.querySelector('#assistant-fab').setAttribute('aria-expanded', String(isOpen));
  document.querySelector('#assistant-fab').hidden = isOpen || document.querySelector('#ai-page').hidden;
  if (isOpen) setTimeout(() => document.querySelector('#chat-input').focus(), 180);
}

document.querySelector('#assistant-toggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (window.location.hash !== '#ai') window.location.hash = 'ai';
  toggleAssistant(true);
});
document.querySelector('#assistant-fab').addEventListener('click', () => toggleAssistant());
document.querySelector('#assistant-close').addEventListener('click', () => toggleAssistant(false));
document.querySelector('#open-assistant').addEventListener('click', () => toggleAssistant(true));

function addMessage(text, role) {
  const messages = document.querySelector('#chat-messages');
  const message = document.createElement('div');
  message.className = `message ${role === 'user' ? 'user-message' : 'assistant-message'}`;
  const label = document.createElement('span');
  label.className = 'message-label';
  label.textContent = role === 'user' ? 'YOU' : 'STUDIO ASSISTANT';
  const content = document.createElement('div');
  content.className = 'message-content';
  content.textContent = text;
  message.append(label, content);
  messages.append(message);
  messages.scrollTop = messages.scrollHeight;
  return content;
}

document.querySelector('#suggestion-list').addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  document.querySelector('#chat-input').value = button.textContent;
  document.querySelector('#chat-input').focus();
});

document.querySelector('#chat-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = document.querySelector('#chat-input');
  const text = input.value.trim();
  if (!text || busy) return;
  document.querySelector('#suggestion-list').hidden = true;
  input.value = '';
  addMessage(text, 'user');
  chatHistory.push({ role: 'user', text });
  const pending = addMessage('Thinking through the frame…', 'assistant');
  pending.parentElement.classList.add('pending');
  busy = true;
  document.querySelector('#send-message').disabled = true;
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ messages: chatHistory, catalog: promptCatalog() }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'The assistant could not respond.');
    if (typeof result.html === 'string') pending.innerHTML = result.html;
    else pending.textContent = result.text;
    pending.parentElement.classList.remove('pending');
    chatHistory.push({ role: 'model', text: result.text });
  } catch (error) {
    pending.textContent = error.message.includes('Failed to fetch') ? 'The studio server is unavailable. Make sure it is running and try again.' : error.message;
    pending.parentElement.classList.remove('pending');
    pending.parentElement.classList.add('error-message');
    chatHistory.pop();
  } finally {
    busy = false;
    document.querySelector('#send-message').disabled = false;
    document.querySelector('#chat-messages').scrollTop = document.querySelector('#chat-messages').scrollHeight;
    input.focus();
  }
});

renderCategories();
renderCommands();
refreshPrompt();
renderPage();