class Storage {
  _getKanbanItems() {
    const kanbanItems = localStorage.getItem('kanban-items');
    return JSON.parse(kanbanItems);
  }

  _saveKanbanItem(item_name, category) {
    const kanbanItems = this._getKanbanItems() || [];

    kanbanItems.push({
      id: Math.floor(Math.random() * 10000000000),
      item_name,
      category,
    });

    localStorage.setItem('kanban-items', JSON.stringify(kanbanItems));
  }

  _modifyKanbanItem(id, item_name, category) {
    const kanbanItems = this._getKanbanItems() || [];
    const kanbanItem = kanbanItems.find((item) => item.id === id);

    if (kanbanItem) {
      kanbanItem.item_name = item_name;
      kanbanItem.category = category;
    }

    localStorage.setItem('kanban-items', JSON.stringify(kanbanItems));
  }

  _removeKanbanItem(id) {
    const kanbanItems = this._getKanbanItems() || [];
    const itemIndex = kanbanItems.findIndex((item) => item.id === id);

    kanbanItems.splice(itemIndex, 1);

    localStorage.setItem('kanban-items', JSON.stringify(kanbanItems));
  }
}

const storage = new Storage();

export default storage;
