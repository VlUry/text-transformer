export default class TransformText {
  constructor(text) {
    this.text = text.trim().split("");
    this.symbols = [
      ",",
      ".",
      "!",
      "?",
      ":",
      ";",
      "<",
      ">",
      "=",
      "+",
      "-",
      "/",
      "*",
    ];
  }

  #firstLetterTransforming(text) {
    while (this.symbols.includes(text[0]) || text[0] === " ") {
      text.shift();
    }
  }

  #spaceTransforming(text, letter, index) {
    if (letter !== " ") {
      return letter;
    }
    if (this.symbols.includes(text[index + 1]) || text[index + 1] === " ") {
      return "";
    } else {
      return letter;
    }
  }

  #symbolTransforming(text, letter, index) {
    if (!this.symbols.includes(letter)) {
      return letter;
    }
    if (!text[index + 1] !== " " && !this.symbols.includes(text[index + 1])) {
      return (letter += " ");
    } else if (this.symbols.includes(text[index + 1])) {
      return "";
    } else if (index === text.length - 1) {
      return ".";
    } else {
      return letter;
    }
  }

  #letterCaseTransforming(text, letter, index) {
    if (this.symbols.includes(letter) || letter === " ") {
      return letter;
    }
    if (text[index - 2] === "." || text[index - 1] === ". ") {
      return letter.toUpperCase();
    } else if (index === 0) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  }

  #dotAdd(text) {
    if (text[text.length - 1] === ".") {
      return;
    }
    if (this.symbols.includes(text[text.length - 1].trim())) {
      text[text.length - 1] = ".";
      return text;
    } else {
      text = [...text, "."];
      return text;
    }
  }

  textTransforming() {
    // start
    console.log("start", this.text);

    this.#firstLetterTransforming(this.text);

    // first letter
    console.log("first letter", this.text);

    this.text = this.text
      .map((letter, index) => {
        return this.#spaceTransforming(this.text, letter, index);
      })
      .filter((letter) => letter !== "");

    // spases
    console.log("spaces", this.text);

    this.text = this.text
      .map((letter, index) => {
        return this.#symbolTransforming(this.text, letter, index);
      })
      .filter((letter) => letter !== "");

    // symbols
    console.log("symbols", this.text);

    this.text = this.text.map((letter, index) => {
      return this.#letterCaseTransforming(this.text, letter, index);
    });

    // case
    console.log("case", this.text);

    this.text = this.#dotAdd(this.text);

    // final
    console.log("final", this.text);

    return this.text.join("");
  }
}
