//!  121822.0830        VARIABLES

//!  121822.0826        FUNCTIONS

const init = function () {
    
  main();
};

window.onload = function () {
  init();
};

//!  123122.1839        MAIN

const main = function () {
  //!  10123.1609  variables

  const buttonElement = document.querySelector("#search");
  const inputElement = document.querySelector("#inputValue");

    const searchURLOne = "https://api.themoviedb.org/3";
    let searchMajorCategoryTwo = "/search/movie";
    const searchPrefixThree = "?api_key=";
    const searchAPI_KEYFour = "ca1f26ba6eb2ba4fb641257b39d3bea7";
    const searchQueryPrefixFive = "&query=";
    let searchQuerySubjectSix = "furious";
    const searchPagePrefixSeven = "&page=";
    let searchPageEight = 1;



  //!  10123.1609 functions

  buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;
    searchQuerySubjectSix = value;
    console.log(value);
    makeSearchAPI_URL();

    fetch(makeSearchAPI_URL())
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  function makeSearchAPI_URL() {
    let searchAPI_URL =
      searchURLOne +
      searchMajorCategoryTwo +
      searchPrefixThree +
      searchAPI_KEYFour +
      searchQueryPrefixFive +
      searchQuerySubjectSix +
      searchPagePrefixSeven +
      searchPageEight;
    console.log(`${searchAPI_URL}`);
    return searchAPI_URL
  }

  //!  10123.161 0  main body

  //!  123122.1839  END
};
