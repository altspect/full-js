export class App {
  #title = 'page title';
  #items = [];

  constructor() {
    console.log('yo');
    this.loadItems();
  }

  loadItems() {
    console.log('loading items');
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
        'X-RapidAPI-Key': '05ad341318mshb299bb89467e000p10b570jsnd428b1f739f4'
      }
    };
    const quote = fetch('https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  render() {
    document.body.innerHTML = `
    <section>
      <h1></h1>
    </section>`
  }
}
