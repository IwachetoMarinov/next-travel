interface IProps {
  title: string;
  styleCLass: string | undefined | null;
}

const Heading = ({ title, styleCLass }: IProps) => {
  return (
    <h2 className={`text-2xl text-center capitalize ${styleCLass && styleCLass}`}>
      {title}
    </h2>
  );
};

export default Heading;
