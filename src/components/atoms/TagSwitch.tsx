import './TagTogglable.scss';
import React from 'react';

interface TagSwitchProps {
  onToggle?: (selected: boolean) => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const TagSwitch = ({
  onToggle,
  className = '',
  size = 'medium',
  children,
}: TagSwitchProps) => {
  const [selected, setSelected] = React.useState(false);
  const onClick = () => {
    setSelected(!selected);
    onToggle?.(selected);
  };

  return (
    <button
      onClick={onClick}
      className={
        className +
          ' border d-inline-flex align-items-center tag-togglable animated' +
          (selected ? ' active' : '') +
          size || ''
      }
    >
      <span>{children}</span>
      <span className="plus animated" />
    </button>
  );
};

export default TagSwitch;
