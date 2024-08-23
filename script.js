function showIntroduction() {
    const name = document.getElementById('nameInput').value.toLowerCase();
    const output = document.getElementById('output');

    if (name === "misha") {
        output.innerHTML = `Hello, Misha! You're incredibly important to me. We have shared so many memories, and our bond is unbreakable. You're the friend who truly understands me. Bhai website ta kemon hoise? Tore ar ki komu ,, tui amr bestfrnd more than kisu judi thake oita. so etto time nai amr , tore niye likhte gele 1000 code hoiya jaibo. `;
    } else if (name === "shemonty") {
        output.innerHTML = `Hello, Shemonty! My dear sister, you bring joy into my life. You're someone I can always count on, and I'm so grateful for you.`;
    } else if (name === "samiya") {
        output.innerHTML = `Hello, Samiya! You're my partner. Our friendship is a special one, and I cherish every moment we've shared. Amra kinto pharmaceutical or ki bole medicine r business korbo oije livlihood e likhsilam`;
    } else if (name === "tasneem") {
        output.innerHTML = `Hello, Tasneem! You're a grat chapabaz! Mane tumi holo zayan r student. Btw chapa ekhtu kom marba ar hae tumi amder jiju naki bhai bolba kinto...`;
    } else if (name === "jawad") {
        output.innerHTML = `Hello, Jawad! You're a unique person, and our interactions have left a lasting impact on me. Seidin ja hoyesilo oita ami asholei bolte chainai tokhon immature chilam tai frnds der kothau dare palon korte gesilam. Onk misunderstand hoisilo tokhon valo kore je bujai bolbo tao parini. Hope you will understand! One thing that i never had even a little feelings for you! It was a remour. I wish you all the best.`;
    } else if (name === "mumtahina") {
        output.innerHTML = `Hello, Mumtahina! You're my frnd. Your happiness is important to me, always present niya vabba emon kisu korba jeta good memories hobe and in future you can smile by remebering that emeories and I hope life brings you nothing but joy.`;
    } else if (name === "nazia") {
        output.innerHTML = `Hello, Nazia! You're my buddy.  Edit to valoi koros amre niya o ekhta edit koris valo deikha bujsos,, ar game khela bad diya porte boi.`;
    } else if (name === "wasika") {
        output.innerHTML = `Hello, Wasika! Our friendship is one of a kind. From study sessions to inside jokes, mone asesalam sir r bashay koto moja kortam.....`;
    } else {
        output.innerHTML = 'Please enter your name to receive a personalized message.';
    }
}
