"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Swatch } from "@/types/color";
import { SingleSwatch } from "./SingleSwatch";

interface SwatchStripProps {
  swatches: Swatch[];
  onReorder: (swatches: Swatch[]) => void;
  onToggleLock: (id: string) => void;
  onUpdateColor: (id: string, hex: string) => void;
}

export function SwatchStrip({ swatches, onReorder, onToggleLock, onUpdateColor }: SwatchStripProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = swatches.findIndex((s) => s.id === active.id);
      const newIndex = swatches.findIndex((s) => s.id === over.id);
      onReorder(arrayMove(swatches, oldIndex, newIndex));
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
        <SortableContext
          items={swatches.map((s) => s.id)}
          strategy={typeof window !== 'undefined' && window.innerWidth < 768
            ? verticalListSortingStrategy
            : horizontalListSortingStrategy
          }
        >
          {swatches.map((swatch) => (
            <SingleSwatch
              key={swatch.id}
              swatch={swatch}
              onToggleLock={onToggleLock}
              onUpdateColor={onUpdateColor}
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}
