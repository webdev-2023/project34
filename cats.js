/* Requirement Statement: Write a program that will randomly generate GIFs of cats!
    ○ Use the following API URL to fetch a random gif of a cat:
        http://thecatapi.com/api/images/get?format=src&type=gif
    ○ Ensure that you make use of async/await and not a promise when fetching the API.
    ○ Please only output the image URL in the console
 
 */

// using arrow function to create an async function catGif()
const catGif = async () => {
    let res = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif")           // await for fecth (promise) to complete and send back the response
    console.log(`Cat GIF URL: \n${res.url}`)                                                   // it returns parsed data, thus no need for res.json()
}

catGif()
console.log("this prints first")
