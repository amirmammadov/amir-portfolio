import Link from "next/link";
import Image from "next/image";

interface IEducation {
  id: number;
  name: string;
  field: string;
  degree?: string;
  image: string;
  link: string;
  gpa: number;
}

const EducationItem = ({ education }: { education: IEducation[] }) => {
  return (
    <div className="education__content">
      {education.map((educationItem) => {
        return (
          <div key={educationItem.id} className="education__content__item">
            <div className="education__content__item__logo">
              <Image
                src={`/assets/${educationItem.image}`}
                alt="uni"
                width={655}
                height={340}
                className="education__content__item__logo__img"
              />
            </div>
            <div className="education__content__item__info">
              {educationItem.degree && (
                <h3 className="education__degree">{educationItem.degree}</h3>
              )}
              <Link
                href={educationItem.link}
                target="_blank"
                className="education__name"
              >
                {educationItem.name}
              </Link>
              <h4 className="education__field">{educationItem.field}</h4>
              <p className="education__gpa">GPA: {educationItem.gpa}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationItem;
