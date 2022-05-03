import './app';

class App {
  #title = 'page title';
  #items = [];

  loadItems() {
    
  }

  render() {
    document.body.innerHTML = `
    <section>
      <h1>`${App.title}`</h1>
    </section>`
  }
}
