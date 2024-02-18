
// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Emotes = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    const EmoteStatics = [
    
        {   name: "Smile",   keys: [":)", ":D", ":]", ":-)"],emoji: "😊",desc: "A smiling face"},
        {name: 'sad',keys: [':(', ':-(', ';('],emoji: '😢',desc: 'A sad face'},
        { name: 'laugh',   keys: [':))', ':D', ':-))'],emoji: '😂',desc: 'A laughing face' },
        {name: 'cool',   keys: ['B)', 'B-)', 'B]', 'B-)'],emoji: '😎',desc: 'A cool face'},
        { name: 'surprised',keys: [':O', ':-O', ':0', ':-0'],emoji: '😲',desc: 'A surprised face'},
        {name: 'wink',keys: [';)', ';-)'],emoji: '😉',desc: 'A winking face'},
        { name: 'crying', keys: [':\'(', ';\'('], emoji: '😭', desc: 'A crying face' },
        { name: 'sweating', keys: [':s', ':-s', ':S', ':-S'], emoji: '😓', desc: 'A sweating face' },
        { name: 'speechless', keys: [':|', ':-|'], emoji: '😐', desc: 'A speechless face' },
        { name: 'angry', keys: ['>:(', '>:-('], emoji: '😠', desc: 'An angry face' },
        { name: 'cheeky', keys: [':p', ':-p', ':P', ':-P'], emoji: '😛', desc: 'A cheeky face' },
        { name: 'blushing', keys: [':blush:', ':-blush:', ':$'], emoji: '😊', desc: 'A blushing face' },
        { name: 'wondering', keys: [':thinking:', ':-thinking:'], emoji: '🤔', desc: 'A wondering face' },
        { name: 'sleepy', keys: [':sleepy:', ':-sleepy:'], emoji: '😪', desc: 'A sleepy face' },
        { name: 'raining', keys: [':rain:', ':-rain:'], emoji: '🌧️', desc: 'A raining face' },
        { name: 'bandit', keys: [':bandit:', ':-bandit:'], emoji: '🤠', desc: 'A bandit face' },
        { name: 'cash', keys: [':cash:', ':-cash:'], emoji: '🤑', desc: 'A cash face' },
        {name:'drink',keys:[':drinking:',':-drinking:'],emoji:'🍺',desc:'A drinking face'},
        {name:'smoke',keys:[':smoking:',':-smoking:'],emoji:'🚬',desc:'A smoking face'},
        {name:'headbang',keys:[':headbang:',':-headbang:'],emoji:'🤘',desc:'A head banging face'},
        {name:'call',keys:[':call:',':-call:'],emoji:'📞',desc:'A calling face'},
        {name:'email',keys:[':email:',':-email:'],emoji:'📧',desc:'An email face'},
        {name:'dull',keys:['|-(','|-[',':dull:',':-dull:'],emoji:'😑',desc:'A dull face'},
        {name:'inlove',keys:[':inlove:',':-inlove:'],emoji:'😍',desc:'A in love face'},
        {name:'evilgrin',keys:[':evilgrin:',':-evilgrin:',']-0'],emoji:'😈',desc:'An evil grinning face'},
        {name:'fingercrossed',keys:[':fingercrossed:',':-fingercrossed:',':yn'],emoji:'🤞',desc:'A finger crossed face'},
        {name:'yuk',keys:[':yuk:',':-yuk:'],emoji:'🤢',desc:'A yuk face'},
        {name:'doh',keys:[':doh:',':-doh:'],emoji:'🤦',desc:'A doh face'},
        {name:'puke',keys:[':puking:',':-puking:'],emoji:'🤮',desc:'A puking face'},
        {name:'angry',keys:[':angry:',':-angry:'],emoji:'😡',desc:'An angry face'},
        {name:'wasntme',keys:[':wasntme:',':-wasntme:'],emoji:'🤷',desc:'A wasn`t me face'},
        {name:'party',keys:[':party:',':-party:'],emoji:'🎉',desc:'A party face'},
        {name:'worry',keys:[':worry:',':-worry:'],emoji:'😟',desc:'A worrying face'},
        {name:'mm',keys:[':mm:',':-mm:'],emoji:'🤔',desc:'A mm face'},
        {name:'nerd',keys:[':nerd:',':-nerd:'],emoji:'🤓',desc:'A nerd face'}, 
        {name:'lipssealed',keys:[':lipssealed:',':-lipssealed:',':x'],emoji:'🤐',desc:'A lips sealed face'},
        {name:'sun',keys:[':sun:',':-sun:'],emoji:'🌞',desc:'A sun face'},
        {name:'flex',keys:[':flex:',':-flex:'],emoji:'💪',desc:'A flex face'},
        {name:'muscle',keys:[':muscle:',':-muscle:'],emoji:'💪',desc:'A muscle face'},
        {name:'dance',keys:[':dance:',':-dance:',':\o/'],emoji:'💃',desc:'A dancing face'},
        {name:'finger',keys:[':finger:',':-finger:'],emoji:'🖕',desc:'A finger face'},
        {name:'fubar',keys:[':fubar:',':-fubar:'],emoji:'🤬',desc:'A fubar face'},
        {name:'drunk',keys:[':drunk:',':-drunk:'],emoji:'🍺',desc:'A drunk face'},
        {name:'time',keys:[':time:',':-time:'],emoji:'⌚',desc:'A time face'},
        {name:'wave',keys:[':wave:',':-wave:'],emoji:'👋',desc:'A waving face'},
        {name:'facepalm',keys:[':facepalm:',':-facepalm:'],emoji:'🤦',desc:'A facepalm face'},
        {name:'devil',keys:[ ':devil:',':-devil:'],emoji:'😈',desc:'A devil face'},
        {name:'angel',keys:[':angel:',':-angel:'],emoji:'😇',desc:'An angel face'},
        {name:'envy',keys:[':envy:', ':-envy:'],emoji:'🤑',desc:'An envy face'},
        {name:'wait',keys:[':wait:',':-wait:'],emoji:'⏳',desc:'A waiting face'},
        {name:'hug',keys:[':hug:',':-hug:'],emoji:'🤗',desc:'A hugging face'},
        {name:'makeup',keys:[':makeup:',':-makeup:'],emoji:'💄',desc:'A makeup face'},
        {name:'giggle',keys:[':giggle:',':-giggle:'],emoji:'😆',desc:'A giggling face'},
        {name:'clap',keys:[':clap:',':-clap:'],emoji:'👏',desc:'A clapping face'},
        {name:'think',keys : [':think:',':-think:'],emoji:'🤔',desc:'A thinking face'},
        {name:'bow',keys:[':bow:',':-bow:'],emoji:'🙇',desc:'A bowing face'},
        {name:'rofl',keys:[':rofl:',':-rofl:'],emoji:'🤣',desc:'A rolling on the floor laughing face'},
        {name:'whew',keys:[':whew:', ':-whew:'],emoji:'😅',desc:'A whew face'},
        {name: 'tumbleweed',keys: [':tumbleweed:',':-tumbleweed:'],emoji: '🌵',desc: 'A tumbleweed face'},
        {name:'coffee',keys:[':coffee:',':-coffee:'],emoji:'☕',desc:'A coffee face'},
        {name:'cake',keys:[':cake',':-cake',':(^)(cake)'],emoji:'🍰',desc:'A cake face'},
        {name:'ninja',keys:[':ninja:',':-ninja:'],emoji:'🥷',desc:'A ninja face'},
        {name:'swear',keys:[':swear:',':-swear:'],emoji:'🤬',desc:'A swearing face'},
        {name:'poolparty',keys:[':poolparty:',':-poolparty:'],emoji:'🏊',desc:'A pool party face'},
        {name:'turtle',keys:[':turtle:',':-turtle:'],emoji:'🐢',desc:'A turtle face'},
        {name:'bug',keys:[':bug:',':-bug:'],emoji:'🐞',desc:'A bug face'},
        {name:'skype',keys:[':skype:',':-skype:'],emoji:'📞',desc:'A skype face'},
        {name:'movie',keys:[':movie:',':-movie:'],emoji:'🎬',desc:'A movie face'},
        {name:'smirk',keys:[':smerk:',':-smerk:'],emoji:'😏',desc:'A smerking face'},
        {name:'nod',keys:[':nod:',':-nod:'],emoji:'👍',desc:'A nodding face'},
        {name:'shake', keys:[':shake',':-shake'],emoji:'👎',desc:'A shaking face'},
        {name:'waiting',keys:[':waiting:',':-waiting:',':(waiting)'],emoji:'⏳',desc:'A waiting face'},
        {name:'yes',keys:[':yes:',':-yes:',':y'],emoji:'👍',desc:'A yes face'},
        {name:'no',keys:[':no:',':-no:',':n'],emoji:'👎',desc:'A no face'},
        {name:'handshake',keys:[':handshake:',':-handshake:'],emoji:'🤝',desc:'A handshake face'},
        {name:'highfive',keys:[':highfive:',':-highfive:'],emoji:'🖐️',desc:'A high five face'},
        {name:'heart',keys:[':heart:',':-heart:'],emoji:'❤️',desc:'A heart face'},
        {name:'brokenheart',keys:[':brokenheart:',':-brokenheart:'],emoji:'💔',desc:'A broken heart face'},
        {name:'hearteyes',keys:[':hearteyes:',':-hearteyes:'],emoji:'😍',desc:'A heart eyes face'},
        {name:'heidy',keys:[':heidy:',':-heidy:'],emoji:'🙋',desc:'A heidy face'},
        {name:'happy',keys:[':happy:',':-happy:'],emoji:'😊',desc:'A happy face'},
        {name:'lala',keys:[':lala:',':-lala:'],emoji:'🎵',desc:'A lala face'},
        {name:'tmi',keys:[':tmi:',':-tmi:'],emoji:'🙊',desc:'A tmi face'},
        {name:'pizza',keys:[':pizza:',':-pizza:'],emoji:'🍕',desc:'A pizza face'},
        {name:'rock',keys:[':rock:',':-rock:'],emoji:'🤘',desc:'A rock face'},
        {name:'talk',keys:[':talk:',':-talk:'],emoji:'🗨️',desc:'A talking face'},
        {name:'pray',keys:[':pray:', ':-pray:'],emoji:'🙏',desc:'A praying face'},
        {name:'facepalm',keys:[':facepalm:',':-facepalm:'],emoji:'🤦',desc:'A facepalm face'},
        {name:'work-from-home',keys:[':work-from-home:',':-work-from-home:',':wfh',':(wfh)'],emoji:'🏠',desc:'A work from home face'},
        {name:'mobilephone',keys:[':mp:',':-mp:',':mp'],emoji:'📱',desc:'A mobile phone face'},
        {name:'laptop',keys:[':laptop:',':-laptop:',':lp'],emoji:'💻',desc:'A laptop face'},
        {name:'desktop',keys:[':desktop:',':-desktop:',':dt'],emoji:'🖥️',desc:'A desktop face'},
        {name:'love',keys:[':love:',':-love:',':l'],emoji:'❤️',desc:'A love face'},
    ];

    function Emote(options = {}) {
        this.emotes = EmoteStatics.slice(); 
        this.name = options.name;
        this.keys = options.keys;
        this.emoji = options.emoji;
        this.desc = options.desc;
        return this;
        }
        
    Emote.prototype.addEmote= function (name, keys, emoji, desc) {
        if(!name || !keys || !emoji) throw new Error('Emote must have a name, keys, ,and emoji.');
        this.emotes.push({ name, keys, emoji, desc });
    };
    Emote.prototype.getEmotes = () => this.emotes;
    Emote.prototype. extends= function (emotes) {
        this.emotes = this.emotes.concat(emotes);
    };
    Emote.prototype.getEmote = function (name) {
        return this.emotes.find(emote => emote.name === name);
    };
    Emote.prototype.exclude =function(emotes) {
        this.emotes = this.emotes.filter(emote => !emotes.includes(emote.name));
    };

    Emote.prototype.removeEmote= function (name) {
        const index = this.emotes.findIndex(emote => emote.name === name);
        if(index !== -1) {
            this.emotes.splice(index, 1);
        }
    }

    Emote.statics = EmoteStatics;   

    Emote.create = (options) => new Emote(options);
    Emote.getEmotes = () => Object.assign({},
        Emote.statics.reduce((acc, emote) => {
            acc[emote.name] = emote.emoji;
            return acc.find(emote => emote.name === name);
        }, {})  
    );
    Emote.getEmote = (name) => Emote.statics.find(emote => emote.name === name);
    Emote.removeEmote = (name) => {
        const index = Emote.statics.findIndex(emote => emote.name === name);
        if(index !== -1) {
            Emote.statics.splice(index, 1);
        }
    }
    Emote.exclude = (emotes) => Emote.statics = Emote.statics.filter(emote => !emotes.includes(emote.name));
    Emote.extends = (emotes) => Emote.statics = Emote.statics.concat(emotes);

return {Emote,EmoteStatics};

}));

