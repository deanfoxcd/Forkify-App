class SearchView {
  _parentEl = document.querySelector('.search');

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  getQuery() {
    return this._parentEl.querySelector('.search__field').value;
  }

  addHandlerSearch(handlerF) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handlerF();
      this._clearInput();
    });
  }
}

export default new SearchView();
