export default class View {
  constructor(root, handlers) {
    this.root = root;
    this.addNewItem = handlers.addNewItem;
    this.updateCardText = handlers.updateCardText;
    this.deleteItem = handlers.deleteItem;
  }

  _renderKanbanBoard(kanbanItems) {
    this.root.innerHTML = ``;
    const html = `
      <div class="board">
            <div class="planned group">
                <div class="heading-container">
                    <h1 class="group-heading"> planned &nbsp;<i class="far fa-clipboard"></i></h1>
                </div>
                <div class="card-container" data-category="planned">
                    ${kanbanItems
                      ?.filter((item) => item.category === 'planned')
                      .map(
                        (item) =>
                          `<div class="card" draggable="true" data-id="${item.id}">
                            <button class="btn btn--dlt">
                                <i class="fas fa-times"></i>
                            </button>
                            <p contenteditable class="card-text">${item.itemText}</p>
                        </div>`
                      )
                      .join('')}
                </div>
                <div class="btn-container">
                    <button class="btn btn--add-item" data-category="planned">add +</button>
                </div>
            </div>
            <div class="in-progress group">
                <div class="heading-container">
                    <h1 class="group-heading">in progress &nbsp;<i class="fas fa-hourglass-half"></i></h1>
                </div>
                <div class="card-container" data-category="in-progress">
                    ${kanbanItems
                      ?.filter((item) => item.category === 'in-progress')
                      .map(
                        (item) =>
                          `<div class="card" draggable="true" data-id="${item.id}">
                            <button class="btn btn--dlt">
                                <i class="fas fa-times"></i>
                            </button>
                            <p contenteditable class="card-text">${item.itemText}</p>
                        </div>`
                      )
                      .join('')}
                </div>
                <div class="btn-container">
                    <button class="btn btn--add-item" data-category="in-progress">add +</button>
                </div>
            </div>
            <div class="stuck group">

                <div class="heading-container">
                    <h1 class="group-heading">stuck &nbsp;<i class="fas fa-exclamation-triangle"></i></h1>
                </div>
                <div class="card-container" data-category="stuck">
                    ${kanbanItems
                      ?.filter((item) => item.category === 'stuck')
                      .map(
                        (item) =>
                          `<div class="card" draggable="true" data-id="${item.id}">
                           <button class="btn btn--dlt">
                               <i class="fas fa-times"></i>
                           </button>
                           <p contenteditable class="card-text">${item.itemText}</p>
                       </div>`
                      )
                      .join('')}
                </div>

                <div class="btn-container">
                    <button class="btn btn--add-item" data-category="stuck">add +</button>
                </div>

            </div>
            <div class="completed group">
                <div class="heading-container">
                    <h1 class="group-heading">completed&nbsp;&nbsp;<i class="fas fa-flag"></i></h1>
                </div>

                <div class="card-container" data-category="completed">
                    ${kanbanItems
                      ?.filter((item) => item.category === 'completed')
                      .map(
                        (item) =>
                          `<div class="card" draggable="true" data-id="${item.id}">
                           <button class="btn btn--dlt">
                               <i class="fas fa-times"></i>
                           </button>
                           <p contenteditable class="card-text">${item.itemText}</p>
                       </div>`
                      )
                      .join('')}
                </div>

                <div class="btn-container">
                    <button class="btn btn--add-item" data-category="completed">add +</button>
                </div>
            </div>
            <div class="pending group">
                <div class="heading-container">
                    <h1 class="group-heading">pendings&nbsp;&nbsp;<i class="fas fa-calendar-day"></i></h1>
                </div>

                <div class="card-container" data-category="pending">
                    ${kanbanItems
                      ?.filter((item) => item.category === 'pending')
                      .map(
                        (item) =>
                          `<div class="card" draggable="true" data-id="${item.id}">
                        <button class="btn btn--dlt">
                            <i class="fas fa-times"></i>
                        </button>
                        <p contenteditable class="card-text">${item.itemText}</p>
                    </div>`
                      )
                      .join('')}
                </div>

                <div class="btn-container">
                    <button class="btn btn--add-item" data-category="pending">add +</button>
                </div>
            </div>
        </div>
      `;
    this.root.insertAdjacentHTML('afterbegin', html);

    this._addItemHandler();
    this._addTextHandler();
    this._deleteItemHandler();
  }

  _addTextHandler() {
    const cardText = this.root.querySelectorAll('.card-text');
    cardText.forEach((text) =>
      text.addEventListener('blur', (e) => {
        this.updateCardText(
          e.target.closest('.card').dataset.id,
          text.textContent
        );
      })
    );
  }

  _deleteItemHandler() {
    const dltBtn = Array.from(this.root.querySelectorAll('.btn--dlt'));
    dltBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.deleteItem(e.target.closest('.card').dataset.id);
      });
    });
  }

  _addItemHandler() {
    const addItemBtn = Array.from(this.root.querySelectorAll('.btn--add-item'));

    addItemBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const template = 'add work 🤖';
        this.addNewItem(template, btn.dataset.category);
      });
    });
  }
}
