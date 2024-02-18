const { expect, assert }  = chai;
const { describe, it, before } = mocha;
console.log('Emotes tests');

describe('Emote', () => {
  let emotes;
  before(() => {
    emotes = Emotes.Emote.create();
    emotes.addEmote('sad', [':(', ';['], '😢', 'A sad emote.');
    emotes.addEmote('confused', ['?_?'], '🤔', 'A confused emote.');
  });

  it('should create a new emote', () => {
    expect(emotes.getEmotes()).to.have.lengthOf(2);
    expect(emotes.getEmotes()[0].name).to.equal('sad');
    expect(emotes.getEmotes()[0].keys).to.deep.equal([':(', ';[']);
    expect(emotes.getEmotes()[0].emoji).to.equal('😢');
    expect(emotes.getEmotes()[0].desc).to.equal('A sad emote.');
    expect(emotes.getEmotes()[1].name).to.equal('confused');
    expect(emotes.getEmotes()[1].keys).to.deep.equal(['?_?']);
    expect(emotes.getEmotes()[1].emoji).to.equal('🤔');
    expect(emotes.getEmotes()[1].desc).to.equal('A confused emote.');
  });

  it('should extend the emotes list', () => {
    emotes.extends([
      {
        name: 'happy',
        keys: ['B)', 'B-)'],
        emoji: '😎',
        desc: 'A happy emote.'
      }
    ]);
    expect(emotes.getEmotes()).to.have.lengthOf(3);
    expect(emotes.getEmotes()[2].name).to.equal('happy');
    expect(emotes.getEmotes()[2].keys).to.deep.equal(['B)', 'B-)']);
    expect(emotes.getEmotes()[2].emoji).to.equal('😎');
    expect(emotes.getEmotes()[2].desc).to.equal('A happy emote.');
  });

  it('should exclude emotes from the list', () => {
    emotes.exclude(['happy', 'sad']);
    expect(emotes.getEmotes()).to.have.lengthOf(1);
    expect(emotes.getEmotes()[0].name).to.equal('confused');
    expect(emotes.getEmotes()[0].keys).to.deep.equal(['?_?']);
    expect(emotes.getEmotes()[0].emoji).to.equal('🤔');
    expect(emotes.getEmotes()[0].desc).to.equal('A confused emote.');
  });

  it('should remove a specific emote from the list', () => {
    emotes.removeEmote('confused');
    expect(emotes.getEmotes()).to.have.lengthOf(0);
  });

  it('should get a specific emote', () => {
    emotes.addEmote('laugh', [':v'], '😂', 'A laughing emote.');
    let emote = emotes.getEmote('laugh');
    expect(emote.keys).to.deep.equal([':v']);
    expect(emote.emoji).to.equal('😂');
    expect(emote.desc).to.equal('A laughing emote.');
  });
}); 