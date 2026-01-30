import { cn } from '@/lib/utils';

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn('filter-chip', active && 'filter-chip-active')}
    >
      {label}
    </button>
  );
}

interface FilterGroupProps {
  label: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string | null) => void;
}

export function FilterGroup({ label, options, selected, onSelect }: FilterGroupProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="All"
          active={selected === null}
          onClick={() => onSelect(null)}
        />
        {options.map((option) => (
          <FilterChip
            key={option}
            label={option}
            active={selected === option}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}
