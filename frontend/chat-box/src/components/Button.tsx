interface Props {
  name: string;
  styleClass: string;
}

const Button = ({name, styleClass}: Props) => {
  return <div className={`${styleClass}`}>{name}</div>;
};

export default Button;
