"use client";

import clsx from "clsx";

type FilterChipsProps = {
  items: readonly string[];
  selected: string;
  onSelect: (value: string) => void;
};

export function FilterChips({ items, selected, onSelect }: FilterChipsProps) {
  return (
    <div className="chips" role="tablist" aria-label="Filter options">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          role="tab"
          aria-selected={selected === item}
          className={clsx("chip", selected === item && "is-active")}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}


