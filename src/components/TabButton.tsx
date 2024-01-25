import "./TabButton.scss";

interface Props {
  children: string;
  onSelect: any;
  isActive: boolean;
}

export default function TabButton({ children, onSelect, isActive }: Props) {
  return (
    <li>
      <button className={isActive ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
