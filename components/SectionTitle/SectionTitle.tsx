import "@/sass/components/SectionTitle.scss";

interface ISectionTitle {
  text: string;
}

const SectionTitle = ({ text }: ISectionTitle) => {
  return (
    <div className="section__title">
      <h2 className="section__title__heading">{text}</h2>
    </div>
  );
};

export default SectionTitle;
