"use client";

import { ReactNode } from "react";

type RepeatableListProps<T> = {
  label: string;
  items: T[];
  onChange: (items: T[]) => void;
  emptyItem: T;
  renderItem: (item: T, onItemChange: (item: T) => void) => ReactNode;
};

export default function RepeatableList<T>({ label, items, onChange, emptyItem, renderItem }: RepeatableListProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-text-muted">{label}</span>

      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex-1">
              {renderItem(item, (updated) => {
                const next = [...items];
                next[index] = updated;
                onChange(next);
              })}
            </div>
            <button
              type="button"
              onClick={() => onChange(items.filter((_, i) => i !== index))}
              className="rounded-sm border border-border px-2 py-2 text-xs text-text-muted hover:text-text"
              aria-label={`Remove ${label} item`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onChange([...items, emptyItem])}
        className="w-fit rounded-sm border border-border px-3 py-1.5 text-xs text-text-muted hover:text-text"
      >
        + Add
      </button>
    </div>
  );
}
