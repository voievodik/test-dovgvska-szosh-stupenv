import { teachers } from "../../utils/constants"
import { kravets } from "../../utils/images";
import './employeesPage.scss';


export const EmployeesPage = () => {
  return (
    <div className="employees">
      <div className="container">
        <div className="employees__administration administration">
          <h3 className="employees__title">Адміністрація</h3>

          <div className="administration__item">
            <img src={kravets} alt="" className="administration__photo" />
            <div className="teachers__name">Директор школи - Кравець Галина Іванівна</div>
          </div>
        </div>

        <div className="employees__teachers teachers">
          <h3 className="employees__title">Вчителі початкових класів</h3>
          
          <ul className="teachers__list">
            {teachers.map(teacher => (
              <li key={teacher.id} className="teachers__item">
                <img 
                  className="teachers__photo"
                  src={teacher.photo} 
                  alt={teacher.name} 
                />
                <div className="teachers__name">{teacher.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
