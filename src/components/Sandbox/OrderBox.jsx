import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Initial data
const initialBlocks = [
  {
    id: "1",
    content: "Block 1",
  },
  {
    id: "2",
    content: "Block 2",
  },
  {
    id: "3",
    content: "Block 3",
  },
];

function MyComponent() {
  // Set initial blocks in the state
  const [blocks, setBlocks] = useState(initialBlocks);

  const handleOnDragEnd = (result) => {
    // Dropped outside the list
    if (!result.destination) {
      return;
    }

    // Dropped inside the list
    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update the state with new order
    setBlocks(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="blocks" direction="horizontal">
        {(provided) => (
          <div
            className="container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {blocks.map(({ id, content }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <div
                    className="block"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default MyComponent;
