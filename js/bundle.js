(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const osuIconNames = ['accessibility', 'alert', 'american-flag', 'anchor', 'apple', 'apple-slice', 'arrow-circle', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'backpack', 'bag', 'balloon', 'barbell', 'barley', 'barn', 'baseball', 'basketball', 'batteries', 'battery', 'battery-powered', 'beaker', 'beakers', 'bed', 'bee', 'beer', 'berry', 'berry-alt', 'bicycle', 'bike-lock', 'binocluars-alt', 'binoculars', 'bird', 'bird-sage-grouse', 'bitcoin', 'blocks', 'boat', 'book', 'books', 'books-alt', 'bovine', 'brain', 'bread', 'briefcase', 'broccolli', 'bus', 'butterfly', 'calendar', 'camera', 'cancer-ribbon', 'car', 'car-2', 'carrot', 'cassette-tape', 'cat', 'caterpillar', 'cattailplant', 'cell', 'chainsaw', 'cheese', 'cheese-alt', 'cherry', 'chicken', 'chip', 'clapboard', 'clarinet', 'clipboard', 'clipboard-alt', 'clock', 'cloud', 'cloud-download', 'coffee', 'community', 'compass', 'corn', 'couch', 'courthouse', 'covid-virus', 'crab', 'delivery-robot', 'desk-lamp', 'desktop', 'desktop-alt', 'diploma', 'diploma-roll', 'director', 'dirty-hands', 'dna', 'document', 'dog', 'dog-tags', 'dove', 'drink', 'drinking-water-cup', 'drone', 'drum', 'dump-truck', 'emergency-light', 'emotions', 'envelope', 'envelope-open', 'face-covering', 'faucet', 'fence', 'fish', 'flame', 'flatten-the-curve', 'flatware', 'floppy-disk', 'floppy-disk-alt', 'flower', 'folder', 'folder-medical', 'football', 'football-statue', 'fountain-pen', 'gas-pump', 'gear', 'glasses', 'glove', 'goat', 'golf', 'golfball', 'golfcart', 'grapes', 'graph', 'graphic-elements', 'group', 'guitar', 'hamburger-menu', 'hammer', 'hand', 'hand-circle', 'handclean', 'handshake', 'hanger', 'hat', 'headphone', 'heart', 'heart-symbol', 'heartbeat', 'horse', 'hourglass', 'house', 'icon-calculator', 'illustrations', 'image', 'info', 'joystick', 'key', 'knowledge', 'lab-coat', 'lab-goggle', 'laptop', 'leaf', 'leaf-alt', 'lightbulb', 'lightning', 'link', 'llama', 'lock', 'magnifying-glass', 'mammoth', 'map-marker', 'marijuana-leaf', 'maze', 'medal', 'megaphone', 'megaphone-alt', 'microphone', 'microscope', 'mirror', 'molecule', 'money', 'moon', 'mortar-board', 'mortar-pestle', 'motorcycle', 'mountains', 'mouse', 'mouse-cursor', 'mouse-pointer', 'mouth', 'mu', 'music-notes', 'n95-mask', 'nation', 'nation-alt', 'neighborhood', 'newspaper', 'no-smoking', 'octopus', 'octopus-alt', 'oregon', 'osu-logo', 'pacifier', 'paint-can', 'palette', 'paper-clip', 'parking-meter', 'parking-permit', 'parking-ticket', 'pawn', 'peace-hand', 'peace-symbol', 'pear', 'pencil', 'phone', 'piano', 'pie', 'pig', 'piggy-bank', 'pill-bottle', 'pillar', 'pine-tree', 'pizza', 'play', 'plus', 'printer', 'projector-screen', 'pyramid', 'questionmark', 'quill', 'raccoon', 'radiation', 'rain', 'rattle', 'record-player', 'recycle', 'report', 'resident-R', 'ribbon', 'river', 'robot', 'robot-1', 'robot-2', 'robot-dog', 'robot-hand', 'robotic-arm', 'rocket', 'rollerskates', 'ryegrass', 'sage', 'salamander', 'satellite', 'saturn', 'scales', 'scantron', 'scooter', 'seedling', 'semi-truck', 'server', 'sharing', 'sheep', 'shield', 'shoe', 'shovel', 'sign-post', 'simulation', 'skateboard', 'skeleton-key', 'ski', 'skull', 'slippers', 'smartphone', 'smartphone-alt', 'snowflake', 'soap-dispenser', 'social-distancing', 'social-justice-fist', 'solar-panel', 'space', 'spatula', 'star', 'stethoscope', 'stopwatch', 'sun', 'syringe', 'tablet', 'tablet-alt', 'tea', 'tent', 'thermometer', 'tic-tac-toe', 'tissue', 'toilet-paper', 'tomato', 'tools', 'tools-alt', 'tractor', 'tree-alt', 'trophy', 'truck', 'turbine', 'turkey', 'type-image', 'type-settings', 'user', 'video-player', 'videocamera', 'videotape', 'visitor-badge', 'vr', 'vr-headset', 'wash-hands', 'water', 'water-bottle', 'water-bottle-plastic', 'wave', 'waves', 'whale', 'wheelchair', 'whistle', 'wine', 'world', 'world-asia', 'wrench', 'zoom_meeting'];
const faIconNames = ['ad', 'address-book', 'address-card', 'adjust', 'air-freshener', 'align-center', 'align-justify', 'align-left', 'align-right', 'allergies', 'ambulance', 'american-sign-language-interpreting', 'anchor', 'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'angry', 'ankh', 'apple-alt', 'archive', 'archway', 'arrow-alt-circle-down', 'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-right', 'arrow-circle-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'arrows-alt-h', 'arrows-alt-v', 'assistive-listening-systems', 'asterisk', 'at', 'atlas', 'atom', 'audio-description', 'award', 'baby', 'baby-carriage', 'backspace', 'backward', 'bacon', 'bacteria', 'bacterium', 'bahai', 'balance-scale', 'balance-scale-left', 'balance-scale-right', 'ban', 'band-aid', 'barcode', 'bars', 'baseball-ball', 'basketball-ball', 'bath', 'battery-empty', 'battery-full', 'battery-half', 'battery-quarter', 'battery-three-quarters', 'bed', 'beer', 'bell', 'bell-slash', 'bezier-curve', 'bible', 'bicycle', 'biking', 'binoculars', 'biohazard', 'birthday-cake', 'blender', 'blender-phone', 'blind', 'blog', 'bold', 'bolt', 'bomb', 'bone', 'bong', 'book', 'book-dead', 'book-medical', 'book-open', 'book-reader', 'bookmark', 'border-all', 'border-none', 'border-style', 'bowling-ball', 'box', 'box-open', 'box-tissue', 'boxes', 'braille', 'brain', 'bread-slice', 'briefcase', 'briefcase-medical', 'broadcast-tower', 'broom', 'brush', 'bug', 'building', 'bullhorn', 'bullseye', 'burn', 'bus', 'bus-alt', 'business-time', 'calculator', 'calendar', 'calendar-alt', 'calendar-check', 'calendar-day', 'calendar-minus', 'calendar-plus', 'calendar-times', 'calendar-week', 'camera', 'camera-retro', 'campground', 'candy-cane', 'cannabis', 'capsules', 'car', 'car-alt', 'car-battery', 'car-crash', 'car-side', 'caravan', 'caret-down', 'caret-left', 'caret-right', 'caret-square-down', 'caret-square-left', 'caret-square-right', 'caret-square-up', 'caret-up', 'carrot', 'cart-arrow-down', 'cart-plus', 'cash-register', 'cat', 'certificate', 'chair', 'chalkboard', 'chalkboard-teacher', 'charging-station', 'chart-area', 'chart-bar', 'chart-line', 'chart-pie', 'check', 'check-circle', 'check-double', 'check-square', 'cheese', 'chess', 'chess-bishop', 'chess-board', 'chess-king', 'chess-knight', 'chess-pawn', 'chess-queen', 'chess-rook', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-right', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'child', 'church', 'circle', 'circle-notch', 'city', 'clinic-medical', 'clipboard', 'clipboard-check', 'clipboard-list', 'clock', 'clone', 'closed-captioning', 'cloud', 'cloud-download-alt', 'cloud-meatball', 'cloud-moon', 'cloud-moon-rain', 'cloud-rain', 'cloud-showers-heavy', 'cloud-sun', 'cloud-sun-rain', 'cloud-upload-alt', 'cocktail', 'code', 'code-branch', 'coffee', 'cog', 'cogs', 'coins', 'columns', 'comment', 'comment-alt', 'comment-dollar', 'comment-dots', 'comment-medical', 'comment-slash', 'comments', 'comments-dollar', 'compact-disc', 'compass', 'compress', 'compress-alt', 'compress-arrows-alt', 'concierge-bell', 'cookie', 'cookie-bite', 'copy', 'copyright', 'couch', 'credit-card', 'crop', 'crop-alt', 'cross', 'crosshairs', 'crow', 'crown', 'crutch', 'cube', 'cubes', 'cut', 'database', 'deaf', 'democrat', 'desktop', 'dharmachakra', 'diagnoses', 'dice', 'dice-d20', 'dice-d6', 'dice-five', 'dice-four', 'dice-one', 'dice-six', 'dice-three', 'dice-two', 'digital-tachograph', 'directions', 'disease', 'divide', 'dizzy', 'dna', 'dog', 'dollar-sign', 'dolly', 'dolly-flatbed', 'donate', 'door-closed', 'door-open', 'dot-circle', 'dove', 'download', 'drafting-compass', 'dragon', 'draw-polygon', 'drum', 'drum-steelpan', 'drumstick-bite', 'dumbbell', 'dumpster', 'dumpster-fire', 'dungeon', 'edit', 'egg', 'eject', 'ellipsis-h', 'ellipsis-v', 'envelope', 'envelope-open', 'envelope-open-text', 'envelope-square', 'equals', 'eraser', 'ethernet', 'euro-sign', 'exchange-alt', 'exclamation', 'exclamation-circle', 'exclamation-triangle', 'expand', 'expand-alt', 'expand-arrows-alt', 'external-link-alt', 'external-link-square-alt', 'eye', 'eye-dropper', 'eye-slash', 'fan', 'fast-backward', 'fast-forward', 'faucet', 'fax', 'feather', 'feather-alt', 'female', 'fighter-jet', 'file', 'file-alt', 'file-archive', 'file-audio', 'file-code', 'file-contract', 'file-csv', 'file-download', 'file-excel', 'file-export', 'file-image', 'file-import', 'file-invoice', 'file-invoice-dollar', 'file-medical', 'file-medical-alt', 'file-pdf', 'file-powerpoint', 'file-prescription', 'file-signature', 'file-upload', 'file-video', 'file-word', 'fill', 'fill-drip', 'film', 'filter', 'fingerprint', 'fire', 'fire-alt', 'fire-extinguisher', 'first-aid', 'fish', 'fist-raised', 'flag', 'flag-checkered', 'flag-usa', 'flask', 'flushed', 'folder', 'folder-minus', 'folder-open', 'folder-plus', 'font', 'football-ball', 'forward', 'frog', 'frown', 'frown-open', 'funnel-dollar', 'futbol', 'gamepad', 'gas-pump', 'gavel', 'gem', 'genderless', 'ghost', 'gift', 'gifts', 'glass-cheers', 'glass-martini', 'glass-martini-alt', 'glass-whiskey', 'glasses', 'globe', 'globe-africa', 'globe-americas', 'globe-asia', 'globe-europe', 'golf-ball', 'gopuram', 'graduation-cap', 'greater-than', 'greater-than-equal', 'grimace', 'grin', 'grin-alt', 'grin-beam', 'grin-beam-sweat', 'grin-hearts', 'grin-squint', 'grin-squint-tears', 'grin-stars', 'grin-tears', 'grin-tongue', 'grin-tongue-squint', 'grin-tongue-wink', 'grin-wink', 'grip-horizontal', 'grip-lines', 'grip-lines-vertical', 'grip-vertical', 'guitar', 'h-square', 'hamburger', 'hammer', 'hamsa', 'hand-holding', 'hand-holding-heart', 'hand-holding-medical', 'hand-holding-usd', 'hand-holding-water', 'hand-lizard', 'hand-middle-finger', 'hand-paper', 'hand-peace', 'hand-point-down', 'hand-point-left', 'hand-point-right', 'hand-point-up', 'hand-pointer', 'hand-rock', 'hand-scissors', 'hand-sparkles', 'hand-spock', 'hands', 'hands-helping', 'hands-wash', 'handshake', 'handshake-alt-slash', 'handshake-slash', 'hanukiah', 'hard-hat', 'hashtag', 'hat-cowboy', 'hat-cowboy-side', 'hat-wizard', 'hdd', 'head-side-cough', 'head-side-cough-slash', 'head-side-mask', 'head-side-virus', 'heading', 'headphones', 'headphones-alt', 'headset', 'heart', 'heart-broken', 'heartbeat', 'helicopter', 'highlighter', 'hiking', 'hippo', 'history', 'hockey-puck', 'holly-berry', 'home', 'horse', 'horse-head', 'hospital', 'hospital-alt', 'hospital-symbol', 'hospital-user', 'hot-tub', 'hotdog', 'hotel', 'hourglass', 'hourglass-end', 'hourglass-half', 'hourglass-start', 'house-damage', 'house-user', 'hryvnia', 'i-cursor', 'ice-cream', 'icicles', 'icons', 'id-badge', 'id-card', 'id-card-alt', 'igloo', 'image', 'images', 'inbox', 'indent', 'industry', 'infinity', 'info', 'info-circle', 'italic', 'jedi', 'joint', 'journal-whills', 'kaaba', 'key', 'keyboard', 'khanda', 'kiss', 'kiss-beam', 'kiss-wink-heart', 'kiwi-bird', 'landmark', 'language', 'laptop', 'laptop-code', 'laptop-house', 'laptop-medical', 'laugh', 'laugh-beam', 'laugh-squint', 'laugh-wink', 'layer-group', 'leaf', 'lemon', 'less-than', 'less-than-equal', 'level-down-alt', 'level-up-alt', 'life-ring', 'lightbulb', 'link', 'lira-sign', 'list', 'list-alt', 'list-ol', 'list-ul', 'location-arrow', 'lock', 'lock-open', 'long-arrow-alt-down', 'long-arrow-alt-left', 'long-arrow-alt-right', 'long-arrow-alt-up', 'low-vision', 'luggage-cart', 'lungs', 'lungs-virus', 'magic', 'magnet', 'mail-bulk', 'male', 'map', 'map-marked', 'map-marked-alt', 'map-marker', 'map-marker-alt', 'map-pin', 'map-signs', 'marker', 'mars', 'mars-double', 'mars-stroke', 'mars-stroke-h', 'mars-stroke-v', 'mask', 'medal', 'medkit', 'meh', 'meh-blank', 'meh-rolling-eyes', 'memory', 'menorah', 'mercury', 'meteor', 'microchip', 'microphone', 'microphone-alt', 'microphone-alt-slash', 'microphone-slash', 'microscope', 'minus', 'minus-circle', 'minus-square', 'mitten', 'mobile', 'mobile-alt', 'money-bill', 'money-bill-alt', 'money-bill-wave', 'money-bill-wave-alt', 'money-check', 'money-check-alt', 'monument', 'moon', 'mortar-pestle', 'mosque', 'motorcycle', 'mountain', 'mouse', 'mouse-pointer', 'mug-hot', 'music', 'network-wired', 'neuter', 'newspaper', 'not-equal', 'notes-medical', 'object-group', 'object-ungroup', 'oil-can', 'om', 'otter', 'outdent', 'pager', 'paint-brush', 'paint-roller', 'palette', 'pallet', 'paper-plane', 'paperclip', 'parachute-box', 'paragraph', 'parking', 'passport', 'pastafarianism', 'paste', 'pause', 'pause-circle', 'paw', 'peace', 'pen', 'pen-alt', 'pen-fancy', 'pen-nib', 'pen-square', 'pencil-alt', 'pencil-ruler', 'people-arrows', 'people-carry', 'pepper-hot', 'percent', 'percentage', 'person-booth', 'phone', 'phone-alt', 'phone-slash', 'phone-square', 'phone-square-alt', 'phone-volume', 'photo-video', 'piggy-bank', 'pills', 'pizza-slice', 'place-of-worship', 'plane', 'plane-arrival', 'plane-departure', 'plane-slash', 'play', 'play-circle', 'plug', 'plus', 'plus-circle', 'plus-square', 'podcast', 'poll', 'poll-h', 'poo', 'poo-storm', 'poop', 'portrait', 'pound-sign', 'power-off', 'pray', 'praying-hands', 'prescription', 'prescription-bottle', 'prescription-bottle-alt', 'print', 'procedures', 'project-diagram', 'pump-medical', 'pump-soap', 'puzzle-piece', 'qrcode', 'question', 'question-circle', 'quidditch', 'quote-left', 'quote-right', 'quran', 'radiation', 'radiation-alt', 'rainbow', 'random', 'receipt', 'record-vinyl', 'recycle', 'redo', 'redo-alt', 'registered', 'remove-format', 'reply', 'reply-all', 'republican', 'restroom', 'retweet', 'ribbon', 'ring', 'road', 'robot', 'rocket', 'route', 'rss', 'rss-square', 'ruble-sign', 'ruler', 'ruler-combined', 'ruler-horizontal', 'ruler-vertical', 'running', 'rupee-sign', 'sad-cry', 'sad-tear', 'satellite', 'satellite-dish', 'save', 'school', 'screwdriver', 'scroll', 'sd-card', 'search', 'search-dollar', 'search-location', 'search-minus', 'search-plus', 'seedling', 'server', 'shapes', 'share', 'share-alt', 'share-alt-square', 'share-square', 'shekel-sign', 'shield-alt', 'shield-virus', 'ship', 'shipping-fast', 'shoe-prints', 'shopping-bag', 'shopping-basket', 'shopping-cart', 'shower', 'shuttle-van', 'sign', 'sign-in-alt', 'sign-language', 'sign-out-alt', 'signal', 'signature', 'sim-card', 'sink', 'sitemap', 'skating', 'skiing', 'skiing-nordic', 'skull', 'skull-crossbones', 'slash', 'sleigh', 'sliders-h', 'smile', 'smile-beam', 'smile-wink', 'smog', 'smoking', 'smoking-ban', 'sms', 'snowboarding', 'snowflake', 'snowman', 'snowplow', 'soap', 'socks', 'solar-panel', 'sort', 'sort-alpha-down', 'sort-alpha-down-alt', 'sort-alpha-up', 'sort-alpha-up-alt', 'sort-amount-down', 'sort-amount-down-alt', 'sort-amount-up', 'sort-amount-up-alt', 'sort-down', 'sort-numeric-down', 'sort-numeric-down-alt', 'sort-numeric-up', 'sort-numeric-up-alt', 'sort-up', 'spa', 'space-shuttle', 'spell-check', 'spider', 'spinner', 'splotch', 'spray-can', 'square', 'square-full', 'square-root-alt', 'stamp', 'star', 'star-and-crescent', 'star-half', 'star-half-alt', 'star-of-david', 'star-of-life', 'step-backward', 'step-forward', 'stethoscope', 'sticky-note', 'stop', 'stop-circle', 'stopwatch', 'stopwatch-20', 'store', 'store-alt', 'store-alt-slash', 'store-slash', 'stream', 'street-view', 'strikethrough', 'stroopwafel', 'subscript', 'subway', 'suitcase', 'suitcase-rolling', 'sun', 'superscript', 'surprise', 'swatchbook', 'swimmer', 'swimming-pool', 'synagogue', 'sync', 'sync-alt', 'syringe', 'table', 'table-tennis', 'tablet', 'tablet-alt', 'tablets', 'tachometer-alt', 'tag', 'tags', 'tape', 'tasks', 'taxi', 'teeth', 'teeth-open', 'temperature-high', 'temperature-low', 'tenge', 'terminal', 'text-height', 'text-width', 'th', 'th-large', 'th-list', 'theater-masks', 'thermometer', 'thermometer-empty', 'thermometer-full', 'thermometer-half', 'thermometer-quarter', 'thermometer-three-quarters', 'thumbs-down', 'thumbs-up', 'thumbtack', 'ticket-alt', 'times', 'times-circle', 'tint', 'tint-slash', 'tired', 'toggle-off', 'toggle-on', 'toilet', 'toilet-paper', 'toilet-paper-slash', 'toolbox', 'tools', 'tooth', 'torah', 'torii-gate', 'tractor', 'trademark', 'traffic-light', 'trailer', 'train', 'tram', 'transgender', 'transgender-alt', 'trash', 'trash-alt', 'trash-restore', 'trash-restore-alt', 'tree', 'trophy', 'truck', 'truck-loading', 'truck-monster', 'truck-moving', 'truck-pickup', 'tshirt', 'tty', 'tv', 'umbrella', 'umbrella-beach', 'underline', 'undo', 'undo-alt', 'universal-access', 'university', 'unlink', 'unlock', 'unlock-alt', 'upload', 'user', 'user-alt', 'user-alt-slash', 'user-astronaut', 'user-check', 'user-circle', 'user-clock', 'user-cog', 'user-edit', 'user-friends', 'user-graduate', 'user-injured', 'user-lock', 'user-md', 'user-minus', 'user-ninja', 'user-nurse', 'user-plus', 'user-secret', 'user-shield', 'user-slash', 'user-tag', 'user-tie', 'user-times', 'users', 'users-cog', 'users-slash', 'utensil-spoon', 'utensils', 'vector-square', 'venus', 'venus-double', 'venus-mars', 'vest', 'vest-patches', 'vial', 'vials', 'video', 'video-slash', 'vihara', 'virus', 'virus-slash', 'viruses', 'voicemail', 'volleyball-ball', 'volume-down', 'volume-mute', 'volume-off', 'volume-up', 'vote-yea', 'vr-cardboard', 'walking', 'wallet', 'warehouse', 'water', 'wave-square', 'weight', 'weight-hanging', 'wheelchair', 'wifi', 'wind', 'window-close', 'window-maximize', 'window-minimize', 'window-restore', 'wine-bottle', 'wine-glass', 'wine-glass-alt', 'won-sign', 'wrench', 'x-ray', 'yen-sign'];
const iconSizes = [{
  class: '',
  label: 'Default'
}, {
  class: 'fa-2x',
  label: 'Small'
}, {
  class: 'fa-3x',
  label: 'Medium'
}, {
  class: 'fa-5x',
  label: 'Large'
}, {
  class: 'fa-7x',
  label: 'Extra Large'
}];
module.exports = {
  osuIconNames,
  faIconNames,
  iconSizes
};

},{}],2:[function(require,module,exports){
"use strict";

var _iconList = require("./icon-list");

(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.iconPicker = {
    attach: function (context, settings) {
      $('html', context).once('body').each(function (i, item) {
        // addSizeSelect();
        addAutoComplete();
      });
    }
  };
  /**
   * Add autocomplete suggestions to icon input field
   */

  function addAutoComplete() {
    // built in autocomplete interferes with icon autocomplete
    $('#osuIconInput').attr("autocomplete", "off");
    $(document).on('keyup', '#osuIconInput', function () {
      // remove old autocomplete
      closeAutoComplete(); // remove autocomplete on focus loss

      $('#osuIconInput').focusout(e => {
        if (e.relatedTarget) {
          const target = $(e.relatedTarget).parent().parent().parent()[0];
          const children = [...$('#osuIconInput').parent()[0].children];

          if (!children.includes(target)) {
            closeAutoComplete();
          }
        } else {
          closeAutoComplete();
        }
      }); // construct autocomplete items

      var autocompleteItems = `
        <div class="autocomplete-wrapper">
          <ul class="autocomplete-items">
      `; // grab search term and find matches

      const searchTerm = $(this).val();
      const osuMatches = findMatches(_iconList.osuIconNames, 'icon-osu', searchTerm);
      autocompleteItems += osuMatches;
      const faMatches = findMatches(_iconList.faIconNames, 'fa', searchTerm);
      autocompleteItems += faMatches;
      autocompleteItems += `
          </ul>
        </div>
      `;

      if (osuMatches || faMatches) {
        $(this).after(autocompleteItems);
      } // remove old click events to prevent multiple actions at once


      $(document).off('click', '.autocomplete-wrapper a.osu-icon');
      $(document).on('click', '.autocomplete-wrapper a.osu-icon', function (e) {
        e.preventDefault();
        const iconChoice = $(this).text();
        const osu_icon_input = $(this).parent().parent().parent().parent().find('#osuIconInput');
        $(osu_icon_input).val(iconChoice);
        closeAutoComplete();
      }); // hover css

      $(document).off('mouseover', '.autocomplete-wrapper a.osu-icon');
      $(document).on('mouseover', '.autocomplete-wrapper a.osu-icon', function (e) {
        $(this).addClass('autocomplete-hover');
      });
      $(document).off('mouseout', '.autocomplete-wrapper a.osu-icon');
      $(document).on('mouseout', '.autocomplete-wrapper a.osu-icon', function (e) {
        $(this).removeClass('autocomplete-hover');
      });
    });
    /**
     * Removes autocomplete div from page
     */

    function closeAutoComplete() {
      $('.autocomplete-wrapper').remove();
    }
    /**
     *
     * @param {string[]} iconNames list of icon names without full class name
     * @param {string} iconType Type of icon (osu, fa)
     * @param {string} searchTerm User input to match icons with
     * @returns List of matches
     */


    function findMatches(iconNames, iconType, searchTerm) {
      var autocompleteItems = '';

      if (searchTerm != '') {
        var matches = 0;
        const MAX_MATCHES = 10;
        iconNames.forEach(name => {
          // catch invalid regex errors from user input
          try {
            const match = name.search(searchTerm);

            if (match > -1 && matches <= MAX_MATCHES) {
              autocompleteItems += `<li><a href="#" class="osu-icon"><i class="${iconType == 'fa' ? 'fa ' : ''}${iconType}-${name}"></i>${iconType}-${name}</a></li>`;
              matches++;
            }
          } catch (err) {}

          ;
        });
      }

      ;
      return autocompleteItems;
    }
  }

  ;
  /**
   * Adds size select dropdown below icon text field
   */

  function addSizeSelect() {
    const parent = $('#osuIconInput').parent();
    const selectListId = 'osu-icon-size-select';
    var sizeSelect = `
      <div>
        <label class="form-item__label">Icon Size</label>
        <select id="${selectListId}" class="form-select form-element form-element--type-select">
    `;

    _iconList.iconSizes.forEach(size => {
      sizeSelect += `<option value="${size.class}">${size.label}</option>`;
    });

    sizeSelect += `
        </select>
      </div>
    `;
    $(parent).append(sizeSelect); // get selected icon size and add to text field

    $(`#${selectListId}`).change(() => {
      const selectedOption = $(`#${selectListId} option:selected`).val();
      const osu_icon_input = $('#osuIconInput');
      const currentInput = $(osu_icon_input).val().split(' ');

      if (currentInput.length >= 1) {
        currentInput[1] = selectedOption;
        $(osu_icon_input).val(currentInput.join(' '));
      } else {
        $(osu_icon_input).val(` ${selectedOption}`);
      }
    }); // set select list to default if size text is removed

    $(parent).change(() => {
      if ($('#osuIconInput').val().split(' ').length < 2) {
        $(`#${selectListId}`).val('');
      }
    });
  } // TODO: use this to easily generate list of osu icons, probably ran on command line and committed
  // async function getOsuIconNames () {
  // var iconNames = [];
  // var response = await fetch(osuIconUrl, {
  // headers: {
  // 'Access-Control-Allow-Origin':'*'
  // },
  // });
  // var data = await response.text();
  // // parse css to get icon names
  // iconNames = data.match(/\.icon-osu-[a-zA-Z0-9_-]*:/g);
  // // trim css class names down to just the icon names
  // iconNames.forEach( (name, i) => {
  // iconNames[i] = name.replace('.icon-osu-', "").slice(0, -1);
  // });
  // return iconNames;
  // };

})(jQuery, Drupal, drupalSettings);

},{"./icon-list":1}]},{},[2]);
