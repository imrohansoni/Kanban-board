class View {
  //   constructor() {}

  _renderKanbanBoard(root, kanbanItems) {
    const plannedItems = kanbanItems.filter(
      (item) => item.category === 'planned'
    );
    const inProgressItems = kanbanItems.filter(
      (item) => item.category === 'in-progress'
    );
    const pendingItems = kanbanItems.filter(
      (item) => item.category === 'pending'
    );
    const stuckItems = kanbanItems.filter((item) => item.category === 'stuck');
    const completedItems = kanbanItems.filter(
      (item) => item.category === 'completed'
    );

    const html = `
      <div class="board">
            <div class="planned group">
                <div class="heading-container">
                    <h1 class="group-heading"> planned &nbsp;<i class="far fa-clipboard"></i></h1>
                </div>
                <div class="card-container">
                ${plannedItems
                  .map(
                    (item) =>
                      `<div class="card" draggable="true" data-id="${item.id}">
                        <button class="btn--dlt">
                            <i class="fas fa-times"></i>
                        </button>
                        <p class="card-item">${item.item_name}</p>
                    </div>`
                  )
                  .join('')}
                </div>
                <div class="btn-container">
                    <button class="btn">add item +</button>
                </div>
            </div>
            <div class="in-progress group">
                <div class="heading-container">
                    <h1 class="group-heading">in progress &nbsp;<i class="fas fa-hourglass-half"></i></h1>
                </div>


                <div class="card-container">

                ${inProgressItems
                  .map(
                    (item) =>
                      `<div class="card" draggable="true" data-id="${item.id}">
                        <button class="btn--dlt">
                            <i class="fas fa-times"></i>
                        </button>
                        <p class="card-item">${item.item_name}</p>
                    </div>`
                  )
                  .join('')}
                </div>
                <div class="btn-container">
                    <button class="btn">add item +</button>
                </div>
            </div>
            <div class="stuck group">

                <div class="heading-container">
                    <h1 class="group-heading">stuck &nbsp;<i class="fas fa-exclamation-triangle"></i></h1>
                </div>
                <div class="card-container">
                 ${stuckItems
                   .map(
                     (item) =>
                       `<div class="card" draggable="true" data-id="${item.id}">
                        <button class="btn--dlt">
                            <i class="fas fa-times"></i>
                        </button>
                        <p class="card-item">${item.item_name}</p>
                    </div>`
                   )
                   .join('')}
                </div>

                <div class="btn-container">
                    <button class="btn">add item +</button>
                </div>

            </div>
            <div class="completed group">
                <div class="heading-container">
                    <h1 class="group-heading">completed&nbsp;&nbsp;<i class="fas fa-flag"></i></h1>
                </div>

                <div class="card-container">
                 ${completedItems
                   .map(
                     (item) =>
                       `<div class="card" draggable="true" data-id="${item.id}">
                        <button class="btn--dlt">
                            <i class="fas fa-times"></i>
                        </button>
                        <p class="card-item">${item.item_name}</p>
                    </div>`
                   )
                   .join('')}
                </div>

                <div class="btn-container">
                    <button class="btn">add item +</button>
                </div>
            </div>
            <div class="pending group">
                <div class="heading-container">
                    <h1 class="group-heading">pendings&nbsp;&nbsp;<i class="fas fa-calendar-day"></i></h1>
                </div>

                <div class="card-container">
                    ${pendingItems
                      .map(
                        (item) =>
                          `<div class="card" draggable="true" data-id="${item.id}">
                        <button class="btn--dlt">
                            <i class="fas fa-times"></i>
                        </button>
                        <p class="card-item">${item.item_name}</p>
                    </div>`
                      )
                      .join('')}
                </div>

                <div class="btn-container">
                    <button class="btn">add item +</button>
                </div>
            </div>
        </div>
      `;
    root.insertAdjacentHTML('afterbegin', html);
  }
}

export default new View();
