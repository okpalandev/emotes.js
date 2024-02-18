# EmotesJS
## Express Yourself with emotes in JavaScript

 With Emotes.js, you can easily integrate a wide range of emoticons and emojis into your projects, making it simple for users to convey their feelings through text-based communication.

## Features
1. Extensive Emote Collection: Emotes.js provides a comprehensive collection of emoticons and emojis covering a wide range of emotions and expressions.

2. Simple Integration: With a straightforward API, Emotes.js can be easily integrated into any web application or project.
    Custom Emotes: Users can define custom emoticons and emojis to suit their specific needs.
    Node.js Support: Emotes.js can be used both in browser-based applications and Node.js environments.

## Installation
You can install Emotes.js via npm:
```sh
$ npm install emotes
```

Alternatively, you can include it directly in your HTML file:
```html
$ <script src="src/lib/emotes.js"></script>
```

## Usage
Using Emotes.js is simple. Here's a basic example demonstrating how to use it:
```js
// Create an instance of Emote
const myEmote = Emote.create({ name: 'happy', keys: [':)', ':D'], emoji: '😊', desc: 'A happy face' });

// Add more emotes if needed
myEmote.add('excited', [':excited:', ':-excited:'], '😆', 'An excited face');
// Get an emote by name
const happyEmote = myEmote.getEmote('happy');
console.log(happyEmote); // Output the happy emote object
```

## Contributing
Contributions are welcome! If you'd like to contribute to Emotes.js, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
