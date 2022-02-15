// 1: proper case
const properCase = str =>
  `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

// 2: log
const log = content => console.log(content);

log(properCase("mArIO"));

// 3: query selector
