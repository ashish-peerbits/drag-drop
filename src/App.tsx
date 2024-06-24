import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


export default function App() {

  return (
    <div>
      <DragAndDropList />
    </div>
  )
}


function DragAndDropList() {
  const [list, setList] = useState(data)

  const handleDragEnd = (result: any) => {
    console.log(result)
    const { destination, source, draggableId } = result
    if (!destination) return

    if (destination.draggableId == source.draggableId && destination.index == source.index){
      return 
    }

    
  }
  const reorder = () => {

  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>

      <Droppable type='list' droppableId="list#droppable12" direction='vertical'>
        {(provided) => (
          <div
            key="listdroppable"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >

            {list.map((item, index) => (
              <Draggable key={item.id} draggableId={(item.id)} index={index} >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div style={{ width: '200px', height: '30px', border: '1px solid', padding: '5px', pointerEvents: 'none' }}>{item.name}</div>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </DragDropContext>
  )
}

const data = [
  { id: 'a-1', name: 'node' },
  { id: 'a-2', name: 'react' },
  { id: 'a-3', name: 'bun' },
  { id: 'a-4', name: 'next' },
  { id: 'a-5', name: 'typescript' },
  { id: 'a-6', name: 'html' },
]

