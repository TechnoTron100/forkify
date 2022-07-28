import previewView from './previewView';
import View from './view';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found from your search...';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
