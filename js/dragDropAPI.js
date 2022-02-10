export default class DragDropAPI {
  constructor(root, changeCategory) {
    this.root = root;
    this.changeCategory = changeCategory;
    this.dragCard = undefined;
  }

  _addDragHandler() {
    const cards = Array.from(this.root.querySelectorAll('.card'));
    cards.forEach((card) => {
      card.addEventListener('drag', (e) => {
        e.preventDefault();
        this.dragCard = card;
        card.remove();
      });

      card.addEventListener('dragend', (e) => {
        e.preventDefault();
      });
    });
  }

  _addContainerHandler() {
    const cardContainers = Array.from(
      this.root.querySelectorAll('.card-container')
    );

    cardContainers.forEach((container) => {
      container.addEventListener('dragover', (e) => {
        e.preventDefault();
        container.classList.add('dragover');
      });

      container.addEventListener('dragleave', (e) => {
        e.preventDefault();
        container.classList.remove('dragover');
      });

      container.addEventListener('dragenter', (e) => {
        e.preventDefault();
      });

      container.addEventListener('drop', (e) => {
        e.preventDefault();
        container.classList.remove('dragover');
        container.append(this.dragCard);
        this.changeCategory(
          this.dragCard.dataset.id,
          container.dataset.category
        );
      });
    });
  }
}
