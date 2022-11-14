<a name="readme-top"></a>

Vocabulary Extender

## Table of Contents

- [About The Project](#about-the-project)
- [Project Spec](#project-spec)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Reflections](#reflections)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

This app is designed to help the every day user extend their vocabulary, by searching the Thesaurus for synonyms and antonyms.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Spec

The Vocabulary Extender (module 3 showcase project) was built in week 17 of [Turing School of Software and Design](https://turing.edu/) front-end engineering program. The goals of this [solo project](https://frontend.turing.edu/projects/module-3/showcase.html) were to:

EDIT BELOW AS NEEDED BASED ON SPEC
- Utilize React and React Router
- Test the UI/UX using Cypress
- Utilize Lighthouse and Wave for accessibility
- Make network requests to API endpoints to retrieve and manipulate data
- Implement error handling

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

You can find the project [here](https://github.com/willhobson85/vocabulary-extender) and follow the instructions below to get started.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:willhobson85/vocabulary-extender.git
   ```
2. Install NPM packages
   ```sh
   npm install
   npm start
   ```
3. Explore the website.

You can also view the deployed link [here](https://vocabulary-extender.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

![VocabularyExtender](https://user-images.githubusercontent.com/99286590/201572382-c38664c4-8d3a-47c4-a407-acef70fbbe58.gif)

Future Features:
- Implement a local storage to save cards upon refresh.
- Create an option to change the font for easier reading.
- Implement a way for users to check their spelling before searching.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

I utilized testing to create a smooth user experience using [Cypress](https://www.cypress.io/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Reflections

I thought this would be an easy and straightforward project to complete. While the functionality is simple, I was not expecting the API data to be as complicated as it was. I decided to return up to four parts of speech for each word (adjective, noun, verb, and adverb). The most challenging part of the project was getting the cards to display if they did not have one of the parts of speech, as I was getting errors rendering the data, and kept running into road blocks with my conditional rendering. This was also my first time writing Routers without a partner, which created a bit of frustration, but was very satisfying when it was completed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

![Contributors][contributors-shield]

Will Hobson - [LinkedIn](https://www.linkedin.com/in/the-william-hobson/) [GitHub](https://github.com/willhobson85)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

The following resources helped us build this project:

[![MDN Docs][mdn-shield]][mdn]
[![Turing School](https://img.shields.io/badge/Turing_School-030303?style=for-the-badge)](https://turing.edu/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[mdn-shield]: https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white
[mdn]: https://developer.mozilla.org/en-US/
[contributors-shield]: https://img.shields.io/badge/Contributors-1-2ea44f?style=for-the-badge
