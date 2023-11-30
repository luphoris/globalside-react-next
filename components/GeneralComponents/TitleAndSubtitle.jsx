const TitleAndSubtitleCard = ({
  title,
  subtitle,
  containerClassName,
  Icon,
  titleClassName,
  subTitleClassName,
}) => {
  return (
    <div className={containerClassName}>
      <div className="flex w-10 h-10 rounded-md bg-gray-200 shadow-sm justify-center items-center">
        {Icon && <Icon />}
      </div>
      <div className="flex justify-between items-center">
        <div className="leading-4 ml-2">
          <h4
            className={
              titleClassName ? titleClassName : "font-roboto text-black"
            }
          >
            {title}
          </h4>
          <span
            className={
              subTitleClassName
                ? subTitleClassName
                : "text-xs text-sky-600 font-roboto"
            }
          >
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleAndSubtitleCard;
