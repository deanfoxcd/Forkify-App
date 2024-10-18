import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './view.js';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet';
  _message = '';

  addHandlerRender(handlerF) {
    window.addEventListener('load', handlerF);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
