(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const osuIconNames = ['batteries', 'bed', 'blocks', 'cheese', 'faucet', 'fence', 'glove', 'headphone', 'house', 'joystick', 'knowledge', 'neighborhood', 'quill', 'report', 'river', 'rollerskates', 'scooter', 'sheep', 'skateboard', 'space', 'syringe', 'tea', 'truck', 'videotape', 'illustrations', 'folder', 'golfball', 'golfcart', 'hourglass', 'pawn', 'pizza', 'radiation', 'thermometer', 'clapboard', 'chip', 'book', 'chainsaw', 'caterpillar', 'bitcoin', 'binoculars', 'beakers', 'backpack', 'rocket', 'baseball', 'dove', 'basketball', 'flame', 'battery', 'scantron', 'saturn', 'zoom_meeting', 'anchor', 'sharing', 'director', 'pyramid', 'couch', 'community', 'emotions', 'heartbeat', 'wine', 'phone', 'simulation', 'butterfly', 'turkey', 'tissue', 'handclean', 'alert', 'seedling', 'stethoscope', 'shovel', 'mirror', 'mouth', 'scales', 'stopwatch', 'salamander', 'bread', 'spatula', 'rattle', 'slippers', 'pacifier', 'whistle', 'football', 'bag', 'flower', 'accessibility', 'apple', 'balloon', 'barbell', 'barley', 'barn', 'beaker', 'bee', 'beer', 'berry', 'bicycle', 'bird', 'boat', 'books', 'bovine', 'brain', 'briefcase', 'broccolli', 'bus', 'calendar', 'camera', 'car', 'carrot', 'cat', 'cattailplant', 'cell', 'cherry', 'chicken', 'clarinet', 'clipboard', 'clock', 'cloud', 'coffee', 'compass', 'corn', 'courthouse', 'crab', 'desktop', 'diploma', 'dna', 'document', 'dog', 'drink', 'drone', 'drum', 'envelope', 'fish', 'flatware', 'gear', 'glasses', 'goat', 'golf', 'grapes', 'graph', 'group', 'guitar', 'hammer', 'hand', 'handshake', 'hanger', 'hat', 'heart', 'horse', 'image', 'info', 'key', 'laptop', 'leaf', 'lightbulb', 'lightning', 'link', 'llama', 'lock', 'mammoth', 'maze', 'medal', 'megaphone', 'microphone', 'microscope', 'molecule', 'money', 'moon', 'motorcycle', 'mountains', 'mouse', 'mu', 'nation', 'newspaper', 'octopus', 'oregon', 'palette', 'pear', 'pencil', 'piano', 'pie', 'pig', 'pillar', 'play', 'plus', 'printer', 'questionmark', 'raccoon', 'rain', 'recycle', 'ribbon', 'robot', 'ryegrass', 'sage', 'satellite', 'server', 'shield', 'shoe', 'ski', 'skull', 'smartphone', 'snowflake', 'star', 'sun', 'tablet', 'tent', 'tomato', 'tools', 'tractor', 'trophy', 'turbine', 'user', 'videocamera', 'vr', 'water', 'wave', 'waves', 'whale', 'wheelchair', 'world', 'wrench']; // var faIconNames = [
// 'glass',
// 'music',
// 'search',
// 'envelope-o',
// 'heart',
// 'star',
// 'star-o',
// 'user',
// 'film',
// 'th-large',
// 'th',
// 'th-list',
// 'check',
// 'remove',
// 'search-plus',
// 'search-minus',
// 'power-off',
// 'signal',
// 'gear',
// 'trash-o',
// 'home',
// 'file-o',
// 'clock-o',
// 'road',
// 'download',
// 'arrow-circle-o-down',
// 'arrow-circle-o-up',
// 'inbox',
// 'play-circle-o',
// 'rotate-right',
// 'refresh',
// 'list-alt',
// 'lock',
// 'flag',
// 'headphones',
// 'volume-off',
// 'volume-down',
// 'volume-up',
// 'qrcode',
// 'barcode',
// 'tag',
// 'tags',
// 'book',
// 'bookmark',
// 'print',
// 'camera',
// 'font',
// 'bold',
// 'italic',
// 'text-height',
// 'text-width',
// 'align-left',
// 'align-center',
// 'align-right',
// 'align-justify',
// 'list',
// 'dedent',
// 'indent',
// 'video-camera',
// 'photo',
// 'pencil',
// 'map-marker',
// 'adjust',
// 'tint',
// 'edit',
// 'share-square-o',
// 'check-square-o',
// 'arrows',
// 'step-backward',
// 'fast-backward',
// 'backward',
// 'play',
// 'pause',
// 'stop',
// 'forward',
// 'fast-forward',
// 'step-forward',
// 'eject',
// 'chevron-left',
// 'chevron-right',
// 'plus-circle',
// 'minus-circle',
// 'times-circle',
// 'check-circle',
// 'question-circle',
// 'info-circle',
// 'crosshairs',
// 'times-circle-o',
// 'check-circle-o',
// 'ban',
// 'arrow-left',
// 'arrow-right',
// 'arrow-up',
// 'arrow-down',
// 'mail-forward',
// 'expand',
// 'compress',
// 'plus',
// 'minus',
// 'asterisk',
// 'exclamation-circle',
// 'gift',
// 'leaf',
// 'fire',
// 'eye',
// 'eye-slash',
// 'warning',
// 'plane',
// 'calendar',
// 'random',
// 'comment',
// 'magnet',
// 'chevron-up',
// 'chevron-down',
// 'retweet',
// 'shopping-cart',
// 'folder',
// 'folder-open',
// 'arrows-v',
// 'arrows-h',
// 'bar-chart-o',
// 'twitter-square',
// 'facebook-square',
// 'camera-retro',
// 'key',
// 'gears',
// 'comments',
// 'thumbs-o-up',
// 'thumbs-o-down',
// 'star-half',
// 'heart-o',
// 'sign-out',
// 'linkedin-square',
// 'thumb-tack',
// 'external-link',
// 'sign-in',
// 'trophy',
// 'github-square',
// 'upload',
// 'lemon-o',
// 'phone',
// 'square-o',
// 'bookmark-o',
// 'phone-square',
// 'twitter',
// 'facebook-f',
// 'github',
// 'unlock',
// 'credit-card',
// 'feed',
// 'hdd-o',
// 'bullhorn',
// 'bell',
// 'certificate',
// 'hand-o-right',
// 'hand-o-left',
// 'hand-o-up',
// 'hand-o-down',
// 'arrow-circle-left',
// 'arrow-circle-right',
// 'arrow-circle-up',
// 'arrow-circle-down',
// 'globe',
// 'wrench',
// 'tasks',
// 'filter',
// 'briefcase',
// 'arrows-alt',
// 'group',
// 'chain',
// 'cloud',
// 'flask',
// 'cut',
// 'copy',
// 'paperclip',
// 'save',
// 'square',
// 'navicon',
// 'list-ul',
// 'list-ol',
// 'strikethrough',
// 'underline',
// 'table',
// 'magic',
// 'truck',
// 'pinterest',
// 'pinterest-square',
// 'google-plus-square',
// 'google-plus',
// 'money',
// 'caret-down',
// 'caret-up',
// 'caret-left',
// 'caret-right',
// 'columns',
// 'unsorted',
// 'sort-down',
// 'sort-up',
// 'envelope',
// 'linkedin',
// 'rotate-left',
// 'legal',
// 'dashboard',
// 'comment-o',
// 'comments-o',
// 'flash',
// 'sitemap',
// 'umbrella',
// 'paste',
// 'lightbulb-o',
// 'exchange',
// 'cloud-download',
// 'cloud-upload',
// 'user-md',
// 'stethoscope',
// 'suitcase',
// 'bell-o',
// 'coffee',
// 'cutlery',
// 'file-text-o',
// 'building-o',
// 'hospital-o',
// 'ambulance',
// 'medkit',
// 'fighter-jet',
// 'beer',
// 'h-square',
// 'plus-square',
// 'angle-double-left',
// 'angle-double-right',
// 'angle-double-up',
// 'angle-double-down',
// 'angle-left',
// 'angle-right',
// 'angle-up',
// 'angle-down',
// 'desktop',
// 'laptop',
// 'tablet',
// 'mobile-phone',
// 'circle-o',
// 'quote-left',
// 'quote-right',
// 'spinner',
// 'circle',
// 'mail-reply',
// 'github-alt',
// 'folder-o',
// 'folder-open-o',
// 'smile-o',
// 'frown-o',
// 'meh-o',
// 'gamepad',
// 'keyboard-o',
// 'flag-o',
// 'flag-checkered',
// 'terminal',
// 'code',
// 'mail-reply-all',
// 'star-half-empty',
// 'location-arrow',
// 'crop',
// 'code-fork',
// 'unlink',
// 'question',
// 'info',
// 'exclamation',
// 'superscript',
// 'subscript',
// 'eraser',
// 'puzzle-piece',
// 'microphone',
// 'microphone-slash',
// 'shield',
// 'calendar-o',
// 'fire-extinguisher',
// 'rocket',
// 'maxcdn',
// 'chevron-circle-left',
// 'chevron-circle-right',
// 'chevron-circle-up',
// 'chevron-circle-down',
// 'html5',
// 'css3',
// 'anchor',
// 'unlock-alt',
// 'bullseye',
// 'ellipsis-h',
// 'ellipsis-v',
// 'rss-square',
// 'play-circle',
// 'ticket',
// 'minus-square',
// 'minus-square-o',
// 'level-up',
// 'level-down',
// 'check-square',
// 'pencil-square',
// 'external-link-square',
// 'share-square',
// 'compass',
// 'toggle-down',
// 'toggle-up',
// 'toggle-right',
// 'euro',
// 'gbp',
// 'dollar',
// 'rupee',
// 'cny',
// 'ruble',
// 'won',
// 'bitcoin',
// 'file',
// 'file-text',
// 'sort-alpha-asc',
// 'sort-alpha-desc',
// 'sort-amount-asc',
// 'sort-amount-desc',
// 'sort-numeric-asc',
// 'sort-numeric-desc',
// 'thumbs-up',
// 'thumbs-down',
// 'youtube-square',
// 'youtube',
// 'xing',
// 'xing-square',
// 'youtube-play',
// 'dropbox',
// 'stack-overflow',
// 'instagram',
// 'flickr',
// 'adn',
// 'bitbucket',
// 'bitbucket-square',
// 'tumblr',
// 'tumblr-square',
// 'long-arrow-down',
// 'long-arrow-up',
// 'long-arrow-left',
// 'long-arrow-right',
// 'apple',
// 'windows',
// 'android',
// 'linux',
// 'dribbble',
// 'skype',
// 'foursquare',
// 'trello',
// 'female',
// 'male',
// 'gittip',
// 'sun-o',
// 'moon-o',
// 'archive',
// 'bug',
// 'vk',
// 'weibo',
// 'renren',
// 'pagelines',
// 'stack-exchange',
// 'arrow-circle-o-right',
// 'arrow-circle-o-left',
// 'toggle-left',
// 'dot-circle-o',
// 'wheelchair',
// 'vimeo-square',
// 'turkish-lira',
// 'plus-square-o',
// 'space-shuttle',
// 'slack',
// 'envelope-square',
// 'wordpress',
// 'openid',
// 'institution',
// 'mortar-board',
// 'yahoo',
// 'google',
// 'reddit',
// 'reddit-square',
// 'stumbleupon-circle',
// 'stumbleupon',
// 'delicious',
// 'digg',
// 'pied-piper-pp',
// 'pied-piper-alt',
// 'drupal',
// 'joomla',
// 'language',
// 'fax',
// 'building',
// 'child',
// 'paw',
// 'spoon',
// 'cube',
// 'cubes',
// 'behance',
// 'behance-square',
// 'steam',
// 'steam-square',
// 'recycle',
// 'automobile',
// 'cab',
// 'tree',
// 'spotify',
// 'deviantart',
// 'soundcloud',
// 'database',
// 'file-pdf-o',
// 'file-word-o',
// 'file-excel-o',
// 'file-powerpoint-o',
// 'file-photo-o',
// 'file-zip-o',
// 'file-sound-o',
// 'file-movie-o',
// 'file-code-o',
// 'vine',
// 'codepen',
// 'jsfiddle',
// 'life-bouy',
// 'circle-o-notch',
// 'ra',
// 'ge',
// 'git-square',
// 'git',
// 'y-combinator-square',
// 'tencent-weibo',
// 'qq',
// 'wechat',
// 'send',
// 'send-o',
// 'history',
// 'circle-thin',
// 'header',
// 'paragraph',
// 'sliders',
// 'share-alt',
// 'share-alt-square',
// 'bomb',
// 'soccer-ball-o',
// 'tty',
// 'binoculars',
// 'plug',
// 'slideshare',
// 'twitch',
// 'yelp',
// 'newspaper-o',
// 'wifi',
// 'calculator',
// 'paypal',
// 'google-wallet',
// 'cc-visa',
// 'cc-mastercard',
// 'cc-discover',
// 'cc-amex',
// 'cc-paypal',
// 'cc-stripe',
// 'bell-slash',
// 'bell-slash-o',
// 'trash',
// 'copyright',
// 'at',
// 'eyedropper',
// 'paint-brush',
// 'birthday-cake',
// 'area-chart',
// 'pie-chart',
// 'line-chart',
// 'lastfm',
// 'lastfm-square',
// 'toggle-off',
// 'toggle-on',
// 'bicycle',
// 'bus',
// 'ioxhost',
// 'angellist',
// 'cc',
// 'shekel',
// 'meanpath',
// 'buysellads',
// 'connectdevelop',
// 'dashcube',
// 'forumbee',
// 'leanpub',
// 'sellsy',
// 'shirtsinbulk',
// 'simplybuilt',
// 'skyatlas',
// 'cart-plus',
// 'cart-arrow-down',
// 'diamond',
// 'ship',
// 'user-secret',
// 'motorcycle',
// 'street-view',
// 'heartbeat',
// 'venus',
// 'mars',
// 'mercury',
// 'intersex',
// 'transgender-alt',
// 'venus-double',
// 'mars-double',
// 'venus-mars',
// 'mars-stroke',
// 'mars-stroke-v',
// 'mars-stroke-h',
// 'neuter',
// 'genderless',
// 'facebook-official',
// 'pinterest-p',
// 'whatsapp',
// 'server',
// 'user-plus',
// 'user-times',
// 'hotel',
// 'viacoin',
// 'train',
// 'subway',
// 'medium',
// 'yc',
// 'optin-monster',
// 'opencart',
// 'expeditedssl',
// 'battery-4',
// 'battery-3',
// 'battery-2',
// 'battery-1',
// 'battery-0',
// 'mouse-pointer',
// 'i-cursor',
// 'object-group',
// 'object-ungroup',
// 'sticky-note',
// 'sticky-note-o',
// 'cc-jcb',
// 'cc-diners-club',
// 'clone',
// 'balance-scale',
// 'hourglass-o',
// 'hourglass-1',
// 'hourglass-2',
// 'hourglass-3',
// 'hourglass',
// 'hand-grab-o',
// 'hand-stop-o',
// 'hand-scissors-o',
// 'hand-lizard-o',
// 'hand-spock-o',
// 'hand-pointer-o',
// 'hand-peace-o',
// 'trademark',
// 'registered',
// 'creative-commons',
// 'gg',
// 'gg-circle',
// 'tripadvisor',
// 'odnoklassniki',
// 'odnoklassniki-square',
// 'get-pocket',
// 'wikipedia-w',
// 'safari',
// 'chrome',
// 'firefox',
// 'opera',
// 'internet-explorer',
// 'tv',
// 'contao',
// '500px',
// 'amazon',
// 'calendar-plus-o',
// 'calendar-minus-o',
// 'calendar-times-o',
// 'calendar-check-o',
// 'industry',
// 'map-pin',
// 'map-signs',
// 'map-o',
// 'map',
// 'commenting',
// 'commenting-o',
// 'houzz',
// 'vimeo',
// 'black-tie',
// 'fonticons',
// 'reddit-alien',
// 'edge',
// 'credit-card-alt',
// 'codiepie',
// 'modx',
// 'fort-awesome',
// 'usb',
// 'product-hunt',
// 'mixcloud',
// 'scribd',
// 'pause-circle',
// 'pause-circle-o',
// 'stop-circle',
// 'stop-circle-o',
// 'shopping-bag',
// 'shopping-basket',
// 'hashtag',
// 'bluetooth',
// 'bluetooth-b',
// 'percent',
// 'gitlab',
// 'wpbeginner',
// 'wpforms',
// 'envira',
// 'universal-access',
// 'wheelchair-alt',
// 'question-circle-o',
// 'blind',
// 'audio-description',
// 'volume-control-phone',
// 'braille',
// 'assistive-listening-systems',
// 'asl-interpreting',
// 'deafness',
// 'glide',
// 'glide-g',
// 'signing',
// 'low-vision',
// 'viadeo',
// 'viadeo-square',
// 'snapchat',
// 'snapchat-ghost',
// 'snapchat-square',
// 'pied-piper',
// 'first-order',
// 'yoast',
// 'themeisle',
// 'google-plus-circle',
// 'fa',
// 'handshake-o',
// 'envelope-open',
// 'envelope-open-o',
// 'linode',
// 'address-book',
// 'address-book-o',
// 'vcard',
// 'vcard-o',
// 'user-circle',
// 'user-circle-o',
// 'user-o',
// 'id-badge',
// 'drivers-license',
// 'drivers-license-o',
// 'quora',
// 'free-code-camp',
// 'telegram',
// 'thermometer-4',
// 'thermometer-3',
// 'thermometer-2',
// 'thermometer-1',
// 'thermometer-0',
// 'shower',
// 'bathtub',
// 'podcast',
// 'window-maximize',
// 'window-minimize',
// 'window-restore',
// 'times-rectangle',
// 'times-rectangle-o',
// 'bandcamp',
// 'grav',
// 'etsy',
// 'imdb',
// 'ravelry',
// 'eercast',
// 'microchip',
// 'snowflake-o',
// 'superpowers',
// 'wpexplorer',
// 'meetup'
// ];

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
        addSizeSelect();
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
  // iconNames = data.match(/\.icon-osu-[a-zA-Z0-9_]*:/g);
  // // trim css class names down to just the icon names
  // iconNames.forEach( (name, i) => {
  // iconNames[i] = name.replace('.icon-osu-', "").slice(0, -1);
  // });
  // return iconNames;
  // };

})(jQuery, Drupal, drupalSettings);

},{"./icon-list":1}]},{},[2]);
