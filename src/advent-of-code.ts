import { day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12 } from "./days";

async function main() {
  const day = process.argv[2];
  const part = process.argv[3];

  switch (day) {
    case "1": {
      switch (part) {
        case "a":
          return await day1.partA();
        case "b":
          return await day1.partB();
      }
      break;
    }
    case "2": {
      switch (part) {
        case "a":
          return await day2.partA();
        case "b":
          return await day2.partB();
      }
      break;
    }
    case "3": {
      switch (part) {
        case "a":
          return await day3.partA();
        case "b":
          return await day3.partB();
      }
      break;
    }
    case "4": {
      switch (part) {
        case "a":
          return await day4.partA();
        case "b":
          return await day4.partB();
      }
      break;
    }
    case "5": {
      switch (part) {
        case "a":
          return await day5.partA();
        case "b":
          return await day5.partB();
      }
      break;
    }
    case "6": {
      switch (part) {
        case "a":
          return await day6.partA();
        case "b":
          return await day6.partB();
      }
      break;
    }
    case "7": {
      switch (part) {
        case "a":
          return await day7.partA();
        case "b":
          return await day7.partB();
      }
      break;
    }
    case "8": {
      switch (part) {
        case "a":
          return await day8.partA();
        case "b":
          return await day8.partB();
      }
      break;
    }
    case "9": {
      switch (part) {
        case "a":
          return await day9.partA();
        case "b":
          return await day9.partB();
      }
      break;
    }
    case "10": {
      switch (part) {
        case "a":
          return await day10.partA();
        case "b":
          return await day10.partB();
      }
      break;
    }
    case "11": {
      switch (part) {
        case "a":
          return await day11.partA();
        case "b":
          return await day11.partB();
      }
      break;
    }
    case "12": {
      switch (part) {
        case "a":
          return await day12.partA();
        case "b":
          return await day12.partB();
      }
      break;
    }
  }
}

main();
