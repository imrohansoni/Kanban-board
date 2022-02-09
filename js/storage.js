class Storage {
  // FUNCTIONS
  // _getKanbanItems(), _deleteKanbanItem(), _saveKanbanItem(), _updateKanbanItem();

  _getKanbanItems() {
    const kanbanItems = localStorage.getItem('kanban-items');
    return JSON.parse(kanbanItems);
  }

  _saveKanbanItem(itemText, category) {
    const kanbanItems = this._getKanbanItems() || [];

    const id = Math.floor(Math.random() * 10000000000);

    kanbanItems.push({
      id,
      itemText,
      category,
    });

    this._updateLocalStorage(kanbanItems);
  }

  _updateKanbanItem(id, itemText) {
    const kanbanItems = this._getKanbanItems() || [];
    const kanbanItem = kanbanItems.find((item) => item.id === +id);

    if (kanbanItem) {
      kanbanItem.itemText = itemText;
    }
    this._updateLocalStorage(kanbanItems);
  }

  _removeKanbanItem(id) {
    const kanbanItems = this._getKanbanItems() || [];
    const itemIndex = kanbanItems.findIndex((item) => item.id === +id);

    if (!itemIndex > -1) {
      return;
    }

    kanbanItems.splice(itemIndex, 1);

    this._updateLocalStorage(kanbanItems);
  }

  _updateLocalStorage(kanbanItems) {
    localStorage.setItem('kanban-items', JSON.stringify(kanbanItems));
  }
}

const storage = new Storage();

export default storage;
