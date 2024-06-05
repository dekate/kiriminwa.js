# KiriminWa

## Table Of Contents
- [KiriminWa](#kiriminwa)
  - [Table Of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)

## Description

Official wrapper for kiriminwa.id

## Installation

```bash
npm install @dekate/kiriminwa
```

## Usage

```js
import KiriminWa from "@dekate/kiriminwa.js"
// or
const { KiriminWa } = require('@dekate/kiriminwa.js')

const instance = new KiriminWa('YOUR-TOKEN-HERE')

// you can now access undelying service
// ex.
instance.whatsapp.send({
  number: "628XXXXXXXXXX",
  message: "Hello World!"
})
```

you can check out [examples](https://github.com/dekate/kiriminwa.js/tree/main/examples) for more comprehensive samples.