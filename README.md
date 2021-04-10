# 🥒➡️📄 Gherkin To Docs

Turn your project's gherkin files into simple documentation.

[See how sample documentation looks like.](https://pietmichal.github.io/gherkin-to-docs/example)

## Motivation

I wanted my gherkin files to be available in the most accessible way in my team.

Existing solutions at the time were mostly focused around reporting or tried to be a swiss army knife with monetisation on top of it.

HTML output with simple navigation and clear content solves the problem in my case.

Also, I needed an excuse to work with Deno.

## Usage

1. Download the executable.
2. Put the executable in your project's root directory. It'll look up all `*.feature` files recursively.
3. Run the executable.
4. Open `index.html` file which is located in `output` directory,

## Development

1. Install [Deno](https://deno.land)
2. Run `deno run --allow-read --allow-write --unstable main.ts` to run the program.

### Compiling to single executable

`deno compile --allow-read --allow-write --unstable main.ts`
