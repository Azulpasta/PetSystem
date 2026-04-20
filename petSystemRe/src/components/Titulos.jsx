const Typography = ({ variant = "p", children }) => {
  const styles = {
    h1: "text-[#7E22CE] text-center font-bold text-[48px]",
    h2: "text-[24px] font-bold text-black font-inter",
    h3: "text-[20px] font-medium text-black font-inter",
    p: "text-[18px] font-normal text-black font-inter",
    small: "text-[14px] font-extralight text-black font-inter",
  };

  const Tag = variant === "p" ? "p" : variant;

  return <Tag className={styles[variant]}>{children}</Tag>;
};

export default Typography;