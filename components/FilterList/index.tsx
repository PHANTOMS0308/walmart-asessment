export interface FilterListProps {
  items: Array<{ id: number; name: string }>;
  selectedItemId: number | null;
  onSelect: (id: number) => void;
}

export default function FilterListProps(props: FilterListProps) {
  const { items, selectedItemId, onSelect } = props;

  return (
    <ul className="w-full text-xl space-y-4 py-4">
      {items.map(({ id, name }) => (
        <li key={id}>
          <button
            className={`btn w-full ${
              selectedItemId === id ? "text-red-400 outline-red-400" : ""
            }`}
            onClick={() => onSelect(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
