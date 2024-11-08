interface IProps {
  title: string;
  styleCLass: string | undefined | null;
}

const MainHeader = ({ title, styleCLass }: IProps) => {
  return (
    <h1 className={`text-3xl text-center ${styleCLass && styleCLass}`}>
      {title}
    </h1>
  );
};

export default MainHeader;
