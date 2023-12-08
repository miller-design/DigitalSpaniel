# Project: SpaceCowboy 🤠

Project 'SpaceCowboy 🤠' is a Next.js boilerplate, serving as an excellent starting point for well-structured, opinionated projects. It provides the essential configurations, libraries, and project organization needed to kickstart your development.

This project is based on Next.js v14 and currently uses the 'app' directory, although the 'pages' directory can still be added and used as needed.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

when starting up the project be sure to run:

```
npm install / bun install
```

## Usage

to run the project in development mode use:

```
 npm run dev / bun run dev
```

to run the project in production mode use:

```
 npm run build && npm run start / bun run build && bun run start
```

## Features

This boilerplate contains a nuber of useful features for developing your project.

**LazyImage**: Lazy image component leverages the next image component but also adds in an intrinisc image layer helping prevent the document flow from shifting during the page load/render

**Scss/Css vars**: in the \_config.scss file you will see a variable named: "$css-variables". This variable helps create resuable css vars for the entire project.
To create a new css variable simply add a new var to the scss map like so:

```
	$css-variables: (
		...
		site-color: (
			xsmall: #f0f0,
			medium: #f00,
			large: #ff0
		)
	);
```

This will generate you a new css var called "--project-site-color". The reason for adding the breakpoint refernces in, is this helps us create css vars that get updated based on the screen size. This eliminates the need for you as a developer to then manually update these.

**Breakpoints**: this project uses [include-media](https://eduardoboucas.github.io/include-media/) its a straight forward and easy to use package.

**Video**: Boilerplate is set up to use [ReactPlayer](https://github.com/CookPete/react-player) its been set up with the idea of using [Mux](https://www.mux.com/) to handle all video hosting.

**Animations**: coming soon... 🔨

# License

This project is licensed under the MIT License.
